// pages/teamdetails/teamdetails.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    Scheduleshow:false,
    Communityshow:true,
    modeltype:"waterfall model",
    procesing:["communication","planning","modeling","construction","deployment"],
    processtime:["2021.9.11","2021.9.13","2021.9.15","2021.9.25","2021.9.31"],
    stage:"3",
    
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    showSchedule:function(){
        this.setData({
            Scheduleshow: true,
            Communityshow:false,
        })
    },
    showcommunity:function(){
        this.setData({
            Scheduleshow: false,
            Communityshow:true,
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

    },
    hoptomember:function(){
        wx.navigateTo({
            url: '',
    })
    }
})