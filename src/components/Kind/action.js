import { Toast } from 'antd-mobile';
const action = {
  getDataList: (dispatch) => {
    Toast.loading('Loading...', 1);
    const url = 'http://m.shikuaigou.com/a_api/index/dp?hs=0&cid=1321&pid=mm_32854514_34040550_129164525&sort=6&_path=9001.CA.1321'
    fetch(url).then(res => res.json())
      .then(data => {
        // console.log(data.result)
        dispatch({
          type: 'CHANGE_KINDLIST',
          listItem: data.result.categories,
          listImg: data.result.items
        })
      }).catch(err => console.log(err))
  }
}

export default action
