import React, { Component } from 'react';
import './style/index.scss';
import { Link } from 'react-router-dom'

class Com extends Component{
  componentDidMount() {
    const cid = this.props.match.params.cid
    this.props.getKData(cid);  //主页的所有数据传递过来了
    console.log( this.props.match.params.cid)
    
  }
  goBack () {
    window.history.go(-1)
  }
  render () {
    let _arr = []
    this.props.items.map((item, index)=>{
      _arr.push(
        <Link to={ '/detail/' + item.activityId +'/' +item.itemId }  key={index} className='searchresult-item'>
        <img src={item.coverImage} alt="" className='cover-image'/>
        <h1 className="title">
          <img src={item.tabs[0]}className="tabsImg" alt="" />
          { item.title }
        </h1>
        <div className="count">
          <span >{item.sourceName }&nbsp;&nbsp;{ item.originPrice}元</span> 
          <span className="alreadyBuy">{item.monthSales }人已购</span>
        </div>
        <div  className="coupon">
          <div  className="price">
          <b >{item.price}</b>
          </div> 
          <div  className="count-label">
            <strong>{item.couponRate}</strong>
            &nbsp;折
          </div>
        </div>
      </Link>)
     return _arr
    })
    return (
      <div className='morekind'>
        <header className='header'>
          <span className='icon-jiantou iconfont' onClick={this.goBack.bind(this)} ></span>
            列表
        </header>
        <ul className='content'>
          {
            _arr
          }
        </ul>
        列表
      </div>
  )
  }
}

export default Com