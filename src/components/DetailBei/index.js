import { connect } from 'react-redux';
import store from '@/store/store' // 掉用一下这个状态管理，就是大的状态管理系统 进行视图的渲染和编写
import UI from './UI';
import action from './action'

const Com = connect (
  (state) => {
    console.log(state.Detaildata)
    return {
      banner: state.Detaildata.banner,
      recom_items: state.Detaildata.recom_items,
      prolistdata: state.Detaildata.prolistdata,
      merchantdata: state.Detaildata.merchantdata,
      merchitem: state.Detaildata.merchitem,
      cartList: state.Detaildata.cartList
    }
  },
  (dispatch) => {
    return {
      // 这是自定义的对象属性名字
      getBnnerData: () => {
        store.dispatch(action.getBenner)
      },
      getGuessData: () => {
        store.dispatch(action.getGuessLink)
      },
      getTitleData: () => {
        store.dispatch(action.getTilte)
      },
      getMechData: () => {
        store.dispatch(action.getMerchantdata)
      },
      getMechItemData: () => {
        store.dispatch(action.getMerchitem)
      },
      getCartData:(obj) => {
        store.dispatch(action.getCartlist(obj))
      }
    }
  }
)(UI)


export default Com
