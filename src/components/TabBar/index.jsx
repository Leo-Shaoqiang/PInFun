import Taro, { useState,useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components';
import { AtTabBar } from 'taro-ui';
import './index.scss';


function TabBar() {
  const [current,setCurrent] = useState(0);
  useEffect(() => {
    switch (current) {
      // case 0:
      //   Taro.switchTab({
      //     url:'../index/index'
      //   })
      //   console.log('====================================');
      //   console.log('000');
      //   console.log('====================================');
      //   break;
      case 1:
        Taro.navigateTo({
          url:'../add/index'
        })
        console.log('111');
        break;
      case 2:
          Taro.navigateTo({
            url:'../info/index'
          })
          console.log('222');
        break;
      case 3:
            Taro.switchTab({
              url:'../user/index'
            })
            console.log('333');
            break;
           
      default:
        break;
    }
  },[current])
   
    return (
        <View>
            <AtTabBar
              fixed
              tabList={[
            { title: '主页', iconType: 'home' },
            { title: '发布', iconType: 'add' },
            { title: '信息', iconType: 'bell',text: '10', max: '99' },
            { title: '我的', iconType: 'user' }
          ]}
              onClick={(value)=>setCurrent(value)}
              current={current}
            />
        </View>
    )
}
export default  TabBar;
