import React, { Component } from 'react';
import CartData from '@/components/Cart/CartData'
import '@/components/Cart/style/index.scss';

class Com extends Component {
    constructor(props) {
        super(props);
        this.state = {
          num: 0
        };
    }

    


    componentDidMount() {
        if(localStorage.user!==undefined) {                 //获取用户名
            this.setState({user: localStorage.user});
        } else {
            this.props.history.push('/user')
        }
        if(localStorage.cartid!==undefined) {                        //渲染购物车商品数量
            this.setState({num:(JSON.parse(localStorage.cartid)).length})
        }
    }

  render () {
    return (
      <div className='box'>
        <header className='header' id='head'>购物车({this.state.num})</header>
          <CartData />
      </div>
    )
  }
}

export default Com