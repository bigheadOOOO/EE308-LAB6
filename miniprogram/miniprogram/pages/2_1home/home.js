// pages/home/home.js
const app = getApp()
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
    userlatitude: 0,
    userlongitude: 0,
    Fujian: 0,
    Beijing: 0,
    Tianjing: 0,
    Shanghai: 0,
    Chongqing: 0
  },

  clickmap: function (optinal) {
    var that = this;
    var mylocationofchina = app.globalData.myprovince
    console.log( app.globalData.myprovince)
    if(mylocationofchina == "Fujian"){
      that.setData({
        Fujian: 1
      }) 
    }
  },
  suo:function name(params) {
    wx.navigateTo({
      url: '../2_5search/search/search',
    })
  },
  pl_fx:function name(params) {
    wx.navigateTo({
      url: '../beginnerguideline/beginner',
    })
  },
  onPullDownRefresh:function(e)
  {
    console.log(e)
  }
  
})
