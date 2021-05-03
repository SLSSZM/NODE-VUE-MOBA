<template>
  <div class="nav-card-item">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-card-item {
  width: 25%;
  margin-bottom: 1rem;
  border-right: 1px solid #e9e9e9;
}
:nth-child(4n) {
  border-right: none;
}
</style>