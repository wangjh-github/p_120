import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MainPage from '@/components/MainPage'
import networkalignment from '@/components/networkalignment'
import keynodeselection from '@/components/keynodeselection'
import textgeneration from '@/components/textgeneration'
import causalinference from '@/components/causalinference'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      leaf: true,//只有一个节点
      component: Home,
      iconCls: 'el-icon-s-home',
        redirect: '/MainPage',
        children: [
            { path: '/MainPage', component: MainPage, name: '主页' },
        ]
    },



    {
      path: '/',
      name: '网络对齐',
      leaf: true,//只有一个节点
      component: Home,
      iconCls: 'el-icon-s-flag',
        redirect: '/networkalignment',
        children: [
            { path: '/networkalignment', component: networkalignment, name: '网络对齐' },
        ]
    },
    {
      path: '/',
      name: '关键节点选择',
      leaf: true,//只有一个节点
      component: Home,
      iconCls: 'el-icon-s-custom',
      redirect: '/keynodeselection',
      children: [
        { path: '/keynodeselection', component: keynodeselection, name: '关键节点选择' },
      ]
    },
    {
      path: '/',
      name: '文本生成',
      leaf: true,//只有一个节点
      component: Home,
      iconCls: 'el-icon-document',
        redirect: '/textgeneration',
        children: [
            { path: '/textgeneration', component: textgeneration, name: '文本生成' },
        ]
    },


    {
        path: '*',
        redirect: '/MainPage',
        hidden:true //控制是否在左边菜单栏目展示
    },



  ]
})
