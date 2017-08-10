<Cell>
  <div v-if="label" class="Field--label" slot="header">{{label}}</div>
  <div v-if="!label && hasLabelSlot" class="Field--label" slot="header">
    <slot name="label"></slot>
  </div>
  <div class="Field--bd" slot="body" :class="{'Field--warn': !!error}">
    <div class="Field--input">
      <input
        :style="{textAlign: align}"
        :type="type" :value="val"
        :placeholder="placeholder"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      >
    </div>
    <div class="Field--delBox" v-show="val" @click="clear">
      <div class="Field--del"></div>
    </div>
  </div>
</Cell>
