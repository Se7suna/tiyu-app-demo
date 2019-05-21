<template>
  <div class="messagePage">
    <van-nav-bar title="消息" fixed />
    <ul class="msg">
      <li class="msg-item">
        <div class="msg-item-img">
          <img class="img" src="/static/img/tz.png">
        </div>
        <div class="msg-item-text">
          <div class="up">
            <p class="up-name">系统通知</p>
            <p class="up-time">10分钟前</p>
          </div>
          <p class="down">欢迎使用趣跑app~</p>
        </div>
      </li>
      <li class="msg-item">
        <div class="msg-item-img">
          <img class="img" src="/static/img/dz.png">
        </div>
        <div class="msg-item-text">
          <div class="up">
            <p class="up-name">收到的赞</p>
            <p class="up-time"></p>
          </div>
          <p class="down">暂时没有新的点赞</p>
        </div>
      </li>
      <li class="msg-item">
        <div class="msg-item-img">
          <img class="img" src="/static/img/xx.png">
        </div>
        <div class="msg-item-text">
          <div class="up">
            <p class="up-name">评论</p>
            <p class="up-time"></p>
          </div>
          <p class="down">暂时没有新的评论或回复</p>
        </div>
      </li>
      <li class="msg-item">
        <img class="msg-item-img" src="/static/img/head2.jpg">
        <div class="msg-item-text">
          <div class="up">
            <p class="up-name">刘明</p>
            <p class="up-time">26秒钟前</p>
          </div>
          <p class="down">张三同学，你需要加强锻炼哦！</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
@import "../../styles/index.less";
.messagePage {
  .page();
  min-height: 100%;
  background-color: @background-color;
  .msg {
    background-color: #fff;
  }
  .msg-item {
    display: flex;
    align-items: center;
    padding: 17px 16px;
    border-bottom: 1px solid @border-color-light;
  }
  .msg-item-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 55px;
    background-color: @theme;
    border-radius: 50%;
    margin-right: 15px;
    .img {
      width: 30px;
      height: 30px;
    }
  }
  .msg-item-text {
    flex: 1;
    font-size: @font-size;
    .up {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .up-name {
      font-weight: 700;
    }
    .up-time {
      font-size: @font-size - 2;
      color: #bfbfbf;
    }
    .down {
      font-size: @font-size - 2;
      color: @text-color-light;
      margin-top: 8px;
    }
  }
}
</style>
