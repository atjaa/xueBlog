<template lang="html">
  <footer>
    <p>Copyright © 2017 Zhuang. All rights reserved.</p>
    <p><a href="https://github.com/elva2596" target="_blank">源码参考自：Github</a><a href="http://www.miitbeian.gov.cn" target="_blank">京ICP备17059127号</a></p>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  footer{
    height: 5rem;
    text-align: center;
    bottom:0px;
  }
  footer p{
    font-size: 1.2rem;
    color: #f6f6f6;
  }
  footer p a{
    margin:auto;
    font-size: 1.4rem;
    padding: 1rem 1.5rem;
  }
  @media screen and (max-width:768px){
    footer{
      height: 6rem;
    }
  }
</style>
