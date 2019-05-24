<template>
  <div class="qupaoPage">
    <van-nav-bar title="趣跑" fixed />
    <van-tabs v-model="active" class="box" color="#fb6522">
      <van-tab title="跑步" class="box-tab">
        <p class="box-tab-title">今日跑步任务：5km</p>
        <div class="box-tab-content">
          <p class="title">今日里程（km）</p>
          <p class="long">0.0</p>
          <p class="num">跑步次数：0</p>
        </div>
        <a class="box-tab-btn" @click="$router.push({name: 'count'})">开始趣跑</a>
        <ul class="box-tab-list">
          <li class="item">
            <p class="item-time">一</p>
            <p class="item-num">0</p>
          </li>
          <li class="item">
            <p class="item-time">二</p>
            <p class="item-num">0</p>
          </li>
          <li class="item">
            <p class="item-time">三</p>
            <p class="item-num">0</p>
          </li>
          <li class="item">
            <p class="item-time">四</p>
            <p class="item-num">0</p>
          </li>
          <li class="item">
            <p class="item-time">五</p>
            <p class="item-num">0</p>
          </li>
          <li class="item">
            <p class="item-time">六</p>
            <p class="item-num">0</p>
          </li>
          <li class="item">
            <p class="item-time">日</p>
            <p class="item-num">0</p>
          </li>
        </ul>
      </van-tab>
      <van-tab title="篮球" class="box-tab">
        <p class="box-tab-title">今日篮球训练：60min</p>
        <div class="box-tab-content">
          <p class="title">本次锻炼时长</p>
          <p class="long">00:{{f|bu0}}:{{m|bu0}}</p>
          <p class="num">连续锻炼天数：{{num}}</p>
        </div>
        <a class="box-tab-btn" @click="handleTime(true)" v-show="begin">开始计时</a>
        <a class="box-tab-btn" @click="handleTime(false)" v-show="!begin">结束计时</a>
        <ul class="box-tab-list">
          <li class="item">
            <p class="item-time">一</p>
            <p class="item-num">0</p>
          </li>
          <li class="item">
            <p class="item-time">二</p>
            <p class="item-num">0</p>
          </li>
          <li class="item">
            <p class="item-time">三</p>
            <p class="item-num">0</p>
          </li>
          <li class="item">
            <p class="item-time">四</p>
            <p class="item-num">0</p>
          </li>
          <li class="item">
            <p class="item-time">五</p>
            <p class="item-num">0</p>
          </li>
          <li class="item">
            <p class="item-time">六</p>
            <p class="item-num">0</p>
          </li>
          <li class="item">
            <p class="item-time">日</p>
            <p class="item-num">0</p>
          </li>
        </ul>
      </van-tab>
      <van-tab title="羽毛球" class="box-tab">
        <p class="box-tab-title">今日羽毛球训练：30min</p>
        <div class="box-tab-content">
          <p class="title">本次锻炼时长</p>
          <p class="long">00:{{f|bu0}}:{{m|bu0}}</p>
          <p class="num">连续锻炼天数：{{num}}</p>
        </div>
        <a class="box-tab-btn" @click="handleTime(true)" v-show="begin">开始计时</a>
        <a class="box-tab-btn" @click="handleTime(false)" v-show="!begin">结束计时</a>
        <ul class="box-tab-list">
          <li class="item">
            <p class="item-time">一</p>
            <p class="item-num">0</p>
          </li>
          <li class="item">
            <p class="item-time">二</p>
            <p class="item-num">0</p>
          </li>
          <li class="item">
            <p class="item-time">三</p>
            <p class="item-num">0</p>
          </li>
          <li class="item">
            <p class="item-time">四</p>
            <p class="item-num">0</p>
          </li>
          <li class="item">
            <p class="item-time">五</p>
            <p class="item-num">0</p>
          </li>
          <li class="item">
            <p class="item-time">六</p>
            <p class="item-num">0</p>
          </li>
          <li class="item">
            <p class="item-time">日</p>
            <p class="item-num">0</p>
          </li>
        </ul>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  data () {
    return {
      active: 0,
      m: 0,
      f: 0,
      num: 0,
      begin: true,
      timeId: ''
    }
  },
  methods: {
    handleTime (f) {
      if (f) {
        this.begin = false
        this.timeId = setInterval(() => {
          this.m++
          if (this.m === 60) {
            this.f++
            this.m = 0
          }
        }, 1000)
      } else {
        Dialog.confirm({
          title: '结束锻炼',
          message: `本次锻炼时长 ${this.f} 分 ${this.m} 秒，是否结束？`
        }).then(() => {
          this.f = 0
          this.m = 0
          this.begin = true
          this.num = 1
          clearInterval(this.timeId)
        })
      }
    }
  },
  filters: {
    bu0 (val) {
      if (val >= 10) {
        return val
      } else {
        return '0' + val
      }
    }
  }
}
</script>

<style lang="less">
@import "../../styles/index.less";
.qupaoPage {
  .page();
  min-height: 100%;
  display: flex;
  .box {
    flex: 1;
  }
  .box-tab {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
  }
  .box-tab-title {
    font-size: @font-size - 2;
    padding: 6px 12px;
    border: 1px solid @border-color;
    border-radius: 4px;
    margin-top: 14%;
  }
  .box-tab-content {
    width: 56vw;
    height: 56vw;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    border: 5px solid fade(@border-color-light, 60%);
    border-radius: 50%;
    .title {
      font-size: @font-size - 2;
      font-weight: 700;
    }
    .long {
      font-size: 44px;
      color: @theme;
      margin: 8px 0;
    }
    .num {
      font-size: @font-size - 1;
      color: @text-color-light;
    }
  }
  .box-tab-btn {
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
  .box-tab-list {
    width: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 4%;
    .item {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
    }
    .item-time {
      font-size: @font-size - 2;
      width: 34px;
      height: 34px;
      line-height: 26px;
      text-align: center;
      color: fade(@text-color-light, 50%);
      border: 4px solid fade(@border-color-light, 60%);
      border-radius: 50%;
    }
    .item-num {
      margin-top: 10px;
      color: fade(@text-color-light, 50%);
    }
  }
}
</style>
