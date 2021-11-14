// pages/enter/enter.js
const app = getApp()

const db = wx.cloud.database()
const allusers = db.collection("allusers")
Page({
  /**
   * data
   */
  data: {
  },

  GetUserProfile(e) {
    var that = this
    var ok = 0;
    wx.getUserProfile({
      desc:"正在获取,//不写不弹提示框",
      success:function(res){
        var n = res.userInfo.nickName;
        var im = res.userInfo.avatarUrl;
        allusers.get({
          success:function(re){
            console.log(re);
            for(i = 0; i < length(re); i++){
              if ((n in re[i])&&(im in re[i])){
              }else{ // 发现数据库中已存在该数据
                ok = 1;
                break;
              }
            }if (ok == 0){ // 没有在数据库中，就加入数据库
              allusers.add({
                data:{
                  name: res.userInfo.nickName,
                  img: res.userInfo.avatarUrl,
                }
              })
            }
          }
        })
        app.globalData.username=res.userInfo.nickName,
        app.globalData.userimage=res.userInfo.avatarUrl
      },
      fail:function(){
      }
    })//跳转到tabbar页面
    wx.switchTab({
      url: '../2_1home/home'})
  },

})