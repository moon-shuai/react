import { Toast } from 'antd-mobile';
import axios from 'axios'
import './mock.js'

const action = {
  getBenner: (dispatch) => {
    Toast.loading('Loading...', 1);
    const url = 'https://www.wangxinglong.com/banner'
    axios.get(url).then(res=>{
      // console.log(res.data.bannerlist)
      dispatch({
          type: 'CHANGE_DETAILBANNER',
          banner: res.data.bannerlist
      })
    }).catch(err => console.log(err))
  },
  getTilte: (dispatch) => {

    const url = 'https://www.wangxinglong.com/dtaillist'
    axios.get(url).then(res=>{
      // console.log(res.data)
      dispatch({
          type: 'CHANGE_DETAILTILTE',
          prolistdata: res.data
      })
    }).catch(err => console.log(err))
  },
  getMerchantdata: (dispatch) => {
    const url = 'https://www.wangxinglong.com/merchantlist'
    axios.get(url).then(res=>{
      console.log(res.data)
      dispatch({
          type: 'CHANGE_MERCHANTDATA',
          merchantdata: res.data
      })
    }).catch(err => console.log(err))
  },
  getGuessLink: (dispatch) => {

    fetch('/beiBei//mroute.html?method=beibei.module.pintuan.recom.list.get&scene_id=app_item_detail_guess_you_like&event_id=106482675&iid=30707814&uid=0').then(res => res.json())
      .then(data => {
        dispatch({
          type: 'CHANGE_GUESSLINK',
          recom_items: data.recom_items
        })
    }).catch(err => console.log(err))
  },
  getMerchitem: (dispatch) => {
    fetch('/beiBei/mroute.html?method=beibei.module.pintuan.recom.list.get&scene_id=app_item_detail_buy_recom&iid=29985716&event_id=600046665&uid=0').then(res => res.json())
      .then(data => {
        // console.log(data.recom_items)
        dispatch({
          type: 'CHANGE_MERCHITEM',
          merchitem: data.recom_items
        })
    }).catch(err => console.log(err))
  },
  getCartlist: (obj)=> {
    console.log(obj)
    return (dispatch)=> {
      dispatch({
        type: 'CHANGE_CARTLIST',
        data: obj
      })
    }
  }
}

export default action
