<template>
  <div>
    <h2>广告位列表</h2>
    <el-table :data="list">
      <el-table-column label="ID" prop="_id" width="280px"></el-table-column>
      <el-table-column label="广告位名称" prop="name"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="$router.push(`/ads/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    // 获取数据
    async fetch () {
      const res = await this.$http.get('/rest/ads')
      this.list = res.data
    },
    // 删除数据
    remove (row) {
      this.$confirm(`是否删除 “${row.name}”?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        await this.$http.delete(`/rest/ads/${row._id}`)
        this.fetch()
      })
    }
  },
  created () {
    this.fetch()
  }
}
</script>

<style scoped>
</style>