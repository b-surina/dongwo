<template>
    <div>
        <HeadCom></HeadCom>
        <div class="me-nav">
            <!-- <p>{{i}}</p>
            <p>{{this.$route.query.index+1}}</p> -->
            <div v-for='(item,index) in list' 
            :key='index'
             @click='wk(item,index)'
            :class='{ active:i==index}'
            
            >{{item.nav}}</div>
        </div>
        <div class="cont">
            {{tabAContent.cont}}    
        </div> 
        <ItemCom></ItemCom>
        <router-link to="/home" tag="div" class="btn">进店逛逛</router-link>
        

    </div>
</template>

<script>
import HeadCom from '../headCom'

import ItemCom from '../itemcom'

export default {
    name:'order',
    data() {
        return {
            list:[
                {id:1,nav:'全部',cont:'暂无订单'},
                {id:2,nav:'待付款',cont:'暂无订单'},
                {id:3,nav:'待发货',cont:'暂无订单'},
                {id:4,nav:'已发货',cont:'暂无订单'},
                {id:5,nav:'待评价',cont:'暂无订单'},
            ],
            tabAContent:{cont:'暂无订单'},
            tabIndex:0,
            i:this.$route.query.index*1+1,
        }
    },
    components:{
        HeadCom,
        ItemCom,
    },
    methods: {
        wk(v,i2){
            this.tabAContent.cont=v.cont,
            this.i=i2
        }
    },
    // created() {
    //  this.i=0
    // },
}
</script>

<style>

.me-nav{
    display: flex;
    align-items: center;
    height: .8rem;
    border-top:1px solid #f2f2f2;
    background: #fff;
    color: #7b7b7d;
    font-size: .28rem;
    justify-content: space-between;
    padding: 0 .38rem;
}
.me-nav div{
    text-align: center;
    width: .92rem;
    height: .8rem;
    line-height: .8rem;
}
.active{
    color: #000;
    font-weight: bolder;
    border-bottom: 2px solid #000;
} 
.cont{
    text-align: center;
    margin-top: 3.4rem;
    color: #919191;
}
.btn{
    width: 95%;
    margin: 0 auto;
    text-align: center;
    background: #fff;
    border: none;
    outline-style: none;
    height: .6rem;
    display: block;
    line-height: .6rem;
}
</style>