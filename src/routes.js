import Login from './views/Login.vue'
import Home from './views/Home.vue'
import MainPage from '@/views/MainPage'
import Interventionplan from '@/views/intervention/Interventionplan'
import keynodeselection from '@/views/keynodeselection'
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
  },

  {
    path: '/',
    name: '认知干预',
    component: Home,
    iconCls: 'el-icon-s-custom',
    redirect: '/Intervention',
    leaf: true,//只有一个节点,
    children: [
      {path: '/Interventionplan', component: Interventionplan, name: '干预方案'},

    ]
  },
  {
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
    name: '用户对齐',
    leaf: true,//只有一个节点
    component: Home,
    iconCls: 'el-icon-share',
    redirect: '/alignment',
    children: [
      {path: '/alignment', component: alignment, name: '用户对齐'},
    ]
  },
  {
    path: '*',
    redirect: '/login',
    hidden: true //控制是否在左边菜单栏目展示
  },


];

export default routes;
