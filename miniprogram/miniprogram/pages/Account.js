// pages/8_Account/Account.js.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Accountname: "User",
    Accountimage: "https://s3.bmp.ovh/imgs/2021/10/77a830cbddfff9a8.png",
    numoffollowering: 0,
    numoffollower: 0,
  },
  clickfollow:function(){ /*这里要补一下关注的功能*/
    wx.navigateTo({
      url: '',
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
    this.setData({

    });
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