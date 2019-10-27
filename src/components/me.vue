<template>
  <div class="me">
    <h3>个人中心范德萨范德萨发</h3>
    <p>苏日娜 那日苏</p>
    <ul>
      <!-- <li v-for="item in list" :key="item.id"> <img :src="item.imgurl" > </li> -->
    </ul>   

    <!-- 选项卡 -->
      <ul>
        <li></li>
      </ul>

  </div>
</template>

<script>
// import axios from "axios"
export default {
  name: "Me",
  data(){
    return {
      list:[
        {id:"1",title:"达拉斯,"}
      ]
    }
  },
  methods: {
    getData() {
     this.$http.get("http://www.1902c.com/lunbo").then(res => {
        console.log(res);
        if(res.status==200 && res.statusText=="OK"){
          this.list = res.data.lunbo;
        }
      }).catch(error=>{
          console.log(error)
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
.me {
  width: 100%;
  h3 {
    padding: 20px;
  }
}
</style>