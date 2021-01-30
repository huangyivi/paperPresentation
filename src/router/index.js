import Vue from 'vue'
import Router from 'vue-router'
// import Layout from "@/views/Layout/Layout.vue";
// import HomePage from "@/views/HomePage/HomePage.vue";
// import JournalCollection from "@/views/JournalCollection/JournalCollection.vue";
// import JournalRecommend from "@/views/JournalRecommend/JournalRecommend.vue";
// import DocumentBase from "@/views/DocumentBase/DocumentBase.vue";
// import PaperCheck from "@/views/PaperCheck/PaperCheck.vue";
// import OnlineSubmit from "@/views/OnlineSubmit/OnlineSubmit.vue";
// import DocDetails from "@/views/DocDetails/DocDetails.vue";
// import JournalDetails from "@/views/JournalDetails/JournalDetails.vue";
// import Errors from "@/views/Error/Error"

// 懒加载路由,提高页面渲染速度
const Layout = ()=>import("@/views/Layout/Layout.vue")
const HomePage = ()=>import("@/views/HomePage/HomePage.vue")
const JournalCollection = ()=>import("@/views/JournalCollection/JournalCollection.vue")
const JournalRecommend = ()=>import("@/views/JournalRecommend/JournalRecommend.vue")
const DocumentBase = ()=>import("@/views/DocumentBase/DocumentBase.vue")
const PaperCheck = ()=>import("@/views/PaperCheck/PaperCheck.vue")
const OnlineSubmit = ()=>import("@/views/OnlineSubmit/OnlineSubmit.vue")
const DocDetails = ()=>import("@/views/DocDetails/DocDetails.vue")
const JournalDetails = ()=>import("@/views/JournalDetails/JournalDetails.vue")
const Errors = ()=>import("@/views/Error/Error")
const Login = ()=>import("@/views/Login/Login")

Vue.use(Router)



export default new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      name: 'layout',
      path: '/',
      component: Layout,
      redirect : "HomePage",
      children: [
        {
          path: 'HomePage',
          name: 'HomePage',
          component: HomePage
        },
        {
          path: 'JournalCollection',
          name: 'JournalCollection',
          component: JournalCollection
        },
        {
          path: 'JournalRecommend',
          name: 'JournalRecommend',
          component: JournalRecommend
        },
        {
          path: 'DocumentBase',
          name: 'DocumentBase',
          component: DocumentBase
        },
        {
          path: 'PaperCheck',
          name: 'PaperCheck',
          component: PaperCheck
        },
        {
          path: 'OnlineSubmit',
          name: 'OnlineSubmit',
          component: OnlineSubmit
        },
        {
          path: 'DocDetails/:docid',
          name: 'DocDetails',
          component: DocDetails
        },
        {
          path: 'JournalDetails/:jid',
          name: 'JournalDetails',
          component: JournalDetails
        }
      ]
    },
    {
      path: '*',
      name : 'Error',
      component : Errors
    },
    {
      path:'/Login',
      name: '',
      component: Login
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
