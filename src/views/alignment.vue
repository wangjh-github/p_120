<template>
  <div style="text-align: left">
    <div id="title">
      <h1 style="font-weight: normal; font-size: 170%; margin: 0; padding: 0">
        {{$route.name}}
      </h1>
    </div>
    <div id="page" style="
        height: 800;
        margin-top: 20px;
        padding: 20px 20px 5px 20px;
        background: #ffffff;
        text-align: left;
      ">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-container>
          <el-aside width="55%" style>
            <div id="evaluation_chart" style="
                text-align: center;
                width: auto;
                margin-top: 20px;
                margin-bottom: 15px;
                width: 100%;
                height: 650px;
              ">
              <div id="main1" style="width: 600px; height: 500px; display: inline-block"></div>
              <div id="main2" style="
                  width: 600px;
                  height: 120px;
                  line-height: 120px;
                  display: inline-block;
                ">
                <el-button v-on:click="run_alignment" type="primary" round>开始匹配</el-button>
              </div>
            </div>
          </el-aside>
          <el-main width="45%" style>
            <div id style="
                text-align: center;
                width: 90%;
                height: 130px;
                font-size: 18px;
              ">
              <p id="twi_cnt_node">Twitter敏感用户数: 111</p>
              <p id="fb_cnt_node">Facebook敏感用户数: 47</p>
              <p id="ins_cnt_node">Instagram敏感用户数: 40</p>
            </div>

            <div id style="text-align: center; width: 90%; height: 140px">
              <p id="twi_fb_cnt_gnd" style="font-size: 18px">
                Twitter-Facebook匹配准确度
              </p>
              <el-progress width="80" type="circle" :percentage="this.percentage_twi_fb"></el-progress>
            </div>

            <div id style="text-align: center; width: 90%; height: 140px">
              <p id="twi_ins_cnt_gnd" style="font-size: 18px">
                Twitter-Instagram匹配准确度
              </p>
              <el-progress width="80" type="circle" :percentage="percentage_twi_ins"></el-progress>
            </div>

            <div id style="text-align: center; width: 90%; height: 140px">
              <p id="ins_fb_cnt_gnd" style="font-size: 18px">
                Instagram-Facebook匹配准确度
              </p>
              <el-progress width="80" type="circle" :percentage="percentage_ins_fb"></el-progress>
            </div>
          </el-main>
        </el-container>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import { Loading } from "element-ui";
  import { Message } from "element-ui";

  let options_message_err = {
    message: "计算错误，请稍后重试！",
  };
  let options_message_emp = {
    message: "各模态数据不可都为零！",
  };
  let options_load = {
    lock: true,
    text: "计算中...",
    target: document.getElementById("main1"),
  };

  export default {
    name: "Echarts",
    data() {
      return {
        activeName: "aaa",
        percentage_twi_fb: 0,
        percentage_twi_ins: 0,
        percentage_ins_fb: 0,
      };
    },
    methods: {
      run_alignment: function ($this) {
        let echarts = require("echarts");
        let myChart = echarts.init(document.getElementById("main1"));
        let percentage_twi_fb_copy = 0;
        let percentage_twi_ins_copy = 0;
        let percentage_ins_fb_copy = 0;
        $.ajaxSettings.async = false;
        $.getJSON(
          "../../static/json/alignment_result.json",
          function (graph) {
            percentage_twi_ins_copy = (graph.precision[0] * 100).toFixed(2); // ins_fb_precision
            percentage_ins_fb_copy = (graph.precision[1] * 100).toFixed(2); // twitter_fb_precision
            percentage_twi_fb_copy = (graph.precision[2] * 100).toFixed(2); //twitter_ins_precision




            document.getElementById("twi_cnt_node").innerHTML =
              "Twitter敏感用户数: " + graph.cnt_node[0].toString();
            document.getElementById("fb_cnt_node").innerHTML =
              "Facebook敏感用户数: " + graph.cnt_node[2].toString();
            document.getElementById("ins_cnt_node").innerHTML =
              "Instagram敏感用户数: " + graph.cnt_node[1].toString();


            document.getElementById("twi_ins_cnt_gnd").innerHTML =
              "Twitter-Instagram匹配准确度(" +
              graph.cnt_gnd[0].toString() +
              "对)";
            document.getElementById("ins_fb_cnt_gnd").innerHTML =
              "Instagram-Facebook匹配准确度(" +
              graph.cnt_gnd[1].toString() +
              "对)";
            document.getElementById("twi_fb_cnt_gnd").innerHTML =
              "Twitter-Facebook匹配准确度(" +
              graph.cnt_gnd[2].toString() +
              "对)";


            myChart.hideLoading();
            graph.nodes.forEach(function (node) {
              node.label = {
                show: node.symbolSize > 30,
              };
            });
            let option = {
              tooltip: {
                trigger: "item",
                formatter: function(datas) 
                {
                    console.log(datas.data.name)
                    var res = '用户名: ' + datas.data.name + '<br/>';
                    res += '地址: ' + datas.data.url + '<br/>';
                    res += '性别: ' + datas.data.gender + '<br/>';
                    res += '常驻地: ' + datas.data.location + '<br/>';
                    return res;
                 }
              },
              legend: [
                {
                  // selectedMode: 'single',
                  data: graph.categories.map(function (a) {
                    return a.name;
                  }),
                },
              ],
              animationDuration: 1500,
              animationEasingUpdate: "quinticInOut",
              series: [
                {
                  type: "graph",
                  layout: "none",
                  data: graph.nodes,
                  links: graph.links,
                  categories: graph.categories,
                  focusNodeAdjacency: true,
                  itemStyle: {
                    borderColor: "#fff",
                    borderWidth: 1,
                    shadowBlur: 10,
                    shadowColor: "rgba(0, 0, 0, 0)",
                  },
                  roam: true,
                  label: {
                    position: "right",
                    formatter: "{b}",
                  },
                  lineStyle: {
                    color: "source",
                    curveness: 0.3,
                  },
                  emphasis: {
                    focus: "adjacency",
                    lineStyle: {
                      width: 10,
                    },
                  },
                },
              ],
            };

            myChart.setOption(option);
          }
        );
        this.percentage_twi_fb = percentage_twi_fb_copy;
        this.percentage_twi_ins = percentage_twi_ins_copy;
        this.percentage_ins_fb = percentage_ins_fb_copy;
      },
    },
    mounted() {
      Message.closeAll();

      let echarts = require("echarts");
      let myChart = echarts.init(document.getElementById("main1"));
      myChart.showLoading();
      $.getJSON(
        "../../static/json/alignment_result.json",
        function (graph) {
          document.getElementById("twi_cnt_node").innerHTML =
            "Twitter敏感用户数: " + graph.cnt_node[0].toString();
          document.getElementById("fb_cnt_node").innerHTML =
            "Facebook敏感用户数: " + graph.cnt_node[2].toString();
          document.getElementById("ins_cnt_node").innerHTML =
            "Instagram敏感用户数: " + graph.cnt_node[1].toString();

          document.getElementById("twi_fb_cnt_gnd").innerHTML =
            "Twitter-Facebook匹配准确度(" + graph.cnt_gnd[2].toString() + "对)";
          document.getElementById("ins_fb_cnt_gnd").innerHTML =
            "Instagram-Facebook匹配准确度(" +
            graph.cnt_gnd[1].toString() +
            "对)";
          document.getElementById("twi_ins_cnt_gnd").innerHTML =
            "Twitter-Instagram匹配准确度(" +
            graph.cnt_gnd[0].toString() +
            "对)";
          myChart.hideLoading();
          console.log(graph);
          graph.nodes.forEach(function (node) {
            node.label = {
              show: node.symbolSize > 30,
            };
          });
          let option = {
            tooltip: {},
            legend: [
              {
                // selectedMode: 'single',
                data: graph.categories.map(function (a) {
                  return a.name;
                }),
              },
            ],
            animationDuration: 1500,
            animationEasingUpdate: "quinticInOut",
            series: [
              {
                type: "graph",
                layout: "none",
                data: graph.nodes,
                links: "none",
                categories: graph.categories,
                itemStyle: {
                  borderColor: "#fff",
                  borderWidth: 1,
                  shadowBlur: 10,
                  shadowColor: "rgba(0, 0, 0, 0)",
                },
                roam: true,
                label: {
                  position: "right",
                  formatter: "{b}",
                },
                lineStyle: {
                  color: "source",
                  curveness: 0.3,
                },
                emphasis: {
                  focus: "adjacency",
                  lineStyle: {
                    width: 10,
                  },
                },
              },
            ],
          };

          myChart.setOption(option);
        }
      );
      myChart.on("click", function (param) {
        console.log(param.data.url); //打印查看获取到的数据
        if (param.data.url != "www.baidu.com") {
          window.open(param.data.url);
        }
      });
    },
  };
</script>
