import Mock from "mockjs"

import lunbojson from "./lunbo"

Mock.mock("http://www.1902c.com/lunbo","get",lunbojson);

export default Mock;