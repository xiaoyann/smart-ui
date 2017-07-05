<div class="Button" :class="classes" :style="style" @click="handleClick">
  <Spinner class="Button--spinner" v-if="loading && !disabled" :size="spinnerSize" width="1" bgcolor="rgba(255,255,255,.5)" forecolor="#fff"/>
  <div class="Button--name"><slot></slot></div>
  <div :style="overlayStyles" v-if="disabled || loading" class="Button--overlay"></div>
</div>
