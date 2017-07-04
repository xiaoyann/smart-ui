/**
 * 功能：
 *   1. 标记已选择的(done)
 *   2. 当选项比较多时，打开时自动滚动到已选择的
 *   3. 支持多选(done)
 *   4. 选项可禁用(done)
 *   8. 自定义选项内容(done)
 *
 *   5. 搜索
 *   6. 多种打开模式（1，传统底部，2. 侧边栏）
 *   7. 分组
 */

import SelectorOption from './Option'
import create from './index.tpl'
import './index.styl'

const Selector = create({
  props: {
    // 标题
    title: {
      type: String,
      required: true
    },
    // 提示
    placeholder: {
      type: String,
      default: ''
    },
    value: {},
    // 是否多选，默认是单选
    multiple: {
      default: false
    },
    // 是否选择后自动 hide
    // 默认是自动 hide，当是多选时，不会自动 hide
    autoHide: {
      type: Boolean,
      default: true
    },
    //
    options: {
      type: Array
    }
  },

  data() {
    return {
      visible: false,
      content: '',
      hasOptions: false
    }
  },

  watch: {
    value() {
      this.checkStatus()
    }
  },

  created() {
    // 是否使用了 options 属性
    this.hasOptions = typeof this.options !== 'undefined'
    if (this.hasOptions) {
      this.$watch('options', () => this.$nextTick(this.checkStatus))
    }
  },

  mounted() {
    this.checkStatus()
  },

  computed: {
    isMultiple() {
      return this.multiple !== false
    }
  },

  methods: {
    open() {
      this.visible = true
    },

    hide() {
      this.visible = false
    },

    isSelected(value) {
      return this.isMultiple ? this.value.indexOf(value) > -1 : value == this.value
    },

    eachOptions(callback) {
      [].forEach.call(this.$refs.options.childNodes, child => {
        if (child.nodeType === 1) {
          callback(this.takeProps(child), child)
        }
      })
    },

    checkStatus() {
      const conts = []
      this.eachOptions((opt, child) => {
        if (opt.selected) conts.push(opt.text)
        toogleStatus(child, opt.selected)
      })
      this.content = conts.join(',')
    },

    // option props
    // {
    //   text: '',
    //   value: '',
    //   selected: false,
    //   disabled: false
    // }
    takeProps(node) {
      const props = {
        text: node.getAttribute('data-text'),
        value: node.getAttribute('data-value'),
        disabled: !!node.getAttribute('data-disabled')
      }
      props.selected = this.isSelected(props.value)
      return props
    },

    onSelect(e) {
      let node = e.target

      while (node) {
        if (node.classList.contains('Selector--bd')) {
          return
        }
        if (!node.classList.contains('Selector--option')) {
          node = node.parentNode
        } else {
          break
        }
      }

      const props = this.takeProps(node)

      // 点击被禁止的 option 时不做任何操作
      if (props.disabled) return

      let value = ''

      // 点击已被选中 option，则取消选中状态
      if (props.selected) {
        value = this.isMultiple ? this.value.filter(v => v != props.value) : ''
      } else {
        value = this.isMultiple ? this.value.slice().concat(props.value) : props.value
        if (!this.isMultiple && this.autoHide) {
          setTimeout(() => {
            this.hide()
          }, 200)
        }
      }

      this.$emit('input', value)
    }
  }
})

function toogleStatus(node, selected) {
  if (selected) {
    node.classList.add('active')
  } else {
    node.classList.remove('active')
  }
}

export { Selector, SelectorOption }
