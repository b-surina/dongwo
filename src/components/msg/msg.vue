<template>
    <div class="msg">
        <div class="a_tou">
            <router-link to="/shafa" tag="div">←</router-link>
            <div>单人沙发</div>
        </div>
        
        <div class="a_toua">
            <div>综合</div>
            <div @click="pai()">{{jiage}}</div>
            <div @click="zaipai()">上心</div>
        </div>

        <div class="a_body">
            <ul class="a_ul">
                <li v-for="(item,key) in list" :key="key">
                       <img :src="item.img" >
                       <div> <p>{{item.name}}</p> </div>
                       <div class="a_div2"> 
                           <p>￥{{item.price}} </p>
                           <p class="a_p1" @click.once="kuang(item)"> +  </p> 
                        </div>
                </li>
               
            </ul>

            <div class="a_kuang" v-if="flag">
                <ul>
                    <li v-for="item in arr" :key="item.arr">
                      <p>  {{item.name}} </p>
                        =====<p @clcik="item.done"> X</p>


                    </li>
                </ul>
               
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                list:[
                    {id:1,img:"/imgs/a_dan_03.gif",name:"懂窝|达拉斯 Dall 懒人沙发 Bean Bag",price:31199},
                    {id:2,img:"/imgs/a_dan_05.gif",name:"懂窝|达拉斯 Dall 懒人沙发2 Bean Bag",price:12399},
                    {id:3,img:"/imgs/a_dan_09.gif",name:"懂窝|达拉斯 Dall 懒人沙发3 Bean Bag",price:3599},
                    {id:4,img:"/imgs/a_dan_25.gif",name:"懂窝|达拉斯 Dall 懒人沙发4 Bean Bag",price:14699}
               ],
               jiage:"价格↑",
               flag:false,
               arr:[]
            }
        },
        methods:{
            //价格排序
            pai(){
                    if(this.jiage == "价格↑"){
                        this.jiage = "价格⬇";
                        this.list.sort((a,b)=>{
                            return b.price - a.price;
                        })
                    }else{
                        this.jiage = "价格↑";
                        this.list.sort((a,b)=>{
                                return a.price - b.price;
                        })
                    }
            },
            //排序
            zaipai(){
                this.list.sort((a,b)=>{
                    return b.id - a.id;
                })
            },
            //弹框
            kuang(item){
                this.flag = true;
                var  obj  = {id:item.id,img:item.img,name:item.name,number:1,done:false}
                this.arr.push(obj)

                
            }
        }
    }
</script>

<style lang="scss" scoped>
.msg{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
}
.a_tou{
    width:100%;
    height: 1rem;
    align-items: center;
    display: flex;
    position: fixed;
    top: 0;
    div{
        margin-left: 0.4rem;
        font-size: 0.4rem;
    }
    
}
.a_toua{
    width: 100%;
    height: 0.8rem;
    border-top: 1px solid gray;
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.a_body {
    // width: 100%;
    // height: 100%;
    overflow: auto;
    flex: 1;
    .a_ul {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        li {
            width: 47%;
            height: 7.36rem;
            // background: gray;
            margin-top: 0.26rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            img {
                width: 100%;
                height: 70%;
            }
            div {
                padding: 5%;
            }
            .a_div2 {
                display: flex;
                width: 100%;
                justify-content: space-between;
                .a_p1 {
                    width: 0.4rem;
                    height: 0.4rem;
                    border: 1px solid black;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 0.4rem;
                }
            }
        }
    }
}
.a_kuang {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    color: white;
    bottom: 0;
    ul {
        li {
            display: flex;
        }
    }

}
</style>