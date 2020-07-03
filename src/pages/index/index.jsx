import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import { AtFab, AtFloatLayout, AtMessage } from 'taro-ui'
import { useSelector, useDispatch } from '@tarojs/redux'

import { PostCard, PostForm } from '../../components'
import './index.scss'
import {
  SET_POST_FORM_IS_OPENED,
  SET_LOGIN_INFO,
  GET_POSTS,
} from '../../constants'


export default function Index() {
  const posts = useSelector(state => state.post.posts) || []
  const isOpened = useSelector(state => state.post.isOpened)
  const nickName = useSelector(state => state.user.nickName)
  const [isLoading,changeLoading] = useState(false);
  const isLogged = !!nickName

  const dispatch = useDispatch()
  useEffect(() => {
    const WeappEnv = Taro.getEnv() === Taro.ENV_TYPE.WEAPP

    if (WeappEnv) {
      Taro.cloud.init()
    }

    async function getStorage() {
      try {
        const { data } = await Taro.getStorage({ key: 'userInfo' })

        const { nickName, avatar, _id } = data

        // 更新 Redux Store 数据
        dispatch({
          type: SET_LOGIN_INFO,
          payload: { nickName, avatar, userId: _id },
        })
      } catch (err) {
        console.log('getStorage ERR: ', err)
      }
    }

    if (!isLogged) {
      getStorage()
    }

    async function getPosts() {
      try {
        // 更新 Redux Store 数据
        dispatch({
          type: GET_POSTS,
        })
      } catch (err) {
        console.log('getPosts ERR: ', err)
      }
    }

    if (!posts.length) {
      getPosts()
    }
  }, [dispatch, isLogged, posts.length])

  function setIsOpened(isOpened) {
    dispatch({ type: SET_POST_FORM_IS_OPENED, payload: { isOpened } })
  }

  function handleClickEdit() {
    if (!isLogged) {
      Taro.atMessage({
        type: 'warning',
        message: '您还未登录哦！',
      })
    } else {
      setIsOpened(true)
    }
  }

  console.log('posts', posts)

  return (
    <View className='index'>
      <AtMessage />
      <ScrollView className='container'
        scrollY
        scrollWithAnimation
        scrollTop='0'
        lowerThreshold='10'
        upperThreshold='10'
        style='height:300px'
        onScrollToUpper={this.updateList}
        onScrollToLower={this.appendNextPageList}
      >
        {
          isLoading
          ? <View className='txcenter'>加载中</View>
          : posts.map( post => (
              <PostCard
                key={post._id} 
                postId={post._id}
                post={post}
                isList
              />
            )
          )
        }
      </ScrollView>
      <AtFloatLayout
        isOpened={isOpened}
        title='发表新文章'
        onClose={() => setIsOpened(false)}
      >
        <PostForm />
      </AtFloatLayout>
      <View className='post-button'>
        <AtFab onClick={handleClickEdit}>
          <Text className='at-fab__icon at-icon at-icon-edit'></Text>
        </AtFab>
      </View>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页',
}
