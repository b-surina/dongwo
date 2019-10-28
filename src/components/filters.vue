<template>
    <div class="filters">

        <h3>筛选</h3>
        <div class="cons">
            <div class="a_put">
                <input type="text" placeholder="搜做商品" class="place">
            </div>
            <div class="a_one">
                <div class="a_zuo">
                    <ul>
                        <router-link v-for="(item) in list" :key="item.id" :to="item.url" tag="li">
                            {{item.name}}
                        </router-link>
                    </ul>
                </div>
                
                <div class="a_you">
                   <router-view />

                </div>
            </div>

            <!-- <div class="a_an">
                
                <div class="a_zuo">
                    <ul v-for="(item,iex) in arr" :key='index' @click="lists(index)" >
                    <li>{{item}}</li>nd
                    </ul>
                </div>
                <div class="a_you">
                    <div v-for="(item,index) in list" :key="index" class="list" @click="lists" v-show="index == num">
                        

                        <div class="a_one" v-for="(item,index) in list" :key="index">
                            <img :src="item.img" class="img">
                            <div class="a_sha">{{item.sha}}</div>
                            
                            <div class="a_xuan" v-for="(item,index) in nun" :key="index">
                                <div class="a_kuang">
                                    <img :src="item.Logo" class="imgs">
                                    <div class="a_wen">{{item.title}}</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div> -->

        </div>
    </div>
</template>

<script>

    export default {
        components: {
            // PullTo
        },
        name:"Filters",
        
        data() {
            return {
                list:[
                    {"id":1,"name":"沙发","url":"/shafa"},
                    {"id":2,"name":"床","url":"/chuang"},
                    {"id":3,"name":"茶几","url":"/chaji"},
                    {"id":4,"name":"椅凳","url":"/yideng"},
                    {"id":5,"name":"灯具","url":"/dengju"},
                    {"id":6,"name":"柜架","url":"/guijia"},
                    {"id":7,"name":"家具","url":"/jiaju"},
                    {"id":8,"name":"家纺","url":"/jiafang"},
                    {"id":9,"name":"风格","url":"/fengge"},
                    {"id":10,"name":"空间","url":"/kongjian"}
                ]
            }
        },
        mounted() {
            
        },
        methods: {
            
        },
    }
</script>

<style lang="scss" scoped>
.filters{
        width:100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        h3{
            padding: 20px;
        }
    }
    .cons {
       flex: 1;
       overflow: auto;
    }
.a_put{
    width: 100%;
    height: 0.8rem;
    background: #f8f8f8;
    text-align: center;
    line-height: 0.8rem;
    .place{
        width: 90%;
        height: 0.5rem;
        border-radius: 0.1rem;
        border: none;
        padding-left: 0.1rem;
    }
}
.a_one{
    width: 100%;
    height: 100%;
    display: flex;
    .a_zuo{
        width: 25%;
        height: 100%;
        background: #f8f8f8;
        li{
            width: 100%;
            height: 0.8rem;
            text-align: center;
            line-height: 0.8rem;
        }
        li:hover{
            border-left: 3px solid red;
            background: white;
        }
    }
    .a_you{
        width: 75%;
        height: 100%;
        // background: pink;
        overflow: auto;
        flex: 1;
    }
}



</style>