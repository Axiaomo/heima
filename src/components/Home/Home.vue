<!--  -->
<template>
  <div class="mt50">
    <!-- 滚动条 -->
    <swipe :list="lista"></swipe>
    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item,index) in title" :key="index">
        <router-link :to="item.link">
          <span class="mui-icon"> <img :src="item.img"></span>
          <div class="mui-media-body" v-text="item.name"></div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Swipe from "../subcomp/swipe";
export default {
  data() {
    return {
      title: [
        {
          name: "新闻",
          img: "../../../static/images/menu3.png",
          link: "/news/imgcontentnews"
        },
        {
          name: "图片分享",
          img: "../../../static/images/menu4.png",
          link: "/photolist"
        },
        {
          name: "商品展示",
          img: "../../../static/images/menu5.png",
          link: "/goodslist"
        },
        {
          name: "留言反馈",
          img: "../../../static/images/menu6.png",
          link: "/member"
        },
        {
          name: "搜索咨询",
          img: "../../../static/images/menu9.png",
          link: "/search"
        },
        {
          name: "联系我们",
          img: "../../../static/images/menu10.png",
          link: "/car"
        }
      ],
      lista: []
    };
  },

  mounted() {
    this.getlist();
  },

  components: {
    Swipe
  },

  computed: {},

  methods: {
    getlist() {
      this.axios.get("/api/getlunbo").then(res => {
        this.lista = res.data.message;
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.mui-grid-view.mui-grid-9 {
  background: none;
  border: none;
  .mui-table-view-cell {
    border: none;
  }
  .mui-icon {
    img {
      width: 50px;
    }
  }
}
</style>