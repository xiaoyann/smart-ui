<Cell :title="title" arrow>
  <div slot="body" class="Datepicker">
    <input type="date" v-model="val">
    <div class="Datepicker--bd">{{val || placeholder}}</div>
  </div>
</Cell>
