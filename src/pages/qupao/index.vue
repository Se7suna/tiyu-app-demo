<template>
  <div class="qupaoPage">
    <van-nav-bar title="趣跑" fixed />
    <p class="title">今日跑步任务：5km</p>
    <div class="content">
      <p class="content-title">今日里程（km）</p>
      <p class="content-long">0.0</p>
      <p class="content-num">跑步次数：0</p>
    </div>
    <a class="btn" @click="$router.push({name: 'count'})">开始趣跑</a>
    <ul class="list">
      <li class="list-item">
        <p class="list-item-time">一</p>
        <p class="list-item-num">0</p>
      </li>
      <li class="list-item">
        <p class="list-item-time">二</p>
        <p class="list-item-num">0</p>
      </li>
      <li class="list-item">
        <p class="list-item-time">三</p>
        <p class="list-item-num">0</p>
      </li>
      <li class="list-item">
        <p class="list-item-time">四</p>
        <p class="list-item-num">0</p>
      </li>
      <li class="list-item">
        <p class="list-item-time">五</p>
        <p class="list-item-num">0</p>
      </li>
      <li class="list-item">
        <p class="list-item-time">六</p>
        <p class="list-item-num">0</p>
      </li>
      <li class="list-item">
        <p class="list-item-time">日</p>
        <p class="list-item-num">0</p>
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
.qupaoPage {
  .page();
  min-height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  .title {
    font-size: @font-size - 2;
    padding: 6px 12px;
    border: 1px solid @border-color;
    border-radius: 4px;
    margin-top: 14%;
  }
  .content {
    width: 56vw;
    height: 56vw;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    border: 5px solid fade(@border-color-light, 60%);
    border-radius: 50%;
  }
  .content-title {
    font-size: @font-size - 2;
    font-weight: 700;
  }
  .content-long {
    font-size: 44px;
    color: @theme;
    margin: 8px 0;
  }
  .content-num {
    font-size: @font-size - 1;
    color: @text-color-light;
  }
  .btn {
    width: 160px;
    height: 54px;
    line-height: 54px;
    text-align: center;
    color: #fff;
    font-size: @font-size + 2;
    font-weight: 700;
    background-color: @theme;
    border-radius: 50px;
    letter-spacing: 1px;
    margin-top: 10%;
  }
  .list {
    width: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 4%;
  }
  .list-item {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .list-item-time {
    font-size: @font-size - 2;
    width: 34px;
    height: 34px;
    line-height: 26px;
    text-align: center;
    color: fade(@text-color-light, 50%);
    border: 4px solid fade(@border-color-light, 60%);
    border-radius: 50%;
  }
  .list-item-num {
    margin-top: 10px;
    color: fade(@text-color-light, 50%);
  }
}
</style>
