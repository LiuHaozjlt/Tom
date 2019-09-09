import Mock from 'mockjs'
import city from './city'

Mock.setup({
  timeout: '350-600' // 设置延迟响应，模拟向后端请求数据
})
// 登录相关
Mock.mock(/\/city\/list\.*/, 'get', city.getCityData)
export default Mock
