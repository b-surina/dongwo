//使用Mock 
import Mock from 'mockjs'

let listData=Mock.mock({
    "data":[
        {
            "id|+1":1,
            "img|1":["/imgs/1.png"],
            "sha|1":["沙发"],
            "nun|4":[
                {
                    "Logo|1":["/imgs/a_an_06.gif","/imgs/a_an_08.gif","/imgs/a_an_10.gif","/imgs/a_an_14.gif"],
                    "title|1":["单人沙发","双人沙发","三人沙发","沙发墩"]
                }
            ]
        }
    ]
    
})

export default listData;
