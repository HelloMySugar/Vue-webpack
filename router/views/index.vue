<template>
  <div>
    <h2>首页</h2>
    <div>
      {{ count }}
      <button @click="handleIncrement">+1</button>
      <button @click="handleDecrease">-1</button>
    </div>
    
    <router-link to="/about">跳转到 about</router-link>
  </div>
</template>

<script>
  export default {
    computed: {
      count() {
        return this.$store.state.count;
      }
    },
    methods: {
      handleIncrement () {
        this.$store.commit('increment');
      },
      handleDecrease () {
        this.$store.commit('decrease');
      }
    },
  }
</script>

<style scoped>

</style>