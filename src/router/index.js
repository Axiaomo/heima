import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/Home/Home.vue'
import Car from './../components/car/car.vue'
import Member from './../components/member/member.vue'
import Search from './../components/search/search.vue'
// 图文资讯
import Imgcontentnews from './../components/news/ImgContentNew.vue'
//图文资讯详细内容显示组件
import showNewsDetial from './../components/news/showDetial'
//图片分享组件
import photolist from './../components/photo/photolist'
import photo from './../components/photo/photo'

//商品展示列表
import goodlist from './../components/goods/goodlist'
import goodsInfo from './../components/goods/goodsInfo'
import goodscomment from './../components/subcomp/comment'
import goodsdesc from './../components/goods/goodsdesc'

Vue.use(Router)

export default new Router({
  // 匹配路由的class
  linkActiveClass: 'mui-active',
  // haxi处理
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'home'
    }, {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/member',
      name: 'member',
      component: Member
    }, {
      path: '/car',
      name: 'car',
      component: Car
    }, {
      path: '/search',
      name: 'search',
      component: Search
    }, {
      path: '/news/imgcontentnews',
      name: 'imgcontentnews',
      component: Imgcontentnews
    }, {
      path: '/news/showdetial/:id',
      component: showNewsDetial
    }, {
      path: '/photolist',
      component: photolist
    }, {
      path: '/photo/:id',
      component: photo
    }, {
      path: '/goodslist',
      component: goodlist
    }, {
      path: '/goods/info/:id',
      component: goodsInfo
    }, {
      name: 'goodscomment',
      path: '/goods/comment/:id',
      component: goodscomment
    }, {
      name: 'goodsdesc',
      path: '/goods/desc/:id',
      component: goodsdesc
    }
  ]
})
