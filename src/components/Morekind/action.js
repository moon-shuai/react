import { Toast } from 'antd-mobile';

const action = {
  gatDataList: (typeid) => {
    Toast.loading('Loading...', 1);
    return (dispatch) =>  {
      const url = 'http://m.shikuaigou.com/a_api/list?hs=0&cid=0&wp=&type='+ typeid +'&pId=mm_32854514_34040550_129164525&search=&_path=9001.CH.22'
      fetch(url).then(res => res.json())
        .then(data => {
          console.log(data.result)
          dispatch({
            type: 'CHANGE_MORELIST',
            items: data.result.items,
            bigtitle: data.result.title
          })
        }).catch(err => console.log(err))
      }
  }
}

export default action


