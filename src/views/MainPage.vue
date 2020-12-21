<template>
  <div id="analysis" style="text-align:left;">
    <div>
      <div id="title">
        <h1>主页</h1>
      </div>
      <div id="page">
        <div style="text-align:center; font-size:30px; height: 100px">
          <h1>敏感用户全息画像构建及个性化引导</h1>
        </div>
        <div style="margin-top: 10%">
          <el-row :gutter="20" style="margin-left: 5%; margin-right: 5%">
            <el-col :span="8">
              <div style="text-align: center; border-radius: 4px;">
                <img src="../../static/image/main1.png" style="width:100px;margin: 0 auto;">
              </div>
            </el-col>

            <el-col :span="8">
              <div style="text-align: center; border-radius: 4px;">
                <img src="../../static/image/main2.png" style="width:90px;margin: 0 auto;">
              </div>

            </el-col>

            <el-col :span="8">
              <div style="text-align: center; border-radius: 4px;">
                <img src="../../static/image/main3.png" style="width:60px;margin: 0 auto;">
              </div>

            </el-col>
          </el-row>
          <el-row :gutter="20" style="margin-left: 5%; margin-right: 5%">
            <el-col :span="8">
              <router-link to="/alignment">
                <div style="text-align: center; padding: 0 50px">
                  <h3 style="font-size:20px;">
                    网络用户对齐
                  </h3>
                  <p>
                    深度挖掘不同网络平台的用户信息，提供跨平台、跨领域敏感的用户身份对齐服务
                  </p>
                </div>
              </router-link>
            </el-col>

            <el-col :span="8">
              <router-link to="/keynodeselection">
                <div style="text-align: center; padding: 0 50px">
                  <h3 style="font-size:20px;">
                    关键节点选择
                  </h3>
                  <p>
                    通过新闻传播机制和事件传播机制，深度分析节点在舆情事件中扮演的角色，筛选关键节点
                  </p></div>
              </router-link>
            </el-col>

            <el-col :span="8">
              <router-link to="/Interventionplan">
                <div style="text-align: center; padding: 0 50px">
                  <h3 style="font-size:20px;">
                    文本生成及发送
                  </h3>
                  <p>
                    针对特定的用户和舆情事件，实现 “因人、因时、因势、因事” 的自动化文本生成与发送
                  </p></div>
              </router-link>
            </el-col>

          </el-row>
        </div>

        <!--        <el-tabs v-model="activeName" @tab-click="handleClick">-->
        <!--          <el-tab-pane label="系统简介" name="system_introduction">-->
        <!--            <h2 style="margin-left:20px">系统三大功能</h2>-->
        <!--            <div class="block" style="width:80%">-->
        <!--              <el-timeline>-->
        <!--                <el-timeline-item placement="top">-->
        <!--                  <el-card>-->
        <!--                    <h3 style="font-size: 18px">敏感用户全息画像构建</h3>-->
        <!--                    <p style="font-size: 18px">网络结构和表示学习相结合的高效身份识别算法</p>-->
        <!--                  </el-card>-->
        <!--                </el-timeline-item>-->
        <!--                <el-timeline-item placement="top">-->
        <!--                  <el-card>-->
        <!--                    <h3 style="font-size: 18px">关键节点选择</h3>-->
        <!--                    <p style="font-size: 18px">融合新闻传播机制的关键节点选择算法和融合时间传播规律的关键节点选择算法</p>-->
        <!--                  </el-card>-->
        <!--                </el-timeline-item>-->
        <!--                <el-timeline-item placement="top">-->
        <!--                  <el-card>-->
        <!--                    <h3 style="font-size: 18px">文本生成</h3>-->
        <!--                    <p style="font-size: 18px">“因人、因时、因势、因事”的文本生成算法</p>-->
        <!--                  </el-card>-->
        <!--                </el-timeline-item>-->
        <!--                </el-timeline>-->
        <!--            </div>-->
        <!--          </el-tab-pane>-->
        <!--          <el-tab-pane label="系统架构图" name="system_structure">-->
        <!--            <h2 style="margin-left:40%">动静结合、层次化、组件式设计</h2>-->
        <!--            <img src="../../static/image/system-design.jpg" style="width: 1120px; height:556px; margin-left:15%"></img>-->
        <!--            <h2 style="margin-left:40%">多模态用户认知干预系统架构</h2>-->
        <!--          </el-tab-pane>-->

        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>

    export default {
        name: 'analysis',

        data() {
            return {
                tab: 0, //默认选中第一个tab
                activeName: 'system_introduction',
                data_type: 'a'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },

            handleCommand(command) {
                this.data_type = command;
                if (command == 'a') {
                    document.getElementById("data_lable").innerHTML = "EEG数据源<i class='el-icon-arrow-down el-icon--right'></i>";
                } else if (command == 'b') {
                    document.getElementById("data_lable").innerHTML = "用户情感数据源<i class='el-icon-arrow-down el-icon--right'></i>";
                }

            }
        }
    };

</script>
<style>
  .el-tabs__item {
    font-size: 18px;
  }
</style>
<style scoped>
  #title h1 {
    font-weight: normal;
    font-size: 170%;
    margin: 0;
    padding: 0;
  }

  #page {
    height: 800px;
    margin-top: 20px;
    padding: 20px 20px 5px 20px;
    background: #FFFFFF;
    text-align: left;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .el-col {
    border-radius: 4px;
  }

  .router-link-active {
    color: blue;
    font-weight: 800;
    font-style: italic;
    font-size: 80px;
    text-decoration: underline;
    background-color: green;
  }
</style>
