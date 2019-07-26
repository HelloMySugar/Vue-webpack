<template>
  <div>
    <div>{{ $route.params.id }}</div>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log('this.$route :->', this.$route.params.id);
    }
  }
</script>

<style scoped>

</style>