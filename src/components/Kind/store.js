const data = (state = {
  listItem: [],
  listImg: []
}, action) => { 
  const { type, listItem, listImg } = action
  switch (type) {
    case 'CHANGE_KINDLIST':
      return {...state, listItem, listImg} // 简写形式
    default:
      return state
  }
}

export default data