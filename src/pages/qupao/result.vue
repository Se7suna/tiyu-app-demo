<template>
  <div class="qupaoResult">
    <van-nav-bar title="跑步结果" fixed left-text="返回" right-text="分享" left-arrow @click-left="$router.go(-3)" />
    <img class="img" src="../../../static/img/result.jpg">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.qupaoResult {
  position: relative;
  min-height: 100%;
  background-color: #999;
  .img {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .van-nav-bar .van-icon,
  .van-nav-bar__text {
    color: #666;
  }
}
</style>
