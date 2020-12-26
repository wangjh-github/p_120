<template>
  <div>
    <h2>方法一：最优效率节点选择算法</h2>
    <div align="center">
      <img src="../../../static/image/Most_efficientmethod.jpg" style="width:800px; height:400px"></img>
    </div>
    <div style="margin-left:15%;width:1100px">
      <p style="font-size: 18px">基于传染病模型对事件的传播过程进行建模，根据用户之间的交互行为构建用户关联关系矩阵，完成基于传染病模型的事件传播过程建模。</p>
      <p style="font-size: 18px">提出基于引导成本与收益比的效率优先的贪心节点选择方法，找到一组度较小但是对信息传播过程起到关键作用的节点。</p>
    </div>

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
    <h2>方法二：基于动态隔离策略的节点选择</h2>
    <div align="center">
    <img src="../../../static/image/Dynamic_isolationmethod.jpg" style="width: 800px; height:400px"></img>
    </div>

  <div style="margin-left:15%;width:1100px">
    <p style="font-size: 18px">在经典传染病模型SIU的基础上引入两个额外的隔离状态Q和R，按照 一定的策略选择节点进入对应隔离状态进行限定时间的隔离。</p>
    <p style="font-size: 18px">基于DPSO算法提出一种优化的离散粒子群方法，能够有效地减少了节点集合影响力重合，提高算法求解效率。</p>
  </div>
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
  </div>
</template>
<script>
export default {



};

</script>
<style>
.el-row {
  margin-bottom: 20px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
