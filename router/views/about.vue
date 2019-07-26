<template>
  <div>
    <h1>介绍页</h1>
    <button @click="handleRouter">跳转到首页</button>
    <p>这是什么？从表面上看，这告诉我们 webpack 从 app.js 和 vendors.js 开始创建依赖图(dependency graph)。这些依赖图是彼此完全分离、互相独立的（每个 bundle 中都有一个 webpack 引导(bootstrap)）。这种方式比较常见于，只有一个入口起点（不包括 vendor）的单页应用程序(single page application)中。

为什么？此设置允许你使用 CommonsChunkPlugin 从「应用程序 bundle」中提取 vendor 引用(vendor reference) 到 vendor bundle，并把引用 vendor 的部分替换为 __webpack_require__() 调用。如果应用程序 bundle 中没有 vendor 代码，那么你可以在 webpack 中实现被称为长效缓存的通用模式。

?> 为了支持提供更佳 vendor 分离能力的 DllPlugin，考虑移除该场景。</p>
  </div>
</template>

<script>
  export default {
    methods: {
      handleRouter () {
        this.$router.push('/index');   // 切换
        // this.$router.replace('/index');  // 替换，没有记录
        // this.$router.go(-1);  // 后退一页 window.history.go()
        
      }
    },
  }
</script>

<style scoped>

</style>