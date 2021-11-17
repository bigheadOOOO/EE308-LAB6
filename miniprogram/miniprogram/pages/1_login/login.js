// pages/enter/enter.js
const app = getApp()

const db = wx.cloud.database()
const allusers = db.collection("allusers")
Page({
  /**
   * data
   */
  data: {
    province: "",
    city: "",
    ok: false,
    exist: 0
  },

  GetUserProfile(e) {
    var that = this
    var n = app.globalData.username
    var im = app.globalData.userimage
    wx.getUserProfile({
      desc:"正在获取,//不写不弹提示框",
      success:function(res){
        app.globalData.username=res.userInfo.nickName,
        app.globalData.userimage=res.userInfo.avatarUrl
        var n = res.userInfo.nickName;
        var im = res.userInfo.avatarUrl;
        that.setData({
          ok: true
        })
      },
    })
    console.log(that.data.ok)
    if(that.data.ok == true)
    {
      allusers.get({
        success:function(re){
          if(re){
            console.log(re.data)
            console.log(n)
            for(var i = 0; i < re.data.length; i++){
              if ((n == re.data[i].name)&&(im == re.data[i].img)){
                console.log("cvbn");
                app.globalData.myprovince = re.data[i].myprovince
                that.setData({
                  exist: 1
                })
                break;
              }
            }
          }console.log(that.data.exist)
          if((that.data.ok == true)&&(that.data.exist == 0)){ // 没有在数据库中，就加入数据库
            //获取当前位置
            wx.getLocation({
              success: (res) => {
                console.log(res)
                that.setData({
                  userlatitude: res.latitude,
                  userlongitude: res.longitude
                })
                // 判断城市
                if((that.data.userlatitude > 20.30) && (that.data.userlatitude < 28.22) && (that.data.userlongitude > 115.50) && (that.data.userlatitude < 120.40)){
                  that.setData({
                    province: "Fujian"
                  })
                  
                }else if((that.data.userlatitude > 39) && (that.data.userlatitude < 40) && (that.data.userlongitude > 115.50) && (that.data.userlatitude < 117)){
                  that.setData({
                    province: "Beijing"
                  })
                  app.globalData.myprovince = "Beijing"
                  
                }else if((that.data.userlatitude > 38.33) && (that.data.userlatitude < 40.16) && (that.data.userlongitude > 116.42) && (that.data.userlatitude < 118.20)){
                  that.setData({
                    province: "Tianjing"
                  })
                  
                }else if((that.data.userlatitude > 31.1) && (that.data.userlatitude < 31.2) && (that.data.userlongitude > 121.25) && (that.data.userlatitude < 212.35)){
                  that.setData({
                    province: "Shanghai"
                  })
                  
                }else if((that.data.userlatitude > 105.17) && (that.data.userlatitude < 110.11) && (that.data.userlongitude > 115.50) && (that.data.userlatitude < 117)){
                  that.setData({
                    province: "Chongqing"
                  })
                  
                }else if((that.data.userlatitude > 118.01) && (that.data.userlatitude < 123.1) && (that.data.userlongitude > 27.02) && (that.data.userlatitude < 31.11)){
                  that.setData({
                    province: "Zhejiang"
                  })
                }app.globalData.myprovince = that.data.province
                console.log(app.globalData.myprovince)
                allusers.add({
                  data:{
                    name: app.globalData.username,
                    img: app.globalData.userimage,
                    myprovince: that.data.province,
                    mycity: ""
                  }
                });
              }
            })
          }
        }
      })
      
      wx.switchTab({
        url: '../2_1home/home'})
    }
  },
  onLoad: function (options) {
    
  },

})

