import Taro, { Component, Config, setNavigationBarTitle } from '@tarojs/taro'
import { View, ScrollView, Text } from '@tarojs/components'
import './detailIndex.scss'
import StepView from '../stepView/stepView'

export default class DetailIndex extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: ''
  }
  state = {
    title: '',
    steps: [],
    ingredients:'',
    burden:'',
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { 
    const {title,steps,ingredients,burden} = this.$router.params
    this.setState({
      title,
      steps: JSON.parse(steps),
      ingredients,
      burden
    })
    console.log(this.state.ingredients,'======hah')
    Taro.setNavigationBarTitle({
      title:title
    })
  }

  componentDidHide () { }
  onShareAppMessage (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: this.state.title +'的做法',
      path: `pages/detailIndex/detailIndex?title=${this.state.title}&steps=${JSON.stringify(this.state.steps)}`
    }
  }
  render () {
    const resuleArray = this.state.steps
    const listItem = resuleArray.map((index)=> {
      return <StepView img={index.img} step={index.step}></StepView>
    })
    return (
      <ScrollView
      scrollY
      scrollWithAnimation
      >
      <View className='view'>
        <View className='sectionHeader'>
          <Text className='title1'>用料</Text>
        </View>
        <View className='view'>
           <Text className='title2'>{this.state.ingredients}</Text>
        </View>
        <View className='view'>
           <Text className='title2'>{this.state.burden}</Text>
        </View>
        <View className='sectionHeader'>
          <Text className='title1'>做法</Text>
        </View>
        <View className='detailIndex'>
        {listItem}
        </View>
      </View>
      </ScrollView>
    )
  }
}
