<template>
  <div>
    <h2>{{id ? '编辑' : '新建'}}管理员</h2>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item label="操作">
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  data () {
    return {
      model: {}
    }
  },
  methods: {
    // 保存数据
    async save () {
      if (this.id) {
        await this.$http.put(`/rest/admin_users/${this.id}`, this.model)
      } else {
        await this.$http.post('/rest/admin_users', this.model)
      }
      this.$router.push('/admin_users/list')
      this.$message.success('保存成功')
    },
    // 获取编辑数据
    async fetch () {
      const res = await this.$http.get(`/rest/admin_users/${this.id}`)
      this.model = res.data
    }
  },
  created () {
    this.id && this.fetch()
  }
}
</script>

<style scoped>
</style>