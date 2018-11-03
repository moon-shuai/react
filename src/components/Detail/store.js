const data = (state = {
  detailBanners: [],
  list: [],
  detailImages: [],
  image:'',
  item: {}
}, action) => { 
  const { type, detailBanners,list, detailImages, image, item} = action
  switch (type) {
    case 'CHANGE_DETAILLIST':
      return {...state, detailBanners, list, detailImages, image, item} // 简写形式
    default:
      return state
  }
}

export default data