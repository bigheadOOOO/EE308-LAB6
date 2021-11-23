// pages/2_2team/team.js
const app = getApp()
const db = wx.cloud.database()
const group=db.collection("Group")
Page({
    /**
     * 页面的初始数据
     */
    data: {
        show: false ,
        searchResult:false,
        screen:"All",
        screenDown: { screenDown:["All","Only my project","Only my follow"],screen:0},//screenDown筛选选项，screen对应索引，用于前段渲染判断
        screenFlag:false,//控制综合下拉框是否显示
        screenColor: false,
        followteamlist:["team1","team2","team3"],
        myteamlist:["myteam1","myteam2"],
        temp:""
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
      createteam:function(){
        myteamlist.push
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
    getfollowteam: function(e){
      console.log(e.currentTarget.dataset.index)
    },
    getmyteam: function(e){
      console.log(e.currentTarget.dataset.index)
    },
    todetails:function(){
      wx.navigateTo({
        url: '../teamdetails/teamdetails',
      })
    },
    show:function(){
      if(this.data.show){
        this.setData({
          show:false
        })
      }else{
        this.setData({
          show:true
        })
      }
    },
    confirm : function(){
      this.setData({
        show:false
      })
    } ,
    cancel: function(){
      this.setData({
        
      })
    } ,
    setValue: function (e) {
      var that=this;
      var val = e.detail.value;
      this.setData({
          temp:val
      })

      console.log(this.data.myteamlist)
    },
    compare: function(){
      var that=this;
      var newlist=this.data.myteamlist;
      var val=this.data.temp;
      newlist.push(val)
      this.setData({
        myteamlist:newlist,
        show:false
      })
      group.add({
        name:val,
        leader:["app.globalData.username"],
        members:[],
        processing:[[],[],0],
        processingifo:[],
        img:"",
        announcement:"",
        collection:'',
        communicationchannel:"",
        follow:[]
      })
    }
})
