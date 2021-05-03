<template>
  <div class="card">
    <div>
      <i :class="['iconfont', icon]"></i>
      <strong>{{title}}</strong>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String
  }
}
</script>

<style scoped>
.card {
  background: #fff;
  padding: 1rem;
  padding-bottom: 0.5rem;
}
i {
  font-size: 1.0769rem;
  margin-right: 0.5rem;
}
strong {
  font-size: 1.2308rem;
}
</style>