<div
  class="Selector--option"
  :class="{disabled: isDisabled}"
  :data-text="text"
  :data-value="value"
  :data-disabled="isDisabled"
>
  <div class="Selector--option--bd">
    <slot v-if="isCustom"></slot>
    <span v-else>{{text}}</span>
  </div>
  <div class="Selector--icon"></div>
</div>
