<template>
  <div class="indexPage">
    <van-nav-bar title="趣动APP" fixed />
    <div class="avatar">
      <img class="avatar-img" src="../../static/img/avatar.jpg">
      <div class="avatar-text">
        <p class="avatar-text-name">张三同学：</p>
        <p class="avatar-text-msg">今天的运动任务还剩余<span style="font-size: 13px; margin: 0 2px;">60分钟</span>哦，加油！</p>
      </div>
    </div>
    <div class="info">
      <img class="info-today" src="../../static/img/info1.png">
      <img class="info-record" src="../../static/img/info2.png">
    </div>
    <div class="push">
      <p class="push-title">今日推荐</p>
      <ul class="push-list">
        <li class="push-list-item">
          <div class="head">
            <img class="head-img" src="../../static/img/head1.jpg">
            <div class="head-text">
              <p class="head-text-name">系统管理员</p>
              <p class="head-text-info">系统消息</p>
            </div>
          </div>
          <p class="text">欢迎各位同学使用趣动APP。学习之余要记得坚持每日锻炼哦！</p>
          <div class="msg">
            <p class="msg-time">2019-05-21 21:03</p>
            <p class="msg-read">
              <van-icon name="eye-o" />
              <span class="msg-read-num">2333 次</span>
            </p>
          </div>
        </li>
        <li class="push-list-item">
          <div class="head">
            <img class="head-img" src="../../static/img/head3.jpg">
            <div class="head-text">
              <p class="head-text-name">刘翔</p>
              <p class="head-text-info">校田径队教练</p>
            </div>
          </div>
          <p class="text">在日常生活中，跑步减肥是一种非常好的燃脂方式。那跑步减肥的正确方法有哪些呢?在跑步的时候，需要开始前坐下拉伸运动，以防伤到肌肉。</p>
          <div class="msg">
            <p class="msg-time">2019-05-20 12:22</p>
            <p class="msg-read">
              <van-icon name="eye-o" />
              <span class="msg-read-num">968 次</span>
            </p>
          </div>
        </li>
        <li class="push-list-item">
          <div class="head">
            <img class="head-img" src="../../static/img/head2.jpg">
            <div class="head-text">
              <p class="head-text-name">刘明</p>
              <p class="head-text-info">篮球选修课指导老师</p>
            </div>
          </div>
          <p class="text">跑步燃脂的时候为了让燃脂效果更加的好，就需要积极的变换你的步伐，先是大步的跑一会，之后改为小步跑一会，或者是将两种步伐互相变换着进行跑步，这样变换步伐的跑步方式能够更好的燃烧你身体的脂肪，起到更加好的减肥效果。</p>
          <div class="msg">
            <p class="msg-time">2019-05-20 10:41</p>
            <p class="msg-read">
              <van-icon name="eye-o" />
              <span class="msg-read-num">1356 次</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
@import "../styles/index.less";
.indexPage {
  .page();
  .avatar {
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 15px;
    margin-bottom: 0;
    background-color: @background-color;
    border-radius: @border-radius;
  }
  .avatar-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 4px solid @border-color;
  }
  .avatar-text {
    margin: 10px;
    margin-bottom: 0;
    font-size: @font-size - 2;
    line-height: @font-size + 4;
    font-weight: 700;
  }
  .avatar-text-name {
    font-size: @font-size - 1;
  }
  .info {
    width: 100%;
    padding: 15px;
  }
  .info-today {
    width: 100%;
    border-radius: @border-radius;
    box-shadow: 3px 5px 10px rgba(251, 101, 34, 0.6);
  }
  .info-record {
    width: 100%;
    margin-top: 10px;
    border-radius: @border-radius;
  }
  .push {
    background-color: @background-color;
    padding-top: 10px;
  }
  .push-title {
    font-weight: 700;
    background-color: #fff;
    padding: 10px 15px;
  }
  .push-list {
    background-color: @background-color;
  }
  .push-list-item {
    background-color: #fff;
    padding: 10px 15px;
    margin-bottom: 5px;
    .head {
      display: flex;
      align-items: center;
      margin-bottom: 3px;
    }
    .head-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid @border-color-light;
      margin-right: 10px;
    }
    .head-text-name {
      color: @theme;
      font-weight: 700;
    }
    .head-text-info {
      font-size: @font-size - 2;
      color: @text-color-light;
      margin-top: 3px;
    }
    .text {
      margin: 2px;
      line-height: @font-size + 4;
      font-size: @font-size;
    }
    .msg {
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
    }
    .msg-read {
      display: flex;
      align-items: center;
    }
    .msg-read-num {
      margin-left: 5px;
    }
  }
}
</style>
