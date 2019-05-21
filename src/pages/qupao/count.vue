<template>
  <div class="qupaoCount">
    <p class="num zoomIn animated" v-show="num === 3">3</p>
    <p class="num zoomIn animated" v-show="num === 2">2</p>
    <p class="num zoomIn animated" v-show="num === 1">1</p>
    <p class="text zoomIn animated" v-show="num === 0">开始</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 3
    }
  },
  mounted () {
    const id = setInterval(() => {
      this.num--
      if (this.num === -1) {
        clearInterval(id)
        this.$router.push({ name: 'map' })
      }
    }, 1000)
  }
}
</script>

<style lang="less">
@import "../../styles/index.less";
.qupaoCount {
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .num {
    font-size: 200px;
    color: @theme;
    font-weight: 700;
  }
  .text {
    font-size: 130px;
    color: @theme;
    font-weight: 700;
  }
}
</style>
