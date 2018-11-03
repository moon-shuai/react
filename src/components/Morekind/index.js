import { connect } from 'react-redux';
import store from '@/store/store' // 掉用一下这个状态管理，就是大的状态管理系统 进行视图的渲染和编写
import UI from './UI';
import action from './action'

const Com = connect (
  (state) => {
    return {
      bigtitle: state.moredata.bigtitle,
      items: state.moredata.items
    }
  },
  (dispatch) => {
    return {
      // 这是自定义的对象属性名字
      getData:(typid) => {
        // console.log(typid)
        store.dispatch(action.gatDataList(typid))
      }
    }
  }
)(UI)


export default Com
