import React, { Component } from 'react';
import './style/index.scss';
import { Link } from 'react-router-dom'

class Com extends Component{
  componentDidMount() {
    const typeid = this.props.match.params.typeId
    this.props.getData(typeid);  //主页的所有数据传递过来了
    // console.log( this.props.getData(typeid))
    
  }
  goBack () {
    window.history.go(-1)
  }
  render () {
    // console.log(this.props.bigtitle)
    let _arr = []
    this.props.items.map((item, index)=>{
      // console.log(item)
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
          {this.props.bigtitle}
        </header>
        <ul className='content'>
          {
            _arr
          }
        </ul>
      </div>
  )
  }
}

export default Com