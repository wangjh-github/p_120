<template>
  <div id="analysis" style="text-align:left;">
    <div>
      <div id="title">
        <h1>干预方案</h1>
      </div>
      <div id="page">
        <div class="menu-list">
          <div class="total" :class="{active:item.id === sel}" v-for="item in tabs" :key="item.id" @click="select(item)">
            <div style="font-size: 18px">{{ item.label }}</div>
          </div>
        </div>
        <div class="text">
          <div class="all" v-if="sel === 1">
            <div style="height: 700px; width:99.9%; border:1px solid #DCDFE6">
              <div style="height: 500px; width:786px;margin-top:3%;margin-left:25%">
                <div>
                  <el-table ref="multipleTable" border :data="tableData" tooltip-effect="dark" style="width: 100%;font-size: 18px" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column label="用户" width="120">
                      <template slot-scope="scope">{{ scope.row.user }}</template>
                    </el-table-column>
                    <el-table-column prop="positive_num" label="近期正向言论数量" width="180">
                    </el-table-column>
                    <el-table-column prop="negative_num" label="近期负向言论数量" width="180">
                    </el-table-column>
                    <el-table-column prop="positive_percentage" label="正向情感倾向" width="150">
                    </el-table-column>
                    <el-table-column prop="emotion" label="分类结果" width="100">
                    </el-table-column>
                  </el-table>
                </div>
                <el-button type="primary" style="margin-top:20px;font-size: 18px" @click="chooseusers(item)">确认</el-button>
              </div>
            </div>
          </div>
          <div class="all" v-if="sel === 2">
            <div style="height: 700px; width:99.9%; border:1px solid #DCDFE6">
              <input type="button" class="emotion" id="positive" value="正向" style="margin:13% 25%" @click="positive(item)">
              <input type="button" class="emotion" id="negative" value="负向" @click="negative(item)">
            </div>
          </div>
          <div class="all" v-if="sel === 3">


                <text-generation :emotion="emotion" :users="users"></text-generation>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import Text_generation from '../components/Text_generation'

export default {
  components: {

    "text-generation": Text_generation,
  },
  data() {
    return {
      activeName: 'image_insert',
      emotion: '',
      sel: 1,
      tabs: [
        { label: '干预用户', id: 1 },
        { label: '预期结果', id: 2 },
        { label: '干预方法选择', id: 3 },
      ],
      tableData: [{
        user: '用户1',
        positive_num: '9 8 10 13',
        negative_num: '11 8 8 4',
        positive_percentage: '79.67',
        emotion: '正向'
      }, {
        user: '用户2',
        positive_num: '6 7 6 4',
        negative_num: '3 4 5 8',
        positive_percentage: '26.56',
        emotion: '负向'
      }, {
        user: '用户3',
        positive_num: '3 2 2 3',
        negative_num: '3 1 1 2',
        positive_percentage: '37.81',
        emotion: '中立'
      }, {
        user: '用户4',
        positive_num: '4 3 3 1',
        negative_num: '5 5 2 3',
        positive_percentage: '20.44',
        emotion: '负向'
      }, {
        user: '用户5',
        positive_num: '5 3 4 7',
        negative_num: '1 2 1 2',
        positive_percentage: '93.64',
        emotion: '正向'
      }, {
        user: '用户6',
        positive_num: '1 4 1 3',
        negative_num: '4 5 4 6',
        positive_percentage: '8.21',
        emotion: '负向'
      }, {
        user: '用户7',
        positive_num: '1 1 2 3',
        negative_num: '3 1 1 2',
        positive_percentage: '56.23',
        emotion: '中立'
      }, {
        user: '用户8',
        positive_num: '2 3 2 4',
        negative_num: '3 3 1 2',
        positive_percentage: '60.48',
        emotion: '中立'
      }, {
        user: '用户9',
        positive_num: '3 2 5 8',
        negative_num: '6 4 3 3',
        positive_percentage: '52.78',
        emotion: '中立'
      }, {
        user: '用户10',
        positive_num: '1 1 2 1',
        negative_num: '1 5 2 2',
        positive_percentage: '55.75',
        emotion: '中立'
      }],
      multipleSelection: [],
      users: []
    }
  },
  methods: {
    select(item) {
      this.sel = item.id;
    },
    chooseusers(item) {
      this.sel = 2;
      this.users = [];
      var arr = this.multipleSelection;
      for (var i = 0; i < arr.length; i++) {
        this.users.push(arr[i].user);
      }
    },
    positive(item) {
      this.sel = 3;
      this.emotion = '正向';
    },
    negative(item) {
      this.sel = 3;
      this.emotion = '负向';
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
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
  height: 780px;
  margin-top: 20px;
  padding: 20px 20px 5px 20px;
  background: #FFFFFF;
  text-align: left;
}

.menu-list {
  height: 50px;
  display: flex;
}

.total {
  font-size: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #F4FAFF;
  color: #4c8fff;
  text-align: center;
  float: left
}

.total:hover {
  cursor: pointer;
  background-color: #D3DADF;
}


.total.active {
  background: #4c8fff;
  color: #FFFFFF;
}

.text {
  flex: 1;
  overflow: auto;
}

.emotion {
  width: 200px;
  height: 200px;
  border-width: 0px;
  background-color: #409eff;
  font-size: 30px;
  color: white;
  border-radius: 50%;
  outline: none;
}

.emotion:hover {
  cursor: pointer;
  background-color: #66b1ff;

}

</style>
