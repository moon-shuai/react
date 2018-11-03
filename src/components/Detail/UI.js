import React, { Component } from 'react';
import { Carousel, ActionSheet, Button } from 'antd-mobile';
import { Link } from 'react-router-dom'
import './style/index.scss';
class Com extends Component{
  constructor(props) {
    super(props)
    this.state = {
       num: ''
    }
  }
  
  componentDidMount() {
    if(localStorage.cartid!==undefined) {                        //渲染购物车商品数量
      this.setState({num:(JSON.parse(localStorage.cartid)).length})
    }

    const activityId = this.props.match.params.activityId
    const itemId = this.props.match.params.itemId
    this.props.getDeatilData( activityId, itemId);  //主页的所有数据传递过来了
    // console.log(this.props)

  }


  // 插件 组件的调用
  showActionSheet = () => {
    const BUTTONS = ['快递：圆通快递','服务：七天无理由退货', 'Delete','Cancel'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      destructiveButtonIndex: BUTTONS.length - 2,
      message: '商家保障服务',
      maskClosable: true,
      'data-seed': 'logId'
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
    });
  }


// 返回的按钮
  goBack () {
    window.history.go(-1)
  }


  cart () {                          //购物车
    let car=[]
    let card=[]
    let data=this.props.item
    data.num=1
    data.show=true
    if(localStorage.cart!==undefined){
        card=JSON.parse(localStorage.cartid)
        car=JSON.parse(localStorage.cart)
        if(card.indexOf(data.shop.sellerId)===-1){
            card.push(data.shop.sellerId)
            car.push(data)
            this.setState({num:card.length})
            localStorage.cartid=JSON.stringify(card)
            localStorage.cart=JSON.stringify(car)
        } else {
            let num=car[card.indexOf(data.shop.sellerId)].num+1
            car[card.indexOf(data.shop.sellerId)].num=num
            localStorage.cart=JSON.stringify(car)
        }
    } else {
        this.setState({num:1})
        localStorage.cartid=JSON.stringify([data.shop.sellerId])
        localStorage.setItem("cart", JSON.stringify([data]));
    }
}


  render () {
    
    let str = []
    if ( this.props.detailBanners.length > 0 ) {
      str.push( <Carousel autoplay={true} infinite key='aaqaaa' >
        {
          this.props.detailBanners.map((item,index) => (
          <a key={index} href="#3" style={{ display: 'inline-block', width: '100%', height: '340px'}} >
            <img src={ item } alt="" style={{ width: '100%', height: '340px'}} onLoad={() => {
                window.dispatchEvent(new Event('resize')); }} />
          </a>
        ))
        }
      </Carousel>)
    } else {
      str.push(<img src={ this.props.image } alt="" key= 'img' className='oneImg'/>)
    }
  
    let _str = []
      if ( this.props.detailImages.length > 0 ) {
        this.props.detailImages.map(( item,index ) =>{
          _str.push( <img src={ item } alt="" key= {index} className='twoImg'/>)
          return _str
        })
      } else {
        _str.push('')
      }



      const item = this.props.item
      return (
    <div className="main">
      <div className='goBack'>
          <span className='icon-jiantou iconfont' onClick={this.goBack.bind(this)} ></span>
      </div>
      <div className='banner'>
        {
          str
        }
      </div>


      <div className='detail'>
        <div className='detail-info'>
          <h3 className='detail-title'>
            <i className='iconfont icon-tianmao2'></i>
            <span>{ item.title }</span>
          </h3>
          <div className='price'>
            <span className="price-title">券后价</span>
            <span className="yPrice">{item.price}<i>.00</i></span>
            <span  className="oPrice">{item.oPrice}</span>
            <span  className="monthSales">{item.monthSales}人已购</span>
          </div>
        </div>
        <div className='heheh'></div>
        <div className='qianggou'>
          <span className='iconfont icon-qg'></span>
          <span className='timemmm'>限时限量 疯狂抢购</span>
        </div>
        <div className='heheh'></div>
        <div className='eeerer'>
          <Button onClick={this.showActionSheet}>默认选择</Button>
        </div>
        <div className='heheh'></div>
        <div className='coupon'>
          <div className='coupon-left'>
            <div className="coupon-amount">￥<b>{item.amount}</b></div>
            <h2 className='coupon-time'>
              <p><i>优惠券</i>使用期限</p>
              <b>{item.startDate}-{item.endDate}</b>
            </h2>
          </div>
          <p className="go-coupon">立即领券</p>
        </div>
        <div className='heheh'></div>
        <div className="recommend">
          <label>推荐语</label> 
          <p>
            { item.recommend }
          </p>
        </div>
        <div className='heheh'></div>
        <div className="grade">
          <img src="//oss1.lanlanlife.com/d343c64fdedfd7d52407c3eeaef78f07_36x213.png" alt=''/>
          {/* <span className="name">{ item.shop.shopName}</span>  */}
          <div className="dsr">
            <span>宝贝描述<b>4.8</b><i className="up iconfont icon-xiangshang"></i></span>
            <span>卖家服务<b>4.5</b><i className="up iconfont icon-xiangshang"></i></span> 
            <span>物流服务<b>4.6</b><i className="up iconfont icon-xiangshang"></i></span>
          </div>
        </div>
        <div className='heheh'></div>
      </div>
      
      {/* 底部的图片介绍  */}
      <div className='moreImg'>
        {
          _str
        }
      </div>


        {/* 加入购物车 */}
        <div className='detailfooter'>
          <Link to={ '/cart'} className="shop_car_cout">
            <span className="icon-buy-car iconfont" >{this.state.num}</span>
          </Link>
          <div className="inStock">
            <div className="addCar" onClick={this.cart.bind(this)}>加入购物车</div>
            <div className="buyBtn fl" >立即购买</div>
          </div>
          
        </div>

    </div>
  )
  }
}

export default Com