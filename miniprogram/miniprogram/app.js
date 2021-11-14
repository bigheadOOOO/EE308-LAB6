//app.js
App({
  data:{

  },
  globalData:{
    username:"USER",
    userimage:"https://s3.bmp.ovh/imgs/2021/10/77a830cbddfff9a8.png",
    userlocation:"asdf",
    followingnum: 0,
    followernum: 0,
  },
  
  onLaunch: function () {
    wx.cloud.init({
      traceUser: true,

  })
  }
})
