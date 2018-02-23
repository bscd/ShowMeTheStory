// pages/browse/browse.js
//Begin Search
var WxSearch = require('../../libs/wxSearch/wxSearch.js')
var app = getApp()
//End Search

Page({
  /**
   * 页面的初始数据
   */
  data: {
    images: [
      {
        id: '1',
        "src": '../images/museum/01beijing.jpeg',
        "name": '故宫博物院',
        "commend": '(★★★★★)',
        "context": '中国最大的古代文化艺术博物馆',
        "price": '￥50/人',
        "distance": '6.4km',
        openTime: '每日09：00 至 17：00',
        "url": '/pages/WaterfallFlow/WaterfallFlow_Beijing/WaterfallFlow_Beijing'
      }, {
        id: '2',
        src: '../images/museum/02shanghai.jpeg',
        name: '上海博物馆',
        "commend": '(★★★★)',
        context: '有文物界“半壁江山”之誉，是一座大型的中国古代艺术博物馆',
        "price": '￥0/人',
        "distance": '1.4km',
        openTime: '每日09：00 至 17：00',
        "url": '../WaterfallFlow/WaterfallFlow_Shanghai/WaterfallFlow_Shanghai'
      }, {
        id: '3',
        src: '../images/museum/03nanjing.jpeg',
        name: '南京博物院',
        "commend": '(★★★★)',
        context: '简称南院或南博，是中国三大博物馆之一',
        "price": '￥0/人',
        "distance": '6.4km',
        openTime: '每日09：00 至 17：00',
        "url": '/pages/WaterfallFlow/WaterfallFlow_Nanjing/WaterfallFlow_Nanjing'
      }, {
        id: '4',
        src: '../images/museum/04shanxi.jpeg',
        name: '陕西历史博物馆',
        "commend": '(★★★★)',
        context: '中国第一座大型现代化国家级博物馆，被誉为“古都明珠，华夏宝库”。',
        "price": '￥50/人',
        "distance": '6.4km',
        openTime: '每日09：00 至 17：00',
        "url": '../WaterfallFlow/WaterfallFlow_Shanxi/WaterfallFlow_Shanxi'
      }, {
        id: '5',
        src: '../images/museum/05hunan.jpeg',
        name: '湖南省博物馆',
        "commend": '(★★★☆)',
        context: '湖南省最大的历史艺术博物馆，也是首批国家一级博物馆',
        "price": '￥50/人',
        "distance": '6.4km',
        openTime: '每日09：00 至 17：00',
        "url": '../WaterfallFlow/WaterfallFlow_Hunan/WaterfallFlow_Hunan'
      }, {
        id: '6',
        src: '../images/museum/06hubei.jpeg',
        name: '湖北省博物馆',
        "commend": '(★★★☆)',
        context: '湖北省博物馆是全国八家中央地方共建国家级博物馆之一',
        "price": '￥0/人',
        "distance": '6.4km',
        openTime: '每日09：00 至 17：00',
        "url": '../WaterfallFlow/WaterfallFlow_Hubei/WaterfallFlow_Hubei'
      }, {
        id: '7',
        src: '../images/museum/07zhejiang.jpeg',
        name: '浙江博物馆',
        "commend": '(★★★☆)',
        context: '展示浙江七千年古老悠久的历史，是海内外具有较高知名度的博物馆之一。',
        "price": '￥0/人',
        "distance": '6.4km',
        openTime: '每日09：00 至 17：00',
        "url": '../WaterfallFlow/WaterfallFlow_Zhejiang/WaterfallFlow_Zhejiang'
      }, {
        id: '8',
        src: '../images/museum/08henan.jpeg',
        name: '河南博物院',
        "commend": '(★★★)',
        context: '国家级重点博物馆，是中国建立较早的博物馆之一',
        "price": '￥60/人',
        "distance": '6.4km',
        openTime: '每日09：00 至 17：00',
        "url": '../WaterfallFlow/WaterfallFlow_Henan/WaterfallFlow_Henan'
      }, {
        id: '9',
        src: '../images/museum/09liaoning.jpeg',
        name: '辽宁省博物馆',
        "commend": '(★★☆)',
        context: '新中国建立的第一座博物馆',
        "price": '￥40/人',
        "distance": '2.4km',
        openTime: '每日09：00 至 17：00',
        "url": '../WaterfallFlow/WaterfallFlow_Liaoning/WaterfallFlow_Liaoning'
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
    //Begin Search
    console.log('onLoad')
    var that = this
    //初始化的时候渲染wxSearchdata
    WxSearch.init(that, 43, ['南博', '故宫', '万里江山图', '故宫胶带', '乾隆']);
    WxSearch.initMindKeys(['五大名窑', '青花瓷', '青铜器', '水墨画']);
    //End Search
  },
  //Begin Search
  wxSearchFn: function (e) {
    var that = this
    WxSearch.wxSearchAddHisKey(that);

  },
  wxSearchInput: function (e) {
    var that = this
    WxSearch.wxSearchInput(e, that);
  },
  wxSerchFocus: function (e) {
    var that = this
    WxSearch.wxSearchFocus(e, that);
  },
  wxSearchBlur: function (e) {
    var that = this
    WxSearch.wxSearchBlur(e, that);
  },
  wxSearchKeyTap: function (e) {
    var that = this
    WxSearch.wxSearchKeyTap(e, that);
  },
  wxSearchDeleteKey: function (e) {
    var that = this
    WxSearch.wxSearchDeleteKey(e, that);
  },
  wxSearchDeleteAll: function (e) {
    var that = this;
    WxSearch.wxSearchDeleteAll(that);
  },
  wxSearchTap: function (e) {
    var that = this
    WxSearch.wxSearchHiddenPancel(that);
  },
  //End Search

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