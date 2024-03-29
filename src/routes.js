import Login from './views/Login.vue'
import Home from './views/Home.vue'
import MainPage from '@/views/MainPage'
import Interventionplan from '@/views/intervention/Interventionplan'
import keynodeselection from '@/views/keynodeselection'
import EventsDisplay from '@/views/EventsDisplay'
import alignment from "./views/alignment";


/*import Homepage from './views/list/homepage.vue'
import Table from './views/list/Table.vue'*/

let routes = [{
  path: '/login',
  component: Login,
  name: '',
  hidden: true
},

  {
    path: '/',
    name: 'MainPage',
    leaf: true, //只有一个节点
    component: Home,
    iconCls: 'el-icon-s-home',
    redirect: '/MainPage',
    children: [
      {path: '/MainPage', component: MainPage, name: '主页'},
    ]
  }, {
    path: '/',
    name: '网络用户对齐',
    leaf: true,//只有一个节点
    component: Home,
    iconCls: 'el-icon-share',
    redirect: '/alignment',
    children: [
      {path: '/alignment', component: alignment, name: '网络用户对齐'},
    ]
  }, {
    path: '/',
    name: '关键节点选择',
    leaf: true,//只有一个节点
    component: Home,
    iconCls: 'el-icon-share',
    redirect: '/keynodeselection',
    children: [
      {path: '/keynodeselection', component: keynodeselection, name: '关键节点选择'},
    ]
  },

  {
    path: '/',
    name: '文本生成及发送',
    component: Home,
    iconCls: 'el-icon-s-custom',
    redirect: '/Intervention',
    leaf: true,//只有一个节点,
    children: [
      {path: '/Interventionplan', component: Interventionplan, name: '文本生成及发送'},

    ]
  },
    {
    path: '/',
    name: '舆情事件收集',
    component: Home,
    iconCls: 'el-icon-s-custom',
    redirect: '/EventsDisplay',
    leaf: true,//只有一个节点,
    children: [
      {path: '/EventsDisplay', component: EventsDisplay, name: '舆情事件收集'},

    ]
  },


  {
    path: '*',
    redirect: '/login',
    hidden: true //控制是否在左边菜单栏目展示
  },


];

export default routes;
