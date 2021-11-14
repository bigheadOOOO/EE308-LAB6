// pages/2_1home/beginnerguideline/beginner.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    IDE : 1,
    adobe: 0,
    office: 0,
  },

  // click left selections
  clickide:function(){
    var that = this
    that.setData({
      IDE : 1,
      adobe: 0,
      office: 0
    })
  },
  clickadobe:function(){
    var that = this
    that.setData({
      IDE: 0,
      adobe: 1,
      office: 0
    })
  },
  clickoffice:function(){
    var that = this
    that.setData({
      IDE: 0,
      adobe: 0,
      office: 1
    })
  },

  // click right selections
  // clickmatlab:function(){
  //   <web-view src="https://ww2.mathworks.cn/help/matlab/index.html"></web-view>
  // },
  // clickmplab:function(){
  //   <web-view src="https://www.microchip.com/en-us/development-tools-tools-and-software/mplab-x-ide"></web-view>
  // },
  // clickpycharm:function(){
  //   <web-view src="https://www.jetbrains.com/pycharm/"></web-view>
  // },
  // clickjdk:function(){
  //   <web-view src="https://www.cnblogs.com/zll-wyf/p/15095664.html"></web-view>
  // },
  // clickvscode:function(){
  //   <web-view src="https://www.runoob.com/w3cnote/vscode-tutorial.html"></web-view>
  // },
  // clickROS:function(){
  //   <web-view src="http://wiki.ros.org/cn/ROS/Tutorials/"></web-view>
  // },
  // clickps:function(){
  //   <web-view src="https://www.bilibili.com/video/BV1Xs411q7DW?from=search&seid=11289586269939974455&spm_id_from=333.337.0.0/"></web-view>
  // },
  // clickae:function(){
  //   <web-view src="https://www.bilibili.com/video/av59594398/"></web-view>
  // },
  // clickad:function(){
  //   <web-view src="https://www.bilibili.com/video/BV16t411N7RD?from=search&seid=13969139854590469943&spm_id_from=333.337.0.0/"></web-view>
  // },
  // clickpr:function(){
  //   <web-view src="https://www.bilibili.com/video/BV1Ts411C7Yd?from=search&seid=17251662068412895762&spm_id_from=333.337.0.0/"></web-view>
  // },
  // clickword:function(){
  //   <web-view src="https://www.bilibili.com/video/BV1kt4y1r7MV?from=search&seid=3024527539889602624&spm_id_from=333.337.0.0/"></web-view>
  // },

  // clickexcel:function(){
  //   <web-view src="https://www.bilibili.com/video/BV1Gq4y1M716?from=search&seid=3024527539889602624&spm_id_from=333.337.0.0/"></web-view>
  // },
  // clickppt:function(){
  //   <web-view src="https://www.bilibili.com/video/BV1x4411p7LV?from=search&seid=15733957545542334839&spm_id_from=333.337.0.0/"></web-view>
  // },
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