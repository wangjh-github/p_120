<template>
  <div>
    <!-- <div class="jumbotron m-b-0 text-center">
                <h2>舆情引导</h2>
                <p>从正向、中立、负向三个角度对特定舆情事件进行引导 </p>
                <p><a class="btn btn-success btn-lg" role="button" ng-click="genText()">生成引导文本</a></p>
              </div> -->
    <div class="panel panel-primary">
      <!-- begin row -->
      <div class="row">
        <!-- begin col-10 -->
        <div class="col-md-12">
          <!-- begin panel -->
          <div class="panel-body">
            <div class="table-responsive">
              <div class="dataTables_length" id="top3">
                <!-- <label class = "pull-right">每页 <select name="data-table_length"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> 条</label> -->
                <span class="pull-left m-b-10 f-s-14" id="top4">
                  <span style="padding-left: 20px">用户：{{users}} &nbsp&nbsp&nbsp&nbsp&nbsp 语种：{{language}} &nbsp&nbsp&nbsp&nbsp&nbsp 引导分面：{{emotion}}</span>
                  <!-- <button>生成引导文本</button> -->
                </span>
              </div>
              <div class="dialog" name="dialog" id="dialog">
                <div style="margin-top: 20px;margin-left: 15px;line-height: 50px;font-size: 18px ">
                  请选择需要@的用户：
                </div>
                <div style="margin-left: 15px;line-height: 50px;font-size: 18px">
                  <el-col :span="8">
                    <input type="checkbox" name="category" value="@美国中文电视" />美国中文电视
                  </el-col>
                  <el-col :span="8">
                    <input type="checkbox" name="category" value="@这里是美国" />这里是美国
                  </el-col>
                  <el-col :span="8"><input type="checkbox" name="category" value="@美国驻华大使馆" />美国驻华大使馆</el-col>
                </div>
                <div style="margin-left: 15px;line-height: 50px;font-size: 18px">
                  <el-col :span="8">
                    <input type="checkbox" name="category" value="@USA美国那些事儿" />USA美国那些事儿</el-col>
                  <el-col :span="8"><input type="checkbox" name="category" value="@人民日报海外版-海外网" />人民日报海外版-海外网</el-col>
                  <el-col :span="8"><input type="checkbox" name="category" value="@美國駐港總領事館" />美國駐港總領事館</el-col>
                </div>
                <div style="margin-left: 550px;line-height: 50px;">
                  <input id="btnOperate" type="button" value="选择" v-on:click="weibofabu()" style="font-size: 18px" />
                </div>
              </div>
              <div class="dialog" name="dialog1" id="dialog1">
                <div style="margin-top: 20px;line-height: 50px;font-size: 18px;  ">
                  请选择需要进行文本推送的用户：
                </div>
                <div style="margin-left: 15px;line-height: 50px;font-size: 18px">
                  <el-col :span="8">
                    <input type="checkbox" name="category1" value="@LucasLi18367932" />@LucasLi18367932
                  </el-col>
                  <el-col :span="8">
                    <input type="checkbox" name="category1" value="@lzf1326" />@lzf1326
                  </el-col>
                  <el-col :span="8"><input type="checkbox" name="category1" value="@hey89774439" />@hey89774439</el-col>
                </div>
                <div style="margin-left: 15px;line-height: 50px;font-size: 18px">
                  <el-col :span="8">
                    <input type="checkbox" name="category1" value="@linzhongping1" />@linzhongping1</el-col>
                  <el-col :span="8"><input type="checkbox" name="category1" value="@rio42108238" />@rio42108238</el-col>
                  <el-col :span="8"><input type="checkbox" name="category1" value="@Heihaierz" />@Heihaierz</el-col>
                </div>
                <div style="margin-left: 550px;line-height: 50px;">
                  <input id="btnOperate" type="button" value="选择" v-on:click="twitter2()" style="font-size: 18px" />
                </div>
              </div>
              <div id="table1">
                <table id="data-table" class="table table-striped table-bordered nowrap f-s-14" width="95%">
                  <thead>
                    <tr style="font-size: 18px">
                      <!-- <th>序号</th> -->
                      <th class="tdx">内容</th>
                      <th class="tdx">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item,i) in listObj" v-if="item.id === random_list[0] || item.id === random_list[1] || item.id === random_list[2] || item.id === random_list[3] || item.id === random_list[4] || item.id === random_list[5] || item.id === random_list[6] || item.id === random_list[7] || item.id === random_list[8] || item.id === random_list[9]">
                      <!-- <td class="width-200">{{i}}</td> -->
                      <td class="tdx" :class="{greyback: item.id!=-1}" style="width: 70%;">
                        <div style="font-size: 18px">{{item.content}}</div>
                      </td>
                      <td class="tdx" :class="{greyback: item.id!=-1}">
                        <button v-on:click="runpy2('text'+item.id)" class="fabubutton" type="button" style="font-size: 18px">微博发布</button>
                        <button v-on:click="twitter1('text'+item.id)" class="fabubutton" type="button" style="font-size: 18px">Twitter 发布</button>
                        <button v-on:click="runpy1('text'+item.id)" class="fabubutton" type="button" style="font-size: 18px">Twitter 私聊</button>
                        <button v-on:click="reddit('text'+item.id)" class="fabubutton" type="button" style="font-size: 18px">Reddit 发布</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- end panel -->
        </div>
        <!-- end col-10 -->
      </div>
      <!-- end row -->
    </div>
  </div>
</template>
<script>
import $ from 'jquery'

export default {
  name: "imageInsert",
  props: ["emotion","language","users"],
  data() {
    return {
      father_name: "",
      child_name: "",
      progress_percentage: 0,
      insert_image_path: '',
      runid: 0,
      random_list: [],
      listObj: []
    }
  },
  methods: {
    twitter1: function(id) {
      var str = id
      console.log(str.length);
      if (str.length == 6) {
        this.runid = str.substring(str.length - 2, str.length)
      } else if (str.length == 5) {
        this.runid = str.substring(str.length - 1, str.length)
      }
      var fabutxts = []
      var siliaotxts = []
      fabutxts.push(this.listObj[this.runid].content)
      $.ajax({
        url: "http://127.0.0.1:8000/text_joint", //the page containing php script
        type: "POST",
        contentType: "application/json", //request type
        crossDomain: true,
        data: JSON.stringify({
          'fabutxts': fabutxts,
          'siliaotxts': siliaotxts
        }),
        success: function(result) {
          this.$alert('发布成功');
          this.fabutxts = [];
          this.siliaotxts = [];
        }
      })

    },

    twitter2: function() {
      var fabutxts = []
      var siliaotxts = []
      var items = document.getElementsByName("category1");
      for (var i = 0; i < items.length; i++) {
        if (items[i].checked) {
          var temptxt = "" + items[i].value + "/" + this.listObj[this.runid].content
          siliaotxts.push(temptxt)
        }
      }

      for (var i = 0; i < items.length; i++) {
        items[i].checked = false
      }
      /*      $(".dialog").hide()*/
      document.getElementById("dialog1").style.display = 'none';
      $.ajax({
        url: "http://127.0.0.1:8000/text_joint", //the page containing php script
        type: "POST",
        contentType: "application/json", //request type
        crossDomain: true,
        data: JSON.stringify({
          'fabutxts': fabutxts,
          'siliaotxts': siliaotxts
        }),
        success: function(result) {
          this.$alert('私聊成功');
          this.fabutxts = [];
          this.siliaotxts = [];
        }
      })

    },

    reddit: function(id) {
      var str = id
      console.log(str.length);
      if (str.length == 6) {
        this.runid = str.substring(str.length - 2, str.length)
      } else if (str.length == 5) {
        this.runid = str.substring(str.length - 1, str.length)
      }
      $.ajax({
        url: "http://127.0.0.1:8000/image_joint", //the page containing php script
        type: "POST",
        contentType: "application/json", //request type
        crossDomain: true,
        data: JSON.stringify({
          'image_name': '',
          'title': this.listObj[this.runid].content,
          'community': "Hong_Kong"
        }),
        success: function(result) {
          alert("发布成功");
        }
      })

    },

    runpy1: function(id) {
      var str = id
      console.log(str.length);
      if (str.length == 6) {
        this.runid = str.substring(str.length - 2, str.length)
        document.getElementById("dialog1").style.display = 'block';
      } else if (str.length == 5) {
        this.runid = str.substring(str.length - 1, str.length)
        document.getElementById("dialog1").style.display = 'block';
      }



    },
    runpy2: function(id) {
      var str = id
      console.log(str.length);
      if (str.length == 6) {
        this.runid = str.substring(str.length - 2, str.length)
        document.getElementById("dialog").style.display = 'block';
      } else if (str.length == 5) {
        this.runid = str.substring(str.length - 1, str.length)
        document.getElementById("dialog").style.display = 'block';
      }



    },
    weibofabu: function(id) {
      var arr = "";
      var items = document.getElementsByName("category");
      for (var i = 0; i < items.length; i++) {
        if (items[i].checked) {
          arr = arr + items[i].value
        }
      }
      arr = this.listObj[this.runid].content + arr
      console.log(arr)
      for (var i = 0; i < items.length; i++) {
        items[i].checked = false
      }
      /*      $(".dialog").hide()*/
      document.getElementById("dialog").style.display = 'none';

      console.log($('#app'));

      $.ajax({
        url: "http://39.102.48.39:8090/yqdata/text_generation/post_text", //the page containing php script
        type: "POST",
        contentType: "application/json", //request type
        crossDomain: true,
        data: JSON.stringify({
          'text': arr,
          'operate': ""
        }),
        success: function(result) {

        }
      });
      alert("发布成功！");

    },
    generateRandom: function(min, max) {
      var rand = parseInt(Math.random() * (max - min + 1) + min);
      for (var i = 0; i < this.random_list.length; i++) {
        if (this.random_list[i] == rand) {
          return false;
        }
      }
      this.random_list.push(rand);
    },
    sortNumber: function(a, b) {
      return a - b;
    }

  },
  mounted() {
    var txtjson = require('../../../static/json/generate_text.json');
    var langkey= "";
    var emokey= "";
    var txtcount = 0;
    if (this.language == "中文简体"){
      langkey = "zh"
    }
    else if (this.language == "英文"){
      langkey = "en"
    }
    else if (this.language == "日文"){
      langkey = "jp"
    }
    else{
      langkey = "cht"
    }
    if (this.emotion == "分面1：暴乱"){
      emokey = "violent";
      txtcount=16;
    }
    else if (this.emotion == "分面2：香港青年"){
      emokey = "young";
      txtcount=16;
    }
    else{
      emokey = "five_eyes";
      txtcount=21;
    }
    this.listObj = txtjson[langkey][emokey];
    console.log(this.listObj)
    for (var i = 0;; i++) {
        // 只生成10个随机数
        if (this.random_list.length < 10) {
          this.generateRandom(0, txtcount);
        } else {
          break;
        }
    }
    this.random_list.sort(this.sortNumber);
    console.log(this.random_list);
  }

};

</script>
<style>
ol>li a {
  color: #000000;
}

.gallery .image-info {
  /* border: black 1px solid; */
}

.gallery {
  margin: 0 -10px;
  display: flex;
  flex-wrap: wrap;
  /* 这样会使子元素都居中 */
  /* justify-content: center; */
}

.gallery a {
  text-decoration: none;
  color: #000000;
}

.gallery .image-info .desc {
  line-height: 16px;
  font-size: 12px;
  height: 64px;
  overflow: hidden;
  text-overflow: -o-ellipsis-lastline;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
}

.image {
  transition: all .3s ease-in-out;
}

.image:hover {
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, .3);
  position: relative;
  z-index: 1;
}

.modal-dialog {
  width: 600px;
  margin: 300px auto;
}

label {
  font-size: 14px;
}

.red {
  color: red;
}

.notshow {
  display: none;
}

.media-list.media-list-with-divider>li+li {
  border-top: 1px solid #eee;
  padding-top: 10px;
}

button {
  /* float: right; */
}

.guideAspect:hover {
  cursor: pointer;
}

/* display属性渐变不生效 */
/* .aspect {
    transition: all .5s ease-in;
  } */
.message {
  padding-top: 30px;
  text-align: center;
}

.bwizard-steps li a {
  font-size: 16px;
}

#top1 {
  border: 0.2px solid grey;
  margin: 2% auto;
  border-width: 1px;
  width: 95%;
}

#top2 {
  border-style: solid;
  border-width: 1px;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  color: white;
  background-color: #2a72b5;
}

#top3 {
  margin-top: 20px;
  margin-left: 10px;
  font-size: 20px;

}

#data-table {
  text-align: center;
  border-collapse: collapse;
  border: 0.2px dotted grey;
  margin: 2% auto;
}

.tdx {
  border-collapse: collapse;
  border: 0.2px dotted grey;
  height: 50px;
}

.greyback {
  background-color: #f4faff;
}

#table1 {
  width: 100%;

  text-align: center;
}

.fabubutton {
  background-color: #348fe2;
  color: white;
  height: 35px;
  padding: 5px;
}

.dialog {
  width: 700px;
  height: 250px;
  background-color: white;
  border: solid 2px black;
  color: black;
  position: absolute;
  left: 20%;
  top: 30%;
  /*  line-height: 200px;*/
  display: none;
}
.dialog1 {
  width: 700px;
  height: 250px;
  background-color: white;
  border: solid 2px black;
  color: black;
  position: absolute;
  left: 20%;
  top: 30%;
  /*  line-height: 200px;*/
  display: none;
}
</style>
