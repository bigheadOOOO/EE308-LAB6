// pages/groupmember/groupmember.js
const app = getApp()
const db = wx.cloud.database()
const group=db.collection("Group")
const allusers = db.collection("allusers")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        leaderlist:["",""],
        leaderimg:[],
        leaderifo:[],
        memberlist:[],
        memberimg:[],
        memberifo:[]
    },
    getgroupifo:function(){
        this.setData({
        leaderlist:wx.getStorageSync('leaderlist'),
        leaderimg:wx.getStorageSync('leaderimg'),
        leaderifo:wx.getStorageSync('leaderifo'),
        memberlist:wx.getStorageSync('memberlist'),
        memberimg:wx.getStorageSync('memberimg'),
        memberifo:wx.getStorageSync('memberifo')
        })
        wx.removeStorageSync('leaderlist')
        wx.removeStorageSync('leaderimg')
        wx.removeStorageSync('leaderifo')
        wx.removeStorageSync('memberlist')
        wx.removeStorageSync('memberimg')
        wx.removeStorageSync('memberifo')
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getgroupifo()
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
    getleader: function(e){
        var tagename=leaderlist[e.currentTarget.dataset.index]
        allusers.get({
            success:function(res){
                for(var i = 0; i < res.data.length; i++){
                    if(tagename==res.data[i].name){
                        app.globalData.tagetperson=res.data[i].name
                        app.globalData.tagetpersonimg=res.data[i].name.img
                    }
                }
            }
        })
    },
    getmember:function(e){
        var tagename=memberlist[e.currentTarget.dataset.index]
        allusers.get({
            success:function(res){
                for(var i = 0; i < res.data.length; i++){
                    if(tagename==res.data[i].name){
                        app.globalData.tagetperson=res.data[i].name
                        app.globalData.tagetpersonimg=res.data[i].name.img
                    }
                }
            }
        })
    },
    tootheraccount:function(){
        wx.navigateTo({
          url: '../othersaccount/othersaccount',
        })
    },
})