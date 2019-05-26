<template>
  <div class="userWeek">
    <van-nav-bar title="本周任务" fixed />
    <img class="img" src="../../../static/img/info1.png">
    <div class="box">
      <p class="box-title">锻炼任务</p>
      <van-cell-group>
        <van-cell title="跑步（公里）" value="5.35 / 15.00" />
        <van-cell title="篮球（分钟）" value="已完成" />
        <van-cell title="羽毛球（分钟）" value="0 / 90" />
        <van-cell title="游泳（分钟）" value="35 / 90" />
      </van-cell-group>
    </div>
    <div class="box">
      <p class="box-title">个人任务</p>
      <van-cell-group>
        <van-cell title="跑步强化（公里）" value="2.51 / 10.00" />
        <van-cell title="篮球强化（分钟）" value="已完成" />
        <van-cell title="游泳强化（分钟）" value="0 / 30" />
      </van-cell-group>
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
@import "../../styles/index.less";
.userWeek {
  .page();
  min-height: 100%;
  background-color: @background-color;
  .img {
    width: 100%;
    padding: 15px;
    background-color: #fff;
  }
  .box {
    margin-top: 10px;
    background-color: #fff;
  }
  .box-title {
    padding: 10px 15px;
    font-weight: 700;
  }
}
</style>
