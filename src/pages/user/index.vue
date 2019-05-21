<template>
  <div class="userPage">
    <van-nav-bar title="我的" fixed />
    <div class="info">
      <div class="info-set">
        <p class="info-set-left">点击认证</p>
        <van-icon name="setting-o" size="25px" color="#fff" />
      </div>
      <img class="info-avatar" src="/static/img/avatar.jpg">
      <van-rate class="info-pain" v-model="value" allow-half void-icon="star" void-color="#eee" />
      <p class="info-name">张三</p>
      <p class="info-id">ID：2019031621</p>
      <div class="info-white"></div>
    </div>
    <ul class="set">
      <li class="set-item">
        <div class="set-item-img">
          <van-icon name="bar-chart-o" size="20px" color="#fff" />
        </div>
        <div class="set-item-text">
          <p class="name">我的排行</p>
          <p class="text">本周运动排名</p>
        </div>
      </li>
      <li class="set-item">
        <div class="set-item-img">
          <van-icon name="orders-o" size="20px" color="#fff" />
        </div>
        <div class="set-item-text">
          <p class="name">跑步记录</p>
          <p class="text">0次运动</p>
        </div>
      </li>
      <li class="set-item">
        <div class="set-item-img">
          <van-icon name="aim" size="20px" color="#fff" />
        </div>
        <div class="set-item-text">
          <p class="name">数据分析</p>
          <p class="text">分析跑步数据</p>
        </div>
      </li>
      <li class="set-item">
        <div class="set-item-img">
          <van-icon name="add-o" size="20px" color="#fff" />
        </div>
        <div class="set-item-text">
          <p class="name">更多功能</p>
          <p class="text">正在开发中</p>
        </div>
      </li>
    </ul>
    <ul class="list">
      <li class="list-item">
        <p class="list-item-text">使用帮助</p>
        <van-icon name="arrow" />
      </li>
      <li class="list-item">
        <p class="list-item-text">联系客服</p>
        <van-icon name="arrow" />
      </li>
      <li class="list-item">
        <p class="list-item-text">意见反馈</p>
        <van-icon name="arrow" />
      </li>
      <li class="list-item">
        <p class="list-item-text">关于我们</p>
        <van-icon name="arrow" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 4.5
    }
  }
}
</script>

<style lang="less">
@import "../../styles/index.less";
.userPage {
  .page();
  min-height: 100%;
  background-color: @background-color;
  .info {
    display: flex;
    height: 250px;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    background-color: @theme;
    position: relative;
    overflow: hidden;
    padding-top: 50px;
  }
  .info-set {
    position: absolute;
    top: 20px;
    left: 0;
    width: 100%;
    padding-right: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .info-set-left {
    background-color: lighten(@theme, 20%);
    padding: 8px 12px;
    color: #fff;
    border-top-right-radius: 32px;
    border-bottom-right-radius: 32px;
  }
  .info-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
    border: 2px solid @border-color-light;
    z-index: 2;
  }
  .info-pain {
    z-index: 2;
  }
  .info-name {
    font-size: @font-size + 1;
    font-weight: 700;
    margin-top: 15px;
    z-index: 2;
  }
  .info-id {
    font-size: @font-size - 2;
    color: #bfbfbf;
    margin-top: 10px;
    z-index: 2;
  }
  .info-white {
    width: 135%;
    height: 300px;
    background-color: #fff;
    position: absolute;
    bottom: -155px;
    z-index: 1;
    border-radius: 50%;
  }
  .set {
    display: flex;
    flex-flow: wrap;
    padding: 10px 0;
    background-color: @background-color;
  }
  .set-item {
    width: 50%;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    background-color: #fff;
  }
  .set-item-img {
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: @theme;
    border-radius: 50%;
    margin-right: 10px;
  }
  .set-item-text {
    .name {
      font-weight: 700;
      margin-bottom: 5px;
    }
    .text {
      font-size: @font-size - 1;
      color: @text-color-light;
    }
  }
  .list {
    background-color: #fff;
  }
  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
    border-bottom: 1px solid @border-color-light;
  }
}
</style>
