Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchResult:false,
    screen:"All",
    screenDown: { screenDown:["All","Only CSDN","Only GitHub"],screen:0},//screenDown筛选选项，screen对应索引，用于前段渲染判断
    screenFlag:false,//控制综合下拉框是否显示
    screenColor: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  screenShow: function () {//综合下拉
    if (this.data.screenFlag){
      this.setData({
        screenFlag : !this.data.screenFlag,
        brandFlag: false,
      })
    }else{
      this.setData({
        screenFlag: !this.data.screenFlag,
        brandFlag: false,
      })
    }
  },
  screenChoice:function(e){//综合下拉选择子项
    console.log(e)
    this.setData({
      screen: e.currentTarget.dataset.item,
      "screenDown.screen": e.currentTarget.dataset.index,
      screenFlag: false,
      screenColor:true
    })
  },
  handletouchtart: function (event) {//点击透明背景隐藏下拉
    this.setData({
      screenFlag: false,
      brandFlag: false
    })
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