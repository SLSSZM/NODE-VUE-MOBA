<template>
  <div class="card">
    <div class="header">
      <div class="header-info">
        <div class="header-info-icon">
          <strong :class="['iconfont', icon]"></strong>
        </div>
        <div class="header-info-title">
          <div>{{title}}</div>
        </div>
        <div v-if="menu" class="header-info-menu">
          <i :class="['iconfont', menu]"></i>
        </div>
      </div>
      <div v-if="isShow" class="header-img">
        <slot name="img"></slot>
      </div>
    </div>
    <div class="body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    menu: String,
    title: String
  },
  data () {
    return {

    }
  },
  computed: {
    isShow () {
      const bool = this.$slots.img ? true : false
      return bool
    }
  }
}
</script>

<style scoped>
.card {
  padding: 1rem 1.8rem 0;
  margin-top: 1rem;
}
.header {
  padding-bottom: 1.2rem;
  border-bottom: 0.0769rem solid #e9e9e9;
}
.header-info {
  display: flex;
  align-items: center;
}
.header-info-icon {
  margin-right: 0.5rem;
}
.header-info-icon i {
  font-size: 1.0001rem;
  font-weight: bold;
  color: #999;
}
.header-info-title {
  flex: 1;
  font-size: 1.3846rem;
}
.header-info-menu i {
  font-size: 1.3846rem;
  color: #999;
}
.header-img {
  margin-top: 1.2rem;
}
.header-img img {
  width: 100%;
}
</style>