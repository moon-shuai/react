import { Toast } from 'antd-mobile';
const action = {
  getList: (dispatch) => {
    Toast.loading('Loading...', 1);
    const url = 'http://m.shikuaigou.com/a_api/index/dp?hs=0&cid=&pid=mm_32854514_34040550_129164525&sort=6&_path=9001.CA.0'
    fetch(url).then(res => res.json())
      .then(data => {
        // console.log(data.result)
        dispatch({
          type: 'CHANGE_BANNERLIST',
          banner: data.result.banners,
          topics: data.result.topics,
          items: data.result.items
        })
      }).catch(err => console.log(err))
  }
}

export default action
