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


      <el-col :span="10 ">
        <el-container>
          <el-header>
            <p style="font-size: 18px;font-weight:bold;">相关贴子</p>
          </el-header>
          <el-main style="height: 1185px">
            <el-row :type="flex" justify="center" align="middle" style="height: 100px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="aligh:middle;width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">我读的是普通一本金融专业，想考北大清华或者上海交大复旦的金融专硕研究生，有没有考名校逆袭成功的学长学姐指点指点</p>
            </el-col>
            </el-row>
            <el-row style="height: 100px">
            <el-col :span="3">
              <div style="height: 5px;"></div>
              <img src="../../../static/image/tieba.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">我是一名22界考研人，我目前就读于一所独立院校，我学的专业是通信工程，有没有师哥师姐给我能不能给我推荐一些学校</p>
            </el-col>
            </el-row>
            <el-row style="height: 100px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">复试口语主要考查的是Fluency and coherence，Pronunciation，Lexical resources，和Grammatical range这四个方面。</p>
            </el-col>
            </el-row>
            <el-row style="height: 100px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">本来都想好了河北工业大学，可是每个同学都说211太难考，说让我换一个学校</p>
            </el-col>
            </el-row>
            <el-row style="height: 100px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">22年考研，目标是北理或北邮计算机。大学数学学的还可以，学的时候都在85分左右，</p>
            </el-col>
            </el-row>
            <el-row style="height: 100px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/tieba.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">背单词真的太太太难了！背完了忘，忘了又背！就没有什么背单词的好办法嘛？</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">最近任燕翔手撕何凯文，开一个考研大瓜交流贴，希望大家多多参与哦！</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">求助一下大家，考控制工程研究生，是侧重学校好点还是侧重专业好点？</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/tieba.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">大家估分太可怕了吧，我数学估分只有90，看到大家估分都是130几分，我还有救吗？</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">火课网校系统为教育机构独立部署自主品牌在线教育平台，助力机构轻松转型线上教育 </p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">末流公办本科光电专业。图像处理方向算不算跨考啊？难不难？光学类竞争少吧。</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">想问一下有没有考过历史学硕的呀，我想考南京大学中国史方向的研，现在大二，应该怎么准备呀？</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">哪个更好些啊，高数啥的不是永乐老师讲的。第一个398第二个898如果可以的话买那个啊？</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/tieba.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">本人某985学校研究生在读，本科全日制双非三本学历。 我是大龄研究生，写写自己的艰辛的几年考研之路把！</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">我本科末流985金融，工作两年了，想考2022年研究生，现在第一步，选学校，希望有经验的人能提供一下思路。 </p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/tieba.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">相信不少人都被所谓考研名师带崩过，现在盘点考研各学科最大cjb名师，希望各位多多发言给学弟学妹避雷</p>
            </el-col>
            </el-row>

            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/tieba.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">考研英语是花卷，也就是同样的题但是选项位置不同，但是只根据答题卡是怎么判定你做的是哪套卷子呢？</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/tieba.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">[出售]药学349全套21考研资料书（适合川大考研）有机 分化 生化（只用过一点点，很新）</p>
            </el-col>
            </el-row>
            <el-row style="height: 50px">
            <el-col :span="3">
              <div style="height: 15px;"></div>
              <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">
            </el-col>
            <el-col :span="20">
              <p style="font-size: 18px;">考法学硕士的意愿越来越强烈，特别是看了最近某个综艺以后虽然我也知道现实是残酷的，而况法硕非法。</p>
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
          name: "考研",
          value: 15000
        },
        {
          name: "2021",
          value: 10081
        },
        {
          name: "试题",
          value: 9386
        },
        {
          name: "政治",
          value: 7500
        },
        {
          name: "英语",
          value: 7500
        },
        {
          name: "数学",
          value: 6500
        },
        {
          name: "专业",
          value: 6500
        },
        {
          name: "面试",
          value: 6000
        },
        {
          name: "汤家凤",
          value: 4500
        },
        {
          name: "张宇",
          value: 3800
        },
        {
          name: "机构",
          value: 3000
        },
        {
          name: "复习",
          value: 2500
        },
        {
          name: "备考",
          value: 2300
        },
        {
          name: "初试",
          value: 2000
        },
        {
          name: "教师",
          value: 1900
        },
        {
          name: "学校",
          value: 1800
        },
        {
          name: "目标",
          value: 1700
        },
        {
          name: "求助",
          value: 1600
        },
        {
          name: "上岸",
          value: 1500
        },
        {
          name: "教育",
          value: 1200
        },
        {
          name: "目标院校",
          value: 1100
        },
        {
          name: "计算机",
          value: 900
        },
        {
          name: "408",
          value: 800
        },
        {
          name: "录取分数",
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
              {value: 100, name: '微博'},
              {value: 0, name: 'twitter'},
              {value: 60, name: '贴吧'}
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
                        sizeRange: [8, 40],
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

                        data: [
                            {
                              name: "十九大精神",
                              value: 15000
                            },
                            {
                              name: "两学一做",
                              value: 10081
                            },
                            {
                              name: "中华民族",
                              value: 9386
                            },
                            {
                              name: "马克思主义",
                              value: 7500
                            },
                            {
                              name: "民族复兴",
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
                              name: "特色社会主义思想",
                              value: 700
                            },
                        ]
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
