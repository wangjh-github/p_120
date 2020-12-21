<template>
  <div id="analysis" style="text-align:left;">
    <div>
      <div id="title">
        <h1>主页</h1>
      </div>
      <div id="page">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="系统简介" name="system_introduction">
            <h2 style="margin-left:20px">系统三大功能</h2>
            <div class="block" style="width:80%">
              <el-timeline>
                <el-timeline-item placement="top">
                  <el-card>
                    <h3 style="font-size: 18px">敏感用户全息画像构建</h3>
                    <p style="font-size: 18px">网络结构和表示学习相结合的高效身份识别算法</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item placement="top">
                  <el-card>
                    <h3 style="font-size: 18px">关键节点选择</h3>
                    <p style="font-size: 18px">融合新闻传播机制的关键节点选择算法和融合时间传播规律的关键节点选择算法</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item placement="top">
                  <el-card>
                    <h3 style="font-size: 18px">文本生成</h3>
                    <p style="font-size: 18px">“因人、因时、因势、因事”的文本生成算法</p>
                  </el-card>
                </el-timeline-item>
                </el-timeline>
            </div>
          </el-tab-pane>
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
  height: 1400px;
  margin-top: 20px;
  padding: 20px 20px 5px 20px;
  background: #FFFFFF;
  text-align: left;
}

</style>
