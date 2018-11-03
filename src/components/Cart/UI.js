import React, { Component } from 'react';
import '@/components/Cart/style/index.scss';
import { Modal, List, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom'

class Com extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modal2: false,
      val: 3,
      display_name: 'block',
      actiHide: 'block',
        soy:false,
        ta:0,
        jiesuan: 0,
        dingshiqi:null,
        si:true
    };
  }

  actiHide () {
    if (this.state.actiHide === 'block') {
      this.setState({
        actiHide: 'none'
      })
    }
  }

  display_name() { //编辑按钮的单击事件，修改状态机display_name的取值
    if (this.state.display_name === 'block') {
        this.setState({
            display_name: 'none',
        })
    }
    if (!this.state.display_name === 'block') {
      this.setState({
          display_name: 'none',
      })
  }
}

  showModal = key => (e) => {
    e.preventDefault();
    this.setState({
      [key]: true,
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }

  onChange = (val) => {
    // console.log(val);
    this.setState({ val });
  }

    componentDidMount() {
         if(localStorage.cart!==undefined) {           //页面每次被打开调用
             this.get()                                              //继承上次更改商品的数据
         }
    }

    bianji (val) {                      //编辑
        let dele=document.getElementsByClassName('otp')[val]           //找到显示
        let da=document.getElementsByClassName('shopImg')[val]        //找到这个点击的列表  切换这个列表的margin值，能够移动
        let txt=document.getElementsByClassName('sp4')[val]           //找到编辑标签
        let iy=0                                                   //margin第一次初始值
        let it=-40                                                  //margin第二次初始值
        dele.style.display="block"                                //使删除标签显示
        txt.innerText='完成'                                          //更改编辑标签的内容
        this.setState({si:!this.state.si})                             //条件切换，用来切记点击标签的条件
      let time=setInterval(() => {
          if(this.state.si===true){
             it+=1
              da.style.marginLeft=it + "px"
          } else {
             iy-=1
              da.style.marginLeft=iy + "px"
          }
            if(iy===-40 ) {
                clearInterval(time)
            } else if(it===0) {
                clearInterval(time)
                dele.style.display="none"
                txt.innerText='编辑'
            }
           }, 1)
       }

    delete (val) {
        const alert = Modal.alert;
        alert('确定要删除这个宝贝吗？', '', [                   //跳转按钮
            { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
            { text: '确定', onPress: () => {
                let ta=JSON.parse(localStorage.cart)
                let taid=JSON.parse(localStorage.cartid)
                ta.splice(val,1)
                taid.splice(val,1)
                localStorage.cart=JSON.stringify(ta)
                localStorage.cartid=JSON.stringify(taid)
                window.location.reload();
            }},
        ]);

    }

    get () {                                    //判断商品是否被选中，如果不调用，则每次更改商品数据，刷新后不继承上次更改后的值
        let car=JSON.parse(localStorage.cart)
        car.map((item,index) => {
            if(item.show===true){
                let inp=this.refs[index].getElementsByTagName("input")
                for(var i=0;i<inp.length;i++){
                    inp[i].checked=true
                }
            }
            return ''
        })
        this.str()                           //判断商品是否被全选
        this.Result()                         //商品的价格结算
    }

    reduce (val,inp,value) {              //加减数量
      let dat=JSON.parse(localStorage.cart)                //获取商品数据
        let num=dat[val].num                               //进行加减的商品数据的数量
            if(inp===0){
                if(num!==1) {                                 //数量不能为0,1是最小值
                    dat[val].num = num - 1                 //减商品
                }
            } else {
                dat[val].num=num+1                          //加商品
            }
            this.refs[value].innerText=dat[val].num          //更改页面中商品数量值
            localStorage.cart=JSON.stringify(dat)                   //保存商品数据
        if(dat[val].show===true) {                           //判断本商品是否被选中
            this.Result()                                   //如果商品选中，调用价格结算，更改价格，否词无
        }

   }

    Single (val) {           //单选                   传入商品的index值
        let car=JSON.parse(localStorage.cart)
        let da=this.refs[val].getElementsByTagName("input")         //找到这个商品的两个input框
        let show=car[val].show                                       //当前商品的状态
        for(var i=0;i<da.length;i++) {                                //切换input是否被选中
            da[i].checked=!show
        }
        car[val].show=!show                                             //数据状态切换
        localStorage.cart=JSON.stringify(car)
        this.str()                                        //调用所有商品是否被选中进行判断     每次单选后都调用
        this.Result()                                    //已选商品价格及数量结算
    }

    Total () {                                                  //全选
        let inp=document.getElementsByTagName('input')         //找寻全部input
        for(var i=0;i<inp.length;i++){
            inp[i].checked=!this.state.soy                //切换input选中状态
        }
    //更改商品数据选中状态
        let car=JSON.parse(localStorage.cart)             //商品数据状态切换
        car.map((item,index) => {
            item.show=!this.state.soy                     //切换商品数据选中状态
            return ''
        })
        localStorage.cart=JSON.stringify(car)              //保存更改后的商品数据
        this.setState({soy:!this.state.soy})              //状态切换
        this.Result()                                      //调用价格计算
  }

     str () {                                          //判断商品是否被全选
         let car=JSON.parse(localStorage.cart)
         let hu=[]
         car.map((item,index) => {
             hu.push(item.show)
             return ''
         })
         if(hu.indexOf(false)===-1){
             this.refs.op.checked=true               //商品被全选把全选按钮选中
         } else {
             this.refs.op.checked=false            //商品未全选把全选按钮不选中
         }
     }

    Result () {                                 //计算价格
        let dt=0                                  //价格初始值
        let nuo=0                              //已选商品数量初始值
        let da=JSON.parse(localStorage.cart)              //获取所有数据
        da.map((item,index) => {
            if(item.show===true){                //判断商品的是否被选中
                dt += item.num * item.oPrice.substring(1)          //已选商品价格
                nuo= nuo+1                                  //已选商品数量
            }
            return ''
        })
        let p=dt.toFixed(2)                               //商品价格保留两位小数
        this.setState({ta:p,jiesuan:nuo})         //选中商品的总价和结算商品数
    }

    render () {
        if (localStorage.cart ===undefined) return (<div>
          <div className='head-img'>
            <div className='imgd'>
              <img src='//gw.alicdn.com/tfscom/TB1xdQSJFXXXXcuXXXXy7S8WFXX-176-176.png' alt=''/>
            </div>
              <p>购物车快饿瘪了</p>
              <p>主人快给我点宝贝吧</p>
              <Link to={'/home'}>去逛逛</Link>
        </div>
         <div>
           <div className="like">
             <div className="imgLike">
               <img alt="" src="https://img.alicdn.com/tfs/TB1V2eQrKSSBuNjy0FlXXbBpVXa-966-114.png" />
             </div>
             <div className="likeList">
               <img alt="" src="//gw.alicdn.com/bao/uploaded/i2/188124207/TB1vXvKX.R1BeNjy0FmXXb0wVXa_!!0-item_pic.jpg_500x500q90.jpg_.webp" />
               <div className="titelCon">唐狮2018新款牛仔外套男生韩版潮流帅气牛仔夹克修身休闲牛仔衣服</div>
               <div className="pic">￥2980</div>
             </div>
             <div className="likeList">
               <img alt="" src="//gw.alicdn.com/bao/uploaded/i2/188124207/TB1vXvKX.R1BeNjy0FmXXb0wVXa_!!0-item_pic.jpg_500x500q90.jpg_.webp" />
               <div className="titelCon">唐狮2018新款牛仔外套男生韩版潮流帅气牛仔夹克修身休闲牛仔衣服</div>
               <div className="pic">￥2980</div>
             </div>
           </div>
         </div>
            </div>)
        let da=JSON.parse(localStorage.cart)
      return (
      <div className="contentCart">
        <div className="activity" style={{ display: this.state.actiHide}}>
          <span className="actiList">
            双11来啦！领购物津贴享每400减50，点此领取
          </span>
        </div>
          {da.map((item,index) => (

        <div className="shopList" ref={index} key={index}>
          <div className="title">
            <input type="checkbox"  onChange={this.Single.bind(this,index)} className="sp1"  />
            <span className="sp2">{item.shop.shopName}</span>
            <span className="sp3">领券</span>
            <span className="sp4" onClick={this.bianji.bind(this,index)} >编辑</span>
          </div>
          <div className="count" >
            <img alt="" src="//img.alicdn.com/tfs/TB1GulZSVXXXXaWXVXXXXXXXXXX-129-36.png" />
            <span className="free">{item.priorityrecommend}</span>
          </div>
            <div className='iyt'>
          <div className="shopImg" >
              <input type="checkbox"  onChange={this.Single.bind(this,index)} className="shopClick" />
            <img alt="" src={item.image} />
            <div className="shopKind" >
              <h3 className='ure'>{item.title}</h3>
              <WingBlank>
              <Button onClick={this.showModal('modal2')}>白色&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;∨</Button>
              <WhiteSpace />
                <Modal className="hide" style={{ display: this.state.display_name }}
                  visible={this.state.modal2}
                  onClose={this.onClose('modal2')}
                  animationType="slide-up"
                >
                  <List renderHeader={() =>
                  <div className="tanItme">
                    <img alt="" src="https://gw.alicdn.com/bao/uploaded/TB1fMTtowmTBuNjy1XbL6SMrVXa_200x200q50s150.jpg_.webp" />
                    <div className="listInfo">
                      <p className="p1"></p>
                      <p>&ensp;库存：2</p>
                      <p>已选：</p>
                      <span onClick={this.display_name.bind(this)} className="iconfont icon-guanbi2"></span>
                    </div>
                  </div>} className="popup-list">
                    {['颜色分类', '尺码'].map((i, index) => (
                      <List.Item key={index}>{i}</List.Item>
                    ))}
                    <List.Item>
                      <Button className="but" type="primary" onClick={this.onClose('modal2')}>确认</Button>
                    </List.Item>
                  </List>
                </Modal>
                <WhiteSpace />
              </WingBlank>
              <div className="price">
                <span>{item.oPrice}</span>
              </div>
              <div className='num'>
                  <span onClick={this.reduce.bind(this,index,0,item.monthSales)}>
                      &#8211;
                  </span>
                  &nbsp; <i ref={item.monthSales}>{item.num}</i>  &nbsp;
                  <span onClick={this.reduce.bind(this,index,1,item.monthSales)}>+</span>
              </div>
            </div>
          </div>
            <div className='otp' onClick={this.delete.bind(this,index)}>删除</div>
            </div>
        </div>
          ))}
        <div className="like">
            <div className="imgLike">
              <img alt="" src="https://img.alicdn.com/tfs/TB1V2eQrKSSBuNjy0FlXXbBpVXa-966-114.png" />        
            </div>
            <div className="likeList">
              <img alt="" src="//gw.alicdn.com/bao/uploaded/i2/188124207/TB1vXvKX.R1BeNjy0FmXXb0wVXa_!!0-item_pic.jpg_500x500q90.jpg_.webp" />
              <div className="titelCon">唐狮2018新款牛仔外套男生韩版潮流帅气牛仔夹克修身休闲牛仔衣服</div> 
              <div className="pic">￥2980</div>    
            </div>
            <div className="likeList">
              <img alt="" src="//gw.alicdn.com/bao/uploaded/i2/188124207/TB1vXvKX.R1BeNjy0FmXXb0wVXa_!!0-item_pic.jpg_500x500q90.jpg_.webp" />
              <div className="titelCon">唐狮2018新款牛仔外套男生韩版潮流帅气牛仔夹克修身休闲牛仔衣服</div> 
              <div className="pic">￥2980</div>    
            </div>
          </div>
        <div className="numPrice">
           <div className="xuan">
            <input type='checkbox' ref='op' className="sp-quanxuan2" onChange={this.Total.bind(this)} value=''  />全选
           </div>
           <span className="sp-pic">合计：<em>￥{this.state.ta}</em></span>
           <span className="btn-jie">结算({this.state.jiesuan})</span>
        </div>
      </div>
  )
  }
}

export default Com