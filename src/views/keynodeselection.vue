<template>
  <div id="analysis" style="text-align:left;">
    <div id="title">
      <h1>{{$route.name}}</h1>
    </div>
    <div id="page">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="方法一：最优效率节点选择算法" name="first">
          <keynodes_method1 v-if="'first' === activeName"></keynodes_method1>
        </el-tab-pane>
        <el-tab-pane label="方法二：基于动态隔离策略的节点选择" name="second">
          <keynodes_method2 v-if="'second' === activeName"></keynodes_method2>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>


import Keynodes_method1 from "./components/Keynodes_method1";
import Keynodes_method2 from "./components/Keynodes_method2";


export default {
  components: {


    "Keynodes_method1":Keynodes_method1,
    "Keynodes_method2":Keynodes_method2,

  },
  name: 'Echarts',
  data() {
    return {
      activeName: 'first',

    };
  },
  methods: {


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
