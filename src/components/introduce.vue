<template>
  <div class="mainWrap">
    <div class="topInner">
      <div class="topWrap">
       <div class="back_pic" @click="goback">
         <img  class="back_img" src="../assets/image/back.png"/>
       </div>
       <div class="pro_title">
         三友介绍
       </div>
      </div>
    </div>
    <div class="centerWrap">
      <div class="imgBox">
         <img  class="imgInner"src="../assets/image/product.jpg" />
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      goback() {
        this.$router.go(-1);
      },
    }
  }
</script>

<style lang="stylus" scoped>
  .mainWrap
    height:100vh;
    display: flex;
    flex-direction: column
    .topWrap
       background: #ececec;
       display: flex;
       align-items: center;
       padding: 1rem 1rem 0;
       box-sizing: border-box;
       font-size: 1.6rem;
       font-weight: bold;
      .back_pic
        padding: 0 .5rem;
        .back_img
          width: 2rem;
          height: 2rem;
      .pro_title
        text-align: center;
        padding: 0 1rem;
        flex: 1;
        letter-spacing: 0.6rem;
      .add_compare
        .add_btn
          background: #585459;
          color: #fff;
          padding: .5rem 1.5rem;
          text-align: center;
          margin: 0 1rem;
    .centerWrap
      padding: 2rem 5% 3rem;
      background: #ececec;
      flex: 1;
      .imgBox
        .imgInner
          width: 80%;
          height: auto;
          margin: 0 10%;
</style>
