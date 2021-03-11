<template>
  <div>
    <el-row :gutter="24">
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
            <el-row :type="flex" justify="center" align="middle" style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="aligh:middle;width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">尼日利亚人在美国美国大选两周后特朗普关心选票选票就像他们没有钱一样</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 5px;"></div>
              <img src="../../../static/image/tieba.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">新特朗普刚刚提交了一份档案——6.31亿美元现金在手——1400万美元债务——我们将得到b的全部数位</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">twatus election 7 things we learned after Trump demands Biden be investigated now</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">トランプは新しい反響をかき立てる一方、彼のアドバイザーは狭い世論調査で希望を見る</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">钟斯戴律师事务所（jones day）作为特朗普竞选连任的外部律师，已经赚了数百万美元</p>
            </el-col>
            </el-row>

            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">新闻特朗普竞选委员会预计将只报告约6300万美元，这大约是它的一半</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 5px;"></div>
              <img src="../../../static/image/tieba.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">新特朗普刚刚提交了一份档案——6.31亿美元现金在手——1400万美元债务——我们将得到b的全部数位</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">tucson mayor demands Trump pay his 2016 bill before rally</p>
            </el-col>
            </el-row>

            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/tieba.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">特朗普宣称拜登将在随心所欲的福克斯访谈中带走上帝</p>
            </el-col>
            </el-row>

            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">大选前两周，特朗普因对拜登的不满，选择了与全国最受欢迎的新闻节目较量</p>
            </el-col>
            </el-row>

            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">特朗普依靠他的司法部長在兩周後的大選前調查他的競選對手</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">你認為特朗普的舞步會為他贏得即將到來的美國大選新聞嗎</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">独立党特朗普回到关键的宾夕法尼亚州竞选路线，他选择与60奇怪的斗争</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">at this point with as unhinged as Trump is i wouldnt be surprised if barr has joe Biden arrested the day</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">作为特朗普连任竞选的外部律师，钟斯日赢得了数百万美元的收入，该公司的律师已经捐赠了近90美元</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">特朗普證實，儘管計畫讓麥克風靜音，但他仍將出席最後的辯論</p>
            </el-col>
            </el-row>

            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">Trump new fec filings show Trump cash troublesTrump ended sept with</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">一天前，特朗普多次稱他的對手為罪犯，並用同一個詞稱呼自己的記者</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">特朗普阵营9月份在电视广播广告上的花费不到5600万美元，而这一数位接近148万美元</p>
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
          "name": "香港",
          "value": 15000
        },
        {
          name: "自由",
          value: 10081
        },
        {
          name: "一个国家",
          value: 9386
        },
        {
          name: "内地",
          value: 7500
        },
        {
          name: "支持",
          value: 7500
        },
        {
          name: "社会主义制度",
          value: 6500
        },
        {
          name: "国防白皮书",
          value: 6500
        },
        {
          name: "创新",
          value: 6000
        },
        {
          name: "民主革命",
          value: 4500
        },
        {
          name: "文化强国",
          value: 3800
        },
        {
          name: "国家主权",
          value: 3000
        },
        {
          name: "武装颠覆",
          value: 2500
        },
        {
          name: "领土完整",
          value: 2300
        },
        {
          name: "安全",
          value: 2000
        },
        {
          name: "从严治党",
          value: 1900
        },
        {
          name: "现代化经济体系",
          value: 1800
        },
        {
          name: "国防动员",
          value: 1700
        },
        {
          name: "信息化战争",
          value: 1600
        },
        {
          name: "局部战争",
          value: 1500
        },
        {
          name: "教育",
          value: 1200
        },
        {
          name: "职业教育",
          value: 1100
        },
        {
          name: "兵法",
          value: 900
        },
        {
          name: "一国两制",
          value: 800
        },
        {
          name: "特点社会主义思想",
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
              {value: 12321, name: '微博'},
              {value: 26564, name: 'twitter'},
              {value: 12892, name: '贴吧'}
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

                        data: [{name:"特朗普",value:24300},{name:"拜登",value:7500},{name:"美国",value:6700},{name:"大选",value:5000},{name:"选举",value:4200},{name:"总统",value:3100},{name:"竞选",value:2900},{name:"律师",value:2800},{name:"一个",value:2800},{name:"我们",value:2000},{name:"2020",value:2000},{name:"两周",value:1400},{name:"他们",value:1400},{name:"赢得",value:1400},{name:"琼斯",value:1300},{name:"最后",value:1300},{name:"连任",value:1200},{name:"如果",value:1200},{name:"捐款",value:1200},{name:"已经",value:1100},{name:"支持",value:1100},{name:"可能",value:1100},{name:"巴尔",value:1100},{name:"显示",value:1000},{name:"拒绝",value:1000},{name:"希望",value:1000},{name:"获胜",value:1000},{name:"个人",value:900},{name:"2016",value:900},{name:"团队",value:900},{name:"现在",value:900},{name:"知道",value:900},{name:"亿美元",value:800},{name:"万美元",value:800},{name:"中国",value:800},{name:"包括",value:800},{name:"对手",value:800},{name:"这次",value:800},{name:"不是",value:800},{name:"选票",value:700},{name:"现金",value:700},{name:"经济",value:700},{name:"调查",value:700},{name:"选民",value:700},{name:"候选人",value:700},{name:"辩论",value:700},{name:"Trump",value:700},{name:"投票",value:700},{name:"需要",value:700},{name:"呼吁",value:700}]

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

  .el-row{
    height: 100%;
  }

</style>
