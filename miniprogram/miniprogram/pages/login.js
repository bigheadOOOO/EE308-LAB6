// pages/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: ""
  },

  GetUserProfile:function()
  {
  var that = this
  wx.getUserInfo({
    desc:"正在获取,//不写不弹提示框",
    success:function(res){  
      console.log('success', res.userInfo.nickName)
      that.setData({name: res.userInfo.nickName});
    },
    fail:function(){
      that.setData({
      })
    }
  })
},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})