import Mock from 'mockjs'
import listData from './mock'

Mock.mock('http://www.1912a.com','get',listData)
export default Mock;
