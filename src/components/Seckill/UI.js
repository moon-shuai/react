import React, { Component } from 'react';
import '@/components/Seckill/style/index.scss';
import { Tabs } from 'antd-mobile';
class Com extends Component{
  // constructor(props) {
  //   super(props)
  //   this.state= {
  //     tabs : [ { title: '1st Tab'} ]
  //   }
  // }
  componentDidMount() {
    this.props.getSeckillData();  //主页的所有数据传递过来了
  }

  goBack () {
    this.props.history.go(-1)
  }
  render () {
    // console.log(this.props.time_tabs)
    const tabs = []
    const list = []
    this.props.time_tabs.map((item) =>{
      var obj = {title: item.tab_txt}
      list.push(
        <div className='listPro' key='index'>
          {item.goodslist.map((ite,inde) =>{
          // console.log(ite)
            return(
              <div key={inde} className='goods-a'>
                <div className='good-img'>
                  <img src={ite.pic_url} alt=""/>
                </div>
                <div className='box_info'>
                  <h1 className='box_info_title'>{ite.title_long}</h1>
                  <p className="goods_price">
                    <i className="tip">限量价:</i>
                    <i className="m_icon">￥</i>
                    <i className="now_price">{ite.cprice}</i>
                    <i className="goods_old_price">￥{ite.oprice}</i>
                  </p>
                  <p className="js-bar">
                    <i className="cover-bar" ></i>
                    {/* {
                      ite.progress_info.map((it,inddddd)=>{
                        console.log(it.txt)
                      })
                    } */}
                    <i className="txt">已抢22%</i>
                  </p>
                  <span className="buy_btn">马上抢 </span>
                </div>
              </div>
            )
          })}
        </div>
      )
      return (tabs.push(obj),list)
    })
      return (
    <div className='seckill'>
      <div className='seckillBanner'>
        <div className='goBack'>
          <span className='icon-jiantou iconfont' onClick={this.goBack.bind(this)} ></span>
        </div>
        <img src={ this.props.banners} alt=""/>
      </div>
      <div className='seckillTItle'>
        <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
          {
          
            list

          }
        </Tabs>
      </div>

    </div>
  )
  }
}

export default Com;