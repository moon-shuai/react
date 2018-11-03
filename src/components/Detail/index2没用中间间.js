import React, { Component } from 'react';
import Detail from './detail';
import { Carousel } from 'antd-mobile';
class Com extends Component{
  constructor(props) {
    super(props)
    this.state = {
      banners: [],
      list: [],
      detailImages: [],
      image:'',
      item: {}
    }
  }
  goBack () {
    window.history.go(-1)
  }
  componentDidMount () {
    // console.log(this.props.match.params)
    const activityId = this.props.match.params.activityId
    const itemId = this.props.match.params.itemId
    fetch(`http://m.shikuaigou.com/a_api/index/detailData?hs=0&itemId=${ itemId }&activityId=${ activityId }&pid=mm_32854514_34040550_129164525&appId=0&userId=0`).then(res => res.json()).then(data=>{
      console.log(data.result)
      this.setState({
        banners: data.result.item.auctionImages,
        detailImages: data.result.item.detailImages,
        image: data.result.item.image,
        item: data.result.item
      })
    }).catch(err=> console.log(err))
  }
 render () {
  // console.log(this.state.banners.length)
  let str = []
  if ( this.state.banners.length > 0 ) {
    str.push( <Carousel autoplay={true} infinite key='aaqaaa' >
      {
        this.state.banners.map((item,index) => (
        <a key={index} href="#3" style={{ display: 'inline-block', width: '100%', height: '340px'}} >
          <img src={ item } alt="" style={{ width: '100%', height: '340px'}} onLoad={() => {
              window.dispatchEvent(new Event('resize')); }} />
        </a>
      ))
      }
    </Carousel>)
  } else {
    str.push(<img src={ this.state.image } alt="" key= 'img' className='oneImg'/>)
  }

  let _str = []
    if ( this.state.detailImages.length > 0 ) {
      this.state.detailImages.map(( item,index ) =>{
        _str.push( <img src={ item } alt="" key= {index} className='twoImg'/>)
        return _str
      })
    } else {
      _str.push('')
    }

    return (
      <div className='main'>
        <div className='goBack'>
          <span className='icon-jiantou iconfont' onClick={this.goBack.bind(this)} ></span>
        </div>
        <div className='banner'>
          {
            str
          }
        </div>
        <Detail item= { this.state.item }/>
        <div className='moreImg'>
          {
            _str
          }
        </div>
        <div className='detailfooter'>
          <div className="shop_car_cout">
            <span className="icon-buy-car iconfont" ></span>
          </div>
          <div className="inStock">
            <div className="addCar">加入购物车</div> 
            <div className="buyBtn fl" >立即购买</div>
          </div>

        </div>
      </div>
    )
  }
}

export default Com