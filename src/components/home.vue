<template>
    <div class="home">
        <router-link to="/one" >首页</router-link>

        <router-view></router-view>


        <!-- 轮播 -->
        <swiper :options="swiperOption" ref="mySwiper" class="s1">
            <swiper-slide>111111</swiper-slide>
            <swiper-slide>222222</swiper-slide>
            <swiper-slide>3333333333</swiper-slide>
            <swiper-slide>444444444</swiper-slide>

             <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>

    </div>
</template>

<script>
    import {swiper,swiperSlide} from "vue-awesome-swiper"
    export default {
        name:"Home",
        components:{swiper,swiperSlide},
        data(){
            return {
                swiperOption:{
                    slidesPerView: 'auto',
                    pagination:'.swiper-pagination',
                }
            }
        }
       
    }
</script>

<style lang="scss" scoped>
    .home{
        width:100%;
        h1{
            padding: 20px;
        }
    }
    .s1 {
        height: 2rem;
        background: pink;
    }
</style>
