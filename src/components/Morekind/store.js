const data = (state = {
  bigtitle: '',
  items: []
}, action) => {
  const { type, bigtitle, items} = action
  switch (type) {
    case 'CHANGE_MORELIST':
      return {...state, bigtitle, items} // 简写形式
    // case 'CHANGE_ID':
    //   return {...state, id};
    default:
      return state
  }
}

export default data