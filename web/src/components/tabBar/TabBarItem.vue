<template>
  <div class="tab-bar-item" @click="clickItem">
    <span :class="{'active': isActive}" :style="textActive">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#fff'
    }
  },
  methods: {
    clickItem () {
      this.$router.push(this.path)
    }
  },
  computed: {
    isActive () {
      return this.$route.path === this.path
    },
    textActive () {
      return this.isActive ? { 'border-bottom': `0.2308rem solid ${this.activeColor}`, 'color': this.activeColor } : ''
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
}
.tab-bar-item .active {
  margin: 0 auto;
  padding-bottom: 0.1538rem;
}
</style>