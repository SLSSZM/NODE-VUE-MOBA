<template>
  <div class="home">
    <div class="top bg-black text-white fs-sm">
      <img class="img" src="~assets/logo.png" alt="logo">
      <div class="text">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1">团队成就更多</div>
      </div>
      <button class="bg-primary text-sm button">立即下载</button>
    </div>

    <div class="tabbar bg-primary text-white">
      <tab-bar>
        <tab-bar-item path="/home">首页</tab-bar-item>
        <tab-bar-item path="/a">攻略中心</tab-bar-item>
        <tab-bar-item path="/b">赛事中心</tab-bar-item>
        <tab-bar-item path="/c">IP新游</tab-bar-item>
      </tab-bar>
    </div>

    <router-view />
  </div>
</template>

<script>
import TabBar from 'components/tabBar/TabBar'
import TabBarItem from 'components/tabBar/TabBarItem'

export default {
  name: 'Home',
  components: {
    TabBar,
    TabBarItem
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

  .button {
    border: none;
    padding: 0.2rem 0.6rem;
    margin-right: 1rem;
    border-radius: 0.1538rem;
  }
}

.tabbar {
  margin-top: 3.4615rem;
  height: 3.2308rem;
}
</style>
