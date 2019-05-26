<template>
  <div class="userRank">
    <van-nav-bar title="我的排行" fixed left-text="返回" left-arrow @click-left="$router.go(-1)" />
    <van-dropdown-menu active-color="#fb6522">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <ul class="list">
      <li class="list-item one">
        <div class="list-item-left">
          <p class="num">1</p>
          <img class="avatar" src="../../../static/img/avatar.jpg">
          <div class="text">
            <p class="text-name">张三</p>
            <div class="text-info">
              <p class="text-info-item">90.12 公里</p>
              <p class="text-info-item">2000 分钟</p>
            </div>
          </div>
        </div>
        <div class="list-item-right">
          <van-icon name="star" color="#fadb14" />
          <span class="text">1622</span>
        </div>
      </li>
      <li class="list-item two">
        <div class="list-item-left">
          <p class="num">2</p>
          <img class="avatar" src="../../../static/img/head1.jpg">
          <div class="text">
            <p class="text-name">李洋</p>
            <div class="text-info">
              <p class="text-info-item">88.50 公里</p>
              <p class="text-info-item">1921 分钟</p>
            </div>
          </div>
        </div>
        <div class="list-item-right">
          <van-icon name="star" color="#fadb14" />
          <span class="text">1422</span>
        </div>
      </li>
      <li class="list-item three">
        <div class="list-item-left">
          <p class="num">3</p>
          <img class="avatar" src="../../../static/img/head2.jpg">
          <div class="text">
            <p class="text-name">张雪</p>
            <div class="text-info">
              <p class="text-info-item">72.02 公里</p>
              <p class="text-info-item">1868 分钟</p>
            </div>
          </div>
        </div>
        <div class="list-item-right">
          <van-icon name="star" color="#fadb14" />
          <span class="text">1389</span>
        </div>
      </li>
      <li class="list-item">
        <div class="list-item-left">
          <p class="num">4</p>
          <img class="avatar" src="../../../static/img/head3.jpg">
          <div class="text">
            <p class="text-name">李建</p>
            <div class="text-info">
              <p class="text-info-item">65.26 公里</p>
              <p class="text-info-item">1600 分钟</p>
            </div>
          </div>
        </div>
        <div class="list-item-right">
          <van-icon name="star" color="#fadb14" />
          <span class="text">1211</span>
        </div>
      </li>
      <li class="list-item">
        <div class="list-item-left">
          <p class="num">5</p>
          <img class="avatar" src="../../../static/img/avatar.jpg">
          <div class="text">
            <p class="text-name">王小美</p>
            <div class="text-info">
              <p class="text-info-item">50.65 公里</p>
              <p class="text-info-item">1724 分钟</p>
            </div>
          </div>
        </div>
        <div class="list-item-right">
          <van-icon name="star" color="#fadb14" />
          <span class="text">911</span>
        </div>
      </li>
      <li class="list-item">
        <div class="list-item-left">
          <p class="num">6</p>
          <img class="avatar" src="../../../static/img/head3.jpg">
          <div class="text">
            <p class="text-name">王朗</p>
            <div class="text-info">
              <p class="text-info-item">45.60 公里</p>
              <p class="text-info-item">1562 分钟</p>
            </div>
          </div>
        </div>
        <div class="list-item-right">
          <van-icon name="star" color="#fadb14" />
          <span class="text">756</span>
        </div>
      </li>
      <li class="list-item">
        <div class="list-item-left">
          <p class="num">7</p>
          <img class="avatar" src="../../../static/img/head1.jpg">
          <div class="text">
            <p class="text-name">孔明</p>
            <div class="text-info">
              <p class="text-info-item">45.52 公里</p>
              <p class="text-info-item">1521 分钟</p>
            </div>
          </div>
        </div>
        <div class="list-item-right">
          <van-icon name="star" color="#fadb14" />
          <span class="text">722</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: 0,
      value2: 0,
      option1: [
        { text: '班级排行', value: 0 },
        { text: '院系排行', value: 1 },
        { text: '全校排行', value: 2 }
      ],
      option2: [
        { text: '5月', value: 0 },
        { text: '4月', value: 1 },
        { text: '3月', value: 2 }
      ]
    }
  }
}
</script>

<style lang="less">
@import "../../styles/index.less";
.userRank {
  .page();
  .list {
    background-color: @background-color;
  }
  .one {
    .list-item-left {
      .text-name,
      .num {
        color: lighten(@theme, 10%);
      }
      .avatar {
        border: 2px solid lighten(@theme, 10%);
      }
    }
  }
  .two {
    .list-item-left {
      .text-name,
      .num {
        color: lighten(@theme, 20%);
      }
      .avatar {
        border: 2px solid lighten(@theme, 20%);
      }
    }
  }
  .three {
    .list-item-left {
      .text-name,
      .num {
        color: lighten(@theme, 30%);
      }
      .avatar {
        border: 2px solid lighten(@theme, 30%);
      }
    }
  }

  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background-color: #fff;
    margin-bottom: 10px;
    &:last-child {
      border-bottom: 10px solid @background-color;
    }
  }
  .list-item-left {
    display: flex;
    align-items: center;
    .num {
      font-size: @font-size + 2;
      margin-right: 20px;
    }
    .avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      margin-right: 20px;
      border: 2px solid #fff;
    }
    .text-name {
      font-weight: 700;
    }
    .text-info {
      color: @text-color-light;
      margin-top: 4px;
    }
    .text-info-item {
      margin-right: 15px;
    }
    .text-info {
      display: flex;
      align-items: center;
    }
  }
  .list-item-right {
    display: flex;
    align-items: center;
    .text {
      margin-left: 5px;
      color: #666;
    }
  }
}
</style>
