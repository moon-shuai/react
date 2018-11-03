import React, { Component } from 'react';
import '@/components/Kind/style/index.scss';
import { Tabs } from 'antd-mobile';
import { Link } from 'react-router-dom'
class Com extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [],
      index: 1,
      tabs: [
        { title: '女装' },
        { title: '百货' },
        { title: '美食' },
        { title: '母婴' },
        { title: '美妆' },
        { title: '鞋包' },
        { title: '内衣' },
        { title: '男装' },
        { title: '手机周边' },
        { title: '其他' },
      ]
    }
  }
  componentDidMount() {
    this.props.getKindData();
 //主页的所有数据传递过来了
  }

  getNum (title,value) {
    this.setState({
      index: value+1,
    })
    // console.log(value)
  }
  
  render() {
    // 判断数组是否为空
    if (this.props.list.length<=0) return (<div>加载中。。。</div>)
    // 获取list数据
    let listnum = this.props.list[this.state.index].list
    console.log(listnum)
    if (this.props.items.length<=0) return (<div>加载中。。。</div>)
    // 获取items数据
    let listImg = this.props.items
    // console.log(listImg)
    return(
      <div className="content">
        <div style={{ height: 700 }}>
          <Tabs tabs={this.state.tabs}
            initalPage={'t2'}
            tabBarPosition="left"
            tabDirection="vertical"
            swipeable="true"
            animated="true"
            useOnPan="true"
            tabBarActiveTextColor="red"
            onTabClick={this.getNum.bind(this)} // antd 点击事件的回调
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#f2f2f2' }}>
              <div className="right">
                <div className="imgPic"><img alt="" src="//gw.alicdn.com/tfs/TB1KNMXjpzqK1RjSZSgXXcpAVXa-540-170.jpg_570x10000Q75.jpg_.webp" /></div>
                <div className="clothesList">
                  <h4>个性一族</h4>
                  <ul>
                    {
                    listnum.map((item, index) => (
                      
                    <Link key={ index } to={ '/kindlist/' + item.cid}>
                      <img alt="" src={item.image} />
                      <p>{ item.name }</p>
                    </Link>
                    ))
                    }
                  </ul> 
                </div>
                <h4 className="h4-b">热门类目</h4>
                <ul className="ul-remen">
                  {
                  listImg.map((item, index) => (
                  <li key={ index } >
                    <img alt="" src={ item.coverImage } />
                    <p>{ item.title }</p>
                  </li>
                  ))
                  }
                </ul> 
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default Com