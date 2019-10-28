<template>
  <div class="big_box">
    <section>
      <router-view></router-view>
    </section>
    <div class="foot">
      <router-link to="/home" tag="div">
        <svg class="icon img" aria-hidden="true">
          <use xlink:href="#icon-shouye" />
        </svg>
        <span>首页</span>
      </router-link>
      <router-link to="/filters" tag="div">
        <svg class="icon img" aria-hidden="true">
          <use xlink:href="#icon-shaixuan" />
        </svg>
        <span>筛选</span>
      </router-link>
      <router-link to="/cart" tag="div">
        <svg class="icon img" aria-hidden="true">
          <use xlink:href="#icon-gouwuche" />
        </svg>
        <span>购物车</span>
      </router-link>
      <router-link to="/me" tag="div">
        <svg class="icon img" aria-hidden="true">
          <use xlink:href="#icon-wode" />
        </svg>
        <span>个人中心</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Foot"
};
</script>

<style lang="scss" scoped>
.big_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  section {
    flex: 1;
    overflow: auto;
  }
  .foot {
    width: 100%;
    height: 0.96rem;
    border-top: 0.01rem solid;
    // background: red;
    display: flex;
    div {
      width: 25%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        margin: 0.05rem 0;
      }
      .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }
      .img{
          width:0.4rem;
          height: 0.4rem;
      }
      &.router-link-active {
        color: #ff4444;
      }
    }
  }
}
</style>