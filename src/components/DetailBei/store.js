const data = (state = {
  banner: [],
  recom_items:[],
  prolistdata: [],
  merchantdata: [],
  merchitem: [],
  cartList: []
}, action) => { 
  const { type, banner, recom_items, prolistdata, merchantdata,merchitem, cartList} = action
  switch (type) {
    case 'CHANGE_DETAILBANNER':
      return {...state, banner} // 简写形式
    case 'CHANGE_GUESSLINK':
      return {...state, recom_items}
    case 'CHANGE_DETAILTILTE':
      return {...state, prolistdata}
    case 'CHANGE_MERCHANTDATA':
      return {...state, merchantdata}
    case 'CHANGE_MERCHITEM':
      return {...state, merchitem}
    case 'CHANGE_CARTLIST':
      return {...state, cartList}
    default:
      return state
  }
}

export default data