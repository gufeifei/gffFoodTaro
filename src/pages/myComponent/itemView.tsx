import Taro, { Component} from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './itemView.scss'

export default class ItemView extends Component {


  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */

  onRowClick = (titleName,steps,ingredients,burden) => {

    console.log(steps,titleName,ingredients,burden '======--0000000')
    const stepstr = JSON.stringify(steps)
    Taro.navigateTo({ url: `../detailIndex/detailIndex?title=${titleName}&steps=${stepstr}&ingredients=${ingredients}&burden=${burden}`})
  }
  render () {
    const {titleName, steps, ingredients, burden} = this.props
    return (
      <View className='itemView' onClick={this.onRowClick.bind(this,titleName,steps,ingredients,burden)}>
        <Image src = {this.props.album} className='image'  style="width:120px;height:90px;"></Image>
        <View className='rowView'>
          <Text className='text'>{this.props.titleName}</Text>
          <Text className = 'tags'>{this.props.tags}</Text>
        </View>
      </View>
    )
  }
}
