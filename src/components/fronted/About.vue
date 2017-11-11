<template lang="html">
  <div class="about" v-loading="loading2" element-loading-text="加载中">
    <div v-if="shows">
      <h2>喜欢黑夜</h2>
      <p>一个一直想做些有意义的事却还没有思路的小行者</p>
      <p><a href="https://github.com/lijinzhuang" target="_blank">Github</a>&nbsp;&nbsp;<a href="https://www.xue37.cn" target="_blank">拣书</a><a href="http://blog.csdn.net/buzaiQQ" target="_blank">CSDN</a></p>
      <h2>关于网站</h2>
      <p>本站服务端采用 express + mongoDB 搭建, 客户端采用Vue2全家桶</p>
      <p>主要功能包括: 后台登录, 注册, 管理, 标签, 文章, 支持markdown语法编辑, 支持代码高亮</p>
      <p>主要技术栈: express, mongoolass, vue2, vue2-router, vuex, axios, es6, element ui</p>
      <p>本人并非专业前端工程师，因此参考了 "<a href="https://github.com/elva2596" target="_blank">Github</a>"，仅做了部分样式调整，换成自己的风格。</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      shows: false,
      loading2: true
    }
  },
  mounted () {
    this.$store.dispatch('changeHeadLine', '关于')
    setTimeout(() => {
      this.$store.dispatch('showProgress', 100)
      this.shows = true
      this.loading2 = false
    }, 300)
  }
}
</script>

<style lang="css" scoped>
  .about{
    margin:auto;
  }

  .about a {
    color:#4078c0;
    display:inline-block;
    padding: 0.2rem 0.4rem;
    font-size: 1.6rem;
  }
  .about a:first-child{
    padding-left: 0;
  }
  .about p{
    font-size: 1.6rem;
    line-height: 1.6em;
  }

  .about a ,.about p,.about h2{
    margin: 1rem auto;
  }
  .about h2{
    font-weight: 400;
    font-size: 3rem;
    align-self: center;
    margin-top: 2rem;
  }
  @media screen and (max-width:480px){
    .about a,.about p{
      font-size: 1.4rem;
    }
    .about h2{
      margin-top: auto;
      font-size: 2.2rem;
    }
  }
</style>
