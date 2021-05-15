<template>
  <div class="home">
    <swiper ref="mySwiper" class="swiper" :options="swiperOptions">
      <swiper-slide class="swiper-slide">
        <img src="~assets/images/home/swiper/1.jpeg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src="~assets/images/home/swiper/2.jpeg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src="~assets/images/home/swiper/3.jpeg" alt="">
      </swiper-slide>
      <div class="swiper-pagination pagination-home" slot="pagination"></div>
    </swiper>
    <!-- end swiper -->
    <nav-card :class="['nav-card', 'bg-white', 'text-grey-1']" @handle="collapse">
      <nav-card-item slot="navItem">
        <i class="sprite sprite-news"></i>
        <div>爆料站</div>
      </nav-card-item>
      <nav-card-item slot="navItem">
        <i class="sprite sprite-story"></i>
        <div>故事站</div>
      </nav-card-item>
      <nav-card-item slot="navItem">
        <i class="sprite sprite-shop"></i>
        <div>周边商城</div>
      </nav-card-item>
      <nav-card-item slot="navItem">
        <i class="sprite sprite-tiyanfu"></i>
        <div>体验服</div>
      </nav-card-item>
      <nav-card-item slot="navItem">
        <i class="sprite sprite-new"></i>
        <div>新人专区</div>
      </nav-card-item>
      <nav-card-item slot="navItem">
        <i class="sprite sprite-rongyao"></i>
        <div>荣耀传承</div>
      </nav-card-item>
      <nav-card-item slot="navItem">
        <i class="sprite sprite-yingdi"></i>
        <div>王者营地</div>
      </nav-card-item>
      <nav-card-item slot="navItem">
        <i class="sprite sprite-wechar"></i>
        <div>公众号</div>
      </nav-card-item>
      <nav-card-item slot="navItem">
        <img class="version" src="~assets/images/home/version-icon.png" alt="">
        <div>版本介绍</div>
      </nav-card-item>
      <nav-card-item slot="navItem">
        <img class="djhj" src="~assets/images/home/djhj.png" alt="">
        <div>对局环境</div>
      </nav-card-item>
      <nav-card-item slot="navItem">
        <img class="wxwzt" src="~assets/images/home/wxwzt.png" alt="">
        <div>无限王者团</div>
      </nav-card-item>
      <nav-card-item slot="navItem">
        <img class="cyhdy" src="~assets/images/home/cyhdy.png" alt="">
        <div>创意互动营</div>
      </nav-card-item>
      <i slot="collapse-icon" class="sprite sprite-arrow" v-if="!isPut"></i>
      <i slot="collapse-icon" class="iconfont icon-zhankai1" v-else></i>
      <span slot="collapse-text" class="text-black-1">{{isPut ? '展开' : '收起'}}</span>
    </nav-card>
    <!-- end nav-card -->
    <card class="bg-white" icon="icon-menu" menu="icon-menu1" title="新闻资讯">
      <list-card slot="body" :categories="newsCard" activeText="#db9e3f">
        <template #items="{category}">
          <router-link tag="div" :to="`/articles/${news._id}`" class="news-card fz-lg" v-for="(news, index) in category.newsList" :key="index">
            <span class="cat-name fz-sm" :style="catName(news.categoryName)">{{news.categoryName}}</span>
            <span class="title">{{news.title}}</span>
            <span class="text-grey-1 fz-md">{{news.createdAt | date}}</span>
          </router-link>
        </template>
      </list-card>
    </card>

    <card class="bg-white" icon="icon-card-hero" menu="icon-menu1" title="英雄分类">
      <img src="~assets/images/home/card.jpg" slot="img" alt="">
      <list-card slot="body" :categories="heroesCard" activeText="#db9e3f">
        <template #items="{category}">
          <div class="heroes-card">
            <router-link tag="div" :to="`/heroes/${heroes._id}`" class="hero fz-lg" v-for="(heroes, index) in category.heroesList" :key="index">
              <div class="hero-avatar"><img :src="heroes.avatar" alt=""></div>
              <div class="hero-name fz-md">{{heroes.name}}</div>
            </router-link>
          </div>
        </template>
      </list-card>
    </card>
    <!-- end card -->
    <div class="footer bg-white text-grey-1">加载更多内容</div>
  </div>
</template>

<script>
import NavCard from 'views/home/childComponents/navCard/NavCard'
import NavCardItem from 'views/home/childComponents/navCard/NavCardItem'

import Card from 'components/card/Card'
import ListCard from 'components/card/ListCard'

import dayjs from 'dayjs'
export default {
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      newsCard: [],
      heroesCard: [],
      isPut: true
    }
  },
  components: {
    NavCard,
    NavCardItem,
    Card,
    ListCard
  },
  methods: {
    async fetchNewsCats () {
      const res = await this.$http.get('/news/list')
      this.newsCard = res.data
    },
    async fetchHeroCats () {
      const res = await this.$http.get('/heroes/list')
      this.heroesCard = res.data
    },
    collapse (put) {
      this.isPut = put
    }
  },
  filters: {
    date (val) {
      return dayjs(val).format('MM/DD')
    }
  },
  computed: {
    catName () {
      return cat => {
        let textColor
        switch (cat) {
          case '新闻':
            textColor = '#1e96ab'
            break
          case '公告':
            textColor = '#f09a37'
            break
          case '活动':
            textColor = '#ff3636'
            break
          case '赛事':
            textColor = '#4d9cff'
            break
        }
        return { 'color': textColor, 'border': '0.1rem solid' + textColor }
      }
    }
  },
  created () {
    this.$nextTick(() => {
      this.fetchNewsCats()
      this.fetchHeroCats()
    })
  }
}
</script>

<style lang="scss" scoped>
.nav-card {
  margin-top: 1.2rem;
}
.news-card {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}
.news-card span {
  margin-right: 0.5rem;
}
.news-card span:nth-child(3) {
  margin-right: 0;
}
.news-card .title {
  flex: 1;
  white-space: nowrap; //强制文本在一行内输出
  overflow: hidden; //隐藏溢出部分
  text-overflow: ellipsis; //对溢出部分加上...
}
.cat-name {
  border-radius: 10%;
  padding: 0 0.2rem;
}

.heroes-card {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  margin: 0 auto;
}
.hero {
  width: 16%;
  margin: 0 1rem 1rem 0;
}
.hero:nth-child(1n) {
  margin-left: 0.2rem;
}
.hero:nth-child(5n) {
  margin-right: 0;
}
.hero .hero-name {
  height: 1rem;
}
.footer {
  text-align: center;
  height: 3rem;

  border-top: 0.1538rem solid #eee;
  line-height: 3rem;
}
</style>

<style lang="scss">
.swiper-slide img {
  width: 100%;
}

.nav-card .version {
  width: 25%;
}
.nav-card .djhj {
  width: 40%;
}
.nav-card .wxwzt {
  margin: 0.5rem 0;
  width: 40%;
}
.nav-card .cyhdy {
  width: 25%;
}

.pagination-home {
  padding: 0 1rem;
  text-align: right;
  .swiper-pagination-bullet {
    background-color: #fff;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: #476baf;
  }
}
</style>