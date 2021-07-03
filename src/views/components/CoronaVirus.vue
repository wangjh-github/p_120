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
        </el-container>
        <el-main style="height: 1185px">
          <vueSeamlessScroll :data="hotTopicData" class="scroll" :class-option="classOption">
            <li v-for="(items, index) in hotTopicData" :key="index">
              <el-row>
                <el-col :span="3">
                  <div>
                    <a  @click="hrefClick(items.postUrl)">
                            <span v-if="items.postWebsite === '新浪微博'">
                                <img height="40px" width="40px"
                                     src="../../../static/image/weibo.png" alt="...">
                           </span>
                      <span v-else-if="items.postWebsite === '百度贴吧'">
                              <img height="50px" width="50px" src="../../../static/image/tieba.png"
                                   alt="...">
                           </span>
                      <span v-else-if="items.postWebsite === 'twitter'">
                                 <img height="35px" width="35px"
                                      src="../../../static/image/twitter.png" alt="...">
                           </span>
                      <span v-else>
                               <img height="35px" width="35px" src="/static/modules/displayboard/img/social-others.svg"
                                    alt="...">
                           </span>
                    </a>
                  </div>
                </el-col>
                <el-col :span="20">

                  <a @click="hrefClick(items.postUrl)" style="margin-top: 0px">
                    <span style="font-size:20px;white-space: normal">{{items.postTitle}}</span>
                  </a>
                  <p>
                    {{items.postTime}} 来自 {{items.postWebsite}}
                  </p>

                </el-col>
              </el-row>

            </li>
          </vueSeamlessScroll>
        </el-main>

      </el-col>


      <!--      <el-col :span="10">-->
      <!--        <el-container>-->
      <!--          <el-header>-->
      <!--            <p style="font-size: 18px;font-weight:bold;">相关贴子</p>-->
      <!--          </el-header>-->
      <!--          <el-main style="height: 1185px">-->
      <!--            <el-row :type="flex" justify="center" align="middle" style="height: 50px">-->
      <!--              <el-col :span="3">-->
      <!--                <div style="height: 15px;"></div>-->
      <!--                <img src="../../../static/image/weibo.png" style="aligh:middle;width:50px;margin: 0 auto;">-->
      <!--              </el-col>-->
      <!--              <el-col :span="21">-->
      <!--                <p style="font-size: 18px;">冒著被捕的危險，我們封鎖了中國駐華府大使館的入口，呼籲香港的人權與自由！#洪克</p>-->
      <!--              </el-col>-->
      <!--            </el-row>-->
      <!--            <el-row style="height: 50px">-->
      <!--              <el-col :span="3">-->
      <!--                <div style="height: 5px;"></div>-->
      <!--                <img src="../../../static/image/tieba.png" style="width:50px;margin: 0 auto;">-->
      <!--              </el-col>-->
      <!--              <el-col :span="21">-->
      <!--                <p style="font-size: 18px;">感謝湯姆·蘭德爾為支持香港而作的精彩作品</p>-->
      <!--              </el-col>-->
      <!--            </el-row>-->
      <!--            <el-row style="height: 50px">-->
      <!--              <el-col :span="3">-->
      <!--                <div style="height: 15px;"></div>-->
      <!--                <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">-->
      <!--              </el-col>-->
      <!--              <el-col :span="21">-->
      <!--                <p style="font-size: 18px;">Blocking the entrance to the Chinese Embassy in Wash, DC as we call for-->
      <!--                  human rights and freedom in HK! #HongKong ⁦@Stand_w</p>-->
      <!--              </el-col>-->
      <!--            </el-row>-->
      <!--            <el-row style="height: 50px">-->
      <!--              <el-col :span="3">-->
      <!--                <div style="height: 15px;"></div>-->
      <!--                <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">-->
      <!--              </el-col>-->
      <!--              <el-col :span="21">-->
      <!--                <p style="font-size: 18px;">民主主義のためのHKの戦いを支持してくれてありがとう🙏🏼我々の若い活動家は、単に投獄されます.</p>-->
      <!--              </el-col>-->
      <!--            </el-row>-->
      <!--            <el-row style="height: 50px">-->
      <!--              <el-col :span="3">-->
      <!--                <div style="height: 15px;"></div>-->
      <!--                <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">-->
      <!--              </el-col>-->
      <!--              <el-col :span="21">-->
      <!--                <p style="font-size: 18px;">@感谢您与香港站在一起。这是香港另一个悲伤的时刻。任何支持自由、人权、政治的人…</p>-->
      <!--              </el-col>-->
      <!--            </el-row>-->
      <!--            <el-row style="height: 50px">-->
      <!--              <el-col :span="3">-->
      <!--                <div style="height: 15px;"></div>-->
      <!--                <img src="../../../static/image/tieba.png" style="width:50px;margin: 0 auto;">-->
      <!--              </el-col>-->
      <!--              <el-col :span="21">-->
      <!--                <p style="font-size: 18px;">对于自由斗士——曼德拉、国王、刘晓波——来说，监狱是通往民主之路的必然和必要的一部分</p>-->
      <!--              </el-col>-->
      <!--            </el-row>-->
      <!--            <el-row style="height: 50px">-->
      <!--              <el-col :span="3">-->
      <!--                <div style="height: 15px;"></div>-->
      <!--                <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">-->
      <!--              </el-col>-->
      <!--              <el-col :span="21">-->
      <!--                <p style="font-size: 18px;">一名美国人今天加入人权游行，说香港人不仅为香港或自己而战，也为香港人争取人权</p>-->
      <!--              </el-col>-->
      <!--            </el-row>-->
      <!--            &lt;!&ndash; <el-row style="height: 50px">-->
      <!--            <el-col :span="3">-->
      <!--              <div style="height: 15px;"></div>-->
      <!--              <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">-->
      <!--            </el-col>-->
      <!--            <el-col :span="21">-->
      <!--              <p style="font-size: 18px;">不法行為逮捕、迫害された拷問、不必要なIを操作すること</p>-->
      <!--            </el-col>-->
      <!--            </el-row> &ndash;&gt;-->
      <!--            <el-row style="height: 50px">-->
      <!--              <el-col :span="3">-->
      <!--                <div style="height: 15px;"></div>-->
      <!--                <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">-->
      <!--              </el-col>-->
      <!--              <el-col :span="21">-->
      <!--                <p style="font-size: 18px;">@hk_watch why is hong kong giving up the fight for freedom? you are going to-->
      <!--                  be the new tibet at this rate</p>-->
      <!--              </el-col>-->
      <!--            </el-row>-->
      <!--            <el-row style="height: 50px">-->
      <!--              <el-col :span="3">-->
      <!--                <div style="height: 15px;"></div>-->
      <!--                <img src="../../../static/image/tieba.png" style="width:50px;margin: 0 auto;">-->
      <!--              </el-col>-->
      <!--              <el-col :span="21">-->
      <!--                <p style="font-size: 18px;">每一个旁观者都站在那里无助地看着溺水的女人，直到一个外国人来救她。它代表我…</p>-->
      <!--              </el-col>-->
      <!--            </el-row>-->
      <!--            <el-row style="height: 50px">-->
      <!--              <el-col :span="3">-->
      <!--                <div style="height: 15px;"></div>-->
      <!--                <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">-->
      <!--              </el-col>-->
      <!--              <el-col :span="21">-->
      <!--                <p style="font-size: 18px;">亲爱的，香港人，台湾人和韩国人，你觉得怎么样？如果拜登赢了，中国赢了，美国、香港、台湾、韩国将输。阿拉伯海湾</p>-->
      <!--              </el-col>-->
      <!--            </el-row>-->
      <!--            <el-row style="height: 50px">-->
      <!--              <el-col :span="3">-->
      <!--                <div style="height: 15px;"></div>-->
      <!--                <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">-->
      <!--              </el-col>-->
      <!--              <el-col :span="21">-->
      <!--                <p style="font-size: 18px;">感謝你們為香港的自由和民主所作的努力。希望他們能安全。上帝保佑他們…</p>-->
      <!--              </el-col>-->
      <!--            </el-row>-->
      <!--            <el-row style="height: 50px">-->
      <!--              <el-col :span="3">-->
      <!--                <div style="height: 15px;"></div>-->
      <!--                <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">-->
      <!--              </el-col>-->
      <!--              <el-col :span="21">-->
      <!--                <p style="font-size: 18px;">@frances_sit Thank you their effort for the freedom and democracy in-->
      <!--                  #HongKong. Hope they can be safe. God bless th…</p>-->
      <!--              </el-col>-->
      <!--            </el-row>-->
      <!--            <el-row style="height: 50px">-->
      <!--              <el-col :span="3">-->
      <!--                <div style="height: 15px;"></div>-->
      <!--                <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">-->
      <!--              </el-col>-->
      <!--              <el-col :span="21">-->
      <!--                <p style="font-size: 18px;">哥伦比亚广播公司今早的乔舒旺格夫、周廷格尼斯和伊凡兰都非常勇敢地为香港的自由而战，但是他们…</p>-->
      <!--              </el-col>-->
      <!--            </el-row>-->
      <!--            <el-row style="height: 50px">-->
      <!--              <el-col :span="3">-->
      <!--                <div style="height: 15px;"></div>-->
      <!--                <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">-->
      <!--              </el-col>-->
      <!--              <el-col :span="21">-->
      <!--                <p style="font-size: 18px;">@BarrySheerman CCP will never allow democracy.#HongKong is the best example-->
      <!--                  of why we should never trust China.Beijing will n…</p>-->
      <!--              </el-col>-->
      <!--            </el-row>-->
      <!--            <el-row style="height: 50px">-->
      <!--              <el-col :span="3">-->
      <!--                <div style="height: 15px;"></div>-->
      <!--                <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">-->
      <!--              </el-col>-->
      <!--              <el-col :span="21">-->
      <!--                <p style="font-size: 18px;">我在2015年去了香港，我发现自己很喜欢它，因为它有自由感。到底谁有一个钻井平台…</p>-->
      <!--              </el-col>-->
      <!--            </el-row>-->
      <!--            <el-row style="height: 50px">-->
      <!--              <el-col :span="3">-->
      <!--                <div style="height: 15px;"></div>-->
      <!--                <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">-->
      <!--              </el-col>-->
      <!--              <el-col :span="21">-->
      <!--                <p style="font-size: 18px;">@像許多其他被毆打、監禁和流放的香港年輕人一樣，他們的財務狀況也是神聖的…</p>-->
      <!--              </el-col>-->
      <!--            </el-row>-->

      <!--            <el-row style="height: 50px">-->
      <!--              <el-col :span="3">-->
      <!--                <div style="height: 15px;"></div>-->
      <!--                <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">-->
      <!--              </el-col>-->
      <!--              <el-col :span="21">-->
      <!--                <p style="font-size: 18px;">@違法な不法行為を操作しているchowtingagnes @ chowtingagnes＠racaconian元の植民地支配。</p>-->
      <!--              </el-col>-->
      <!--            </el-row>-->
      <!--            <el-row style="height: 50px">-->
      <!--              <el-col :span="3">-->
      <!--                <div style="height: 15px;"></div>-->
      <!--                <img src="../../../static/image/twitter.png" style="width:50px;margin: 0 auto;">-->
      <!--              </el-col>-->
      <!--              <el-col :span="21">-->
      <!--                <p style="font-size: 18px;">@business Every core value in HK is eroded by the regime and the new-->
      <!--                  National Security law. Reporters are losing freedom</p>-->
      <!--              </el-col>-->
      <!--            </el-row>-->
      <!--            <el-row style="height: 50px">-->
      <!--              <el-col :span="3">-->
      <!--                <div style="height: 15px;"></div>-->
      <!--                <img src="../../../static/image/weibo.png" style="width:50px;margin: 0 auto;">-->
      <!--              </el-col>-->
      <!--              <el-col :span="21">-->
      <!--                <p style="font-size: 18px;">看到香港这样我真的很难过！什么时候香港才能重新团结起来，重现辉煌</p>-->
      <!--              </el-col>-->
      <!--            </el-row>-->
      <!--          </el-main>-->
      <!--        </el-container>-->
      <!--      </el-col>-->

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

    import vueSeamlessScroll from 'vue-seamless-scroll'

    export default {
        components: {
            vueSeamlessScroll
        },
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
        methods:{
            hrefClick: function (url) {
                // window.location.href = url;
                window.open(url);
            }
        },

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
                hotTopicData: [],
                classOption: {
                    step: 0.5, // 数值越大速度滚动越快
                    limitMoveNum: 10, // 开始无缝滚动的数据量 this.dataList.length
                    hoverStop: true, // 是否开启鼠标悬停stop
                    direction: 1, // 0向下 1向上 2向左 3向右
                    openWatch: true, // 开启数据实时监控刷新dom
                    singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
                    singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
                    waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
                },
                echarts05Data: [],
                chart: null,
                word_cloud: []
            };
            // activeName: 'first'
        },
        mounted() {
            this.hotTopicData = require('../../../static/display/yiqing_post.json');
            this.word_cloud = require('../../../static/display/yiqing_wordcloud.json');

            let echarts = require("echarts");
            // let echarts = $echarts;
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
                    data: ['微博', 'twitter', '贴吧']
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
                            {value: 29473, name: '微博'},
                            {value: 26748, name: 'twitter'},
                            {value: 18403, name: '贴吧'}
                        ],
                        // fontSize:100,
                        label:{
                          fontSize:20,
                            color:'#000',
                        },
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
                        mark: {show: true},
                        dataView: {show: true, readOnly: true, buttonColor: '#4682B4'},
                        magicType: {
                            show: true,
                            type: ['pie', 'funnel']
                        },
                        //restore: { show: true },
                        saveAsImage: {show: true},
                    }
                },
                series: [{
                    name: '整体词云图',
                    type: 'wordCloud',
                    gridSize: 10,
                    shape: 'square',
                    left: 'center',
                    top: 'center',
                    width: '100%',
                    height: '100%',
                    right: null,
                    bottom: null,

                    sizeRange: [20, 50],
                    //size: ['80%', '80%'],
                    rotationRange: [0, 45],
                    rotationStep: 45,
                    textPadding: 0,
                    autoSize: {
                        enable: true,
                        minSize: 30
                    },

                    textStyle: {
                        normal: {
                            color: function () {
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

                    data: this.word_cloud
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

  .scroll {
    height: 100%;
    overflow: hidden;
    padding: 0 1rem;
    box-sizing: border-box;
  }

  .scroll li {
    width: 100%;
    overflow: hidden;
    display: block;
  }

  .scroll li a {
    font-size: 20px;
    color: #000000;
    /*height: 2.6vh;*/
    /*line-height: 2.6vh;*/
    text-decoration: none;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    /*width: calc(100% - 8vw);*/
    white-space: nowrap;
    vertical-align: middle;
  }

  .scroll li a:hover {
    text-decoration: underline;
  }

  .scroll li .time {
    font-size: .8vw;
    display: inline-block;
    width: 8vw;
    vertical-align: middle;
    color: #9599a0 !important;
    height: 2.6vh;
    line-height: 2.6vh;
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
