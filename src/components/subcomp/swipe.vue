<!--  -->
<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in list" :key="index">
                <img :src="item.img" />
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>

export default {
  props: ["list"],
  data() {
    return {};
  },

  mounted() {},



  computed: {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.mint-swipe {
  height: 250px;
  img {
    width: 100%;
  }
}
</style>