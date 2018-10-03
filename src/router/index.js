import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import PostList from '@/components/PostList'
import Article from '@/components/Article'
import UserInfo from '@/components/UserInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
        main: PostList
      }
    },
    {
      path: '/article/:id',
      name: 'Article',
      components: {
        main: Article
      }
    },
    {
      path: '/userinfo/:name',
      name: 'user_info',
      components: {
        main: UserInfo
      }
    }
  ]
})
