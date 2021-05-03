<template>
  <div>
    <h2>{{id ? '编辑' : '新建'}}文章</h2>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" placeholder="请选择" multiple>
          <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="model.body"></vue-editor>
      </el-form-item>
      <el-form-item label="操作">
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  props: {
    id: String
  },
  components: {
    VueEditor
  },
  data () {
    return {
      model: {},
      categories: []
    }
  },
  methods: {
    // 保存数据
    async save () {
      if (this.id) {
        await this.$http.put(`/rest/articles/${this.id}`, this.model)
      } else {
        await this.$http.post('/rest/articles', this.model)
      }
      this.$router.push('/articles/list')
      this.$message.success('保存成功')
    },
    // 获取编辑数据
    async fetch () {
      const res = await this.$http.get(`/rest/articles/${this.id}`)
      this.model = res.data
    },
    // 获取所属分类数据
    async fetchCategories () {
      const res = await this.$http.get(`/rest/categories`)
      this.categories = res.data
    },
    // 富文本编辑器图片上传
    async handleImageAdded (file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      formData.append("file", file);
      const res = await this.$http.post('upload', formData)
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    }
  },
  created () {
    this.fetchCategories()
    this.id && this.fetch()
  }
}
</script>

<style>
</style>