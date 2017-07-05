<div class="Button" :class="classes" :style="style" @click="handleClick">
  <Spinner v-if="loading && !disabled" :size="spinnerSize" width="1" bgcolor="rgba(255,255,255,.5)" forecolor="#fff" style="margin-right: 5px" />
  <div class="Button--name"><slot></slot></div>
  <div :style="overlayStyles" v-if="disabled || loading" class="Button--overlay"></div>
</div>
