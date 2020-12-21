<template>
  <div>
    <el-row>
      <h2>一、关键节点选择结果</h2>
      <div id="chart1" style="width:auto;height:600px;"></div>
      <div style="margin-left:25%;width:850px">
      <p style="font-size: 18px;font-weight:bold;">展示说明</p>
      <p style="font-size: 18px">定义被转发数≥1且粉丝数>100的用户为合格节点</p>
      <p style="font-size: 18px"></p>
        <p style="font-size: 18px"> 本方法节点选择准确率为：72%</p></div>
    </el-row>
    <el-row>
      <h2>二、隔离所选关键节点后的仿真传播</h2>
      <el-col :span="12">
      <h2 style="text-align:center;">隔离50个最优节点后的仿真传播</h2>
        <div id="chart2" style="width:auto;height:600px;"></div>
      </el-col>
      <el-col :span="12">
      <h2 style="text-align:center;">与其它节点度相近节点对比</h2>
        <div id="chart3" style="width:auto;height:600px;"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-table
        :data="tableData1"
        border
        style="width: 100%">
        <el-table-column
          prop="ID"
          label="序号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="Number"
          label="节点数目"
          width="180">
        </el-table-column>
        <el-table-column
          prop="v"
          label="𝛥(𝑣)"
          width="180">
        </el-table-column>
        <el-table-column
          prop="Node_degree"
          label="节点度之和"
          width="180">
        </el-table-column>
        <el-table-column
          prop="Node_decrease"
          label="传播节点减少量"
          width="180">
        </el-table-column>
        <el-table-column
          prop="Benefit_cost"
          label="收益成本比率">
        </el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <h2>三、算法综合性能评估</h2>
      <el-table
        :data="tableData2"
        border
        style="width: 100%">
        <el-table-column
          prop="Method"
          label="节点选择方法"
          width="180">
        </el-table-column>
        <el-table-column
          prop="Earnings"
          label="隔离收益"
          width="180">
        </el-table-column>
        <el-table-column
          prop="Costs"
          label="隔离成本"
          width="180">
        </el-table-column>
        <el-table-column
          prop="Efficiency"
          label="效率"
          width="180">
        </el-table-column>
      </el-table>
    </el-row>

  </div>
</template>

<script>

export default {

  data(){
    return{
      option1:'',
      myChart1:'',
      option2:'',
      myChart2:'',
      option3:'',
      myChart3:'',
      keynodes:'',
      connectioncase:'',

      tableData1: [
        {
        ID:'1',
        Number:'50(Q)',
        v:'+3.86',
        Node_degree:'144',
        Node_decrease:'116',
        Benefit_cost:0.81
      },
        {
      ID:'2',
      Number:'1(140)',
      v:'-1.88',
      Node_degree:'168',
      Node_decrease:'5',
      Benefit_cost:'0.03'
    },
        {
      ID:'3',
      Number:'1(302)',
      v:'-1.75',
      Node_degree:'143',
      Node_decrease:'6',
      Benefit_cost:'0.04'
    },
    {
      ID:'4',
      Number:'1(1088',
      v:'-1.58',
      Node_degree:'133',
      Node_decrease:'7',
      Benefit_cost:'0.05'
    },
    {
      ID:'5',
      Number:'1(123)',
      v:'-1.12',
      Node_degree:'72',
      Node_decrease:'35',
      Benefit_cost:'0.49',
    },],
      tableData2:[
        {
          Method:'DC',
          Earnings:'2599',
          Costs:'13355',
          Efficiency:'0.26'
        },
        {
          Method:'BC',
          Earnings:'1573',
          Costs:'10007',
          Efficiency:'0.15'
        },
        {
          Method:'CC',
          Earnings:'2918',
          Costs:'10777',
          Efficiency:'0.22'
        },

        {
          Method:'PageRank',
          Earnings:'2954',
          Costs:'12469',
          Efficiency:'0.24'
        },
        {
          Method:'DegreeDiscount',
          Earnings:'880',
          Costs:'1392',
          Efficiency:'0.63'
        },
        {
          Method:'朴素贪心算法',
          Earnings:'1042',
          Costs:'5825',
          Efficiency:'0.18'
        },
        {
          Method:'本章方法',
          Earnings:'116',
          Costs:'144',
          Efficiency:'0.81'
        },
      ]
    }
  },
  methods:{
    myEcharts1() {

      this.myChart1 = this.$echarts.init(document.getElementById('chart1'));
      this.myChart1.showLoading();

      this.myChart1.hideLoading();

        this.option1 = {
          legend: {
            data: [ ]
          },
          series: [{
            type: 'graph',
            layout: 'force',
            animation: false,
            label: {
              position: 'right',
              formatter: '{b}'
            },
            draggable: true,
            data: this.connectioncase.nodes.map(function (node, idx) {
              node.id = idx;
              return node;
            }),
            categories: this.connectioncase.categories,
            force: {
              edgeLength: 5,
              repulsion: 20,
              gravity: 0.2
            },
            edges: this.connectioncase.links
          }]
        };

        this.myChart1.setOption(this.option1);
      // console.log('检查chart1');



    },

    myEcharts2() {
      this.myChart2 = this.$echarts.init(document.getElementById('chart2'));
      function randomData(i) {
        now = new Date(+now +oneminute);

        return {
          name: now.toString(),
          value: [
            now,
            nodes[i]
          ]
        };
      }
      var nodes = this.keynodes.nodes;
      var data = [];
      var oneminute = 60000;
      var now = +new Date(2019, 9, 18,0,0);

      for (var i = 0; i < 4320; i++) {
        data.push(randomData(i));
      }

      this.option2 = {
        title: {
          text: '隔离50个最优节点后的仿真传播'
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getFullYear() + '/' + (date.getMonth() + 1) + '/'+ date.getDate() + '/' + date.getHours()  + '/' + date.getMinutes()+ ' : ' + params.value[1];
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          name: '时间',
          type: 'time',
          splitLine: {
            show: false
          }
        },
        yAxis: {
          name:'传播节点的减少量',
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          }
        },
        series: [{
          name: '模拟数据',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: data
        }]
      };
      this.myChart2.setOption(this.option2)

    },

    myEcharts3() {
      this.myChart3 = this.$echarts.init(document.getElementById('chart3'));
      function randomData1(n) {
        var time = new Date(then +n*oneminutes);

        return {
          name: time.toString(),
          value: [
            time,
            nodes1[n]
          ]
        };
      }
      function randomData2(j) {
        var time = new Date(then +j*oneminutes);

        return {
          name: time.toString(),
          value: [
            time,
            nodes2[j]
          ]
        };
      }
      function randomData3(k) {
        var time = new Date(then +k*oneminutes);

        return {
          name: time.toString(),
          value: [
            time,
            nodes3[k]
          ]
        };
      }
      function randomData4(l) {
        var time = new Date(then +l*oneminutes);

        return {
          name: time.toString(),
          value: [
            time,
            nodes4[l]
          ]
        };
      }

      var nodes1 =this.keynodes.nodes1;
      var nodes2 =this.keynodes.nodes2;
      var nodes3 =this.keynodes.nodes3;
      var nodes4 =this.keynodes.nodes4;

      var data1 = [];
      var oneminutes = 60000;
      var then = +new Date(2019, 9, 18,0,0);


      for (var n = 0; n < 4320; n++) {
        data1.push(randomData1(n));
      }

      var data2 = [];
      for (var j = 0; j < 4320; j++) {
        data2.push(randomData2(j));
      }

      var data3 = [];
      for (var k = 0; k < 4320; k++) {
        data3.push(randomData3(k));
      }

      var data4 = [];
      for (var l = 0; l < 4320; l++) {
        data4.push(randomData4(l));
      }

      this.option3 = {
        title: {
          text: '对比四组节点隔离仿真结果'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['节点123', '节点1088','节点302', '节点140']
        },
        xAxis: {
          name: '时间',
          type: 'time',
          splitLine: {
            show: false
          },
          axisLine: {onZero: false}
        },
        yAxis: {
          name:'传播节点的减少量',
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          }
        },
        series: [{
          name: '节点123',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: data1
        },
          {
            name: '节点1088',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data2
          },
          {
            name: '节点302',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data3
          },
          {
            name: '节点140',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data4
          }
        ]
      };
      this.myChart3.setOption(this.option3)



    },





  },
  mounted() {

    this.keynodes = require('../../../static/Keynodes/nodes.json');
    this.connectioncase = require('../../../static/Keynodes/webkit-dep.json');
    this.myEcharts1();
    this.myEcharts2();
    this.myEcharts3();
    // console.log('检查');

  }
}
</script>
<style>
</style>

