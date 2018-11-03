const Mock = require('mockjs')
const Random = Mock.Random


// 轮播图
const bannerdata = () => {
  let arr = []

  for( var i = 0; i < 5; i++) {
    arr.push({
      id: 'banner' + ( i + 1 ),
      img: Random.dataImage('350x350', 'banner的图片'),
    })
  }
  return {
    bannerlist: arr
  }
}

Mock.mock('https://www.wangxinglong.com/banner', 'get', bannerdata)


// 介绍
const prolistdata = () => {
  return ({
    id: Mock.mock('@integer(0, 10)'),
    title: Mock.mock('@csentence(30)'),
    prottitle: Mock.mock('@csentence(6)'),
    price: Mock.mock('@integer(10, 300)'),
    oldprice: Mock.mock('@integer(50, 500)'),
    number : Mock.mock('@integer(300, 3000)')
    
  })
}
Mock.mock('https://www.wangxinglong.com/dtaillist', 'get', prolistdata)



const merchantdata = () => {
  return ({
    id: Mock.mock('@integer(0, 10)'),
    img: Random.dataImage('88x88', '商家图片'),
    title: Mock.mock('@csentence(6)'),
    itemnum1: Mock.mock('@integer(1, 100)'),
    itemnum2: Mock.mock('@integer(100, 1000)'),
    itemnum3: Mock.mock('@integer(100, 5000)'),
    rating: Mock.mock('@float(0, 4, 1, 1)')
  })
}
Mock.mock('https://www.wangxinglong.com/merchantlist', 'get', merchantdata)
