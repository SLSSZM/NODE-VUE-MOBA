<template>
  <div>
    <h2>{{id ? '编辑' : '新建'}}英雄</h2>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-tabs value="basic" type="border-card">
        <el-tab-pane label="基础信息" name="basic">
          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload class="avatar-uploader" :action="$http.defaults.baseURL + '/upload'" :headers="getAuthHeaders()" :show-file-list="false" :on-success="res => $set(model, 'avatar', res.url)">
              <img v-if="model.avatar" :src="model.avatar" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="背景">
            <el-upload class="avatar-uploader" :action="$http.defaults.baseURL + '/upload'" :headers="getAuthHeaders()" :show-file-list="false" :on-success="res => $set(model, 'banner', res.url)">
              <img v-if="model.banner" :src="model.banner" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="model.categories" placeholder="请选择" multiple>
              <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate style="margin-top: 0.8rem;" :max="9" v-model="model.scores.difficult" show-score></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate style="margin-top: 0.8rem;" :max="9" v-model="model.scores.skills" show-score></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate style="margin-top: 0.8rem;" :max="9" v-model="model.scores.attach" show-score></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate style="margin-top: 0.8rem;" :max="9" v-model="model.scores.survive" show-score></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select filterable v-model="model.items1" placeholder="请选择" multiple>
              <el-option v-for="item in items" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select filterable v-model="model.items2" placeholder="请选择" multiple>
              <el-option v-for="item in items" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input type="textarea" v-model="model.usageTips" :rows="5"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input type="textarea" v-model="model.battleTips" :rows="5"></el-input>
          </el-form-item>
          <el-form-item label="团战思路">
            <el-input type="textarea" v-model="model.teamTips" :rows="5"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button size="small" style="margin: 1rem;" @click="model.skills.push({})"><i class="el-icon-plus"></i>添加技能</el-button>
          <el-row type="flex" style="flex-wrap: wrap;">
            <el-col :md="12" v-for="(item, index) in model.skills" :key="index">
              <el-form-item label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="冷却值">
                <el-input v-model="item.delay"></el-input>
              </el-form-item>
              <el-form-item label="消耗">
                <el-input v-model="item.cost"></el-input>
              </el-form-item>
              <el-form-item label="图标">
                <el-upload class="avatar-uploader" :action="$http.defaults.baseURL + '/upload'" :show-file-list="false" :on-success="res => $set(item, 'icon', res.url)" :headers="getAuthHeaders()">
                  <img v-if="item.icon" :src="item.icon" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" :rows="5" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input type="textarea" :rows="5" v-model="item.tips"></el-input>
              </el-form-item>
              <el-form-item label="操作">
                <el-button type="danger" size="small" @click="model.skills.splice(index, 1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="最佳搭档" name="partners">
          <el-button size="small" style="margin: 1rem;" @click="model.partners.push({})"><i class="el-icon-plus"></i>添加英雄</el-button>
          <el-row type="flex" style="flex-wrap: wrap;" v-if="model.partners">
            <el-col :md="12" v-for="(item, index) in model.partners" :key="index">
              <el-form-item label="英雄">
                <el-select filterable v-model="item.hero" placeholder="请选择">
                  <el-option v-for="hero in heroes" :key="hero._id" :label="hero.name" :value="hero._id"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" :rows="5" v-model="item.description"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-form-item>
          <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
      </el-tabs>
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
      // 分类数据
      categories: [],
      // 物品数据
      items: [],
      model: {
        name: '',
        avatar: '',
        title: '',
        categories: [],
        scores: {
          difficult: 0,
          skills: 0,
          attach: 0,
          survive: 0
        },
        usageTips: '',
        battleTips: '',
        teamTips: '',
        skills: [],
        partners: []
      },
      heroes: []
    }
  },
  methods: {
    // 保存数据
    async save () {
      if (this.id) {
        await this.$http.put(`/rest/heroes/${this.id}`, this.model)
      } else {
        await this.$http.post('/rest/heroes', this.model)
      }
      this.$router.push('/heroes/list')
      this.$message.success('保存成功')
    },
    // 获取编辑数据
    async fetch () {
      const res = await this.$http.get(`/rest/heroes/${this.id}`)
      this.model = Object.assign({}, this.model, res.data)
    },
    // 获取分类数据
    async fetchCategories () {
      const res = await this.$http.get(`/rest/categories`)
      this.categories = res.data
    },
    // 获取物品数据
    async fetchItems () {
      const res = await this.$http.get(`/rest/items`)
      this.items = res.data
    },
    async fetchHeroes () {
      const res = await this.$http.get(`/rest/heroes`)
      this.heroes = res.data
    }
  },
  created () {
    this.fetchItems()
    this.fetchCategories()
    this.fetchHeroes()
    this.id && this.fetch()
  }
}
</script>

<style scoped>
</style>