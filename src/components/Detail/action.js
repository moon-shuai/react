import { Toast } from 'antd-mobile';
const action = {
  getDeatilList: (activityId, itemId) => {
    Toast.loading('Loading...', 1);
    return (dispatch) => {
      const url = `http://m.shikuaigou.com/a_api/index/detailData?hs=0&itemId=${ itemId }&activityId=${ activityId }&pid=mm_32854514_34040550_129164525&appId=0&userId=0`
      fetch(url).then(res => res.json())
        .then(data => {
          // console.log(data.result)
          dispatch({
            type: 'CHANGE_DETAILLIST',
            detailBanners: data.result.item.auctionImages,
            detailImages: data.result.item.detailImages,
            image: data.result.item.image,
            item: data.result.item
          })
        }).catch(err => console.log(err))
      }

  }
}

export default action
