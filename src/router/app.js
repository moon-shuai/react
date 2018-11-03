
// import React from 'react';
// const Home = React.lazy(() => import('@/components/Home'));
// const Kind = React.lazy(() => import('@/components/Kind'));
// const Cart = React.lazy(() => import('@/components/Cart'));
// const User = React.lazy(() => import('@/components/User'));
// const Search = React.lazy(() => import('@/components/Search'));
// const Morekind = React.lazy(() => import('@/components/Morekind'));


import Home from '@/components/Home';
import Kind from '@/components/Kind';
import Cart from '@/components/Cart';
import User from '@/components/User';
import Search from '@/components/Search';
import Morekind from '@/components/Morekind';
import Reg  from '@/components/User/Reginster';         //注册组件
import Logo  from '@/components/User/User';             //个人中心组件
import Data  from '@/components/User/Data';             //个人资料设置组件
import KindList from '@/components/KindList';
const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/kind',
    component: Kind
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/morekind/:typeId',
    component: Morekind
  },
  {
    path: '/register',
    component: Reg
   },
   {
     path: '/logo',
     component: Logo
   },
   {
     path: '/data',
     component: Data
   },
   {
      path: '/kindlist/:cid',
      component: KindList
    }
];

export default routes;