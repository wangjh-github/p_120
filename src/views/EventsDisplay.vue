<template>
  <div id="analysis" style="text-align:left;">
    <div id="title">
      <h1>{{$route.name}}</h1>
    </div>
    <div id="page">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="乱港事件" name="first">

          <LuanGang v-if="'first' === activeName"></LuanGang>
        </el-tab-pane>
        <el-tab-pane label="美国大选" name="second">
          <Election v-if="'second' === activeName"></Election>
        </el-tab-pane>
        <el-tab-pane label="考研" name="third">
          <Kaoyan v-if="'third' === activeName"></Kaoyan>
<!--          <Keynodes_function v-if="'first' === activeName"></Keynodes_function>-->
        </el-tab-pane>
        <el-tab-pane label="新冠疫情" name="fourth">
          <CoronaVirus v-if="'fourth' === activeName"></CoronaVirus>
<!--          <Keynodes_function v-if="'first' === activeName"></Keynodes_function>-->
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Keynodes_function from './components/Keynodes_function'

import Keynodes_method1 from "./components/Keynodes_method1";
import Keynodes_method2 from "./components/Keynodes_method2";
import LuanGang from "./components/LuanGang";
import Election from "./components/Election";
import Kaoyan from "./components/Kaoyan";
import CoronaVirus from "./components/CoronaVirus";

export default {
  components: {
    "Keynodes_function": Keynodes_function,

    "Keynodes_method1":Keynodes_method1,
    "Keynodes_method2":Keynodes_method2,
    "LuanGang":LuanGang,
    "Election":Election,
    "Kaoyan":Kaoyan,
    "CoronaVirus":CoronaVirus

  },
  name: 'Echarts',
  data() {
    return {
      activeName: 'first',
      data_type: 'a',
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleCommand(command) {
      this.data_type = command;
      if (command == 'a') {
        document.getElementById("data_lable").innerHTML = "最优效率节点选择算法<i class='el-icon-arrow-down el-icon--right'></i>";
      } else if (command == 'b') {
        document.getElementById("data_lable").innerHTML = "基于动态隔离策略的节点选择<i class='el-icon-arrow-down el-icon--right'></i>";
      }

    }

  },
  mounted() {

  }
};

</script>
<style scoped>
#title h1 {
  font-weight: normal;
  font-size: 170%;
  margin: 0;
  padding: 0;
}

#page {
  height: 2500px;
  margin-top: 20px;
  padding: 20px 20px 5px 20px;
  background: #FFFFFF;
  text-align: left;
}

</style>
