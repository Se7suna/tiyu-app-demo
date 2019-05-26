<template>
  <div class="userData">
    <van-nav-bar title="数据分析" fixed />
    <img class="top" src="/static/img/top.png">
    <div class="most">
      <p class="most-title">单日最佳成绩</p>
      <div class="most-item">
        <p class="most-item-text">
          <span class="name">运动里程</span>
          <span class=num>5.5 公里</span>
        </p>
        <p class="most-item-date">2019年/5月/12日</p>
      </div>
      <div class="most-item">
        <p class="most-item-text">
          <span class="name">运动时间</span>
          <span class=num>120 分钟</span>
        </p>
        <p class="most-item-date">2019年/4月/27日</p>
      </div>
    </div>
    <div class="most">
      <p class="most-title">单月最佳成绩</p>
      <div class="most-item">
        <p class="most-item-text">
          <span class="name">运动里程</span>
          <span class=num>36.58 公里</span>
        </p>
        <p class="most-item-date">2019年/3月</p>
      </div>
      <div class="most-item">
        <p class="most-item-text">
          <span class="name">运动时间</span>
          <span class=num>1520 分钟</span>
        </p>
        <p class="most-item-date">2019年/3月</p>
      </div>
    </div>
    <div class="chart">
      <p class="chart-title">本周运动时间</p>
      <canvas id="myChart"></canvas>
    </div>
    <div class="chart">
      <p class="chart-title">本周运动里程</p>
      <canvas id="myChart2"></canvas>
    </div>
  </div>
</template>

<script>
import F2 from '@antv/f2'
export default {
  data () {
    return {
      test: [
        { genre: '星期一', sold: 65 },
        { genre: '星期二', sold: 30 },
        { genre: '星期三', sold: 25 },
        { genre: '星期四', sold: 120 },
        { genre: '星期五', sold: 40 },
        { genre: '星期六', sold: 32 },
        { genre: '星期日', sold: 45 }
      ],
      test2: [
        { genre: '星期一', sold: 3.21 },
        { genre: '星期二', sold: 3.00 },
        { genre: '星期三', sold: 4.52 },
        { genre: '星期四', sold: 1.52 },
        { genre: '星期五', sold: 3.21 },
        { genre: '星期六', sold: 4.50 },
        { genre: '星期日', sold: 3.02 }
      ]
    }
  },
  mounted () {
    const chart = new F2.Chart({
      id: 'myChart',
      pixelRatio: window.devicePixelRatio
    })
    chart.source(this.test)
    chart.legend(false)
    chart.tooltip({
      showItemMarker: false,
      onShow: function onShow (ev) {
        var items = ev.items
        items[0].name = null
        items[0].name = items[0].title
        items[0].value = items[0].value + '分钟'
      }
    })
    chart.interval().position('genre*sold').color('#fb6522')
    // -- 分割线 --
    const chart2 = new F2.Chart({
      id: 'myChart2',
      pixelRatio: window.devicePixelRatio
    })
    chart2.source(this.test2)
    chart2.legend(false)
    chart2.tooltip({
      showItemMarker: false,
      onShow: function onShow (ev) {
        var items = ev.items
        items[0].name = null
        items[0].name = items[0].title
        items[0].value = items[0].value + '公里'
      }
    })
    chart2.interval().position('genre*sold').color('#fb6522')
    // -- 分割线 --
    this.$nextTick(() => {
      chart.render()
      chart2.render()
    })
  }
}
</script>

<style lang="less">
@import "../../styles/index.less";
#myChart2,
#myChart {
  width: 100vw;
  height: 60vw;
  background-color: #fff;
  margin-top: 10px;
}
.userData {
  .page();
  background-color: @background-color;
  .top {
    width: 100%;
  }
  .most {
    margin-top: 10px;
    padding: 15px;
    background-color: #fff;
  }
  .most-title {
    font-size: @font-size + 1;
    padding-bottom: 15px;
    border-bottom: 1px solid @border-color-light;
  }
  .most-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid @border-color-light;
  }
  .most-item-text {
    display: flex;
    flex-flow: column;
    .num {
      margin-top: 3px;
      font-weight: 700;
    }
  }
  .chart {
    background-color: #fff;
    margin-top: 13px;
    padding: 10px 0;
  }
  .chart-title {
    font-size: @font-size + 1;
    margin-left: 10px;
  }
}
</style>
