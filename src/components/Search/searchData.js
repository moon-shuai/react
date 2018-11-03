import React, { Component } from 'react';

class Com extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchresult: [],
      valuee: ''
    }
  }
  // componentDidMount() {
  //   this.getData()
  // }
  componentDidMount() {
    // fetch('http://m.shikuaigou.com/a_api/index/search?hs=0&wp=&sort=1&pid=mm_32854514_34040550_129164525&search=' + valuee ).then(res=>res.json()).then(data=>{
    //   this.setState ({
    //     searchresult: data.result.items
    //   })
    //   // console.log(this.state.searchresult)
    // }).catch(err => console.log(err))
  }
  render () {
    let _arr = []
    this.state.searchresult.map((item, index)=>{
      // console.log(item)
      _arr.push(
      <li key={index} className='searchresult-item'>
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
      </li>)
     return _arr
    })
    return (
      <div className='searchresult' style= { this.state.stylee}>
        <div className="sort-tool">
          <div className="s-box">精选</div> 
          <div className="s-box">销量</div> 
          <div className="s-box">最新</div> 
          <div className="s-box">价格</div>
        </div>
        <ul className='searchresult-list'>
          {
            _arr
          }
        </ul>
      </div>
    )
  }

}

export default Com;