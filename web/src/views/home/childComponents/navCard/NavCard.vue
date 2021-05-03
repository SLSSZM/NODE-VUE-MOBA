<template>
  <div class="nav-card">
    <div :class="['nav', {'put': isput}]">
      <slot name="navItem"></slot>
    </div>
    <div class="collapse" @click="handle">
      <span class="icon">
        <slot name="collapse-icon"></slot>
      </span>
      <span class="text">
        <slot name="collapse-text"></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isput: true
    }
  },
  methods: {
    handle () {
      this.isput = !this.isput
      this.$emit('handle', this.isput)
    }
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  padding-top: 1rem;
}
.collapse {
  background-color: #f9f9f9;
  line-height: 2.3077rem;
  text-align: center;
}
.icon {
  margin-right: 0.3rem;
}
.put {
  height: 5rem !important;
  overflow: hidden;
}
</style>