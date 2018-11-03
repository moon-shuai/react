import React, { Component } from 'react';
import { SearchBar, Toast } from 'antd-mobile';
// import SearchData from './searchData.1';
import { Link } from 'react-router-dom'
import './style/searchInput.scss';

class Com extends Component {
  constructor (props) {
    super(props)
    this.state = {
      result: [],
      searchresult: [],
      style: {display:"block"},
      stylee :{ display: 'none'},
      inpVal: ''
    }
  }
  componentDidMount () {
    Toast.loading('Loading...', 1);
    fetch('http://m.shikuaigou.com/a_api/index/getHotKey?hs=0').then(res=>res.json()).then(data=>{
      // console.log(data.result)
      this.setState({
        result: data.result
      })
    }).catch(err => console.log(err))
  }
  search(id){
    const inputVal = this.autoFocusInst.state.value;
    // console.log(inputVal)
    Toast.loading('Loading...', 1);
    fetch('http://m.shikuaigou.com/a_api/index/search?hs=0&wp=&sort='+ id +'&pid=mm_32854514_34040550_129164525&search=' + inputVal ).then(res=>res.json()).then(data=>{
      this.setState ({
        searchresult: data.result.items
      })
      // console.log(this.state.searchresult)
    }).catch(err => console.log(err))
    if( this.inpVal === '') {
      this.setState({
        style: {display: 'block'},
        stylee: {display: 'none'}
      })
    } else {
      this.setState({
        style: {display: 'none'},
        stylee: {display: 'block'}
      })
    }
  }
  getvalue (index) {
    this.state.result.map((item, inde) => {
      if ( index === inde) {
        this.autoFocusInst.state.value = item
        console.log(item)
        this.search()
      }
      return item
    })
  }

  changVaule () {
      if (this.value !== '') {
        this.search()
        this.setState({
          style: {display: 'none'},
          stylee: {display: 'block'}
        })
      } else {
        this.setState({
          style: {display: 'block'},
          stylee: {display: 'none'}
        })
      }
  }

  goBack () {
    window.history.go(-1)
  }

  sortChange (e) {
    console.log(this.refs.sort.children)
    var children = this.refs.sort.children
    let target = e.target || e.srcElement
    if ( target.className === 's-box') {
      // this.refs.sort.children.className = 'active s-box'
      for(var i = 0; i < children; i++ ) {
        
      }
    }
    switch (target.innerHTML) {
      case '精选':
    this.search( 1 )
        break;
    case '销量':
    this.search( 8 )
      
        break;
    case '最新':
    this.search( 7 )
      
        break;
    case '价格':
    this.search( 3 )
    
        break;
      default:
        break;
    }
  }
  render () {
    let arr = []
      this.state.result.map((item, index)=>{
        // console.log(item)
       arr.push(<li key={index} className='searchitem' onClick={ this.getvalue.bind(this,index)} ref='li'>{ item }</li>)
       return arr
      })
      let _arr = []
      this.state.searchresult.map((item, index)=>{
        // console.log(item)
        _arr.push(
          <Link to={ '/detail/' + item.activityId +'/' +item.itemId } key={index} className='searchresult-item'>
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
      <div className='searchinput'>
        <div className="searchHeared">
          <div className='goback' onClick={this.goBack.bind(this)} >
            <span className='icon-jiantou iconfont'></span>
          </div>
          <div className='searchbox'>
          <SearchBar placeholder="羊毛衫" ref={input  => this.autoFocusInst = input } onChange={ this.changVaule.bind(this)} />
          </div>
          <button className='btn' onClick={this.search.bind(this)}>搜索</button>
        </div>
        {/* 这是搜索框下面的内容 */}
        <div className='searchcontent' style={this.state.style}>
          <h1 className='searchtitle'><span className='icon-huo iconfont'></span>大家都在搜</h1>
          <div className='searchHot'>
            <ul className='searchlist'>
               {
                 arr
               }
            </ul>
          </div>
          {/* 开始搜索的内容 */}
          <div className="divide"></div>
          <div className='his'>
            <p className="subject">搜索历史 <span>清空</span></p>
            <div className="hislist">面膜
               <ul>
                 {
                  
                 }
               </ul>
            </div>
          </div>
        </div>
        {/* <SearchData/> */}
        <div className='searchresult' style= { this.state.stylee}>
          <div className="sort-tool" onClick={ this.sortChange.bind(this) }  ref ='sort'>
            <div className='s-box'>精选</div> 
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
      </div>
    )
  }
}

export default Com