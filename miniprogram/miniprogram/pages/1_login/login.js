// pages/enter/enter.js
const app = getApp()
Page({
  /**
   * data
   */
  data: {
  },

  GetUserProfile(e) {
    var that = this
    wx.getUserProfile({
      desc:"正在获取,//不写不弹提示框",
      success:function(res){
        app.globalData.username=res.userInfo.nickName,
        app.globalData.userimage=res.userInfo.avatarUrl,
          //跳转到tabbar页面
        wx.switchTab({
          url: '../2_1home/home'})
      },
      fail:function(){
        that.setData({
          username: "USER",
          path: "https://s3.bmp.ovh/imgs/2021/10/77a830cbddfff9a8.png",
        })
      }
    })
  },

  // bind event: click the cake to jump to next page
  clicked: function()
  {
      // jump
      wx.redirectTo({
          url: '../1_rule/rule'})
  },

})