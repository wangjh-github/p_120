<template>
  <div id="analysis" style="text-align:left;">
    <div>
      <div id="title">
        <h1>引导文本生成与发布</h1>
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
              <div style="height: 500px; width:905px;margin-top:3%;margin-left:25%">
                <div>
                  <el-table ref="singleTable" border :data="tableData" tooltip-effect="dark" highlight-current-row style="width: 100%;font-size: 18px" @current-change="handleSelectionChange">
                    
                    <el-table-column label="用户" width="120">
                      <template slot-scope="scope">{{ scope.row.user }}</template>
                    </el-table-column>
                    <el-table-column prop="positive_num" label="近期正向言论数量" width="180">
                    </el-table-column>
                    <el-table-column prop="language" label="语种" width="120">
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
            <div style="height: 700px; width:99.9%; border:1px solid #DCDFE6;">
              <input type="button" class="emotion" id="part1" value="分面1：暴乱" style="margin:7% 17%" @click="part1(item)">
              <input type="button" class="emotion" id="part2" value="分面2：香港青年" @click="part2(item)">
              <input type="button" class="emotion" id="part3" value="分面3：五眼联盟"style="margin:7% 16%"  @click="part3(item)">
              <div>
              <el-tag class="description" style="margin:-3% 10%;padding-top:15px;;">自2019年6月以来，反中乱港势力借反修例之名发动旷日持久的黑色暴乱。修例风波本质上是由反中乱港势力借题发挥、内外勾连策动的“颜色革命”，其目标就是企图颠覆香港秩序，夺取特区管治权，妄图阻碍中国发展。</el-tag>
              <el-tag class="description" style="margin-left:34%; margin-top:-3%;padding-top:15px;">令人担忧的是，反中乱港势力鼓吹“违法达义”等歪理邪说，诱导青少年以暴力抗争来表达诉求，为达目的不惜毁掉年轻人的前程。警方资料显示，2019年6月至12月底，已有近2600名学生被捕，约占总被捕人数的4成。</el-tag>
              <el-tag class="description" style="margin-left:58%;margin-top:-3%;">当地时间2020年11月18日，澳大利亚、英国、加拿大、新西兰、美国外长发表联合声明干涉中国内政，妄称香港特区政府依法裁定4名反中乱港者丧失立法会议员资格的行为违反《中英联合声明》中所规定的具有法律约束力的国际义务，违背对香港‘高度自治’的承诺，以及违背‘言论自由’的权利”。</el-tag>
              </div>
            </div>
          </div>
          <div class="all" v-if="sel === 3">


                <text-generation :emotion="emotion" :language="language" :users="users"></text-generation>

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
      fullscreenLoading: false,
      activeName: 'image_insert',
      emotion: '',
      sel: 1,
      tabs: [
        { label: '待引导用户', id: 1 },
        { label: '引导分面选择', id: 2 },
        { label: '引导文本发布', id: 3 },
      ],
      tableData: [{
        user: '用户1',
        language: '中文简体',
        positive_num: '9 8 10 13',
        negative_num: '11 8 8 4',
        positive_percentage: '79.67',
        emotion: '正向'
      }, {
        user: '用户2',
        language: '中文繁体',
        positive_num: '6 7 6 4',
        negative_num: '3 4 5 8',
        positive_percentage: '26.56',
        emotion: '负向'
      }, {
        user: '用户3',
        language: '英文',
        positive_num: '3 2 2 3',
        negative_num: '3 1 1 2',
        positive_percentage: '37.81',
        emotion: '中立'
      }, {
        user: '用户4',
        language: '日文',
        positive_num: '4 3 3 1',
        negative_num: '5 5 2 3',
        positive_percentage: '20.44',
        emotion: '负向'
      }, {
        user: '用户5',
        language: '中文简体',
        positive_num: '5 3 4 7',
        negative_num: '1 2 1 2',
        positive_percentage: '93.64',
        emotion: '正向'
      }, {
        user: '用户6',
        language: '中文简体',
        positive_num: '1 4 1 3',
        negative_num: '4 5 4 6',
        positive_percentage: '8.21',
        emotion: '负向'
      }, {
        user: '用户7',
        language: '中文简体',
        positive_num: '1 1 2 3',
        negative_num: '3 1 1 2',
        positive_percentage: '56.23',
        emotion: '中立'
      }, {
        user: '用户8',
        language: '中文简体',
        positive_num: '2 3 2 4',
        negative_num: '3 3 1 2',
        positive_percentage: '60.48',
        emotion: '中立'
      }, {
        user: '用户9',
        language: '中文简体',
        positive_num: '3 2 5 8',
        negative_num: '6 4 3 3',
        positive_percentage: '52.78',
        emotion: '中立'
      }, {
        user: '用户10',
        language: '中文简体',
        positive_num: '1 1 2 1',
        negative_num: '1 5 2 2',
        positive_percentage: '55.75',
        emotion: '中立'
      }],
      multipleSelection: {},
      users: "",
      language: "",
    }
  },
  methods: {
    select(item) {
      this.sel = item.id;
    },
    chooseusers(item) {
      this.sel = 2;
      this.users = "";
      this.language = "";
      this.users = this.multipleSelection.user;
      this.language = this.multipleSelection.language;
    },
    part1(item) {
      const loading = this.$loading({
          lock: true,
          text: '文本生成中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        var secnum = Math.random()*5+5
        setTimeout(() => {
          loading.close();
          this.sel = 3;
          this.emotion = '分面1：暴乱';
          this.$alert('', '文本生成完成，耗时'+secnum.toString()+'秒', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'info',
                message: `action: ${ action }`
              });
            }
          });
        }, secnum*1000); 
    },

    part2(item) {
      const loading = this.$loading({
          lock: true,
          text: '文本生成中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
      var secnum = Math.random()*5+5
        setTimeout(() => {
          loading.close();
          this.sel = 3;
          this.emotion = '分面2：香港青年';
          this.$alert('', '文本生成完成，耗时'+secnum.toString()+'秒', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'info',
                message: `action: ${ action }`
              });
            }
          });
        }, secnum*1000); 
      
    },
    part3(item) {
      const loading = this.$loading({
          lock: true,
          text: '文本生成中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
      var secnum = Math.random()*5+5
        setTimeout(() => {
          loading.close();
          this.sel = 3;
          this.emotion = '分面3：五眼联盟';
          this.$alert('', '文本生成完成，耗时'+secnum.toString()+'秒', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'info',
                message: `action: ${ action }`
              });
            }
          });
        }, secnum*1000); 
      
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
      console.log(this.multipleSelection)
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
  font-size: 25px;
  color: white;
  border-radius: 50%;
  outline: none;
}

.emotion:hover {
  cursor: pointer;
  background-color: #66b1ff;

}
.description{
  width: 400px;
  height: 180px;
  white-space:pre-wrap;
  white-space:-moz-pre-wrap;
  white-space:-pre-wrap;
  white-space:-o-pre-wrap;
  word-wrap:break-word;
  font-size: 17px;
  text-align:center;
  clear:both;
  position: absolute;
}
</style>
