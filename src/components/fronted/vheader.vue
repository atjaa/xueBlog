<template lang="html">
    <header>
      <canvas id="canvas" class="canvas" ></canvas>
      <div id="moon" class="moon"></div>
        <nav  class="header-bg">
          <ul>
            <li><router-link to="/home">主页</router-link></li>
            <li><router-link to="/tags">标签</router-link></li>
            <li><router-link to="/about">关于</router-link></li>
          </ul>
        </nav>
        <!-- 导航 结束-->
        <section class="home_title">
          <transition name='fade'>
            <h1 v-if="show_headline">{{finalheadline}}</h1>
          </transition>
        </section>
    </header>
</template>

<script>
import {mapState} from 'vuex'
import Stars from '../../assets/js/Stars'
import Moon from '../../assets/js/Moon'
export default {
  data () {
    return {
      finalheadline: '',
      show_headline: true
    }
  },
  computed: mapState(['headline']),
  watch: {
    headline (val) {
      this.show_headline = false
      setTimeout(() => {
        this.show_headline = true
        this.finalheadline = val
      }, 200)
    }
  },
  mounted () {
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight
    let stars = new Stars(ctx, width, height, 200)
    let moon = new Moon(ctx, width, height)
    let count = 0
    canvas.width = width
    canvas.height = height
    const frame = () => {
      count++
      (count % 10 === 0) && stars.blink()
      moon.draw()
      stars.draw()
      requestAnimationFrame(frame)
    }
    frame()
  }
}
</script>

<style lang="css" scoped>
  .fade-enter-active,.fade-leave-active{
      transition: all .4s;
  }
  .fade-enter,.fade-leave-active{
    opacity: 0;
  }
  header{
    height: 10rem;
    display: flex;
    flex-direction: column;
  }
  .canvas{
    z-index:-1;
    position: fixed;
    width: 100%;
    left:0;
    top:0;
    background-color: rgb(20,60,120);
      /*!*background-size: cover; 必须放在background-position后面用 "/" 分割*!*/
    /*background:  url('../../assets/img/bgm.jpg') no-repeat center /cover;*/
    /*!* brightness()给图片应用一种线性乘法，使其看起来更亮或更暗。如果值是0%，图像会全黑。值是100%，*/
    /*则图像无变化。其他的值对应线性乘数效果。值超过100%也是可以的，图像会比原来更亮。如果没有设定值，默认是1。*!*/
    /*filter: brightness(0.7);*/
  }
  .moon {
    width: 80px;
    height: 80px;
    position: fixed;
    left: 100px;
    top: 100px;
    background: url('../../assets/img/moon.png') no-repeat;
    background-size: cover;
    z-index:-1;
  }
  nav ul{
    display: flex;
    display: -webkit-flex;
    -webkit-justify-content:flex-end;
    justify-content: flex-end;
    margin:0;
    list-style: none;
  }
  nav a {
    font-size:1.6rem;
    display: block;
    padding: 1.2rem 1.8rem;
    color:#fff;
    opacity: 1;
    transition: opacity 0.3s;
    /*解决iphone下的a标签点击会出现底色*/
  }
  nav a:hover{
    opacity: 0.7;
  }
  .home_title{
    color: #fff;
     display: flex;
     margin: auto;
     max-width: 94%;
  }
  .home_title h1{
    margin:auto;
    font-size: 3rem;
    font-weight: 400;
  }

  @media screen and (max-width:768px){
    .home_title h1{
      font-size: 2.6rem;
    }
    .bg,header{
      height: 24rem;
    }
  }
  @media screen and (max-width:480px){
  header,.bg{
      height: 25rem;
    }
    nav a{
      font-size:1.6rem;
    }
  }
</style>
