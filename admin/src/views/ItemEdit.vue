<template>
  <div>
    <h2>{{id ? '编辑' : '新建'}}物品</h2>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-upload class="avatar-uploader" :action="$http.defaults.baseURL + '/upload'" :show-file-list="false" :on-success="afterUpload" :headers="getAuthHeaders()">
          <img v-if="model.icon" :src="model.icon" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
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
        await this.$http.put(`/rest/items/${this.id}`, this.model)
      } else {
        await this.$http.post('/rest/items', this.model)
      }
      this.$router.push('/items/list')
      this.$message.success('保存成功')
    },
    // 获取编辑数据
    async fetch () {
      const res = await this.$http.get(`/rest/items/${this.id}`)
      this.model = res.data
    },
    // 上传图标
    afterUpload (res) {
      this.$set(this.model, 'icon', res.url)
    }
  },
  created () {
    this.id && this.fetch()
  }
}
</script>

<style>
</style>