import Taro, { useState, useEffect,useReachBottom } from '@tarojs/taro';
import { View,ScrollView } from '@tarojs/components';
import { AtSearchBar, AtCard,AtActivityIndicator } from 'taro-ui';
import './index.scss';

function Index() {
  // 上拉事件
 useReachBottom(() => {
  console.log('onReachBottom')

});

    // 获取列表详情页
const itemDetails =  ()=>{
    //  cosnt result =  await  
    Taro.navigateTo({
      url:'../../components/ItemDetails/index'
    })
 }
const [list, setList] = useState([
  {
    id: 1,
    note: '本人男,平时喜欢看书，听歌，打篮球，也喜欢和朋友开黑，但是作息很规律，不熬夜，',
    extra: '科学城',
    title: '求一套三住房，科学城附近',
    thumb: 'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
  },
  {
    id: 2,
    note: '差一个合租室友，本人男，无不良嗜好，作息规律，住的都是男生',
    extra: '龙平路地铁口',
    title: '龙泉片区龙平路地铁口套二，龤中介，年底特价手慢无！',
    thumb: 'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
  },
  {
    id: 3,
    note: `地铁:附近地铁：距3动物园站713m
    2、公交：周公交：距荆竹坝路（公交站）286m，荆竹西路东（公交站）305m
    3、商业：周围商店：万达百货(金牛万达店)，舞东风超市(方正街分店)
    4、餐饮：餐饮：张婆婆香酥锅盔，三道菜，奇味手撕烤兔，桃子小姐(平富路店)，多克多炸鸡(解颐路)
    5、设施：周边设施：昭觉寺-黑猩猩:835m;昭觉寺-碧岩堂:857m;昭觉寺-清定上师舍利塔:862m;昭觉寺-上师殿:880m;昭觉寺-应世人间:918m`,
    extra: '动物园',
    title: '立即看房 动物园 维多利亚富御 独卫 视野好 北欧风格',
    thumb: 'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
  },
  {
    id: 4,
    note: '房子出租，房间可住两人，屋内有空调。家具家电齐全，卫生间很干净，不用担心。可淋浴。厨房冰箱可以随便用。小区内绿化环境不错，，周围有超市，药店，生活购物很方便。看房请提前联系，谢谢！',
    extra: '兴城佳域',
    title: '推荐 外光华 兴城佳域 随时看房 无 电子门锁',
    thumb: 'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
  },
  {
    id: 5,
    note: '房子出租，房间可住两人，屋内有空调。家具家电齐全，卫生间很干净，不用担心。可淋浴。厨房冰箱可以随便用。小区内绿化环境不错，，周围有超市，药店，生活购物很方便。看房请提前联系，谢谢！',
    extra: '兴城佳域',
    title: '推荐 外光华 兴城佳域 随时看房 无 电子门锁',
    thumb: 'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
  },
  {
    id: 6,
    note: '房子出租，房间可住两人，屋内有空调。家具家电齐全，卫生间很干净，不用担心。可淋浴。厨房冰箱可以随便用。小区内绿化环境不错，，周围有超市，药店，生活购物很方便。看房请提前联系，谢谢！',
    extra: '兴城佳域',
    title: '推荐 外光华 兴城佳域 随时看房 无 电子门锁',
    thumb: 'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
  },
  {
    id: 7,
    note: '房子出租，房间可住两人，屋内有空调。家具家电齐全，卫生间很干净，不用担心。可淋浴。厨房冰箱可以随便用。小区内绿化环境不错，，周围有超市，药店，生活购物很方便。看房请提前联系，谢谢！',
    extra: '兴城佳域',
    title: '推荐 外光华 兴城佳域 随时看房 无 电子门锁',
    thumb: 'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
  }
]
)
  const ListItem = list.map((item,index) => {
    return <AtCard
      className='listCard'
      note={item.note}
      extra={item.extra}
      title={item.title}
      thumb={item.thumb}
      key={index+item.id}
      onclick={()=>itemDetails(item.id)}
    />
  })
  return (
    <View className='index'>
      <View><AtSearchBar /></View>
      <ScrollView className='list'>
        <View className='listItem'>{ListItem}</View>
      </ScrollView>
      <View>
      </View>
      <View className='loading'><AtActivityIndicator mode='center'></AtActivityIndicator></View>
    </View>
  )
}
Index.config = {
  "enablePullDownRefresh": true, 
  onReachBottomDistance:50,
}

export default Index 
