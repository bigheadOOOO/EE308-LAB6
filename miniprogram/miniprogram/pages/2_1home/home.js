// pages/home/home.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //设置标记点
    movies:[
      {url:'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg'},
      {url:'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg'}
    ],
    //当前定位位置
    latitude:'',
    longitude: '',
    },
    onload:function name(params) {
      
    },
    onLoad() {
    //获取当前位置
    wx.getLocation({
    type: 'gcj02',
    success: (res) => {
    console.log(res)
    this.setData({
    latitude: res.latitude,
    longitude: res.longitude
    })
    }
    })
    },
  suo:function name(params) {
    wx.navigateTo({
      url: './2_5search/search/search',
    })
  },
  pl_fx:function name(params) {
    wx.navigateTo({
      url: './beginnerguideline/beginner',
    })
  },
  onPullDownRefresh:function(e)
  {
    console.log(e)
  }
  
})
