<template>
  <div>
    <div class="head">
      <router-link to="/me" tag="div">
        <img src="../../../public/img/left.jpg" alt />
      </router-link>
      <p>{{this.$route.query.title}}</p>
      <div></div>
    </div>
    <div class="wechat">
      <div>
        <p>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weixin" />
          </svg>
          <span>获取微信收货地址</span>
        </p>
        <i>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-you" />
          </svg>
        </i>
      </div>
    </div>
    <div class="address-cont">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shouhuodizhi" />
      </svg>
      <p>哎呀，你还没有收到货哦</p>
    </div>
    <div class="add-address">
      <p>新增收货地址</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "addr"
};
</script>

<style lang="scss" scoped>
.wechat {
  height: 0.8rem;
  background: #fbfbfb;
  div {
    display: flex;
    line-height: 0.82rem;
    padding: 0 0.28rem;
    justify-content: space-between;
    .icon {
      font-size: 0.38rem;
    }
    span {
      font-size: 0.26rem;
      margin-left: 0.23rem;
    }
    i {
      color: #9b9b9b;
    }
    p {
      display: flex;
      align-items: center;
    }
  }
}
.address-cont{
  margin-top: 4rem;
  margin-left: 3rem;
  .icon{
    font-size: 1.5rem;
    color: #eaeaea;
  }
  p{
    color: #b6b6b6;
    margin-top: .2rem;
    margin-left: -38px;
  }
}
.add-address{
  height: .9rem;
  width: 100%;
  background: #2f2f33;
  color:#fff;
  margin-top: 3.81rem;
  p{
    text-align: center;
    line-height: .9rem;
  }
}
</style>