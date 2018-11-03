import React from 'react'
import { NavLink } from 'react-router-dom';



const Footer = () => (
  <footer className='footer'>
    <ul>
      <NavLink to = '/home'>
        <span className="iconfont icon-index"></span>
        <p>首页</p>
      </NavLink>
      <NavLink to = '/kind' >
        <span className="iconfont icon-leimupinleifenleileibie"></span>
        <p>分类</p>
      </NavLink>
      <NavLink to = '/cart' >
        <span className="iconfont icon-buy-car"></span>
        <p>购物车</p>
      </NavLink>
      <NavLink to = '/logo' >
        <span className="iconfont icon-wode"></span>
        <p>我的</p>
      </NavLink>
    </ul>
  </footer>
)

export default Footer