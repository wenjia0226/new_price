<template>
  <div>
    <el-row style="margin: 3rem 0">
      <el-col :span="20"  :offset="2">
          <el-image  @click="goToProdoct" :src="require('@/assets/image/1.jpg')"  fit="contain"></el-image>
      </el-col>
    </el-row>
    <el-row style="margin: 3rem 0">
      <el-col :span="20"  :offset="2">
          <el-image @click="goToIntroduce" :src="require('@/assets/image/3.jpg')"  fit="contain"></el-image>
      </el-col>
    </el-row>
    <el-row style="margin: 3rem 0">
      <el-col :span="20"  :offset="2">
          <el-image @click="goToreport" :src="require('@/assets/image/2.jpg')"  fit="contain"></el-image>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      goToProdoct() {
        this.$router.push('/product')
      },
      goToIntroduce() {
        this.$router.push('/introduce')
      },
      goToreport() {
         this.$router.push('/report')
      }
    }
  }
</script>

<style>
</style>
