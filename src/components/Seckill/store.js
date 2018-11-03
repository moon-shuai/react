const data = (state = {
  banners: [],
  time_tabs: []
}, action) => { 
  const { type, banners, time_tabs} = action
  switch (type) {
    case 'CHANGE_SECKILLLIST':
      return {...state, banners, time_tabs} // 简写形式
    default:
      return state
  }
}

export default data