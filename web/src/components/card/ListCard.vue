<template>
  <div class="list-card">
    <div class="nav">
      <div class="nav-item" v-for="(category, index) in categories" :key="index" @click="$refs.list.swiper.slideTo(index)">
        <span :class="{active: active === index}">{{category.name}}</span>
      </div>
    </div>
    <swiper ref="list" @slide-change="() => active = $refs.list.swiper.activeIndex" :options="{autoHeight: true}">
      <swiper-slide v-for="(category, index) in categories" :key="index">
        <slot name="items" :category="category"></slot>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    categories: Array,
    activeText: String
  },
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style scoped>
.list-card {
  margin-top: 1.2rem;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-bottom: 1.2rem;
}
.nav-item span {
  margin: 0 0.1rem;
  padding-bottom: 0.2rem;
}
.active {
  color: #db9e3f;
  border-bottom: 0.25rem solid #db9e3f;
}
</style>