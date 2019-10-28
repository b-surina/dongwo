<template>
  <div>
    <div class="head">
      <router-link to="/me" tag="div">
        <img src="../../../public/img/left.jpg" alt />
      </router-link>
      <p>个人信息</p>
      <div></div>
    </div>
    <div class="msg">
      <p id='pp'>基本信息</p>
    </div>
    <div class="msg-cont">

    </div>
  </div>
</template>

<script>
export default {
  name: "msg",
  data() {
    return {
      
    };
  }
};
</script>

<style lang="scss" scoped>
#pp{
    padding: .3rem;
    color: #9b9b9b;
}
.msg-cont{
    width: 100%;
    height: 6.75rem;
    background: #fff;
}
</style>