import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';
import '@/components/Home/style/index.scss';
import { Link } from 'react-router-dom'
class Com extends Component{
  componentDidMount() {
    this.props.getData();  //主页的所有数据传递过来了
  }

  render () {
      return (
    <div className="content">
       <Carousel
          autoplay={true}
        >
        {/* 这里是banner 是容器组件传过来的值 */}
          {this.props.banner.map((item, index) => (
            <div
              key={ index }
              style={{ display: 'inline-block', width: '100%', height: '180px' }}
            >
              <img
                src={ item.image }
                alt=""
                style={{ width: '100%', verticalAlign: 'top', height: '180px' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                }}
              />
            </div>
          ))}
        </Carousel>
        <div className='im'>
          {
            this.props.topics.map((item,index) => {
              // console.log(item)
              return (
              <Link to={ '/morekind/' + item.id } key={index}>
                <img src={item.image} alt="" /> 
              </Link> 
              )
            })
          }
        </div>
        <div className='sc-iRbamj'>
          <ul className="sc-jlyJG">
            <li className="sc-gipzik"><a href="http://localhost:3000/#/seckill"><img src="https://goods5.juancdn.com/jas/180222/8/5/5a8e9c188150a133c81553be_270x241.png?iopcmd=convert&Q=85&dst=png" alt=""/></a></li>
            <li className="sc-gipzik"><a href="http://localhost:3000/#/seckill"><img src="https://goods8.juancdn.com/jas/180530/f/e/5b0e68b4b6f8ea11b8424b37_270x241.png?imageMogr2/quality/85!/format/png" alt=""/></a></li>
            <li className="sc-gipzik"><a href="http://localhost:3000/#/morekind/2"><img src="https://goods2.juancdn.com/jas/180201/3/d/5a727415a9fcf8280d24465a_270x241.png?imageMogr2/quality/85!/format/png" alt=""/></a></li>
            <li className="sc-gipzik"><a href="http://localhost:3000/#/morekind/2"><img src="https://goods4.juancdn.com/jas/180917/6/5/5b9f175033b08945a870ad21_270x241.png?imageMogr2/quality/85!/format/png" alt=""/></a></li>
          </ul>
        </div>
        <div className='smallimg'>
          <img src="https://ecimg.happigo.com/data/upload/app/adsession/2018/129_11/05932854929624407.gif" alt=''/>
        </div>
        <ul className='allitem'>
          {this.props.item.map((val,index) => (
            <Link to={ '/detail/' + val.activityId +'/' +val.itemId } key={index} className='liimg' >
              <img src={val.coverImage} alt="" />
              <div className='liright'>
                <p><img src={val.tabs[0]} alt="" />{val.title}</p>
                <span>{val.priorityRecommend}</span>
                <div className='liright-ser'>
                    {val.sourceName}&nbsp;&nbsp;{val.originPrice}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {val.monthSales}已购
                </div>
                <div className='liright-four'>{val.price}</div>
              </div>
            </Link>
          ))}
        </ul>
        <a href='#Top' className='goooback' id='gback'>
          <img src='http://oss.lanlanlife.com/08dd6d07a5c9332f7dc7ab84a8ddca05_80x80.png' alt=''/>
        </a>
    </div>
  )
  }
}

export default Com