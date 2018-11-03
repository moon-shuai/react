import React, { Component } from 'react';
import '@/components/User/style/user.scss';
import { NavLink } from 'react-router-dom';

class Com extends Component{        //个人中心组件
    constructor (props) {
        super(props)
        this.state = {
            user: ''          //用户名初始化
        }
    }
    componentDidMount() {           //获取用户名
        if(localStorage.user!==undefined) {
            this.setState({user: localStorage.user});
        } else {
            this.props.history.push('/user')
        }
    }
    render () {
        return (
            <div className='user'>           {/*布局较复杂，class名字简单，请看仔细*/}
               <div className='header'>
                   <div className='head-head'>
                       <div>
                           <img src='http://gw.alicdn.com/sns_logo/i3/2479140138/TB2cwV8kXXXXXXdXXXXXXXXXXXX_!!0-mytaobao.jpg_.webp' alt=''/>
                           { this.state.user }
                           <img src='https://gw.alicdn.com/tfs/TB1Us_ja7voK1RjSZFNXXcxMVXa-436-63.png_.webp' id='head-img' alt=''/>
                       </div>
                   </div>
                   <div className='head-right'>
                       <span className='iconfont icon-riqi'></span>
                       <NavLink to = '/data' className='iconfont icon-shezhi'></NavLink>
                   </div>
                   <div className='head-foot'>
                        <div>88<p>收藏夹</p></div>
                        <div>66<p>关注店铺</p></div>
                        <div>521<p>足迹</p></div>
                   </div>
               </div>
                <div className='main'>
                    <div className='main-head'>
                        <div>
                            <span>白金会员</span><span>花小积分 兑大权益</span>
                            <p>活跃值...</p>
                        </div>
                    </div>
                    <div  className='main-main'>
                          <div className='main-one'>
                             <p>我的订单</p>
                             <p>查看全部订单</p>
                         </div>
                        <div className='li'>
                            <div>
                                <img src='https://gw.alicdn.com/tfs/TB16GolmKuSBuNjy1XcXXcYjFXa-87-87.png_.webp' alt=''/>
                                <br/>待付款
                            </div>
                            <div>
                                <img src='https://gw.alicdn.com/tfs/TB1cwzgmMmTBuNjy1XbXXaMrVXa-87-87.png_.webp' alt=''/>
                                <br/>待发货
                            </div>
                            <div>
                                <img src='https://gw.alicdn.com/tfs/TB1b3zgmMmTBuNjy1XbXXaMrVXa-87-87.png_.webp' alt=''/>
                                <br/>待收货
                            </div>
                            <div>
                                <img src='https://gw.alicdn.com/tfs/TB1fOKqm_tYBeNjy1XdXXXXyVXa-87-87.png_.webp' alt=''/>
                                <br/>评价
                            </div>
                            <div >
                                <img src='https://gw.alicdn.com/tfs/TB1fMzgmMmTBuNjy1XbXXaMrVXa-87-87.png_.webp' alt=''/>
                                <br/>退款/售后
                            </div>
                        </div>
                        <div className='main-foot'>
                            <div className='main-foot-one'>
                                <p>最新物流</p>
                                <p>10-29</p>
                            </div>
                            <div className='main-foot-two'>
                                <img src='http://gw.alicdn.com/bao/uploaded/i3/2205280628/TB22gfSczfguuRjSspkXXXchpXa_!!2205280628-0-item_pic.jpg_.webp' alt=''/>
                                <div>
                                    <img src="https://gw.alicdn.com/tfs/TB1PpeRdNGYBuNjy0FnXXX5lpXa-54-54.png_.webp" className='img' alt=''/>已签收
                                    <br/>
                                    快件已被 千锋(物业)代签收,如有问题请...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='foot'>
                    <div className='main-one'>
                        <p>必备工具</p>
                        <p>查看全部工具</p>
                    </div>
                    <div className='li'>
                        <div>
                            <img src='https://gw.alicdn.com/tfs/TB1AmfQjXzqK1RjSZFoXXbfcXXa-96-96.png_.webp' alt=''/>
                            <br/>集能量赢红包
                        </div>
                        <div>
                            <img src='https://gw.alicdn.com/tfs/TB14uMzX46I8KJjy0FgXXXXzVXa-96-96.png?getAvatar=avatar_.webp' alt=''/>
                            <br/>领券中心
                        </div>
                        <div>
                            <img src='https://gw.alicdn.com/tfs/TB1H2rqtkOWBuNjSsppXXXPgpXa-96-96.png?getAvatar=avatar_.webp' alt=''/>
                            <br/>闲置换钱
                        </div>
                        <div>
                            <img src='https://gw.alicdn.com/tfs/TB1ZIuoQXXXXXa6XXXXXXXXXXXX-96-96.png?getAvatar=avatar_.webp' alt=''/>
                            <br/>客服小蜜
                        </div>
                        <div >
                            <img src='https://gw.alicdn.com/tps/TB1rhCFPXXXXXa1XVXXXXXXXXXX-96-96.png_.webp' alt=''/>
                            <br/>花呗
                        </div>
                        <div >
                            <img src='https://gw.alicdn.com/tfs/TB1q0T8mpOWBuNjy0FiXXXFxVXa-96-96.png_.webp' alt=''/>
                            <br/>主题换肤
                        </div>
                        <div >
                            <img src='https://gw.alicdn.com/tps/TB1RN1QPXXXXXaqXFXXXXXXXXXX-96-96.png_.webp' alt=''/>
                            <br/>我的评价
                        </div>
                        <div >
                            <img src='https://gw.alicdn.com/tfs/TB1_9U2bMMPMeJjy1XbXXcwxVXa-96-96.png_.webp' alt=''/>
                            <br/>更多
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Com