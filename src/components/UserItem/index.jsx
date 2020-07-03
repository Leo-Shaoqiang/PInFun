import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtList, AtListItem } from 'taro-ui'
import { useSelector, useDispatch } from '@tarojs/redux'

import './index.scss'

export default function UserItem(props) {


    return (
           <AtList>
            <AtListItem 
              title='设置标签' 
              arrow='right'  
              iconInfo={{ size: 25, color: '#FF4949', value: 'bookmark', }}
            />
            <AtListItem 
              title='我的收藏' 
              arrow='right'
              iconInfo={{ size: 25, color: '#78A4FA', value: 'calendar', }}
            />
            <AtListItem 
              title='我的点赞'
              arrow='right' 
              iconInfo={{ size: 25, color: '#78A4FA', value: 'calendar', }}
            />
           </AtList>
    )
}

