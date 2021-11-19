// pages/othersaccount/othersaccount.js
const app = getApp()

const db = wx.cloud.database()
const mysubscrption = db.collection("mysubscrption")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hisid: "",
    hisimage: app.globalData.targetpersonimg,
    hisname: app.globalData.tagetperson, 
    subscript: 1
  },

  subscription:function(){
    var that = this
    that.setData({
      subscript: 0
    })
    mysubscrption.add({
      data:{
        friendid: that.data.hisid,
        friendname: that.data.hisname,
        friendimg: that.data.hisimage,
      }
    })
  },

  unsubscript: function(){
    var that = this
    that.setData({
      subscript: 1
    }),
    db.collection('mysubscrption').where({
      friendid: that.data.hisid
    }).remove().then(res=>{
      console.log(res)
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
    // mysubscription.add({
    //   data:{
    //     name: hisname,
    //     img: hisimage
    //   },
    // })
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