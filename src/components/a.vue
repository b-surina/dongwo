<template>
    <div>
        <ul>
            <li>
                <div v-for="(v,i) in list" :key="i" >
                    <img :src="`/imgs/${v.img}`" alt="">
                    <div v-for="(k,j) in v.cont" :key="j">
                        <img :src="`/imgs/${k.img}`" alt="">
                    </div>
                </div>
            </li>
        </ul>
    </div>


<!-- <div class="a_tu">
                        <img src="/imgs/1.png" class="img">
                        <div class="a_sha">沙发</div>
                        <div class="a_xuan">
                            <div class="a_nen">
                                <img src="/imgs/a_an_06.gif" class="imgs">
                                <div class="a_onn">单人椅子</div>
                            </div>
                        </div>
                     </div> -->


</template>

<script>
import axios from 'axios'

    export default {
        name:"aa",
        data(){
            return{
                list:[]
            }
        },
        mounted(){
            axios.get("/data.json").then((res)=>{
                // console.log(res.data);
                this.list = res.data.list;
                console.log(this.list)
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>