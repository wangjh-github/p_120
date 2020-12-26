<template>
  <div id="app">
    <el-container class="menu">
      <el-header class="header">
        <!-- <img src="../assets/xjtu_logo.png" style="height: 25px" />  -->
        <!--        <div id="title">
          <img src="../assets/xjtu_logo.png" style="height: 40px; float:left" />
        </div> -->
        <img src="../assets/xjtu_logo.png" style="height: 40px;position: absolute; left: 30px; top: 10px;" />
        <div id="title">敏感用户全息画像构建及个性化引导系统</div>
      </el-header>
      <el-container>
        <el-aside>
          <!--强行加入动画过度隐藏效果-->
          <transition name="el-fade-in">
            <!--单个激活 并以 index 作为 path 进行路由跳转-->
            <el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router @open="handleOpen" v-if="!isCollapse" @close="handleClose" :collapse="isCollapse" :class="{'isCollapseFalseStyle':isCollapse!=true}" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
              <!--动态路由到子组件 将不可见的路径隐藏-->
              <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                <el-menu-item v-if="item.leaf&&item.children.length==1" :index="item.children[0].path" style="font-size: 18px;">
                  <i :class="item.iconCls"></i>
                  <span slot="title"> {{item.children[0].name}}</span>
                </el-menu-item>
                <el-submenu :index="index+''" v-if="!item.leaf">
                  <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                  <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden" style="font-size: 18px;">{{child.name}}</el-menu-item>
                </el-submenu>
              </template>
            </el-menu>
          </transition>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      isCollapse: false //false为出现 true为隐藏
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    changeMenu() {
      if (this.isCollapse) {
        this.isCollapse = false
      } else {
        this.isCollapse = true
      }
    }
  },
  watch: {
    //监听路由变化，自动缩减左边菜单栏目
    $route() {
      let width = document.body.clientWidth;
      if (width >= 700) {
        this.isCollapse = false;
      } else {
        this.isCollapse = true;
      }
    }
  },
  mounted() {

  }
};

</script>
<style>
.el-submenu__title {
  font-size: 18px;
}

</style>
<style scoped>

.menu {
  width: 100%;
  height: 100%;
}

.el-header {
  border-bottom: none !important;
  background-image: -webkit-gradient(linear, left top, right top, from(#1278f6), to(#00b4aa));
  background-image: -webkit-linear-gradient(45deg, #1278f6, #00b4aa 50%, #1278f6);
  background-image: -moz-linear-gradient(45deg, #1278f6, #00b4aa 50%, #1278f6);
  background-image: linear-gradient(45deg, #1278f6, #00b4aa 50%, #1278f6);
}

#title {
  font-size: 24px;
  margin-top: 13px;
  margin-left: 80px;
  color: white;
  width: 100%;
}


.div-logo {
  width: 100%;
  height: 135px;

  img {
    width: 45%;
  }
}

.header {

  text-align: left !important;
}

.el-footer {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #f8f9fa;
  color: #333;
  text-align: center;
  display: flex;
  bottom: 0px;
  overflow: hidden;

  .el-menu {
    height: 100%;
  }
}

.el-main {
  background-color: #d9e0e7;
  color: #333;
  text-align: center;
  // line-height: 160px;
}

body>.el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-submenu {
  text-align: left;
}


.el-menu-item {
  text-align: left;
}

.el-aside {
  width: auto !important;
}

.isCollapseFalseStyle {
  width: 200px !important;
}

@media screen and (min-width: 700px) {
  .header {

    //background: #409EFF;
    i {
      display: none;
    }
  }

  ;
}


@media screen and (max-width: 700px) {
  .header {

    //background: #409EFF;
    i {
      display: inline;
    }
  }

  ;
}

</style>
