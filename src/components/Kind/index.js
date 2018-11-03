import { connect } from 'react-redux';
import store from '@/store/store' // 掉用一下这个状态管理，就是大的状态管理系统 进行视图的渲染和编写
import action from './action'
import Demo1 from './Demo1'

const Com = connect (
  (state) => {
    console.log(state)
    return {
      list: state.kinddata.listItem,
      items: state.kinddata.listImg,
    }
  },
  (dispatch) => {
    return {
      // 这是自定义的对象属性名字
      getKindData: () => {
        store.dispatch(action.getDataList)
      }
    }
  }
)(Demo1)


export default Com
