import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtSearchBar, AtCard, AtTabBar } from 'taro-ui'
import './index.scss';


function Index() {
  const [current, setCurrent] = useState(0);
  console.log('====================================');
  console.log(current,setCurrent);
  console.log('====================================');
  const List = [
    {
      id: 1,
      note: '小Tips',
      extra: '额外信息',
      title: '这是个标题',
      thumb: 'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
    },
    {
      id: 2,
      note: '小Tips',
      extra: '额外信息',
      title: '这是个标题',
      thumb: 'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
    },
    {
      id: 3,
      note: '小Tips',
      extra: '额外信息',
      title: '这是个标题',
      thumb: 'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
    },
    {
      id: 4,
      note: '小Tips',
      extra: '额外信息',
      title: '这是个标题',
      thumb: 'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
    }
  ]
  const ListItem = List.map(item => {
    return <AtCard
      note={item.note}
      extra={item.extra}
      title={item.title}
      thumb={item.thumb}
      key={item.id}
    />
  })
  return (
    <View className='index'>
      <View><AtSearchBar /></View>
      <View>
        {ListItem}
      </View>
      <View>
        <AtTabBar
          fixed
          tabList={[
            { title: '主页', iconType: 'home' },
            { title: '发布', iconType: 'add' },
            { title: '信息', iconType: 'bell',text: '100', max: '99' },
            { title: '我的', iconType: 'user' }
          ]}
          onClick={(value)=>setCurrent(value)}
          current={current}
        />
      </View>
    </View>
  )
}

export default Index 
