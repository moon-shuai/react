const data = (state = {
  banner: [],
  topics: [],
  items: []
}, action) => { 
  const { type, banner, topics, items} = action
  switch (type) {
    case 'CHANGE_BANNERLIST':
      return {...state, banner, topics, items} // 简写形式
    default:
      return state
  }
}

export default data