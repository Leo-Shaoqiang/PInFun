import Taro, { useState, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtAvatar,AtIcon } from 'taro-ui'
import './index.scss';

function User() {
    return (
        <View>
            <View className='topContainer'>
                <View className='avatar'>
                    <AtAvatar
                      image='https://jdc.jd.com/img/200'
                      circle
                      size='large'
                    >
                    </AtAvatar>
                </View>
                <View className='textName'>八英里</View>

            </View>
            <View className='midContainer'>
                <View className='addressDefatult'>
                    <View>地址设置</View>
                    <AtIcon value='chevron-right' size='20' color='#ccc'></AtIcon>
                </View>
            </View>


        </View>
    )
}
export default User;
