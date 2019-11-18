import Taro, { Component, Config } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import './index.scss'
import { Z_NEED_DICT } from 'zlib'
import HotFood from '../foodJson/hotFood.json'
import ItemView from '../myComponent/itemView'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '创意菜',
    // enablePullDownRefresh: true,
  }
  // onPullDownRefresh = ()=>{
  //   Taro.showNavigationBarLoading() 
  // }
  // onReachBottom =() => {
  //   console.log('到底部了')
  // }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { 
    // Taro.request(
    //   {
    //     url:'https://apis.juhe.cn/cook/category',
    //     data:{
    //       key:'3792681ac73ef4ff95c1115ac89daedc'
    //     },
    //   header: {
    //     'content-type':'application/json'
    //   },
    //   success (res) {
    //     console.log(res.data.result)
    //   }
    // }
    // )
  }
  componentDidHide () { }
  onShareAppMessage () {
    return {
      title: '学习做菜，点击这里',
      path: 'pages/index/index'
    }
  }
  render () {
    const resultArray = HotFood.data
    const listItems = resultArray.map((index) => {
    return <ItemView titleName={index.title} 
    album={index.albums[0]} 
    tags={index.tags} 
    steps={index.steps} 
    burden={index.burden} 
    ingredients={index.ingredients} 
    > </ItemView>
    })
    return (
      <ScrollView
      scrollY
      scrollWithAnimation
      >
      <View className='index' >
        {listItems}
      </View>
      </ScrollView>
    )
  }
}
