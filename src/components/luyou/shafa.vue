<template>
    <div class="shafa">
        
        <div class="a_one" v-for="(item,index) in list" :key="index">
            <div><img :src="'/imgs/'+item.img" class="img"></div>
            <div class="a_wen">{{item.name}}</div>
            <div class="a_xuan">
                <router-link to="/msg" tag="div" class="a_zi" v-for="(v,i) in item.cont" :key="i">
                        <img :src="'/imgs/'+v.imgs" class="imgs">
                        <div class="a_nei">{{v.nee}}</div>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                list:[],
                cont:[]
            }
        },
        mounted() {//http://www.1912a.com
            this.$http.get("/data.json").then((res)=>{
                // console.log(res);
                this.list=res.data.list;
            })
        },
            
    }
</script>

<style lang="scss" scoped>
.shafa{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
.a_one{
    width: 90%;
    height: 100%;
    .img{
        width: 100%;
        height: 1.8rem;
    }
    .a_wen{
        width: 100%;
        height: 0.3rem;
        margin-top: 0.2rem;
    }
    .a_xuan{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 0.2rem;
        .a_zi{
            width: 1.5rem;
            height: 2.2rem;
            margin-left: 0.13rem;
            .imgs{
                width: 100%;
                height: 1.5rem;
            }
            .a_nei{
                text-align: center;
                margin-top: 0.2rem;
            }
        }
    }
}
</style>