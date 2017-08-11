<template>
<div>
	<ul>
		<li>
			username: {{username}}
		</li>
		<li>
			mobile: {{mobile}}
		</li>
		<li>
			birthday: {{birthday}}
		</li>
	</ul>

	<CellGroup>
		<Field placeholder="请输入用户名" align="left" v-model="username" :error.sync="errors.username" @blur="handleBlur"/>
		<Field type="number" placeholder="请输入手机号" align="left" v-model="mobile" :error.sync="errors.mobile" @focus="handleFocus">
      <span slot="label">手机号</span>
    </Field>
		<Field label="生日" type="date" placeholder="请选择您的生日" align="left" v-model="birthday" :error.sync="errors.birthday"/>
	</CellGroup>

  <div style="padding: 50px 15px">
    <Button tintColor="#2b8ff7" type="normal" @click="submit">提交</Button>
  </div>
</div>
</template>

<script>
const validations = {
  username: {
    test: /^\w{6,18}$/,
    message: '请输入用户名'
  },
  mobile: {
    test: /^\d{11}$/,
    message: '请输入手机号'
  },
  birthday: {
    test: /^.+$/,
    message: '请输入生日'
  }
}


export default {
	data() {
		return {
			username: '',
			mobile: '',
			birthday: '',
      errors: {
        username: '',
        mobile: '',
        birthday: ''
      }
		}
	},

  methods: {
    handleBlur(e) {
      console.log('blur', e.target)
    },

    handleFocus(e) {
      console.log('focus', e.target)
    },

    submit() {
      this.validate()
    },

    validate() {
      Object.keys(validations).forEach((name) => {
        const config = validations[name]
        this.errors[name] = null
        if (!config.test.test(this.$data[name])) {
          this.errors[name] = config.message
        } else {
          this.errors[name] = null
        }
      })
    }
  }
}
</script>
