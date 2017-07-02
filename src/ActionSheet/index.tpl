<Modal
  v-model="visible" anim="fade"
  bgcolor="rgba(0,0,0,.4)"
  :dismissOnClick="true" :zIndex="zIndex"
>
  <transition name="smart-anim--bottomUp">
    <div v-show="visible" class="ActionSheet">
      <div v-if="title" class="ActionSheet--title smart-border-bottom">{{title}}</div>
      <div class="ActionSheet--options" ref="options">
        <div>
          <div
            class="ActionSheet--option smart-border-bottom"
            :style="{color: getFontColor(opt)}"
            v-for="(opt, i) in options" @click="handleClick(i)"
          >
            {{opt.text}}
          </div>
        </div>
      </div>
      <div
        v-if="hideCancel == false"
        class="ActionSheet--option smart-border-top ActionSheet--cancel"
        :style="{color: tintColor}"
        @click="hide"
      >
        取消
      </div>
    </div>
  </transition>
</Modal>
