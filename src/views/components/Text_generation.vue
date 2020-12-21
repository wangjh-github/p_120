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
                  <span style="padding-left: 20px">预期情感：{{emotion}}， 用户：{{users}}</span>
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
                  <input id="btnOperate" type="button" value="选择" v-on:click="fabu()" style="font-size: 18px" />
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
                      <td class="tdx" :class="{greyback: item.id!=0 }" style="width: 80%;">
                        <div style="font-size: 18px">{{item.content}}</div>
                      </td>
                      <td class="tdx" :class="{greyback: item.id!=0 }"><button v-on:click="runpy('text'+item.id)" class="fabubutton" type="button" style="font-size: 18px">确认发布</button></td>
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
  props: ["emotion", "users"],
  data() {
    return {
      father_name: "",
      child_name: "",
      progress_percentage: 0,
      insert_image_path: '',
      runid: 0,
      random_list: [],
      txt: [
        "祝留学生同胞们平安，我们不能忘记疫情初期的时候，是海外华侨与留学生们买空全球支援祖国",
        "留学生回国隔离期间发声：我们不该被恶意攻击",
        "还有那些说回国者是千里投毒的，你父母孩子从国外想回来，是不是你也要骂他们是畜牲",
        "疫情爆发地的人想回家，不应该被这样指责",
        "我们之间的牵挂绝对没有错，留学生在外危难时归国更不应该被指责",
        "在祖国有难的时候我们从未如此一心地捐赠与支撑，我想祖国的繁荣昌盛，也有海外同胞的一份",
        "希望大家对留学生多一些善意吧不要我们捐物资的时候就说全部自费吧美国人",
        "人民日报：说他们“千里投毒第一名”，很不合适",
        "我们留学生有说什么了吗？我就想说我们回国有错吗？我相信不说全部，至少大部分留学生也有着一颗出去学习后回来为祖国出一份力的心",
        "希望无论决定回国还是不回国的朋友们，一定都能健健康康，平平安安！希望这个世界，早日会好",
        "别一竿子扫倒一船人！留学生回国隔离期回应质疑 不是所有留学生都混帐，我们不该被恶意攻击",
        "爱国更要爱自己的孩子，全国各族各界人民团结一致才是硬道理！",
        "我们从来没想要“千里投毒”也真的有在为“祖国建设”奋斗着",
        "上个月还说感谢海外留学生捐款捐物，这么快就骂别人千里投毒了？",
        "留学生如果想要回国，通过正规的渠道要报备，不得隐瞒行程，国家应该留出通道给予治疗，不应当将他们拒之国门之外，骂他们投毒也是非常不对的",
        "什么“国家建设你不在，千里投毒你最快”，说这话的人你这不是在引起民族矛盾吗？这不是让海外游子心寒吗？最近海归人员矛盾的新闻铺天盖地，到底想说明什么？",
        "等你回复不能一棒子打死所有人的时候他们又会说别玻璃心对号入座，骂的是那些不听话的，啥话都让他们说完了",
        "没有哪一种身份让我跟朋友愤怒，而是被爆出来的那些归国后不配合的行为不理智的言辞才是我们愤怒的对象",
        "他们绝大多数都是中国公民，是我们的同胞",
        "都能出国留学了，自理能力里面还没点分辨能力？就算网上有不理智的发言，现实中什么待遇自己还不清楚？把屎盆子往自己头上扣... 都有点烦他们了骂的都是回来当大爷的",
        "留学生们也曾捐款捐物满腔热血援助武汉！拳拳爱国情何等珍贵！",
        "如今他们被疫情围困，祖国也理应对留学生们伸出援手！请不要对留学生群体乱带节奏！请以同理心关爱他们！",
        "当初搁国外扫口罩防护服的时候叫人家海外同胞，现在国外爆发了回自己的国又说人家千里投毒",
        "国门要挡住的是病毒而不是自家同胞、国际友人",
        "回家安全是人之常情，但是一定得配合，无理取闹的那种对谁都没有好处",
        "不反对任何在外中国人回国避难，但是遵守国内规则应当放在首位",
        "相互体谅！！疫情期间我们也是两个月了都没出过门",
        "不配合隔离的人确实应该严惩但很多的人是愿意配合隔离也不想影响国内已经控制的很好的疫情",
        "但这两天看到的很多言论真的觉得让人心寒，还是将心比心换位思考吧",
        "这是我们的血脉同胞，现在国外爆发疫情，他们不是逃难，他们是回家，肯定要义不容辞的欢迎，希望大家相互多一些理解，相互鼓励，多出主意，多提供帮助和支持，少一些攻讦和贬斥，共度时艰",
        "要回来的做好防护提前报备不好吗？非要这么嚯嚯到热搜让全国人民认识你",
        "祖国建设你不行 千里投毒第一名！",
        "那些千里投毒的人我祝你把牢底坐穿",
        "这个国家是我们中国的，再这样就滚回你自己的国家吧",
        "中国有事躲国外，国外有事又都跑回来了，都是些贪生怕死的毒瘤",
        "人需要对身边的人负责，需要对社会负责！国家投入了大量人力物力财力对抗疫情，只为保障国民不受疫情伤害，这一点不比你外国爸爸强？人民牺牲了社交收入自由自觉隔离，只为不给国家社会添乱，这一点不比你这一个外国回来的强？",
        "“家乡建设你不在，千里投毒你最快”能引起网友共鸣说明部分回国人员的不自觉行为以及奇葩言论确实惹人反感",
        "不要说你们从国外回来多不容易，还自称认真隔离不给国家添麻烦，你们回来就是最大的麻烦！",
        "那些明知带病回来的，不好好汇报情况，还吃退烧药强行隐瞒回国的……是不是危害公共安全了？应该直接判了吧",
        "这些挑来挑去的，要人权?回国外要人权去呀，我可真求求你回去吧，你别说你那中国土生土长的，别给祖国添麻烦了",
        "至于那些黄皮白心的人,未来想在国外拿国籍的人,为别国服务添砖加瓦的人,疫情期间就别回国添乱了",
        "中国疫情严重时期，能跑的全都跑国外去了，现在国外全面爆发疫情，这些死人又纷纷跑回国内千里投毒，真特么的恶心死了",
        "美国渣女千里投毒：祖国拿你当亲人，你把祖国当冤大头",
        "为抗疫中国14亿人付出了多少才换来疫情的控制，而在这时候，一些人瞒报病情，让大家以前的防疫功亏一篑，他们多委屈！将心比心吧！",
        "现在的措施，对于这种人自费他们根本不在乎，隐瞒病情，千里投毒，极端利己主义，完全不顾他人生命安危的，要判刑！",
        " 我很讨厌隔离要矿泉水，不隔离要出门跑步的人权人士，希望他们从来没有回来过",
        " 也请个别留学生守规则，不要败坏留学生群体的声誉！",
        "求求国外回来的心里有点数，国内好不容易稳定下来，你们就想着回国，还可能带病毒，你一个可能就让全省又重新隔离",
        "有些网上外国回来的还在抱怨回来的待遇就这样，求你做个人吧，千里投毒你还想我们怎么对你",
        "恨都恨死你了，还要花人力物力严防死守就怕你们跟其他人接触，就像你煮了一锅粥，突然一只老鼠跳了进去"
      ],
      listObj: [
        { id: 1, content: "祝留学生同胞们平安，我们不能忘记疫情初期的时候，是海外华侨与留学生们买空全球支援祖国" },
        { id: 2, content: "留学生回国隔离期间发声：我们不该被恶意攻击" },
        { id: 3, content: "还有那些说回国者是千里投毒的，你父母孩子从国外想回来，是不是你也要骂他们是畜牲" },
        { id: 4, content: "疫情爆发地的人想回家，不应该被这样指责" },
        { id: 5, content: "我们之间的牵挂绝对没有错，留学生在外危难时归国更不应该被指责" },
        { id: 6, content: "在祖国有难的时候我们从未如此一心地捐赠与支撑，我想祖国的繁荣昌盛，也有海外同胞的一份" },
        { id: 7, content: "希望大家对留学生多一些善意吧不要我们捐物资的时候就说全部自费吧美国人" },
        { id: 8, content: "人民日报：说他们“千里投毒第一名”，很不合适" },
        { id: 9, content: "我们留学生有说什么了吗？我就想说我们回国有错吗？我相信不说全部，至少大部分留学生也有着一颗出去学习后回来为祖国出一份力的心" },
        { id: 10, content: "希望无论决定回国还是不回国的朋友们，一定都能健健康康，平平安安！希望这个世界，早日会好" },
        { id: 11, content: "别一竿子扫倒一船人！留学生回国隔离期回应质疑 不是所有留学生都混帐，我们不该被恶意攻击" },
        { id: 12, content: "爱国更要爱自己的孩子，全国各族各界人民团结一致才是硬道理！" },
        { id: 13, content: "我们从来没想要“千里投毒”也真的有在为“祖国建设”奋斗着" },
        { id: 14, content: "上个月还说感谢海外留学生捐款捐物，这么快就骂别人千里投毒了？" },
        { id: 15, content: "留学生如果想要回国，通过正规的渠道要报备，不得隐瞒行程，国家应该留出通道给予治疗，不应当将他们拒之国门之外，骂他们投毒也是非常不对的" },
        { id: 16, content: "什么“国家建设你不在，千里投毒你最快”，说这话的人你这不是在引起民族矛盾吗？这不是让海外游子心寒吗？最近海归人员矛盾的新闻铺天盖地，到底想说明什么？" },
        { id: 17, content: "等你回复不能一棒子打死所有人的时候他们又会说别玻璃心对号入座，骂的是那些不听话的，啥话都让他们说完了" },
        { id: 18, content: "没有哪一种身份让我跟朋友愤怒，而是被爆出来的那些归国后不配合的行为不理智的言辞才是我们愤怒的对象" },
        { id: 19, content: "他们绝大多数都是中国公民，是我们的同胞" },
        { id: 20, content: "都能出国留学了，自理能力里面还没点分辨能力？就算网上有不理智的发言，现实中什么待遇自己还不清楚？把屎盆子往自己头上扣... 都有点烦他们了骂的都是回来当大爷的" },
        { id: 21, content: "留学生们也曾捐款捐物满腔热血援助武汉！拳拳爱国情何等珍贵！" },
        { id: 22, content: "如今他们被疫情围困，祖国也理应对留学生们伸出援手！请不要对留学生群体乱带节奏！请以同理心关爱他们！" },
        { id: 23, content: "当初搁国外扫口罩防护服的时候叫人家海外同胞，现在国外爆发了回自己的国又说人家千里投毒" },
        { id: 24, content: "国门要挡住的是病毒而不是自家同胞、国际友人" },
        { id: 25, content: "回家安全是人之常情，但是一定得配合，无理取闹的那种对谁都没有好处" },
        { id: 26, content: "不反对任何在外中国人回国避难，但是遵守国内规则应当放在首位" },
        { id: 27, content: "相互体谅！！疫情期间我们也是两个月了都没出过门" },
        { id: 28, content: "不配合隔离的人确实应该严惩但很多的人是愿意配合隔离也不想影响国内已经控制的很好的疫情" },
        { id: 29, content: "但这两天看到的很多言论真的觉得让人心寒，还是将心比心换位思考吧" },
        { id: 30, content: "这是我们的血脉同胞，现在国外爆发疫情，他们不是逃难，他们是回家，肯定要义不容辞的欢迎，希望大家相互多一些理解，相互鼓励，多出主意，多提供帮助和支持，少一些攻讦和贬斥，共度时艰" },
        { id: 31, content: "要回来的做好防护提前报备不好吗？非要这么嚯嚯到热搜让全国人民认识你" },
        { id: 32, content: "祖国建设你不行 千里投毒第一名！" },
        { id: 33, content: "那些千里投毒的人我祝你把牢底坐穿" },
        { id: 34, content: "这个国家是我们中国的，再这样就滚回你自己的国家吧" },
        { id: 35, content: "中国有事躲国外，国外有事又都跑回来了，都是些贪生怕死的毒瘤" },
        { id: 36, content: "人需要对身边的人负责，需要对社会负责！国家投入了大量人力物力财力对抗疫情，只为保障国民不受疫情伤害，这一点不比你外国爸爸强？人民牺牲了社交收入自由自觉隔离，只为不给国家社会添乱，这一点不比你这一个外国回来的强？" },
        { id: 37, content: "“家乡建设你不在，千里投毒你最快”能引起网友共鸣说明部分回国人员的不自觉行为以及奇葩言论确实惹人反感" },
        { id: 38, content: "不要说你们从国外回来多不容易，还自称认真隔离不给国家添麻烦，你们回来就是最大的麻烦！" },
        { id: 39, content: "那些明知带病回来的，不好好汇报情况，还吃退烧药强行隐瞒回国的……是不是危害公共安全了？应该直接判了吧" },
        { id: 40, content: "这些挑来挑去的，要人权?回国外要人权去呀，我可真求求你回去吧，你别说你那中国土生土长的，别给祖国添麻烦了" },
        { id: 41, content: "至于那些黄皮白心的人,未来想在国外拿国籍的人,为别国服务添砖加瓦的人,疫情期间就别回国添乱了" },
        { id: 42, content: "中国疫情严重时期，能跑的全都跑国外去了，现在国外全面爆发疫情，这些死人又纷纷跑回国内千里投毒，真特么的恶心死了" },
        { id: 43, content: "美国渣女千里投毒：祖国拿你当亲人，你把祖国当冤大头" },
        { id: 44, content: "为抗疫中国14亿人付出了多少才换来疫情的控制，而在这时候，一些人瞒报病情，让大家以前的防疫功亏一篑，他们多委屈！将心比心吧！" },
        { id: 45, content: "现在的措施，对于这种人自费他们根本不在乎，隐瞒病情，千里投毒，极端利己主义，完全不顾他人生命安危的，要判刑！" },
        { id: 46, content: " 我很讨厌隔离要矿泉水，不隔离要出门跑步的人权人士，希望他们从来没有回来过" },
        { id: 47, content: " 也请个别留学生守规则，不要败坏留学生群体的声誉！" },
        { id: 48, content: "求求国外回来的心里有点数，国内好不容易稳定下来，你们就想着回国，还可能带病毒，你一个可能就让全省又重新隔离" },
        { id: 49, content: "有些网上外国回来的还在抱怨回来的待遇就这样，求你做个人吧，千里投毒你还想我们怎么对你" },
        { id: 50, content: "恨都恨死你了，还要花人力物力严防死守就怕你们跟其他人接触，就像你煮了一锅粥，突然一只老鼠跳了进去" }
      ]
    }
  },
  methods: {
    runpy: function(id) {
      var str = id


      console.log(str.length);
      if (str.length == 6) {
        this.runid = str.substring(str.length - 2, str.length) - 1
        document.getElementById("dialog").style.display = 'block';
      } else if (str.length == 5) {
        this.runid = str.substring(str.length - 1, str.length) - 1
        document.getElementById("dialog").style.display = 'block';
      }



    },
    fabu: function() {
      var arr = "";
      var items = document.getElementsByName("category");
      for (var i = 0; i < items.length; i++) {
        if (items[i].checked) {
          arr = arr + items[i].value
        }
      }
      arr = this.txt[this.runid] + arr
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

    if (this.emotion == "正向") {
      for (var i = 0;; i++) {
        // 只生成10个随机数
        if (this.random_list.length < 10) {
          this.generateRandom(1, 30);
        } else {
          break;
        }
      }
    } else if (this.emotion == "负向") {
      for (var i = 0;; i++) {
        if (this.random_list.length < 10) {
          this.generateRandom(31, 50);
        } else {
          break;
        }
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

</style>
