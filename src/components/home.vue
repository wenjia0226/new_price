<template>
  <div class="mainWrap">
  <el-container >
     <el-aside  style="width: 5rem;min-height: 100vh;background:#333744;">
       <el-menu
       :default-active="this.$route.path"
       class="el-menu-vertical-demo"
       background-color="#333744"
       text-color="#fff"
       active-text-color="#409eff"
       router
       @select="handleSelect"
       :unique-opened="true"
       :collapse-transition="false" >

         <el-menu-item index="/main">
             <i class="iconfont icon-zhuye block"></i>
             <span slot="title" class="name">首页</span>
           </el-menu-item>
         <el-menu-item index="/compare">
             <i class="iconfont icon-ico- block"></i>
             <span slot="title" class="name">对比</span>
           </el-menu-item>
         </el-menu>
     </el-aside>
     <el-main style="position: relative;">
       <router-view></router-view>
     </el-main>
  </el-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      handleSelect(e) {
       
      }
    }
  }
</script>
<style lang="stylus">
  .mainWrap
   .el-menu
      border-right:none
      .block
        margin: 0 auto;
        width: 40%;
        display: block;
      .name
        color: #7f8388;
        font-size: 0.8rem;
        display: block;
        margin-top: 5px;
      .el-menu-item
        line-height: 1.6rem;
        text-align: center;
        margin: 1rem 0;
   .el-main
      padding:  0
</style>
