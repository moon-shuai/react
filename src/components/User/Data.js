import React, { Component } from 'react';
import '@/components/User/style/data.scss';

class Com extends Component{        //个人资料设置组件
  constructor (props) {
    super(props)
    this.state = {
        user: ''          //用户名初始化
    }
  }
  componentDidMount() {        //获取用户名
    this.setState({user: localStorage.user});
  }
  clead () {                      //退出清空localStorage，回到登录界面
    localStorage.clear('user');
    this.props.history.push('/user')
  }
  back () {                        //后退函数
    this.props.history.goBack()
  }
  render () {
    return (
      <div className='data'>           {/*布局较复杂，class名字简单，请看仔细*/}
        <div className='data-head'>
          <p className='iconfont icon-houtui' onClick={this.back.bind(this)}>   设置</p>
          <p className='iconfont icon-gengduo1' ></p>
          </div>
        <div className='data-two'>
          <div className='data-two-one'>
            <img src='http://gw.alicdn.com/sns_logo/i3/2479140138/TB2cwV8kXXXXXXdXXXXXXXXXXXX_!!0-mytaobao.jpg_.webp' alt=''/>
            <div className='data-two-two'>
                <h5>{this.state.user}</h5>
                <p>会员等级:白金会员</p>
                <div className='iconfont icon-QRcode'>   ></div>
            </div>
          </div>
          <div className='data-ser'>
            <p>我的收货地址</p>
            <span>></span>
          </div>
          <div className='data-four'>
            <p>账户与安全</p>
            <p>></p>
          </div>
          <div className='data-ser' id='bord'>
            <p>地区设置</p>
            <span>></span>
          </div>
          <div className='data-ser' id='bord'>
            <p>音效与通知</p>
            <span>></span>
          </div>
          <div className='data-ser' id='bord'>
            <p>隐私</p>
            <span>></span>
          </div>
          <div className='data-ser' id='bord'>
            <p>通用</p>
            <span>></span>
          </div>
          <div id='data-foot'  >
            <p>问题反馈</p>
            <p>></p>
          </div>
          <div className='data-foot'  >
            <p>关于十万购</p>
            <p>></p>
          </div>
          <div className='data-footer'  onClick={this.clead.bind(this)}>
            退出当前账户
          </div>
        </div>
      </div>
    )
  }
}

export default Com