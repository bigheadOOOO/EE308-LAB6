// pages/groupmember/groupmember.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        leaderlist:["leader1","leader2"],
        leaderimg:["url1","url2"],
        leaderifo:["111","2222"],
        memberlist:["member1","member2"],
        memberimg:["url3","url4"],
        memberifo:["33333","44444"]
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

    },
    getleader: function(e){
        console.log(e.currentTarget.dataset.index)
    },
    getmember:function(e){
            console.log(e.currentTarget.dataset.index)
    },
    tootheraccount:function(){
        wx.navigateTo({
          url: '../othersaccount/othersaccount',
        })
    }
})