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
          <p style="font-size: 18px">数据集：采用本方法在自构建的微博数据集和其它公开的社交网络数据集进行试验。NetGRQC 是来自斯坦福的社交数据集网页，它摘取自 arXiv 广义相对论和量子宇宙学部分；
            NetHepTh 协作网络来自电子版 arXiv，包含了提交给高能物理-理论类别的论文之间的科学合作关系。</p>
          <p style="font-size: 18px">实现功能：采用动态隔离法，每次隔离50个节点，在50个传播周期中，隔离间隔10个周期，共计隔离250个节点，在微博数据集中去掉重复节点后为154个节点。</p>
          <p style="font-size: 18px">节点选择准确率：</p>
          <p style="font-size: 18px"> 微博数据集下154位关键节点用户中共有128位为合格节点，节点选择准确率为：83.1%</p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <h2>二、不同隔离策略下的仿真传播</h2>
      <el-col :span="8">
        <div id="chart2" style="width:500px;height:500px;"></div>
      </el-col>
      <el-col :span="8">
        <div id="chart3" style="width:500px;height:500px;"></div>
      </el-col>
      <el-col :span="8">
        <div id="chart4" style="width:500px;height:500px;"></div>
      </el-col>
    </el-row>
    <el-row>
      <h2 style="text-align:center;">四种隔离策略的平均隔离成本表</h2>
      <el-table
        :data="tableData1"
        border
        style="width: 100%">
        <el-table-column
          prop="DS"
          label="数据集"
          width="180">
        </el-table-column>
        <el-table-column
          prop="MaxDegree"
          label="最大度"
          width="180">
        </el-table-column>
        <el-table-column
          prop="Random"
          label="随机隔离"
          width="180">
        </el-table-column>
        <el-table-column
          prop="Evolution"
          label="进化"
          width="180">
        </el-table-column>
        <el-table-column
          prop="Dynamic_iso"
          label="动态隔离"
          width="180">
        </el-table-column>
        <el-table-column
          prop="Dynamic_iso_de"
          label="动态隔离（去重节点）">
        </el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <h2>三、节点选择算法性能评估</h2>
      <p>期望传播范围LIE对比:评估节点在网络中的传播能力.</p>
      <el-col :span="8">
        <div id="chart5" style="width:500px;height:500px;"></div>
      </el-col>
      <el-col :span="8">
        <div id="chart6" style="width:500px;height:500px;"></div>
      </el-col>
      <el-col :span="8">
        <div id="chart7" style="width:500px;height:500px;"></div>
      </el-col>
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
      option4:'',
      myChart4:'',
      option5:'',
      myChart5:'',
      option6:'',
      myChart6:'',
      option7:'',
      myChart7:'',
      option8:'',
      myChart8:'',
      tableData1: [
        {
          DS:'Weibo',
          MaxDegree:'466.30',
          Random:'3.38',
          Evolution:'332.06',
          Dynamic_iso:'324.57',
          Dynamic_iso_de:'44.91'
        },
        {
          DS:'NetGROC',
          MaxDegree:'53.42',
          Random:'5.97',
          Evolution:'39.50',
          Dynamic_iso:'31.65',
          Dynamic_iso_de:'10.85'
        },
        {
          DS:'NetHepTh',
          MaxDegree:'43.90',
          Random:'5.20',
          Evolution:'40.45',
          Dynamic_iso:'34.89',
          Dynamic_iso_de:'15.35'
        },

      ],
    
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
      this.option2 = {
        title: {
          text: 'Weibo数据集（传播率0.005，隔离数50）'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          orient: 'vertical',
          x:'80%',
          y:'5%',
          borderWidth:1,
          borderColor: "rgba(26, 24, 24, 0.99)",
          data: ['进化', '动态', '随机', '最大度']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          name:'时间',
          nameLocation: "middle",
          type: 'value',
          splitLine: {
            show: false
          },
        },
        yAxis: {
          name:'传播节点的减少量',
          type: 'value',
          splitLine: {
            show: false
          },
        },
        series: [
          {
            name: '进化',
            type: 'line',

            data: [
              [1,6.9],[6,31.9],[11,58.5],[16,89.2],[21,118],[26,150.3],[31,190.9],[36,240.9],[41,304.4],[46,393.8]
            ]
          },
          {
            name: '动态',
            type: 'line',

            data: [
              [1,6.6],[6,33.2],[11,62],[16,93.5],[21,123.8],[26,157.1],[31,198.8],[36,249.1],[41,315.4],[46,405.2]
            ]
          },
          {
            name: '随机',
            type: 'line',

            data: [
              [1,4],[6,29],[11,53.2],[16,82.4],[21,109],[26,138.6],[31,177.2],[36,223],[41,283.1],[46,367.8]
            ]
          },
          {
            name: '最大度',
            type: 'line',

            data: [
              [1,3.9],[6,29.1],[11,54.5],[16,83.8],[21,110.9],[26,142.7],[31,183.7],[36,232.4],[41,294.9],[46,383.5]
            ]
          }
        ]
      };
      this.myChart2.setOption(this.option2)

    },

    myEcharts3() {
      this.myChart3 = this.$echarts.init(document.getElementById('chart3'));
      var xdata = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
      var ydata1 = [5.1,26.4,74.7,95.4,105.4,124.5,159.7,181.9,201.6,216.1,228.3,242.7,259.8,276.7,293.5,317.3,334.6,348.9,357.4,366.2,375.6,387.9,397.9,403.2,409.3,410.3,418.4,415.7,409.9,408,412.9,409.8,411.4,415.9,412.7,408.7,407.2,406.7,407,407.7,404,397.4,392.7,382.7,374.5,370.1,369.3,362.7,361.2,358.6];
      var ydata2 = [8.8,31.2,80.3,108.3,127.8,150.2,193.1,227.4,260.9,291.3,330.1,357.1,392.3,431,462.1,499.8,531.7,558,581.6,602.4,639,651,668.9,685.7,689.7,694,700.2,700.2,703.5,704.8,721.4,701.1,695,688.1,677.8,663.5,648.7,639.7,628,620.4,620.4,583,564.8,545.9,533.2,520.5,512.2,495.3,484.2,472.6];
      var ydata3 = [0.9,17.5,50.1,38.3,15.9,6.2,13.6,15.4,20.9,22.9,22.1,19,20,20.7,16.4,24.9,23.7,22.5,19.2,11.8,16.9,13.2,17.1,19.4,19.1,16.4,20.3,19.3,17,18.5,26.8,27.1,31.2,35.3,34.9,33,32.8,32.1,34.3,30.9,34,30.9,29.4,27.5,29.6,28.7,28.5,30.1,30.8,34.5];
      var ydata4 = [3.1,22.5,64.7,81.1,90.3,105.7,130,147.3,163.3,178.1,180,187.7,198.2,211.4,213.4,224.9,231.4,234.1,231.7,229.1,237.3,239,240.3,247.6,243.1,240.9,241,239.9,237.1,233,234.4,228.8,227.9,228,222.4,212.2,208.8,207.5,206.5,205.5,208,203.1,199.2,192.4,187.6,184.8,180.2,176.1,176.7,177.5];
      var data1 = [];
      var data2 = [];
      var data3 = [];
      var data4 = [];
      for (var j = 0; j < 50; j++) {
        data1.push([xdata[j],ydata1[j]]);
        data2.push([xdata[j],ydata2[j]]);
        data3.push([xdata[j],ydata3[j]]);
        data4.push([xdata[j],ydata4[j]]);
      }
      this.option3 = {
        title: {
          text: 'NetGRQC数据集（传播率0.01，隔离数50）'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          orient: 'vertical',
          x:'80%',
          y:'5%',
          borderWidth:1,
          borderColor: "rgba(26, 24, 24, 0.99)",
          data: ['进化', '动态', '随机', '最大度']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          name:'时间',
          nameLocation: "middle",
          type: 'value',
          splitLine: {
            show: false
          },
        },
        yAxis: {
          name:'传播节点的减少量',
          type: 'value',
          splitLine: {
            show: false
          },
        },
        series: [
          {
            name: '进化',
            type: 'line',
            data: data1
          },
          {
            name: '动态',
            type: 'line',
            data: data2
          },
          {
            name: '随机',
            type: 'line',
            data: data3
          },
          {
            name: '最大度',
            type: 'line',
            data: data4
          }
        ]
      };
      this.myChart3.setOption(this.option3)

    },

    myEcharts4() {
      this.myChart4 = this.$echarts.init(document.getElementById('chart4'));
      var xdata = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
      var ydata1 = [6.9,11,17.4,30.2,48.1,73.9,99.9,134.4,172.7,215,260.2,310.7,364.6,410.2,452.2,492.9,530.2,562.5,586.4,608.5,628.2,645,656.6,663.6,673.7,682.4,687,690.1,685.7,688.4,686.1,680.7,672.2,665.4,652.4,650.1,643.6,637.3,629.9,623,620.2,610.3,600.9,592.1,582.9,571,567.4,563.9,558.1,555];
      var ydata2 = [9.4,12.4,22.7,37.2,59.2,88.2,120.5,160.7,202.7,249.6,310.5,374.4,441.2,510.6,568.4,629.2,689.5,746.2,796.9,845.3,900.2,943.7,978.9,1016.3,1040.4,1067.6,1088.5,1100.8,1103.7,1111.5,1129.5,1127.2,1121.7,1113.9,1101.8,1096.1,1084.7,1072.5,1060.3,1047.8,1045.1,1015.1,996.6,976.7,951.8,927.4,908,888.7,872.4,858.6];
      var ydata3 = [4.4,5.5,9.2,16.5,25.8,34.5,43.2,54.9,60.8,67.5,69.9,75.4,76.3,83.6,75.6,69.8,71.1,77.5,80.5,76.3,69.9,72.4,68.6,75.6,73.2,81.9,88,89.3,77.8,75.7,70.2,71.8,64.1,60.1,60.4,52.8,50.2,49.3,52.6,52.9,53.6,46.2,45.4,45.1,44.7,42.6,41.1,44,44.4,46.4];
      var ydata4 = [4.4,10.3,18.1,31.4,50.8,75.4,103.9,139.7,181.7,224.4,268.6,316.9,366.4,418.5,462.3,499.6,542.2,578.7,607.6,637.1,661.3,686.6,701.1,716.5,721.6,730.6,736.3,739.5,734.3,727,724.3,729.7,720.6,711,700.1,693.6,680.2,676.1,667.2,652.8,640.8,632.9,623.1,612.6,597.2,588.4,590,581.4,574.6,574.3];
      var data1 = [];
      var data2 = [];
      var data3 = [];
      var data4 = [];
      for (var j = 0; j < 50; j++) {
        data1.push([xdata[j],ydata1[j]]);
        data2.push([xdata[j],ydata2[j]]);
        data3.push([xdata[j],ydata3[j]]);
        data4.push([xdata[j],ydata4[j]]);
      }
      this.option4 = {
        title: {
          text: 'NetHepTh数据集（传播率0.005，隔离数50）'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          orient: 'vertical',
          x:'82%',
          y:'5%',
          borderWidth:1,
          borderColor: "rgba(26, 24, 24, 0.99)",
          data: ['进化', '动态', '随机', '最大度']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          name:'时间',
          nameLocation: "middle",
          type: 'value',
          splitLine: {
            show: false
          },
        },
        yAxis: {
          name:'传播节点的减少量',
          type: 'value',
          splitLine: {
            show: false
          },
        },
        series: [
          {
            name: '进化',
            type: 'line',
            data: data1
          },
          {
            name: '动态',
            type: 'line',
            data: data2
          },
          {
            name: '随机',
            type: 'line',
            data: data3
          },
          {
            name: '最大度',
            type: 'line',
            data: data4
          }
        ]
      };
      this.myChart4.setOption(this.option4)

    },

    myEcharts5() {
      this.myChart5 = this.$echarts.init(document.getElementById('chart5'));
      var xdata = [1,5,10,15,20,25,30];
      var ydata1 = [6.07,25.001,43.416,55.938,68.395,80.115,90.9];
      var ydata2 = [3.2325,19.974,38.827,53.092,67.463,80.574,94.101];
      var ydata3 = [4.0975,18.542,37.771,51.412,65.573,76.323,89.224];
      var ydata4 = [4.0975,16.879,33.11,46.083,57.811,69.12,80.861];
      var ydata5 = [6.205,25.177,41.766,54.759,62.831,70.444,73.915];
      var ydata6 = [6.205,24.843,41.974,56.421,69.66,82.203,94.202];
      var data1 = [];
      var data2 = [];
      var data3 = [];
      var data4 = [];
      var data5 = [];
      var data6 = [];
      for (var j = 0; j < 50; j++) {
        data1.push([xdata[j],ydata1[j]]);
        data2.push([xdata[j],ydata2[j]]);
        data3.push([xdata[j],ydata3[j]]);
        data4.push([xdata[j],ydata4[j]]);
        data5.push([xdata[j],ydata5[j]]);
        data6.push([xdata[j],ydata6[j]]);
      }
      this.option5 = {
        title: {
          text: 'NetGRQC数据集（传播率0.05）'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          orient: 'vertical',
          x:'80%',
          y:'50%',
          borderWidth:1,
          borderColor: "rgba(26, 24, 24, 0.99)",
          data: ['PR', 'CELF', 'CC', 'BC','DC','OURS']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          name:'节点数量',
          nameLocation: "middle",
          nameGap:'20',
          type: 'value',
          splitLine: {
            show: false
          },
        },
        yAxis: {
          name:'期望传播范围LIE',
          type: 'value',
          splitLine: {
            show: false
          },
        },
        series: [
          {
            name: 'PR',
            type: 'line',
            data: data1
          },
          {
            name: 'CELF',
            type: 'line',
            data: data2
          },
          {
            name: 'CC',
            type: 'line',
            data: data3
          },
          {
            name: 'BC',
            type: 'line',
            data: data4
          },
          {
            name: 'DC',
            type: 'line',
            data: data5
          },
          {
            name: 'OURS',
            type: 'line',
            data: data6
          }]
      };
      this.myChart5.setOption(this.option5)

    },

    myEcharts6() {
      this.myChart6 = this.$echarts.init(document.getElementById('chart6'));
      var xdata = [1,5,10,15,20,25,30];
      var ydata1 = [5.1925,25.956,44.578,61.278,74.984,86.363,99.608];
      var ydata2 = [5.1925,25.577,45.138,63.092,80.855,95.475,109.67];
      var ydata3 = [6.1925,24.303,43.708,60.195,75.935,90.355,102.82];
      var ydata4 = [4.77,25.116,43.672,58.78,75.164,89.99,103.84];
      var ydata5 = [5.1925,26.508,47.306,65.487,80.928,95.656,109.97];
      var ydata6 = [6.1925,26.638,47.111,64.823,80.171,95.123,109.96];
      var data1 = [];
      var data2 = [];
      var data3 = [];
      var data4 = [];
      var data5 = [];
      var data6 = [];
      for (var j = 0; j < 50; j++) {
        data1.push([xdata[j],ydata1[j]]);
        data2.push([xdata[j],ydata2[j]]);
        data3.push([xdata[j],ydata3[j]]);
        data4.push([xdata[j],ydata4[j]]);
        data5.push([xdata[j],ydata5[j]]);
        data6.push([xdata[j],ydata6[j]]);
      }
      this.option6 = {
        title: {
          text: 'NetHepTh数据集（传播率0.05）'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          orient: 'vertical',
          x:'80%',
          y:'50%',
          borderWidth:1,
          borderColor: "rgba(26, 24, 24, 0.99)",
          data: ['PR', 'CELF', 'CC', 'BC','DC','OURS']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          name:'节点数量',
          nameLocation: "middle",
          nameGap:'20',
          type: 'value',
          splitLine: {
            show: false
          },
        },
        yAxis: {
          name:'期望传播范围LIE',
          type: 'value',
          splitLine: {
            show: false
          },
        },
        series: [
          {
            name: 'PR',
            type: 'line',
            data: data1
          },
          {
            name: 'CELF',
            type: 'line',
            data: data2
          },
          {
            name: 'CC',
            type: 'line',
            data: data3
          },
          {
            name: 'BC',
            type: 'line',
            data: data4
          },
          {
            name: 'DC',
            type: 'line',
            data: data5
          },
          {
            name: 'OURS',
            type: 'line',
            data: data6
          }]
      };
      this.myChart6.setOption(this.option6)

    },

    myEcharts7() {
      this.myChart7 = this.$echarts.init(document.getElementById('chart7'));
      var xdata = [1,5,10,15,20,25,30];
      var ydata1 = [72.502,194.65,232.56,283.24,288.13,302.35,306.96];
      var ydata2 = [72.502,116.37,187.41,232.47,254.93,281.89,299.01];
      var ydata3 = [72.502,120.23,194.57,232.47,255.7,267.56,276.89];
      var ydata4 = [39.61,101.36,130.11,168.62,200.71,217.86,242.48];
      var ydata5 = [72.502,111.08,178.91,220.99,255.18,281.1,301.46];
      var ydata6 = [35.752,112.57,184.5,213.74,263.6,290.85,311.16];
      var data1 = [];
      var data2 = [];
      var data3 = [];
      var data4 = [];
      var data5 = [];
      var data6 = [];
      for (var j = 0; j < 50; j++) {
        data1.push([xdata[j],ydata1[j]]);
        data2.push([xdata[j],ydata2[j]]);
        data3.push([xdata[j],ydata3[j]]);
        data4.push([xdata[j],ydata4[j]]);
        data5.push([xdata[j],ydata5[j]]);
        data6.push([xdata[j],ydata6[j]]);
      }
      this.option7 = {
        title: {
          text: 'Weibo数据集（传播率0.05）'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          orient: 'vertical',
          x:'80%',
          y:'50%',
          borderWidth:1,
          borderColor: "rgba(26, 24, 24, 0.99)",
          data: ['PR', 'CELF', 'CC', 'BC','DC','OURS']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          name:'节点数量',
          nameLocation: "middle",
          nameGap:'20',
          type: 'value',
          splitLine: {
            show: false
          },
        },
        yAxis: {
          name:'期望传播范围LIE',
          type: 'value',
          splitLine: {
            show: false
          },
        },
        series: [
          {
            name: 'PR',
            type: 'line',
            data: data1
          },
          {
            name: 'CELF',
            type: 'line',
            data: data2
          },
          {
            name: 'CC',
            type: 'line',
            data: data3
          },
          {
            name: 'BC',
            type: 'line',
            data: data4
          },
          {
            name: 'DC',
            type: 'line',
            data: data5
          },
          {
            name: 'OURS',
            type: 'line',
            data: data6
          }]
      };
      this.myChart7.setOption(this.option7)

    },



  },
  mounted() {
    this.connectioncase = require('../../../static/Keynodes/webkit-dep2.json');
    this.myEcharts1();
    this.myEcharts2();
    this.myEcharts3();
    this.myEcharts4();
    this.myEcharts5();
    this.myEcharts6();
    this.myEcharts7();


  }
}
</script>
<style>
</style>

