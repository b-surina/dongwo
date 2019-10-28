<template>
    <div class="head">
        <router-link to="/me" tag="div"><img src="../../../public/img/left.jpg" alt=""></router-link>
        <p>{{title}}</p>
        <div></div>
    </div>
</template>

<script>
export default {
    name:'hd',
    data() {
        return {
            title:"订单列表"
        }
    }
}
</script>

<style>
.head{
    width: 100%;
    height: .88rem;
    background: #fff;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 .3rem;
    justify-content: space-between;
}
.head div img{
    width: .21rem;
    height: .39rem;
}
.head p{
    font-size: .32rem;
    font-weight: bolder;
}
    
</style>