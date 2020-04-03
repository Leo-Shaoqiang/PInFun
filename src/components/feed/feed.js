import Taro, { Component } from '@tarojs/taro'
import { View,Image,Text} from '@tarojs/components'
// import more from '../../asset/images/more.png'
// import Answer from '../../pages/answer/answer'
import './feed.scss'

export default class Feed extends Component {
  navigateTo(url) {
    Taro.navigateTo({url:url})
  }
  clickItem = ()=>{
    const { answerCtnt, feed_source_img, feed_source_name } = this.props;
   if (this.props.isList) {
   
   console.log('tag',feed_source_img )
   console.log('tag',feed_source_name )

   Taro.navigateTo({
     url: `/pages/answer/answer?answerCtnt=${answerCtnt}&&feedSourceImg=${feed_source_img}&&feedSourceName=${feed_source_name}`,
   })
   }
  }
  render() {
    return (
      <View className='feed-item' onClick={this.clickItem}>
        <View className='feed-source'>
          <View className='avatar flex1'>
              <Image className='avatar_img' src={this.props.feedSourceImg}></Image>
          </View>
          <View className='flex8'>
            <Text className='feed-source-txt'>{this.props.feedSourceName}{this.props.feedSourceTxt}</Text>
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
                    <Text className='answer-txt' onClick={this.clickItem.bind(this)} >{this.props.answerCtnt}</Text>
                </View>
                <View className='answer-actions'>
                    <View className='like dot'>
                        <View>{this.props.goodNum} 赞同 </View>
                    </View>
                    {/* <View className='comments dot'>
                        <View>{this.props.commentNum} 评论 </View>
                    </View> */}
                    {/* <View className='follow-it'>
                        <View>关注问题</View>
                    </View> */}
                </View>
            </View>
        </View>
      </View>
    )
  }
}
