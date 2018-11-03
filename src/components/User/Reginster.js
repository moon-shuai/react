import React, { Component } from 'react';
import '@/components/User/style/Reginster.scss';
import axios from 'axios'
import { Toast,ActivityIndicator,Modal} from 'antd-mobile';

class Com extends Component{           //注册组件
  constructor (props) {
      super(props)
      this.state = {
          animating: false, //判断加载效果
          cation: '',        //注册验证码初始值
          timer: null        //定时器
      }
  }
//注册函数
  get () {
    const alert = Modal.alert;    //登录跳转效果
    let text=this.refs.text.value
    let pass=this.refs.pass.value
    let cation=this.refs.cation.value
    if (cation !==this.state.cation) {
        Toast.info('验证码错误');
    } else {
      if (text!== '' && pass !== '') {
        const userpass = {'username': text, 'password': pass}
        axios.post('/logo/users/register', userpass)
          .then(data => {
            console.log(data)
            if (data.data === 1) {
              this.setState({animating: !this.state.animating});  //加载效果条件转换
              this.closeTimer = setTimeout(() => {                //加载效果
                this.setState({animating: !this.state.animating});
                alert('注册成功', '跳转登录', [                   //跳转按钮
                  { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
                  { text: '确定', onPress: () =>  this.props.history.push('/user') },
                ]);
              }, 1000);
            } else if (data.data === 2) {
              Toast.info('用户名已注册');
            } else if (data.data === 0) {
              Toast.info('网络不好，请稍后重试');
            }
        }).catch(err => console.log(err))
      }
    }
  }
//失去焦点
blu () {
  let tex=this.refs.text.value
  let pas=this.refs.pass.value
  if (!(/^1[34578]\d{9}$/.test(tex)) && tex !== '') {
      Toast.info('请输入正确手机号');
  } else if (pas.length < 6 && pas !== '') {
      Toast.info('密码至少6位数');
  }
}
//后退函数
    back () {
        this.props.history.goBack()
        clearInterval(this.setState.timer);               //后退要重置定时器和button的text值，不然报错
        this.refs.button.innerText='获取验证码'
    }
//获取验证码
    cation () {
        let time = 60
        let tex=this.refs.text.value
        if(this.refs.button.innerHTML!=='获取验证码') {             //倒计时未结束，点击无效
            Toast.info('请稍后重试');
        } else if (!(/^1[34578]\d{9}$/.test(tex)) && tex !== null) {      //判断手机号格式
            Toast.info('请输入正确手机号');
        } else {
            axios.get('/logo/users/sendCode?tel='+ tex).then(data => {   //获取验证码
                if(data.data === 0) {
                    Toast.info('网络不好，请稍后重试');
                } else if (data.data === 1) {
                    Toast.info('该手机号已注册');
                } else {
                    this.setState.timer=setInterval(()=>{                  //获取验证码后倒计时
                        this.refs.button.innerText='请' + --time + '秒后重试'
                        if(time===0) {                                     //倒计时结束，取消重置
                            clearInterval(this.setState.timer);
                            this.refs.button.innerText='获取验证码'
                        }
                    }, 1000)
                    this.setState({
                        cation: data.data.code
                    })
                }
            }).catch(err => console.log(err))
        }
    }
        render () {
        return (
            <div className='reg'>
                <div id='back'>         {/*后退按钮*/}
                    <span className='iconfont icon-47' onClick={this.back.bind(this)}></span>
                </div>
                <div className='reg-header'></div>     {/*图片*/}
                <input type='text' placeholder="手机号" ref='text' onBlur={this.blu.bind(this)}/>
                <input type='password' placeholder="密码" ref='pass' onBlur={this.blu.bind(this)}/>
                <div className='cation'>
                    <input type='text' placeholder="验证码" ref='cation'/>
                    <button ref='button' onClick={this.cation.bind(this)}>获取验证码</button>
                </div>
                <button onClick={this.get.bind(this)}>注册</button>
                <ActivityIndicator    //加载效果
                    toast
                    text="Loading..."
                    animating={this.state.animating}
                />
            </div>
        )
    }
}

export default Com