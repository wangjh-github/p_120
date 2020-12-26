<template>
  <div>
    <el-row>
      <h2>一、关键节点选择结果</h2>
      <el-col :span="14">
      <div id="chart1" style="width:auto;height:600px;"></div>
      </el-col>
      <el-col :span="9">
        <div style="width:auto;height:600px;">
          <p style="font-size: 18px;font-weight:bold;">展示说明</p>
          <p style="font-size: 18px">数据集：在乱港事件下“莫雷不当言论”主题中，选取2019-10-18 00:00:00 到 2019-10-20 23:59:59 三天共计 4320 分钟的全部微博信息，共4765名用户参与，
            生成该网络的拓扑图如左图所示。</p>
          <p style="font-size: 18px">实现功能：重点考虑了社交网络信息传播的动态性特征，从中找到一批对传播过程有贡献并且易于引导的关键节点（红色用户），共50位。</p>
          <p style="font-size: 18px">节点选择准确率：</p>
          <p style="font-size: 18px">定义微博有被转发且粉丝数≥100的用户为合格节点;</p>
          <p style="font-size: 18px"> 节点选择准确率 = 关键节点中的合格节点 / 关键节点数;</p>
          <p style="font-size: 18px"> 50位关键节点用户中共有36位为合格节点，节点选择准确率为：72%</p>
        </div>
      </el-col>

    </el-row>
    <el-row>
      <h2>二、算法性能评估</h2>
      <el-col :span="12">
      <h3 style="text-align:center;">隔离50个最优节点后的仿真传播</h3>
        <div id="chart2" style="width:auto;height:700px;"></div>
      </el-col>

      <el-col :span="11">
      <h3 style="text-align:center;">关键节点选择算法效果</h3>
        <el-table
          :data="tableData1"
          border
          style="width: 100%">
          <el-table-column
            prop="ID"
            label="序号"
            width="90">
          </el-table-column>
          <el-table-column
            prop="Number"
            label="节点数目"
            width="120">
          </el-table-column>
          <el-table-column
            prop="v"
            label="𝛥(𝑣)"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Node_degree"
            label="节点度之和"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Node_decrease"
            label="传播节点减少量"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Benefit_cost"
            label="收益成本比率">
          </el-table-column>
        </el-table>
        <h3 style="text-align:center;">算法综合性能评估</h3>
        <el-table
          :data="tableData2"
          border
          style="width: 100%">
          <el-table-column
            prop="Method"
            label="节点选择方法"
            width="200">
          </el-table-column>
          <el-table-column
            prop="Earnings"
            label="隔离收益"
            width="180">
          </el-table-column>
          <el-table-column
            prop="Costs"
            label="隔离成本"
            width="170">
          </el-table-column>
          <el-table-column
            prop="Efficiency"
            label="效率"
            width="180">
          </el-table-column>
        </el-table>


      </el-col>

    </el-row>
    <el-row>
      <div style="margin-left:10%;margin-top:100px">
        <p style="font-size: 18px;font-weight:bold;">展示说明</p>
    <p style="font-size: 18px">隔离 50 个效率最优节点后，传播节点数目整体呈减少趋势，在传播结束的时刻，传播节点减少了 116 个。</p>
    <p style="font-size: 18px">与网络中其它四个节点度与关键节点集合𝑄中所有节点度之和相近的节点进行对比试验，最优效率法在隔离效率上远远高于单节点的隔离。</p>
    <p style="font-size: 18px">与几个经典算法作对比实验，考虑效率这个在引导过程中的关键因素，最有效率算法性能比其他方法更优。</p>
    </div>
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
          Method:'最优效率节点选择算法',
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
            orient: 'vertical',
            x:'10%',
            y:'5%',
            data: ['关键节点', '其它']
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




    },

    myEcharts2() {
      this.myChart2 = this.$echarts.init(document.getElementById('chart2'));
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
      function randomData0(m) {
        var time = new Date(then +m*oneminutes);

        return {
          name: time.toString(),
          value: [
            time,
            nodes0[m]
          ]
        };
      }

      var nodes0 =this.keynodes.nodes;
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
      var data0 = [];
      for (var m = 0; m < 4320; m++) {
        data0.push(randomData0(m));
      }

      this.option2 = {

        tooltip: {
          trigger: 'axis'
        },
        legend: {
          orient: 'vertical',
          x:'40%',
          y:'10%',
          data: ['最优效率法','节点123', '节点1088','节点302', '节点140'],
          borderWidth:1,
          borderColor: "rgba(26, 24, 24, 0.99)",
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
          max:120,
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: '最优效率法',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data0
          },
          {
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
      this.myChart2.setOption(this.option2)



    },





  },
  mounted() {
    this.keynodes = require('../../../static/Keynodes/nodes.json');
    this.connectioncase = require('../../../static/Keynodes/webkit-dep.json');
    this.myEcharts1();
    this.myEcharts2();
  }
}
</script>
<style>
</style>

