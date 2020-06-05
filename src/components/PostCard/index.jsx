import Taro from '@tarojs/taro'
import { View,Image,Text } from '@tarojs/components'
// import classNames from 'classnames'
// import { AtAvatar } from 'taro-ui'

import './index.scss'

export default function PostCard(props) {
  // 注意：
  const { title = '', content = '', user } = props.post
  const { avatar, nickName } = user || {}

  const handleClick = () => {
    // 如果是列表，那么就响应点击事件，跳转到帖子详情
    if (props.isList) {
      Taro.navigateTo({
        url: `/pages/post/post?postId=${props.postId}`,
      })
    }
  }
   //  超出字段省略
  const slicedContent =
    props.isList && content.length > 66
      ? `${content.slice(0, 66)} ...`
      : content

  return (
    <View className='feed-item' onClick={handleClick}>
    <View className='feed-source'>
      <View className='avatar flex1'>
          <Image className='avatar_img' src={avatar}></Image>
          {/* <View className="at-article__info post-nickName">{nickName}</View> */}
      </View>
      <View className='flex8'>
        <Text className='feed-source-txt'>{title}</Text>
      </View>
      <View className='flex1'>
        {/* <Image className='item-more' mode='aspectFit' src={more}></Image> */}
      </View>
    </View>
    <View className='feed-content'>
        <View className='question'>
            <View className='question-link'>
                <Text>{this.props.question}</Text>
            </View>
        </View>
        <View className='answer-body'>
            <View>
                <Text className='answer-txt'>{slicedContent}</Text>
            </View>
            <View className='answer-actions'>
                <View className='like-dot'>
                    <View>{this.props.goodNum} 收藏 </View>
                </View>
            </View>
        </View>
    </View>
  </View>
  )
}

PostCard.defaultProps = {
  isList: '',
  post: [],
}
