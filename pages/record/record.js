// pages/record/record.js
var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var pieChart = null;
Page({

  /**
   * 页面的初始数据
   */
    data: {
        indicatorDots: true,//是否显示面板指示点
        autoplay: true,  //是否自动切换
        interval: 5000, //自动切换时间
        duration: 1000,  //滑动时间
        goods: null,
        srcUser: 'wation',
        content: '每个孩子都有一个\n飞翔的梦想!\n你真的懂了吗？',
        money: 1.5,
        waitTime: 5,
        rawPrice: 15,
        currentPrice:5
  },

    touchHandler: function (e) {
        console.log(pieChart.getCurrentDataIndex(e));
    },  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
          topScroll: [
              { "id": "35", "Pic": '/images/xiaofeiji.png'},
              { "id": "36", "Pic": '/images/xiaofeiji.png'},
              { "id": "37", "Pic": '/images/xiaofeiji.png' }]
      });
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

      var windowWidth = 320;
      try {
          var res = wx.getSystemInfoSync();
          windowWidth = res.windowWidth;
      } catch (e) {
          console.error('getSystemInfoSync failed!');
      }
      pieChart = new wxCharts({
          animation: true,
          canvasId: 'pieCanvas',
          type: 'pie',
          series: [{
              name: '我帮忙减掉2元',
              data: 2,
          }, {
              name: '其他人帮忙减掉11元',
              data: 11,
          }, {
              name: '还需要支付3元',
              data: 3,
          }],
          width: windowWidth,
          height: 260,
          dataLabel: true,
      });
  
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