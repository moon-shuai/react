import React, { Component } from 'react';
import '@/components/User/style/index.scss';
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import { Toast,ActivityIndicator,Modal} from 'antd-mobile';

class Com extends Component{        //登录组件
  constructor (props) {
        super(props)
        this.state = {
            pass: false,            //判断密码是否显示
            animating: false,      //判断加载效果
        }
  }
//切换密码是否显示函数
  passtoggle () {
      this.setState({
          pass: !this.state.pass
      })
      this.refs.pass.setAttribute("type","text");
      this.refs.show.className='iconfont icon-xianshi'
      if(this.state.pass) {
          this.refs.pass.setAttribute("type","password");
          this.refs.show.className='iconfont icon-icon-test1'
      }
  }
//点击登录函数
  set () {
      const alert = Modal.alert;    //登录跳转效果
      let text=this.refs.text.value
      let pass=this.refs.pass.value
      if (text!== '' && pass !== '') {
          const userpass = {'username': text, 'password': pass}
          axios.post('/logo/users/login', userpass)
              .then(data => {
                  if (data.data === 1) {
                      this.setState({animating: !this.state.animating});  //加载效果条件转换
                      this.closeTimer = setTimeout(() => {                //加载效果
                          this.setState({animating: !this.state.animating});
                          alert('登录成功', '跳转首页', [                   //跳转按钮
                              { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
                              { text: '确定', onPress: () => this.props.oh()},                     //接收父组件HomeData传递的参数，跳转路由
                          ]);
                      }, 1000);
                      localStorage.setItem("user", text);
                  } else if (data.data === 2) {
                      Toast.info('用户名不存在');
                  } else if (data.data === 0) {
                      Toast.info('网络不好，请稍后重试');
                  } else if (data.data === -1) {
                      Toast.info('密码错误');
                  }
              })
              .catch(err => console.log(err))
      }
  }
//手机号失去焦点函数
  blu () {
      let tex=this.refs.text.value
      if (!(/^1[34578]\d{9}$/.test(tex)) && tex !== '') {
          this.refs.text.focus();
          Toast.info('请输入正确手机号');
      }
  }
  render () {
      return (
          <div className='main'>
               <div className='main-header'></div>  {/*图片*/}
               <input type='text' placeholder="手机号" ref='text' onBlur={this.blu.bind(this)}/>
               <div className='main-pass'>
                   <input type='password'  placeholder="密码" ref='pass' />
                   <span className='iconfont icon-icon-test1' ref='show' onClick={this.passtoggle.bind(this)}></span>
               </div>
               <button onClick={this.set.bind(this)}>登录</button>
               <div className='register'><NavLink to = '/register'>免费注册</NavLink></div>
               <div className='main-footer'>
                   <span className='iconfont icon-QQ'></span>
                   <span className='iconfont icon-weixin'></span>
                   <span className='iconfont icon-weibo'></span>
               </div>
              <ActivityIndicator   //加载效果
                  toast
                  text="Loading..."
                  animating={this.state.animating}
              />
          </div>
    )
  }
}

export default Com