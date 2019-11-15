import Taro, { Component} from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './stepView.scss'

export default class StepView extends Component {


  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */

  render () {
    return (
      <View className='itemView'>
        <View className='sectionView'>
          <Text className='text'>{this.props.step}</Text>
        </View>
        <View className='sectionImage'>
          <Image src = {this.props.img} className='image'  style="width:200px;height:150px;"></Image>
        </View>
      </View>
    )
  }
}
