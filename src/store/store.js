import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import homedata from '@/components/Home/store'
import moredata from '@/components/Morekind/store'
import seckilldata from '@/components/Seckill/store'
import cartdata from '@/components/Cart/store'
import kinddata from '@/components/Kind/store'
import detaildata from '@/components/Detail/store'
import kindListdata from '@/components/KindList/store'
import Detaildata from '@/components/DetailBei/store'
const reducer = combineReducers ({
  homedata,
  moredata,
  seckilldata,
  cartdata,
  kinddata,
  detaildata,
  kindListdata,
  Detaildata
});

// console.log(homedata)
const store = createStore(reducer, applyMiddleware(thunk));
export default store;