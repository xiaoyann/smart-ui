<div>
  <Cell :title="title" arrow @click="open">
    <div class="Selector--values" slot="body">{{content}}</div>
  </Cell>
  <Popup v-model="visible">
    <div class="Selector smart-border-top">
      <div class="Selector--hd">
        <div class="Selector--notice">{{title}}</div>
        <div class="Selector--confirm" @click="hide">确认</div>
      </div>
      <div class="Selector--bd" @click="onSelect($event)" ref="options">
        <slot v-if="!hasOptions"></slot>
        <template v-else>
          <SelectorOption :value="opt.value" :text="opt.text" v-for="opt in options" :disabled="opt.disabled"></SelectorOption>
        </template>
      </div>
    </div>
  </Popup>
</div>
