
const action = {
  getList: (dispatch) => {
    const url = ''
    fetch(url).then(res => res.json())
      .then(data => {
        dispatch({
          type: 'CHANGE_BANNERLIST',
          user: '',
        })
      }).catch(err => console.log(err))
  }
}

export default action
