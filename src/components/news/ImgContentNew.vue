<!--  -->
<template>
  <div class="mt50">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item,index) in newslist " :key="index">
        <router-link to="" class="bg_fff">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <p class="mui-ellipsis" v-text="item.title"></p>
            <p class="color-blue">发表时间:{{item.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}<span class="click">点击数:{{item.click}}</span></p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newslist: []
    };
  },

  mounted() {
    this.getlist();
  },

  components: {},

  computed: {},

  methods: {
    getlist() {
      this.axios.get("/api/getnewslist").then(res => {
        this.newslist = res.data.message;
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.click{
  float: right;
}
.color-blue{
  color:rgba(0,148,255,0.7)
}
.mui-table-view-cell > a:not(.mui-btn).mui-active{
  background: #fff
}
</style>