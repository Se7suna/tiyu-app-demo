<template>
  <div class="recordList">
    <van-nav-bar title="运动记录" fixed left-text="返回" left-arrow @click-left="$router.go(-1)" />
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item title="2019年3月" name="1">
        <div class="total">
          <p class="total-text">
            <span class="total-text-name">跑步 (公里)</span>
            <span class="total-text-num">00.00</span>
          </p>
          <i class="total-h"></i>
          <p class="total-text">
            <span class="total-text-name">篮球 (分钟)</span>
            <span class="total-text-num">0</span>
          </p>
          <i class="total-h"></i>
          <p class="total-text">
            <span class="total-text-name">羽毛球 (分钟)</span>
            <span class="total-text-num">32</span>
          </p>
          <i class="total-h"></i>
          <p class="total-text">
            <span class="total-text-name">游泳 (分钟)</span>
            <span class="total-text-num">130</span>
          </p>
        </div>
        <ul class="list">
          <li class="list-item">
            <div class="list-item-left">
              <img class="img" src="../../../../static/img/ymq.png">
              <p class="num">
                <span class="num-text">32</span>
                <span class="num-unit">分钟</span>
              </p>
              <p class="time">
                <van-icon name="clock-o" size="16px" />
                <span class="time-num">09:41:31 - 10:02:45</span>
              </p>
            </div>
            <p class="list-item-right">3/06</p>
          </li>
          <li class="list-item">
            <div class="list-item-left">
              <img class="img" src="../../../../static/img/yy.png">
              <p class="num">
                <span class="num-text">60</span>
                <span class="num-unit">分钟</span>
              </p>
              <p class="time">
                <van-icon name="clock-o" size="16px" />
                <span class="time-num">14:31:11 - 15:10:15</span>
              </p>
            </div>
            <p class="list-item-right">3/20</p>
          </li>
          <li class="list-item">
            <div class="list-item-left">
              <img class="img" src="../../../../static/img/yy.png">
              <p class="num">
                <span class="num-text">70</span>
                <span class="num-unit">分钟</span>
              </p>
              <p class="time">
                <van-icon name="clock-o" size="16px" />
                <span class="time-num">14:31:11 - 15:10:15</span>
              </p>
            </div>
            <p class="list-item-right">3/26</p>
          </li>
        </ul>
      </van-collapse-item>
      <van-collapse-item title="2019年4月" name="2">
        <div class="total">
          <p class="total-text">
            <span class="total-text-name">跑步 (公里)</span>
            <span class="total-text-num">02.35</span>
          </p>
          <i class="total-h"></i>
          <p class="total-text">
            <span class="total-text-name">篮球 (分钟)</span>
            <span class="total-text-num">33</span>
          </p>
          <i class="total-h"></i>
          <p class="total-text">
            <span class="total-text-name">羽毛球 (分钟)</span>
            <span class="total-text-num">0</span>
          </p>
          <i class="total-h"></i>
          <p class="total-text">
            <span class="total-text-name">游泳 (分钟)</span>
            <span class="total-text-num">0</span>
          </p>
        </div>
        <ul class="list">
          <li class="list-item">
            <div class="list-item-left">
              <img class="img" src="../../../../static/img/pb.png">
              <p class="num">
                <span class="num-text">2.35</span>
                <span class="num-unit">公里</span>
              </p>
              <p class="time">
                <van-icon name="clock-o" size="16px" />
                <span class="time-num">12:21:31 - 14:32:05</span>
              </p>
            </div>
            <p class="list-item-right">4/21</p>
          </li>
          <li class="list-item">
            <div class="list-item-left">
              <img class="img" src="../../../../static/img/lq.png">
              <p class="num">
                <span class="num-text">33</span>
                <span class="num-unit">分钟</span>
              </p>
              <p class="time">
                <van-icon name="clock-o" size="16px" />
                <span class="time-num">15:21:31 - 16:22:15</span>
              </p>
            </div>
            <p class="list-item-right">4/15</p>
          </li>
        </ul>
      </van-collapse-item>
      <van-collapse-item title="2019年5月" name="3">
        <div class="total">
          <p class="total-text">
            <span class="total-text-name">跑步 (公里)</span>
            <span class="total-text-num">06.35</span>
          </p>
          <i class="total-h"></i>
          <p class="total-text">
            <span class="total-text-name">篮球 (分钟)</span>
            <span class="total-text-num">53</span>
          </p>
          <i class="total-h"></i>
          <p class="total-text">
            <span class="total-text-name">羽毛球 (分钟)</span>
            <span class="total-text-num">62</span>
          </p>
          <i class="total-h"></i>
          <p class="total-text">
            <span class="total-text-name">游泳 (分钟)</span>
            <span class="total-text-num">35</span>
          </p>
        </div>
        <ul class="list">
          <li class="list-item">
            <div class="list-item-left">
              <img class="img" src="../../../../static/img/pb.png">
              <p class="num">
                <span class="num-text">2.35</span>
                <span class="num-unit">公里</span>
              </p>
              <p class="time">
                <van-icon name="clock-o" size="16px" />
                <span class="time-num">12:21:31 - 14:32:05</span>
              </p>
            </div>
            <p class="list-item-right">5/14</p>
          </li>
          <li class="list-item">
            <div class="list-item-left">
              <img class="img" src="../../../../static/img/lq.png">
              <p class="num">
                <span class="num-text">53</span>
                <span class="num-unit">分钟</span>
              </p>
              <p class="time">
                <van-icon name="clock-o" size="16px" />
                <span class="time-num">15:21:31 - 16:22:15</span>
              </p>
            </div>
            <p class="list-item-right">5/15</p>
          </li>
          <li class="list-item">
            <div class="list-item-left">
              <img class="img" src="../../../../static/img/ymq.png">
              <p class="num">
                <span class="num-text">22</span>
                <span class="num-unit">分钟</span>
              </p>
              <p class="time">
                <van-icon name="clock-o" size="16px" />
                <span class="time-num">09:41:31 - 10:02:45</span>
              </p>
            </div>
            <p class="list-item-right">5/17</p>
          </li>
          <li class="list-item">
            <div class="list-item-left">
              <img class="img" src="../../../../static/img/yy.png">
              <p class="num">
                <span class="num-text">35</span>
                <span class="num-unit">分钟</span>
              </p>
              <p class="time">
                <van-icon name="clock-o" size="16px" />
                <span class="time-num">14:31:11 - 15:10:15</span>
              </p>
            </div>
            <p class="list-item-right">5/20</p>
          </li>
          <li class="list-item">
            <div class="list-item-left">
              <img class="img" src="../../../../static/img/pb.png">
              <p class="num">
                <span class="num-text">4.00</span>
                <span class="num-unit">公里</span>
              </p>
              <p class="time">
                <van-icon name="clock-o" size="16px" />
                <span class="time-num">08:11:10 - 9:02:31</span>
              </p>
            </div>
            <p class="list-item-right">5/21</p>
          </li>
          <li class="list-item">
            <div class="list-item-left">
              <img class="img" src="../../../../static/img/ymq.png">
              <p class="num">
                <span class="num-text">30</span>
                <span class="num-unit">分钟</span>
              </p>
              <p class="time">
                <van-icon name="clock-o" size="16px" />
                <span class="time-num">19:32:17 - 20:01:15</span>
              </p>
            </div>
            <p class="list-item-right">5/28</p>
          </li>
        </ul>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: '3'
    }
  }
}
</script>

<style lang="less">
@import "../../../styles/index.less";
.recordList {
  .page();
  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
  }
  .total-text {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .total-text-num {
    color: @text-color;
    font-weight: 700;
    font-size: @font-size + 2;
    margin-top: 2px;
  }
  .total-h {
    display: block;
    width: 1px;
    height: 30px;
    background-color: @border-color-light;
  }
  .list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    border-bottom: 1px solid @border-color-light;
    &:last-child {
      border-bottom: 0;
    }
  }
  .list-item-left {
    display: flex;
    align-items: center;
    .img {
      height: 25px;
      margin-right: 15px;
    }
    .num {
      width: 70px;
      font-size: @font-size;
      font-weight: 700;
      color: @text-color;
      margin-right: 20px;
      .num-text {
        font-size: @font-size + 1;
      }
    }
    .time {
      font-size: @font-size;
      display: flex;
      align-items: center;
      .time-num {
        margin-left: 5px;
      }
    }
  }
  .list-item-right {
    font-size: @font-size + 1;
    color: #999;
  }
}
</style>
