<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <p v-for="(item, index) in skuDetailList" :key="index">
      <h3>{{item.sku}}</h3>
      <img :src="item.goods_img" width="300" height="150"/>
    </p>
    <h3>
      <button @click="showMsg()">OKOK</button>
    </h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
      skuDetailList: {}
    };
  },
  mounted() {
    this.msg = "This is an about page";
    this.$http.get("/data/home.json").then((res) => {
      console.log(res);
      this.skuDetailList = res.data.skuDetailList;
    });
  },
  methods: {
    showMsg() {
    }
  },
};
</script>
