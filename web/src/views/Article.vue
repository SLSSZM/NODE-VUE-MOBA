<template>
  <div class="article" v-if="article">
    <div class="header fz-lg">
      <strong class="iconfont icon-back text-blue" @click="$router.back()"></strong>
      <strong class="title fz-xl">{{article.title}}</strong>
      <div class="text-grey fz-sm">{{article.createdAt | date}}</div>
    </div>
    <div class="content" v-html="article.body">
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  props: {
    id: String
  },
  data () {
    return {
      article: null
    }
  },
  methods: {
    async fetch () {
      const res = await this.$http.get('/articles/' + this.id)
      this.article = res.data
    }
  },
  filters: {
    date (val) {
      return dayjs(val).format('YYYY/MM/DD')
    }
  },
  created () {
    this.fetch()
  }
}
</script>

<style lang="scss">
.article {
  .header {
    padding: 0.5rem;
    border-bottom: 0.1538rem solid #dadada;
    display: flex;
    align-items: center;
    .title {
      margin-left: 0.3rem;
      flex: 1;
      color: #4394e4;
    }
  }
  .content {
    width: 100%;
    padding: 0.5rem 1.6rem;
    img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>