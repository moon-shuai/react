const data = (state = {
  user: [],
}, action) => { 
  const { type, user } = action
  switch (type) {
    case 'CHANGE_BANNERLIST':
      return {...state, user} // 简写形式
    default:
      return state
  }
}

export default data