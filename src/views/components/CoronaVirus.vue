<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="10">
        <el-container>
          <el-header>
            <p style="font-size: 18px;font-weight:bold;">词云</p>
          </el-header>
          <el-main>
            <div id="main2" style="width: 600px; height: 500px; display: inline-block;">
           <!-- <word-cloud-chart
             id="echarts05"
             :title="chartsTitle[4]"
             :data="echarts05Data"
             :width="width"
             :height="height"
           /> -->
           </div>
          </el-main>
        </el-container>

        <el-container style="margin-top: 30px">
          <el-header>
        <p style="font-size: 18px;font-weight:bold;text-align: center;">站点分布</p>
        </el-header>
        <el-main>
        <div id="main1" style="width: 600px; height: 500px; display: inline-block;"></div>
        <!--        <el-container>-->
        <!--          <el-header>-->
        <!--            <p style="font-size: 18px;font-weight:bold;">站点分布</p>-->
        <!--          </el-header>-->
        <!--          <el-main>-->
        <!--            <div id="main1" style="width: 600px; height: 500px; display: inline-block;"></div>-->
        <!--          </el-main>-->
        <!--        </el-container>-->
        </el-main>
        </el-container>
      </el-col>


      <el-col :span="10">
        <el-container>
          <el-header>
            <p style="font-size: 18px;font-weight:bold;">相关贴子</p>
          </el-header>
          <el-main style="height: 1185px">



            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">感谢那些疫情期间为我们奉献自己的白衣天使们！没有他们我们不可能这么早步入正轨</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/tieba.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">#面对复工的心理状态#哈哈哈哈哈哈哈，真要去上班，还是不愿意去的【悲】过于真实</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">咳嗽就是被感染了吗？肺炎的症状之一是咳嗽，但并非所有的咳嗽都是肺炎</p>
            </el-col>
            </el-row>
            <!-- <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">不法行為逮捕、迫害された拷問、不必要なIを操作すること</p>
            </el-col>
            </el-row> -->
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">After returning to Beijing, they still need to be quarantined for 14 days, and now they can't go back. They are anxious
Looking forward to feedback of 2 / 9 clinical trial results</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/tieba.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">中国加油！武汉必胜！中国加油！武汉必胜！中国加油！武汉必胜！中国加油！武汉必胜！</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">#Focus on the prevention and control of new pneumonia epidemic in Yunnan microblog video forwarding on cloud TV: sure!</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">真是我來幫你抵抗疫情，你卻讓我買房？[費解] [費解] [費解]轉發理由：轉發微博</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">#李文亮仍在搶救#挺住！武漢顯示地圖 是的，他看不到了[淚] [淚] [淚] [淚]唉！轉發理由：突然一下就哭了</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">#情人节#白衣天使辛苦了！抗议一线的英雄们辛苦了！惠州显示地图</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">今日の高速道路と鄭州の市街はまるで静かに都市のように眠ってしまいました。</p>
            </el-col>
            </el-row>
            <el-row :type="flex" justify="center" align="middle" style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="aligh:middle;width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">在家过个生日，祝自己生日快乐！希望疫情早早过去！一会我去研究个抖音，发给你们看【哈哈】</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 5px;"></div>
              <img src="../../../static/image/tieba.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">作为爸爸妈妈的女儿，我希望他们也要保护好自己，照顾好自己，我们一起平安回家</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">First of all, if you have a fever and feel uncomfortable, it doesn't mean you are infected</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">頑張って！http://t.cn/A 6 hPRji転送理由：皆さんが自分の平穏を守って帰ってほしいです。</p>
            </el-col>
            </el-row>
            
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">守望相助，抗擊疫情！#武漢加油#！轉發理由：14 / / @ X玖少年團肖戰DAYTOY：守望相助，多一份力量！</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">萼遅れて再工した給料は新しい政策を出します。萼中央視詩の朗読は感動的すぎます。</p>
            </el-col>
            </el-row>

            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">@違法な不法行為を操作しているchowtingagnes @ chowtingagnes＠racaconian元の植民地支配。</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">今天核酸檢測結果陽性，塵埃落定，終於確診了[二哈]武漢·武漢市中心醫院轉發理由：一路走好🙏🏻🙏🏻🙏🏻</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">這兩天自己身體不舒服，爸媽又去醫院了，因為疫情，不能天天回家，家裡只剩我和弟弟</p>
            </el-col>
            </el-row>
          </el-main>
        </el-container>
      </el-col>

    </el-row>
  </div>
  <!--  <div class="widget widget-stats bg-green">-->
  <!--    <h4>持续时间</h4>-->
  <!--&lt;!&ndash;				<div class="stats-icon"><i class="fa fa-calendar"></i></div>&ndash;&gt;-->
  <!--&lt;!&ndash;				<div class="stats-info">&ndash;&gt;-->
  <!--&lt;!&ndash;					<h4>持续时间</h4>&ndash;&gt;-->
  <!--&lt;!&ndash;					<p class="ng-binding"><i class="text-info"> 天</i></p>&ndash;&gt;-->
  <!--&lt;!&ndash;				</div>&ndash;&gt;-->
  <!--				&lt;!&ndash; <div class="stats-link">-->
  <!--					<a href="javascript:;">View Detail <i class="fa fa-arrow-circle-o-right"></i></a>-->
  <!--				</div> &ndash;&gt;-->
  <!--			</div>-->


  <!--    <el-row :gutter="20">-->
  <!--      <el-col :span="8">-->
  <!--        <div class="grid-content bg-purple">-->
  <!--        <h>等待填充</h>-->
  <!--      </div>-->
  <!--      </el-col>-->
  <!--      <el-col :span="8">-->
  <!--        <div class="grid-content bg-purple">-->
  <!--        <h>等待填充</h>-->
  <!--      </div>-->
  <!--      </el-col>-->
  <!--      <el-col :span="8">-->
  <!--        <div class="grid-content bg-purple">-->
  <!--        <h>等待填充</h>-->
  <!--      </div>-->
  <!--      </el-col>-->
  <!--    </el-row>-->

  <!--    <el-row :gutter="20">-->
  <!--      <el-col :span="8"><div class="grid-content bg-purple">-->
  <!--        <h>等待填充</h>-->
  <!--      </div>-->
  <!--      </el-col>-->
  <!--      <el-col :span="8"><div class="grid-content bg-purple">-->
  <!--        <h>等待填充</h>-->
  <!--      </div>-->
  <!--      </el-col>-->
  <!--      <el-col :span="8"><div class="grid-content bg-purple">-->
  <!--        <h>等待填充</h>-->
  <!--      </div>-->
  <!--      </el-col>-->
  <!--    </el-row>-->

</template>
<script>
  import echarts from "echarts";
  // import wordCloud from "../../echarts-wordcloud.min.js";
  // import resize from "./mixins/resize";
  // import "echarts-wordcloud/dist/echarts-wordcloud";
  // import "echarts-wordcloud/dist/echarts-wordcloud.min";
  // let echarts = require('echarts/lib/echarts')
  // require('echarts-wordcloud');

  // import "echarts/theme/macarons.js"


  export default {
    name: "Echarts",
    // mixins: [resize],
    // props: {
    //   className: {
    //     type: String,
    //     default: "chart"
    //   },
    //   id: {
    //     type: String,
    //     default: "chart"
    //   },
    //   width: {
    //     type: String,
    //     default: "100%"
    //   },
    //   height: {
    //     type: String,
    //     default: "400px"
    //   },
    //   data: {
    //     type: Array,
    //     default: []
    //   },
    //   title: {
    //     type: String,
    //     default: ""
    //   }
    // },
    data() {
      return {
        // tableData: [
        //   {
        //     source: ,
        //     content: "#香港理工大学在香港抗议中被围困一年后，现在是一个完全不同的校园。It和其他香港大学都是如此"
        //   },
        //   {
        //     source: ,
        //     content: ""
        //   },
        //   {
        //     source: ,
        //     content: ""
        //   },
        // ],
        echarts05Data:  [
        {
          name: "疫情",
          value: 15000
        },
        {
          name: "加油",
          value: 10081
        },
        {
          name: "武汉",
          value: 9386
        },
        {
          name: "转发",
          value: 7500
        },
        {
          name: "希望",
          value: 7500
        },
        {
          name: "微博",
          value: 6500
        },
        {
          name: "过去",
          value: 6500
        },
        {
          name: "一起",
          value: 6000
        },
        {
          name: "作揖",
          value: 4500
        },
        {
          name: "中国",
          value: 3800
        },
        {
          name: "今天",
          value: 3000
        },
        {
          name: "肺炎",
          value: 2500
        },
        {
          name: "抗击",
          value: 2300
        },
        {
          name: "自己",
          value: 2000
        },
        {
          name: "悲伤",
          value: 1900
        },
        {
          name: "复工",
          value: 1800
        },
        {
          name: "允悲",
          value: 1700
        },
        {
          name: "结束",
          value: 1600
        },
        {
          name: "新型",
          value: 1500
        },
        {
          name: "平安",
          value: 1200
        },
        {
          name: "保护",
          value: 1100
        },
        {
          name: "期待",
          value: 900
        },
        {
          name: "口罩",
          value: 800
        },
        {
          name: "确诊",
          value: 700
        },
      ],
        chart: null
      };
      // activeName: 'first'
    },
    mounted() {

      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById("main1"));
      let chart2 = echarts.init(document.getElementById("main2"));
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: [ '微博', 'twitter', '贴吧']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              // {value: 335, name: ''},
              // {value: 310, name: '邮件营销直接访问'},
              {value: 21256, name: '微博'},
              {value: 5465, name: 'twitter'},
              {value: 12354, name: '贴吧'}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      let option2 = {

                    tooltip: {
                        show: true
                    },
                    toolbox: {
                        right: '40',
                        show: true,
                        feature: {
                          mark: { show: true },
                          dataView: { show: true, readOnly: true, buttonColor:'#4682B4'},
                          magicType: {
                            show: true,
                            type: ['pie', 'funnel']
                          },
                          //restore: { show: true },
                          saveAsImage: { show: true },
                        }
                    },
                    series: [{
                        name: '整体词云图',
                        type: 'wordCloud',
                        gridSize: 10,
                        sizeRange: [20, 50],
                        //size: ['80%', '80%'],
                        rotationRange: [ 0, 45],
                        rotationStep: 45,
                        textPadding: 0,
                        autoSize: {
                            enable: true,
                            minSize: 14
                        },

                        textStyle: {
                          normal: {
                            color: function() {
                              return (
                                "rgb(" +
                                Math.round(Math.random() * 255) +
                                ", " +
                                Math.round(Math.random() * 255) +
                                ", " +
                                Math.round(Math.random() * 255) +
                                ")"
                              );
                            }
                          }
                        },

                        data: [{name:"转发",value:480},{name:"理由",value:440},{name:"疫情",value:4400},{name:"加油",value:2000},{name:"武汉",value:5000},{name:"希望",value:1200},{name:"微博",value:1000},{name:"视频",value:900},{name:"doge",value:900},{name:"过去",value:800},{name:"一起",value:800},{name:"作揖",value:700},{name:"中国",value:700},{name:"今天",value:700},{name:"我们",value:700},{name:"肺炎",value:700},{name:"地图",value:700},{name:"抗击",value:700},{name:"自己",value:600},{name:"悲伤",value:600},{name:"复工",value:600},{name:"允悲",value:600},{name:"太阳",value:600},{name:"结束",value:500},{name:"哈哈哈",value:500},{name:"微笑",value:500},{name:"新型",value:500},{name:"显示",value:500},{name:"守望相助",value:500},{name:"平安",value:500},{name:"保护",value:400},{name:"http",value:400},{name:"cn",value:400},{name:"期待",value:400},{name:"结果",value:400},{name:"一个",value:400},{name:"口罩",value:400},{name:"上班",value:400},{name:"确诊",value:400},{name:"##",value:400},{name:"可以",value:400},{name:"抗疫",value:400},{name:"肖战",value:400},{name:"还是",value:300},{name:"回家",value:300},{name:"如果",value:300},{name:"组图",value:300},{name:"二哈",value:300},{name:"明天",value:300},{name:"不要",value:300}]
                    }]
      };
      myChart.setOption(option);
      chart2.setOption(option2);

      // this.initChart();

      window.addEventListener('resize', function () {
        myChart.resize()
      });

    },
    // beforeDestroy() {
    //   if (!this.chart) {
    //     return;
    //   }
    //   this.chart.dispose();
    //   this.chart = null;
    // },



  };

</script>
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }

  .el-aside {
    background-color: Transparent;
    color: #333;
    text-align: center;

  }

  .el-main {
    background-color: #DCDFE6;
    color: #333;
  }

  /*body > .el-container {*/
  /*  margin-bottom: 40px;*/
  /*}*/

  /*.el-container:nth-child(1) .el-aside,*/
  /*.el-container:nth-child(2) {*/
  /*  margin-top: 40px;*/
  /*}*/

  /*.el-container:nth-child(2) .el-aside {*/
  /*  line-height: 260px;*/
  /*}*/

  /*.el-container:nth-child(3) .el-aside {*/
  /*  line-height: 320px;*/
  /*}*/

  /*.el-row{*/
  /*  height: 100%;*/
  /*}*/

</style>
