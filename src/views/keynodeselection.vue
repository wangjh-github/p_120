<template>
  <div id="analysis" style="text-align:left;">
    <div id="title">
      <h1>{{$route.name}}</h1>
    </div>
    <div id="page">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="功能说明" name="first">
          <Keynodes_function v-if="'first' === activeName"></Keynodes_function>
        </el-tab-pane>
        <el-tab-pane label="效果展示" name="second">
          <el-dropdown trigger="click" @command="handleCommand">
            <el-button type="primary">
              <div id='data_lable' style="font-size: 18px">关键节点选择方法<i class='el-icon-arrow-down el-icon--right'></i></div>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a" style="font-size: 18px">最优效率节点选择算法</el-dropdown-item>
              <el-dropdown-item command="b" style="font-size: 18px">基于动态隔离策略的节点选择</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div v-if="data_type == 'a'">
            <Keynodes_method1></Keynodes_method1>
          </div>
          <div v-if="data_type == 'b'" style="margin-top:30px">
            <Keynodes_method2></Keynodes_method2>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import Keynodes_function from './components/Keynodes_function'

import Keynodes_method1 from "./components/Keynodes_method1";
import Keynodes_method2 from "./components/Keynodes_method2";


export default {
  components: {
    "Keynodes_function": Keynodes_function,

    "Keynodes_method1":Keynodes_method1,
    "Keynodes_method2":Keynodes_method2,

  },
  name: 'Echarts',
  data() {
    return {
      activeName: 'first',
      data_type: 'a'
    };
  },
  /*  watch:{
       activeName(val, oldVal){//普通的watch监听
           console.log("activeName: "+val, oldVal);
           if(this.activeName =='first'){
            console.log("aaaaaaaaaaa");
            this.myEcharts1();
           }
       }
     },*/
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
  height: 3000px;
  margin-top: 20px;
  padding: 20px 20px 5px 20px;
  background: #FFFFFF;
  text-align: left;
}

</style>
