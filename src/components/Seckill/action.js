import { Toast } from 'antd-mobile';
const action = {
  getSeckillList: (dispatch) => {
    Toast.loading('Loading...', 1);
    const url = '/api/act/timebuy-xrgoodslist'
    fetch(url).then(res => res.json())
      .then(data => {
        console.log(data.data)
        dispatch({
          type: 'CHANGE_SECKILLLIST',
          banners: data.data.banner[0].pic,
          time_tabs: data.data.time_tabs
        })
      }).catch(err => console.log(err))
  }
}

export default action
