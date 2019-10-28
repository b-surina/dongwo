
<template>
  <div class="me">
    <h3>个人中心</h3>

    <div class="content">
      <div class="banner">
        <img src="../../public/img/banner.jpg" alt />
      </div>
      <div class="login" v-if="!flag">
        <p>登录手机号，同步全渠道订单和优惠券</p>
        <button @click="login">登录</button>
      </div>
      <div class="ka">
        <div>
          <span>0</span>
          <span>积分</span>
        </div>
        <div>
          <span>0</span>
          <span>卡</span>
        </div>
        <div>
          <span>0</span>
          <span>券码</span>
        </div>
      </div>
      <div class="order">
        <!-- <router-link to="/me/order" tag="p" id="p1"> -->
        <div id="p1" @click="all">
          <span>我的订单</span>
          <span>
            查看全部订单
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-you" />
            </svg>
          </span>
        </div>
        <!-- </router-link> -->
        <div class="my-menu">
          <!-- <router-link to="/me/order" tag="div" v-for="(item,index) in list" :key="index"> -->
          <div v-for="(item,index) in list" :key="index" @click="go(index)">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="`#icon-${item.icon}`" />
            </svg>
            <p>{{item.cont}}</p>
          </div>

          <!-- </router-link> -->
        </div>
      </div>
      <div class="my-item">
        <router-link to="/cart" tag="div">
          <p>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weibiaoti-" />
            </svg>
            <span>购物车</span>
          </p>
          <i>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-you" />
            </svg>
          </i>
        </router-link>
      </div>
      <div class="my-item">
        <div @click="address">
          <p>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shouhuodizhi" />
            </svg>
            <span>收货地址</span>
          </p>
          <i>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-you" />
            </svg>
          </i>
        </div>
      </div>
      <div class="my-item">
        <div @click="call">
          <p>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bodadianhua3" />
            </svg>
            <span>拨打商家电话</span>
          </p>
          <i>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-you" />
            </svg>
          </i>
        </div>
      </div>
      <div class="my-item">
        <div>
          <p>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-liaotian" />
            </svg>
            <span>客服聊天</span>
          </p>
          <i>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-you" />
            </svg>
          </i>
        </div>
      </div>
      <div class="my-item">
        <router-link to="/me/message" tag="div">
          <p>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gerenzhongxinwoderenwubiaozhuntouxianxing" />
            </svg>
            <span>个人信息</span>
          </p>
          <i>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-you" />
            </svg>
          </i>
        </router-link>
      </div>
      <div class="my-item">
        <router-link to="/me/safe" tag="div">
          <p>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zhanghaoshezhi" />
            </svg>
            <span>账号设置</span>
          </p>
          <i>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-you" />
            </svg>
          </i>
        </router-link>
      </div>
      <div class="logo">
        <img src="../../public/img/logo.gif" alt />
      </div>
      <p id="ban">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zan" />
        </svg>有赞提供技术支持
      </p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// 按需引入部分组件
import { MessageBox } from "mint-ui";

import { Toast } from "mint-ui";

export default {
  name: "Me",
  data() {
    return {
      list: [
        { id: 1, icon: "qianbao", cont: "待付款" },
        { id: 2, icon: "daifahuo", cont: "待发货" },
        { id: 3, icon: "daishouhuo", cont: "待收货" },
        { id: 4, icon: "daipingjia1", cont: "待评价" },
        { id: 5, icon: "tuikuan2", cont: "退款维权" }
      ],
      flag: false,
      title: "收货地址"
    };
  },
  methods: {
    address() {
      this.$router.push(`/me/address?title=${this.title}`);
    },
    go(i) {
      this.$router.push(`/me/order?index=${i}`);
    },
    all() {
      this.$router.push(`/me/order?index=${-1}`);
    },
    call() {
      MessageBox({
        message: "177-175-213-43",
        showCancelButton: true
      });
    },
    login() {
      this.flag = !this.flag;
      Toast({
        message: "登录成功",
        position: "bottom",
        duration: 5000
      });
    }
  },
  mounted() {}
};
</script>

<style>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.me {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.me h3 {
  padding: 20px;
}
.me .content {
  flex: 1;
  overflow: auto;
}
.logo {
  width: 1.96rem;
  height: 0.6rem;
  margin: 0.9rem 2.7rem 0;
}
.logo img {
  width: 100%;
}
#ban {
  color: #c3c3c7;
  text-align: center;
  margin-top: 0.1rem;
  margin-bottom: 0.45rem;
}
</style>