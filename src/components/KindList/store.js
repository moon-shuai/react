const data = (state = {
  items: []
}, action) => {
  const { type,items} = action
  switch (type) {
    case 'CHANGE_KINDLISTLIST':
      return {...state, items} // 简写形式
    // case 'CHANGE_ID':
    //   return {...state, id};
    default:
      return state
  }
}

export default data