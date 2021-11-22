// pages/teamdetails/teamdetails.js
const app = getApp()
const db = wx.cloud.database()
const group=db.collection("Group")
Page({

    /**
     * 页面的初始数据
     */
    data: {
    Scheduleshow:true,
    Communityshow:false,
    procesing:["communication","planning","modeling","construction","deployment","accessment"],
    processtime:["2021.9.11","2021.9.13","2021.9.15","2021.9.25","2021.9.31","2021.10.31"],
    stage:"3",
    laststagehidden:true,
    group_id:"",
    processingifo:["1","2","3","4","5","6"],
    announcement:"announcement",
    collectionifo:"",
    communicationchannel:"",
    groupimg:"/../lab7/GCTAS.jpg",
    groupname:"duomaiguai",
    Role:"member",
    leaderlist:["c","d"],
    leaderimg:[],
    leaderifo:[],
    memberlist:["a","b"],
    memberimg:["url1","url2"],
    memberifo:[],
    length:"6"
    },
    getgroupdata(){
        group.get({
            groupname:app.data.tagetgroup,
            success:function(re){
                for(var i = 0; i < re.data.length; i++){
                    if(groupname==re.data[i].name){
                        this.setData({
                            procesing:re.data[i].procesing[1],
                            processtime:re.data[i].procesing[2],
                            stage:re.data[i].procesing[3],
                            group_id:re.data[i]._id,
                            processingifo:re.data[i].processingifo,
                            announcement:re.data[i].announcement,
                            collectionifo:re.data[i].collection,
                            communicationchannel:re.data[i].communicationchannel,
                            groupimg:re.data[i].img,
                            length:length(procesing),
                            leaderlist: re.data[i].leader,
                            memberlist: re.data[i].memberlist
                        })
                    }
                }
            }
        })
    },
    getgroupifo:function(){
        
        allusers.get({
            success:function(ress){
                for(var j=0;j<length(leaderlist);j++){
                    for(var i = 0; i < ress.data.length; i++){
                        if(leaderlist[j]==ress.data[i].name){
                            leaderimg[j]==ress.data[i].img
                        }
                     }
                }
            for(var j=0;j<length(leaderlist);j++){
                for(var i = 0; i < ress.data.length; i++){
                    if(memberlist[j]==ress.data[i].name){
                        memberimg[j]==ress.data[i].img
                    }
                }
            }
            }
        })
        for (var k=0;k<length(leaderlist);k++){
            if(app.data.username==leaderlist[k]){
                Role="leader"
            }
        }
        for (var k=0;k<length(memberlist);k++){
            if(app.data.username==memberlist[k]){
                Role="member"
            }
        }
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
        var that=this
        wx.setStorageSync('memberlist',that.data.memberlist);
        wx.setStorageSync('leaderlist',that.data.leaderlist);
        wx.setStorageSync('leaderimg',that.data.leaderimg);
        wx.setStorageSync('memberimg',that.data.thimemberimg);
        wx.setStorageSync('memberifo',that.data.memberifo);
        wx.setStorageSync('leaderifo',that.data.leaderifo);
        wx.navigateTo({
            url: '../groupmember/groupmember',
    })
    },
})