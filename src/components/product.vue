<template>
  <div class="mainWrap">
   <div class="topInner">
      <div class="topWrap">
        <div class="back_pic" @click="goback">
          <img  class="back_img" src="../assets/image/back.png"/>
        </div>
        <div class="pro_title">
          系列介绍
        </div>
      </div>
    </div>
    <div class="centerWrap">
      <div class="leftCenWrap">
        <div class="produ_cates" v-for="(item, index) in labelList">
          <div :class="{ 'bgColor': index == selectIndex }" @click="gotoDetail(item.id, index)"> {{item.name}}</div>
        </div>
      </div>
      <div class="rightCenWrap">
        <div class="rightInner">
          <div class="itemWrap" v-for="(item,index) in seriesList">
            <div class="itemTop">
              <div class="link">
                <img  class="block" src="../assets/image/touxiang.png" />
                <div class="seriesTitle" @click="gotoProdetail(item.id)">
                  {{item.name}}
                </div>
              </div>
              <!-- <div class="down" :class="[rotate?  'go' : 'aa' ]" @click="seeProduct">
              </div> -->
            </div>
            <!-- <div class="itemBottom" v-if="!this.rotate">
              <div class="itemBomTitle">
                 蔡司玻璃球面单光镜片
              </div>
              <div class="itemBomCon">
                传承蔡司经典，镜片表面硬度高，视物自然清晰，超乎想象的轻薄
              </div>
            </div> -->
          </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        labelList: [],
        seriesList: [],
        selectIndex: '',
        chooseSeriesId: '',
        chooseIndex: '',
        rotate: false
      }
    },
    created() {
      this.getSeriresList();
    },
    methods: {
      openFullScreen() {
        const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0,0,0,0.7)'
        })
        return loading;
      },
      closeFullScreen(loading) {
        loading.close()
      },
      goback() {
        this.$router.go(-1);
      },
      getSeriresList() {
        let param = new FormData();
        axios({
             method: 'post',
             url: '/price/priceclient/getAllLabel',
             data:param
            }).then(this.handleGetLabelSucc.bind(this)).catch((err) => {console.log(err)})
        },
      handleGetLabelSucc(res) {
        if(res.data.data) {
          this.labelList = res.data.data;
          if(window.localStorage.getItem('chooseSeriesId')){
            this.chooseSeriesId = window.localStorage.getItem('chooseSeriesId')
           this.labelList.forEach((item,index) => {
             if(item.id == this.chooseSeriesId) {
                this.chooseIndex = index
             }
           })
            this.gotoDetail(this.chooseSeriesId, this.chooseIndex)
            }
          // }else {
          //    let id = res.data.data[0].id;
          //    this.gotoDetail(id, 0)
          // }


        }
      },
      seeProduct() {
         this.rotate = !this.rotate;
      },
      gotoDetail(id, index) {
        this.openFullScreen();
        this.selectIndex = index;
        window.localStorage.setItem('chooseSeriesId', id);
        let param = new FormData();
         param.append('id',id);
         axios({
           method: 'post',
           url: '/price/priceclient/getSeriesByLabel',
           data: param
         }).then(this.handleGetSwiperSucc.bind(this)).catch((err) => {
           console.log(err)
         })
      },
      handleGetSwiperSucc(res) {
        this.closeFullScreen(this.openFullScreen())
         if(res.data.status == 200) {
           this.seriesList = res.data.data;
         }
      },
      gotoProdetail(id) {
          window.localStorage.setItem('detailId', id)
         this.$router.push('/productDetail')
      }
    }
  }
</script>

<style lang="stylus">
.mainWrap
  height:100vh;
  display:flex;
  flex-direction: column;
  .topInner
    .topWrap
       background: #ececec;
       display: flex;
       align-items: center;
       padding: 0.5rem;
       box-sizing: border-box;
       font-size: 1rem;
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
  .centerWrap
    display: flex;
    box-sizing: border-box;
    flex: 1;
    .leftCenWrap
      padding-bottom: 1rem;
      background: #bfbcc0;
      overflow-y: scroll;
      .produ_cates
        cursor: pointer;
        background: #fff;
        width: 70%;
        margin: 1.6rem auto;
        text-align: center;
        font-size: 1rem;
        padding: 0.2rem;
        font-weight: 500;
        letter-spacing: 0.1rem;
        .bgColor
          color: #00aaff;
          font-weight: bold;
    .rightCenWrap
      flex: 1;
      background: #e0dee1;
      .rightInner
        margin: 2rem 0rem;
        .itemWrap
          .itemTop
            background: #f5f2f5;
            display: flex;
            align-items: center;
            /* justify-content: center; */
            position: relative;
            min-height: 4rem;
            flex-wrap: wrap;
            padding: 10px 0 10px 10px;
            margin:1rem;
            border-bottom: 1px dashed #999;
            .link
             display: flex;
             justify-content: flex-start;
             align-items: center;
             width: 100%;
            .block
              display: block;
              height: 3rem;
              margin: 0 0 0 3%;
            .seriesTitle
              color: #00a0e9;
              font-weight: bold;
              font-size: 1.1rem;
              margin: 0 0 0 3%;
              line-height: 1.6rem;
            .down
              content: '';
              display: inline-block;
              width: 12px;
              height: 12px;
              margin-top: -6px;
              border-top: 2px solid #333;
              border-right: 2px solid #333;
              transform: rotate(135deg);
            .aa
              transition: all 1s;
            .go
              transform: rotate(-45deg);
              transition: all 0.5s;
          .itemBottom
            background: #f5f2f5;
            padding: 10px 0 10px 10px;
          .itemBomTitle
            width: 85%;
            color: #00a0e9;
            line-height: 3rem;
          .itemBomCon
            width: 85%;
            font-size: 0.8rem !important;
            color: #999 !important;
            padding: 0.3rem 0 0 0 !important;
            text-align: left;

</style>
