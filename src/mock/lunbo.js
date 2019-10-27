import Mock from "mockjs"

let jsondata = Mock.mock({
    "success|2":true,
    "lunbo|3":[
        {
            "id|+1":1,
            "imgurl|1":["./banner/banner1.gif","./banner/banner2.gif","./banner/banner3.gif"]
        }
    ],
    "nine|8":[
        
    ]
});

export default jsondata