<template>
  <div class="qupaoMap">
    <div class="head">
      <div class="head-top">
        <div class="head-top-left">
          <p class="num">0.15</p>
          <p class="km">公里</p>
        </div>
        <div class="head-top-right">
          <p class="gps">GPS信号</p>
          <van-icon name="ellipsis" size="24px" color="#0bad61" />
        </div>
      </div>
      <div class="head-bot">
        <div class="head-bot-box">
          <p class="num">00′00″</p>
          <p class="text">平均配速</p>
        </div>
        <div class="head-bot-box">
          <p class="num">00:{{m|bu0}}:{{s|bu0}}</p>
          <p class="text">用时</p>
        </div>
        <div class="head-bot-box">
          <p class="num">3.7</p>
          <p class="text">热量 (千卡)</p>
        </div>
      </div>
    </div>
    <div class="foot">
      <a class="foot-btn" @touchstart="touch(true)" @touchend="touch(false)" v-show="!timeOut">
        <span>长按暂停</span>
        <i class="foot-btn-jdt" :style="`width: ${js}px`"></i>
      </a>
      <a class="foot-btn jx" v-show="timeOut" @click="timeStart">继续</a>
      <a class="foot-btn js" v-show="timeOut" @click="exit">结束</a>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  data () {
    return {
      s: 0,
      m: 0,
      timeId: '',
      touchId: '',
      js: 0,
      timeOut: false
    }
  },
  methods: {
    timeStart () {
      this.timeOut = false
      this.timeId = setInterval(() => {
        this.s++
        if (this.s === 60) {
          this.m++
          this.s = 0
        }
      }, 1000)
    },
    timeEnd () {
      clearInterval(this.timeId)
    },
    touch (start) {
      if (start) {
        this.touchId = setInterval(() => {
          this.js++
          if (this.js === 180) {
            this.timeOut = true
            this.js = 0
            this.timeEnd()
            clearInterval(this.touchId)
          }
        }, 10)
      } else {
        clearInterval(this.touchId)
        this.js = 0
      }
    },
    exit () {
      Dialog.confirm({
        title: '结束跑步',
        message: '是否确定结束此次跑步？'
      }).then(() => {
        this.$router.push({ name: 'result' })
      })
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
  },
  mounted () {
    this.timeStart()
  }
}
</script>

<style lang="less">
@import "../../styles/index.less";
.qupaoMap {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100%;
  padding-top: 30px;
  padding-bottom: 20px;
  .background("/app/static/img/map.png");
  .head {
    width: 90%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    background-color: #fff;
    padding: 30px 20px;
    border-radius: @border-radius;
  }
  .head-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .head-top-left {
    display: flex;
    .num {
      font-size: 32px;
      line-height: 32px;
      font-weight: 700;
    }
    .km {
      font-size: @font-size - 1;
      color: @text-color-light;
      align-self: flex-end;
      margin-left: 8px;
    }
  }
  .head-top-right {
    display: flex;
    align-items: center;
    margin-top: -4px;
    .gps {
      font-size: @font-size - 2;
      font-weight: 700;
      margin-right: 5px;
    }
  }
  .head-bot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
  }
  .head-bot-box {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    .num {
      font-size: 20px;
      font-weight: 700;
    }
    .text {
      font-size: @font-size - 1;
      margin-top: 5px;
      color: @text-color-light;
    }
  }
  .foot {
    display: flex;
    align-items: center;
    justify-content: center;
    .jx {
      width: 140px;
      background-color: #1588f5;
      margin-right: 30px;
    }
    .js {
      width: 140px;
      background-color: #e95252;
    }
  }
  .foot-btn {
    display: block;
    height: 46px;
    line-height: 46px;
    text-align: center;
    width: 180px;
    background-color: @theme;
    color: #fff;
    font-size: 16px;
    border-radius: 46px;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
  }
  .foot-btn-jdt {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: fade(#fff, 50%);
  }
}
</style>
