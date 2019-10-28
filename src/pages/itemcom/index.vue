<template>
    <div class="me-item">
        <p id="pp">更多精选商品</p>
        <div class="item-pic">
            <div v-for='(item,index) in arr ' :key='index' >
                <img :src="item.img" alt="">
                <p>{{item.title}}</p>
                <p>￥{{item.price}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'me-item',
        data() {
            return {
                arr:[
                    {img:require('../../../public/img/xd1.gif'),title:'懂窝|汉普顿 Hampton餐桌 Dining Table',price:4679},
                    {img:require('../../../public/img/xd2.gif'),title:'懂窝|汉普顿 Hampton餐桌 Dining Table',price:1299},
                    {img:require('../../../public/img/xd3.gif'),title:'懂窝|汉普顿 Hampton餐桌 Dining Table',price:4999},
                    {img:require('../../../public/img/xd4.gif'),title:'懂窝|汉普顿 Hampton餐桌 Dining Table',price:2999},
                    {img:require('../../../public/img/xd5.gif'),title:'懂窝|汉普顿 Hampton餐桌 Dining Table',price:799},
                    {img:require('../../../public/img/z1.gif'),title:'懂窝|汉普顿 Hampton餐桌 Dining Table',price:4199},
                    {img:require('../../../public/img/z2.gif'),title:'懂窝|汉普顿 Hampton餐桌 Dining Table',price:4399},
                    {img:require('../../../public/img/z3.gif'),title:'懂窝|汉普顿 Hampton餐桌 Dining Table',price:1999},
                    {img:require('../../../public/img/z4.gif'),title:'懂窝|汉普顿 Hampton餐桌 Dining Table',price:4399},
                    {img:require('../../../public/img/z5.gif'),title:'懂窝|汉普顿 Hampton餐桌 Dining Table',price:1259},
                ]
            }
        },
        
    }
</script>

<style lang="scss" scoped>
.me-item{
    margin-top: .35rem;
    text-align: center;
}
.item-pic{
    display: flex;
    flex-wrap: wrap;
    padding: .25rem .1rem;
    align-items: center;
    justify-content: space-between;
    div{
        width: 3.6rem;
        height: 5.15rem;
        background: #fff;
        margin-bottom: .1rem;
        img{
            width: 3.15rem;
            height: 3rem;
        }
        p:nth-of-type(1){
            font-size: .27rem;
            font-weight: bolder;
            text-align: left;
            margin-left: .15rem;
            line-height: .4rem;
            margin-top: .5rem;
        }
        p:nth-of-type(2){
            text-align: left;
            margin-left: .15rem;
            margin-top: .3rem;
            font-size: .28rem;
        }
    }
}

</style>