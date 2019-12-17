<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
  >
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      :formatter="formatter">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'GoodsList',
  data () {
    return {
      getList: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$http.post('https://sea-test.pri.ibanyu.com/opapi/ugc/interactclass/product/list')
        .then(res => {
          console.log(res)
          res.data.success && (this.getData = res.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style scoped>

</style>
