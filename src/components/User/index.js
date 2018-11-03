import React, { Component } from 'react';
import HomeData from '@/components/User/HomeData'

class Com extends Component {
    constructor (props) {
        super(props)
        this.state = {
        }
    }
  get () {                                //登录成功跳转个人中心，     如果当前这个组件只是一个子组件（跟路由没有关系Prolist组件）,此时要切换路由需要父组件去执行 ---- 子组件給父组件传值
      this.props.history.push('/logo')
  }
  render () {
        console.log()
    return (
      <div className='box'>
        <div className="content">
          <HomeData oh={this.get.bind(this)}/>       
          {/* 传递给子组件跳转路由 */}
        </div>
      </div>
    )
  }
}

export default Com