<smart-demo :source="source">
<div slot="demo">
  <p>
    性别：{{gender}}
  </p>
  <Radio title="性别" v-model="gender">
    <RadioOption value="男">男</RadioOption>
    <RadioOption value="女">女</RadioOption>
    <RadioOption value="" input>其他</RadioOption>
  </Radio>
</div>
</smart-demo>
