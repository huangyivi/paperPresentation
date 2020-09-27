import Vue from 'vue'
import Router from 'vue-router'
import Layout from "@/views/Layout/Layout.vue";
import HomePage from "@/views/HomePage/HomePage.vue";
import JournalCollection from "@/views/JournalCollection/JournalCollection.vue";
import JournalRecommend from "@/views/JournalRecommend/JournalRecommend.vue";
import DocumentBase from "@/views/DocumentBase/DocumentBase.vue";
import PaperCheck from "@/views/PaperCheck/PaperCheck.vue";
import OnlineSubmit from "@/views/OnlineSubmit/OnlineSubmit.vue";
Vue.use(Router)

export default new Router({
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

      ]
    }
  ]
})
