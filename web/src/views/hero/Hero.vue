<template>
  <div class="heroes" v-if="model">
    <div class="top bg-black text-white fs-sm">
      <img class="img" src="~assets/logo.png" alt="logo">
      <div class="text text-white">
        <span class="title">王者荣耀</span>
        <span>攻略站</span>
      </div>
      <div class="text-xs gdhero">更多英雄 &gt; </div>
    </div>
    <div class="header" :style="{'background': `url(${model.banner})`}">
      <div class="info text-white fz-md">
        <div>{{model.title}}</div>
        <h3>{{model.name}}</h3>
        <div>{{model.categories.map(v => v.name).join('/')}}</div>
        <div class="scores">
          <div v-if="model.scores">
            <span>难度</span><span class="score bg-difficult">{{model.scores.difficult}}</span>
            <span>技能</span><span class="score bg-skills">{{model.scores.skills}}</span>
            <span>攻击</span><span class="score bg-attach">{{model.scores.attach}}</span>
            <span>生存</span><span class="score bg-survive">{{model.scores.survive}}</span>
          </div>
          <div class="text-grey-1">皮肤: 8 &gt; </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="bg-white">
        <div class="nav">
          <div class="nav-item" :class="{active: active === 0}" @click="$refs.list.swiper.slideTo(0)">英雄初始</div>
          <div class="nav-item" :class="{active: active === 1}" @click="$refs.list.swiper.slideTo(1)">进阶攻略</div>
        </div>
      </div>
      <swiper ref="list" @slide-change="() => active = $refs.list.swiper.activeIndex">
        <swiper-slide>
          <div class="bg-white hero-item">
            <div class="btu">
              <router-link tag="button" to="/">
                英雄介绍视频
              </router-link>
              <router-link tag="button" to="/">
                一图识英雄
              </router-link>
            </div>
            <div class="skills" v-if="model.skills">
              <div class="skill-icon">
                <img :src="item.icon" @click="currentSkillIndex = index" v-for="(item, index) in model.skills" :key="item._id" :class="{'active-icon': currentSkillIndex === index}">
              </div>
              <div class="info" v-if="currentSkill">
                <div class="title">
                  <h3>{{currentSkill.name}}</h3>
                  <div class="text-grey-1 fz-sm">{{`(冷却值：${currentSkill.delay} 消耗：${currentSkill.cost})`}}</div>
                </div>
                <div class="description fz-sm text-grey-1">{{currentSkill.description}}</div>
              </div>
            </div>
          </div>
          <hero-card title="出装推荐" icon="icon-menu" class="chuzhuan">
            <div class="chuzhuan-item sfcz">
              <div class="fz-xl title">顺风出装</div>
              <div class="items fz-sm text-grey-1">
                <div v-for="item in model.items1" :key="item._id">
                  <img :src="item.icon" alt="">
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
            <div class="chuzhuan-item">
              <div class="fz-xl title">逆风出装</div>
              <div class="items fz-sm text-grey-1">
                <div v-for="item in model.items2" :key="item._id">
                  <img :src="item.icon" alt="">
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
          </hero-card>
          <hero-card title="使用技巧" class="hero-text">
            <div class="text fz-sm text-grey-1">{{model.usageTips}}</div>
          </hero-card>
          <hero-card title="对抗技巧" class="hero-text">
            <div class="text fz-sm text-grey-1">{{model.battleTips}}</div>
          </hero-card>
          <hero-card title="团战思路" class="hero-text">
            <div class="text fz-sm text-grey-1">{{model.teamTips}}</div>
          </hero-card>
          <hero-card title="英雄关系" class="guanxi">
            <div class="title fz-xl">最佳搭档</div>
            <div class="partners">
              <div class="partners-item fz-grey-1" v-for="item in model.partners" :key="item._id">
                <img :src="item.hero.avatar" alt="">
                <span>{{item.description}}</span>
              </div>
            </div>
          </hero-card>
        </swiper-slide>
        <swiper-slide></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import HeroCard from "./childComponents/HeroCard"
export default {
  data () {
    return {
      model: null,
      currentSkillIndex: 0,
      active: 0
    }
  },
  props: {
    id: String
  },
  components: {
    HeroCard
  },
  methods: {
    async fetch () {
      const res = await this.$http.get('/heroes/' + this.id)
      this.model = res.data,
        console.log(this.model)
    }
  },
  computed: {
    currentSkill () {
      return this.model.skills[this.currentSkillIndex]
    }
  },
  created () {
    this.fetch()
  }
}
</script>

<style lang="scss" scoped>
.top {
  height: 3.4615rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  z-index: 10;

  .img {
    width: 2.3077rem;
    height: 2.3077rem;
    margin: 0 0.8rem 0 1rem;
  }

  .text {
    flex: 1;
  }

  .title {
    margin-right: 1rem;
  }

  .gdhero {
    margin-right: 0.5rem;
  }
}
.header {
  margin-top: 3.4615rem;
  height: 50vw;
  background-size: auto 100% !important;
  background-repeat: no-repeat !important;
  h3 {
    margin: 0.1rem 0;
  }
  .info {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    padding: 1.2rem;
    .scores {
      display: flex;
      justify-content: space-between;
      .score {
        &.bg-difficult {
          background: #7f5300;
        }
        &.bg-skills {
          background: #1f3695;
        }
        &.bg-attach {
          background: #781a16;
        }
        &.bg-survive {
          background: #33332c;
        }
        width: 1.1538rem;
        height: 1.1538rem;
        line-height: 0.9231rem;
        font-size: 0.5rem;
        display: inline-block;
        text-align: center;
        border-radius: 50%;
        border: 0.1538rem solid rgba(255, 255, 255, 0.2);
        margin: 0 0.5rem;
      }
    }
  }
}
.container {
  .nav {
    display: flex;
    justify-content: space-around;
    padding: 1.2rem;
    border-bottom: 1px solid rgb(211, 210, 210);
    margin: 0 1rem;
  }
  .btu {
    padding: 1rem 0;
    display: flex;
    justify-content: space-around;
    button {
      width: 48%;
      height: 2.8rem;
      border: 1px solid rgb(223, 221, 221);
      border-radius: 0.4rem;
      background: #fff;
    }
  }
  .skills {
    .skill-icon {
      display: flex;
      justify-content: space-around;
      img {
        width: 4.6154rem;
        height: 4.6154rem;
        margin: 0.01rem;
      }
    }
    .info {
      letter-spacing: 0.1rem;
      .title {
        letter-spacing: 0.05rem;
        display: flex;
        align-items: center;
        h3 {
          margin-right: 4rem;
        }
      }
    }
  }
  .hero-item {
    padding: 1rem;
  }
  .chuzhuan {
    margin-top: 0.8rem;
    .sfcz {
      border-bottom: 1px solid rgb(211, 210, 210);
      padding: 0 0 1rem;
    }
    .chuzhuan-item {
      .title {
        margin: 1rem 0;
      }
      .items {
        display: flex;
        justify-content: space-between;
        text-align: center;
        div {
          flex: 1;
          img {
            width: 3.5rem;
            border-radius: 50%;
            margin: 0 auto 0.35rem;
            display: block;
          }
        }
      }
    }
  }
  .hero-text {
    margin-top: 0.8rem;
    .text {
      margin-top: 0.8rem;
      letter-spacing: 0.05rem;
    }
  }
  .guanxi {
    margin-top: 0.8rem;
    .title {
      margin: 0.8rem 0;
    }
    .partners {
      .partners-item {
        display: flex;
        margin-bottom: 0.8rem;
        img {
          width: 4.6154rem;
          height: 4.6154rem;
          border-radius: 5px;
          display: block;
          margin-right: 0.8rem;
        }
      }
    }
  }
}
.active {
  color: #db9e3f;
  border-bottom: 0.1538rem solid #db9e3f;
}
.icon-active {
  border: 2px solid #db9e3f;
}
</style>