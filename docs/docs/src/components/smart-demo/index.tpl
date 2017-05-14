<div class="smartDemo">
  <div class="smartDemo--demo">
    <slot name="demo"></slot>
  </div>
  <div class="smartDemo--code">
    <div class="smartDemo--tabs">
      <div
        v-for="(lang, k) in languages"
        :key="'lang'+k"
        @click="index = k"
        :class="{'active': index === k}"
        class="smartDemo--tab"
      >
        {{lang}}
      </div>
    </div>
    <div class="smartDemo--tabMain" ref="tabMain">
      <smart-code
        v-for="(lang, k) in languages"
        :key="k"
        :lang="lang"
        :code="source[lang]"
      >
      </smart-code>
    </div>
  </div>
</div>
