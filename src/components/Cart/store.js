const data = (state = {
  listImg: []
}, action) => { 
  const { type, listImg } = action
  switch (type) {
    case 'CHANGE_CARTLIST':
      return {...state, listImg} // 简写形式
    default:
      return state
  }
}

export default data