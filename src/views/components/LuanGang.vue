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

        <el-container>
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
            <el-col :span="21">
              <p style="font-size: 18px;">冒著被捕的危險，我們封鎖了中國駐華府大使館的入口，呼籲香港的人權與自由！#洪克</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 5px;"></div>
              <img src="../../../static/image/tieba.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">感謝湯姆·蘭德爾為支持香港而作的精彩作品</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">Blocking the entrance to the Chinese Embassy in Wash, DC as we call for human rights and freedom in HK! #HongKong ⁦@Stand_w</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">民主主義のためのHKの戦いを支持してくれてありがとう🙏🏼我々の若い活動家は、単に投獄されます.</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">@感谢您与香港站在一起。这是香港另一个悲伤的时刻。任何支持自由、人权、政治的人…</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/tieba.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">对于自由斗士——曼德拉、国王、刘晓波——来说，监狱是通往民主之路的必然和必要的一部分</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">一名美国人今天加入人权游行，说香港人不仅为香港或自己而战，也为香港人争取人权</p>
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
              <p style="font-size: 18px;">@hk_watch why is hong kong giving up the fight for freedom? you are going to be the new tibet at this rate</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/tieba.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">每一个旁观者都站在那里无助地看着溺水的女人，直到一个外国人来救她。它代表我…</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">亲爱的，香港人，台湾人和韩国人，你觉得怎么样？如果拜登赢了，中国赢了，美国、香港、台湾、韩国将输。阿拉伯海湾</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">感謝你們為香港的自由和民主所作的努力。希望他們能安全。上帝保佑他們…</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">@frances_sit Thank you their effort for the freedom and democracy in #HongKong. Hope they can be safe. God bless th…</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">哥伦比亚广播公司今早的乔舒旺格夫、周廷格尼斯和伊凡兰都非常勇敢地为香港的自由而战，但是他们…</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">@BarrySheerman CCP will never allow democracy.#HongKong is the best example of why we should never trust China.Beijing will n…</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">我在2015年去了香港，我发现自己很喜欢它，因为它有自由感。到底谁有一个钻井平台…</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">@像許多其他被毆打、監禁和流放的香港年輕人一樣，他們的財務狀況也是神聖的…</p>
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
              <p style="font-size: 18px;">@business Every core value in HK is eroded by the regime and the new National Security law. Reporters are losing freedom</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="21">
              <p style="font-size: 18px;">看到香港这样我真的很难过！什么时候香港才能重新团结起来，重现辉煌</p>
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
          name: "香港",
          value: 15000
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
              {value: 15652, name: '微博'},
              {value: 32424, name: 'twitter'},
              {value: 12112, name: '贴吧'}
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
                            minSize: 30
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

                        data: [{name:"香港",value:165000},{name:"自由",value:86000},{name:"他们",value:27500},{name:"我们",value:23900},{name:"支持",value:21600},{name:"内地",value:19300},{name:"中国共产党",value:17300},{name:"中国",value:17000},{name:"现在",value:16600},{name:"一个",value:14300},{name:"国家",value:14200},{name:"世界",value:13000},{name:"抗议",value:12800},{name:"中共",value:12200},{name:"民主",value:12100},{name:"一起",value:11900},{name:"没有",value:11400},{name:"因为",value:11200},{name:"HK",value:11000},{name:"维吾尔族",value:10900},{name:"香港站",value:10600},{name:"而战",value:10600},{name:"ppl",value:9800},{name:"joshuawongcf",value:9500},{name:"人权",value:9200},{name:"破坏",value:9200},{name:"活动",value:9100},{name:"逮捕",value:8400},{name:"继续",value:8400},{name:"警察",value:8200},{name:"法律",value:8000},{name:"迫害",value:7900},{name:"如何",value:7700},{name:"人民党",value:7600},{name:"不会",value:7300},{name:"青年",value:7200},{name:"殖民地",value:7100},{name:"恶意",value:7100},{name:"非法",value:6900},{name:"操纵",value:6800},{name:"言论自由",value:6700},{name:"稳定",value:6700},{name:"二十",value:6600},{name:"幌子",value:6600},{name:"战士",value:6200},{name:"情况",value:6100},{name:"感谢",value:5900},{name:"服务",value:5900},{name:"打着",value:5500},{name:"不必要",value:5400}]}]
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

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(1) .el-aside,
  .el-container:nth-child(2) {
    margin-top: 40px;
  }

  .el-container:nth-child(2) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(3) .el-aside {
    line-height: 320px;
  }

  .el-row{
    height: 100%;
  }

</style>
