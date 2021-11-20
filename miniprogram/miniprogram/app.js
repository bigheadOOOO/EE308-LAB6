//app.js
App({
  data:{

  },
  globalData:{
    username:"USER",
    userimage:"https://s3.bmp.ovh/imgs/2021/10/77a830cbddfff9a8.png",
    userlocation:"",
    followingnum: 0,
    followernum: 0,
    sharelocation: 1,
    myid: "",
    myprovince: "",
    mycity: "",
    tagetgroup:"Duomaoguai",
    tagetperson:"",
    tagertpersonimg:""
  },
  
  onLaunch: function () {
    wx.cloud.init({
      traceUser: true,

  })
  }
})
