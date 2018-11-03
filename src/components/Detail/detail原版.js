import React, { Component } from 'react';
import './style/index.scss';
import { ActionSheet,  Button } from 'antd-mobile';

class Com extends Component {
  
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


  render () {
    
    const item = this.props.item
    // const shop = item.shop
    // console.log(shop)
    return (
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
    )
  }
}

export default Com