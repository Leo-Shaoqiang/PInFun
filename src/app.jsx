import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import counterStore from './store/counter'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
}

class App extends Component {

  config = {
   
    pages: [
      'pages/index/index',
      'pages/add/index',
      'pages/info/index',
      'pages/user/index',
    ],
    tabBar: {
      color: "#626567",
      selectedColor: "#6e9eea",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "pages/index/index",
        text: "主页",
        iconPath: "assets/images/icon_home.png",
        selectedIconPath: "assets/images/icon_home_HL.png"
      },
      {
        pagePath: "pages/add/index",
        text: "发布",
        iconPath: "assets/images/icon_publish.png",
        selectedIconPath: "assets/images/icon_publish_HL.png"
      },
      {
        pagePath: "pages/info/index",
        text: "信息",
        iconPath: "assets/images/icon_info.png",
        selectedIconPath: "assets/images/icon_info_HL.png"
      },
      {
        pagePath: "pages/user/index",
        text: "我的",
        iconPath: "assets/images/icon_mine.png",
        selectedIconPath: "assets/images/icon_mine_HL.png"
      }]
    },
    window: {

      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
