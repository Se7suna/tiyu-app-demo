<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active" active-color="#fb6522" v-show="!['map', 'count', 'result'].includes($route.name)">
      <van-tabbar-item icon="home-o" @click="$router.push({name: 'index'})">首页</van-tabbar-item>
      <van-tabbar-item icon="flag-o" @click="$router.push({name: 'sport'})">趣动</van-tabbar-item>
      <van-tabbar-item icon="smile-comment-o" @click="$router.push({name: 'message'})">消息</van-tabbar-item>
      <van-tabbar-item icon="user-o" @click="$router.push({name: 'user'})">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less">
@import "./styles/normalize.css";
@import "./styles/index.less";
html,
body,
#app {
  width: 100%;
  height: 100%;
}
#app {
  font-family: "PingFang SC", Helvetica, "STHeiti STXihei", "Microsoft YaHei",
    Tohoma, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: @font-size;
  color: @text-color;
  background-color: #fff;
  .van-tabs__content,
  .box-tab {
    height: 100%;
  }
  .van-nav-bar .van-icon,
  .van-nav-bar__text {
    color: #666;
  }
  .van-dropdown-menu__title {
    color: @theme;
  }
}
</style>
