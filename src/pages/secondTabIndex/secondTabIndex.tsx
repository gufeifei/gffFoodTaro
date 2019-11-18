import Taro, { Component, Config } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import './secondTabIndex.scss'
import DayFood from '../foodJson/dayFood.json'
import ItemView from '../myComponent/itemView'

export default class SecondTabIndex extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '烘焙'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  onShareAppMessage (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '学习做菜，点击这里',
      path: 'pages/secondTabIndex/secondTabIndex'
    }
  }
  render () {
    const dayFoodArray = DayFood.dataFood
    const listItems = dayFoodArray.map((index)=>{
      return <ItemView titleName={index.title} 
      album={index.albums[0]} 
      tags={index.tags} 
      steps={index.steps} 
      burden={index.burden} 
      ingredients={index.ingredients} ></ItemView>
    })
    return (
      <ScrollView
      scrollY
      scrollWithAnimation
      >
        <View className='secondTabIndex'>
          {listItems}
        </View>
      </ScrollView>
    )
  }
}
