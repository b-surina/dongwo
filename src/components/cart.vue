<template>
    <div class="cart">
       <swiper :options="swiperOP" ref="myswiper" class="s2">
            <swiper-slide>1111</swiper-slide>
            <swiper-slide>2222</swiper-slide>
            <swiper-slide>3333</swiper-slide>
            <swiper-slide>4444</swiper-slide>
       </swiper>
        <p>我要重新改的。我就是</p>
    </div>
</template>

<script>
import {swiper,swiperSlide} from "vue-awesome-swiper"
    export default {
        name:"Cart",
        components:{swiperSlide,swiper},
        data(){
            return {
                swiperOP:{
                    slidesPerView:'auto'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.cart{
        width:100%;
        h3{
            padding: 20px;
        }
    }
    .s2{
        width: 100%;
        height: #f00;
    }
</style>