// pages/WaterfallFlow/WaterfallFlow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [
      {
        id: '1',
        "src": '../../images/ciqi/01_斗彩八吉祥纹大盘.jpg',
        "name": '斗彩八吉祥纹大盘',
        "context": '南京博物院',
        "from": '百度',
        "iscollect": '1',
        "datetme": '2018-01-28'
      }, {
        id: '2',
        src: '../../images/ciqi/02_绿釉粉彩双风穿花瓶.png',
        name: '绿釉粉彩双风穿花瓶',
        context: '南京博物院',
        "from": '百度',
        iscollect: '1',
        datetme: '2018-01-28'
      }, {
        id: '3',
        src: '../../images/ciqi/03_粉彩灯笼瓶.jpg',
        name: '粉彩灯笼瓶',
        context: '南京博物院',
        "from": '百度',
        iscollect: '1',
        datetme: '2018-01-28'
      }, {
        id: '4',
        src: '../../images/ciqi/04_粉彩百禄尊.jpg',
        name: '粉彩百禄尊',
        context: '南京博物院',
        "from": '百度',
        iscollect: '1',
        datetme: '2018-01-28'
      }, {
        id: '5',
        src: '../../images/ciqi/05_紫地珐琅彩牡丹纹碗.jpg',
        name: '紫地珐琅彩牡丹纹碗',
        context: '南京博物院',
        "from": '百度',
        iscollect: '1',
        datetme: '2018-01-28'
      }, {
        id: '6',
        src: '../../images/ciqi/06_蓝釉描金粉彩开光转心瓶.png',
        name: '蓝釉描金粉彩开光转心瓶',
        context: '南京博物院',
        "from": '百度',
        iscollect: '1',
        datetme: '2018-01-28'
      }, {
        id: '7',
        src: '../../images/ciqi/07_仿官釉渣斗.jpg',
        name: '仿官釉渣斗.',
        context: '南京博物院',
        "from": '百度',
        iscollect: '1',
        datetme: '2018-01-28'
      }, {
        id: '8',
        src: '../../images/ciqi/08_斗彩皮球锦碗.jpg',
        name: '斗彩皮球锦碗',
        context: '南京博物院',
        "from": '百度',
        iscollect: '1',
        datetme: '2018-01-28'
      }, {
        id: '9',
        src: '../../images/ciqi/09_斗彩缠枝花卉碗.jpg',
        name: '斗彩缠枝花卉碗',
        context: '南京博物院',
        "from": '百度',
        iscollect: '1',
        datetme: '2018-01-28'
      }, {
        id: '10',
        src: '../../images/ciqi/10_五彩龙凤碗.jpg',
        name: '五彩龙凤碗',
        context: '南京博物院',
        "from": '百度',
        iscollect: '1',
        datetme: '2018-01-28'
      },
    ]
  },
  ImageLoad: function (e) {
    console.log(e)
    console.log(e.detail.height)
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

  }
})