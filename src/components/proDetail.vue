<template>
  <div class="mainWrap">
    <div class="topInner">
       <div class="topWrap">
         <div class="back_pic" @click="goBack">
           <img  class="back_img" src="../assets/image/back.png"/>
         </div>
         <div class="pro_title">
           产品介绍
         </div>
         <div class="add_compare">
          <div class="add_btn" @click="gotoCompare">加入比较</div>
         </div>
       </div>
     </div>
    <div class="swiperWrap" >
      <div class="imgBox">
        <img class="image" :src="detailPic"  />
      </div>
      <div class="box">
				<div class="title">
					<div style="height: 2.1rem"></div>
					<div class="titleItem">产品名称</div>
					<div class="titleItem">折射率</div>
					<div class="titleItem">阿贝数</div>
					<div class="titleItem" v-if="film">膜层</div>
					<div class="titleItem" v-if="covert">隐形标记</div>
					<div class="titleItem" style="height: 10rem">光度范围</div>
					<div class="titleItem" v-if="passageway">通道</div>
					<div class="titleItem" v-if="addLightBelow">下加光</div>
					<div class="titleItem" v-if="presentPrice">现片价</div>
					<div class="titleItem" style="height: 10rem" v-if="customFile">定制片光度范围</div>
					<div class="titleItem" v-if="customPrice">定制价</div>
					<div class="titleItem" v-if="polarizing">偏光价</div>
					<div class="titleItem" v-if="pricepol">偏光定制价</div>
					<div class="titleItem" v-if="bluray">蓝光片价</div>
				</div>
				<div class="title" style="flex:1;"v-for="(item, index) in swiperList.slice(0, 4)">
					<el-checkbox  style="height: 2rem" :checked="item.checked" @change="getChooseItem(item.id, item.checked)" :disabled="disable">选择对比</el-checkbox>
					<div class="titleItem" style="background: #00b9ed;color: #fff;">{{item.name}}</div>
					<div class="titleItem" style="background: #efefef">{{item.refractive}}</div>
					<div class="titleItem" style="background:#c9c9c9">{{item.abbe}}</div>
					<div class="titleItem" style="background: #efefef" v-if="film">{{item.film}}</div>
					<div class="titleItem" style="background: #c9c9c9" v-if="covert">{{item.covert}}</div>
					<div  class="titleItem" style="height: 10rem;background: #efefef">
						<el-image :src="item.picture" fit="contain"></el-image>
					</div>
					<div class="titleItem" v-if="passageway">{{item.passageway}}</div>
					<div class="titleItem" v-if="item.addLightBelow">{{item.addLightBelow}}D</div>
					<div class="titleItem" v-if="item.presentPrice"style="background: #66c6e9">{{item.presentPrice}} </div>
					<div  class="titleItem" style="height: 10rem;background: #efefef"  v-if="customFile">
						<el-image :src="item.customFile" fit="contain"></el-image>
					</div>
					<div class="titleItem" v-if="item.customPrice" style="background: #66c6e9">{{item.customPrice}}</div>
					<div class="titleItem" v-if="polarizing" style="background: #66c6e9">{{item.polarizing}}</div>
					<div class="titleItem" v-if="pricepol" style="background: #66c6e9">{{item.pricepol}}</div>
					<div class="titleItem" v-if="bluray" style="background: #66c6e9">{{item.bluray}}</div>
				</div>
			</div>

      <div class="box" v-if="this.swiperList.length > 4">
      	<div class="title">
      		<div style="height: 2.1rem"></div>
      		<div class="titleItem">产品名称</div>
      		<div class="titleItem">折射率</div>
      		<div class="titleItem">阿贝数</div>
      		<div class="titleItem" v-if="film">膜层</div>
      		<div class="titleItem" v-if="covert">隐形标记</div>
      		<div class="titleItem" style="height: 10rem">光度范围</div>
      		<div class="titleItem" v-if="passageway">通道</div>
      		<div class="titleItem" v-if="addLightBelow">下加光</div>
      		<div class="titleItem" v-if="presentPrice">现片价</div>
      		<div class="titleItem" style="height: 10rem" v-if="customFile">定制片光度范围</div>
      		<div class="titleItem" v-if="customPrice">定制价</div>
      		<div class="titleItem" v-if="polarizing">偏光价</div>
      		<div class="titleItem" v-if="pricepol">偏光定制价</div>
      		<div class="titleItem" v-if="bluray">蓝光片价</div>
      	</div>
      	<div class="title" style="flex:1;"v-for="(item, index) in swiperList.slice(4)">
      		<el-checkbox  style="height: 2rem" :checked="item.checked" @change="getChooseItem(item.id, item.checked)" :disabled="disable">选择对比</el-checkbox>
      		<div class="titleItem" style="background: #00b9ed;color: #fff;">{{item.name}}</div>
      		<div class="titleItem" style="background: #efefef">{{item.refractive}}</div>
      		<div class="titleItem" style="background:#c9c9c9">{{item.abbe}}</div>
      		<div class="titleItem" style="background: #efefef" v-if="film">{{item.film}}</div>
      		<div class="titleItem" style="background: #c9c9c9" v-if="covert">{{item.covert}}</div>
      		<div  class="titleItem" style="height: 10rem;background: #efefef">
      			<el-image :src="item.picture" fit="contain"></el-image>
      		</div>
      		<div class="titleItem" v-if="passageway">{{item.passageway}}</div>
      		<div class="titleItem" v-if="item.addLightBelow">{{item.addLightBelow}}D</div>
      		<div class="titleItem" v-if="item.presentPrice"style="background: #66c6e9">{{item.presentPrice}} </div>
      		<div  class="titleItem" style="height: 10rem;background: #efefef"  v-if="customFile">
      			<el-image :src="item.customFile" fit="contain"></el-image>
      		</div>
      		<div class="titleItem" v-if="item.customPrice" style="background: #66c6e9">{{item.customPrice}}</div>
      		<div class="titleItem" v-if="polarizing" style="background: #66c6e9">{{item.polarizing}}</div>
      		<div class="titleItem" v-if="pricepol" style="background: #66c6e9">{{item.pricepol}}</div>
      		<div class="titleItem" v-if="bluray" style="background: #66c6e9">{{item.bluray}}</div>
      	</div>
      </div>
	  </div>
	</div>
</template>

<script>
  import axios from 'axios'
  export default {
     created() {
		 this.id = window.localStorage.getItem('detailId');
		 this.getSwiper();
     this.getProDetail();
		 if(window.localStorage.getItem('selectArr')) {
			 this.selectedArr = window.localStorage.getItem('selectArr').split(',');
			 if(this.selectedArr) {
			 	this.disable = this.selectedArr.length >= 3 ? true: false;
			 }
		 }
		 this.$nextTick(() => {
			this.bannerH = document.body.clientHeight * 0.8;
			this.bannerW = document.body.clientHeight * 0.8  / 2 * 3
		 })
       },
	   watch: {
		   getSelectNum: function() {
			   this.selectedArr = window.localStorage.getItem('selectArr').split(',');
		   }
	   },
	   mounted() {
		   window.addEventListener('resize', () => {
		     this.setBannerH()
		   }, false);

	   },
      data() {
        return {
          id: '',
					disable: false,
          swiperList: [],
					bannerH: 0,
					bannerW: 0,
					selectedArr: [],
					addLightBelow: false,
					customPrice: false,
					presentPrice: false,
					polarizing: false,
					passageway: false,
					pricepol: false,
					bluray: false,
					film: false,
					covert: false,
					addLightBelow3: false,
					customPrice3: false,
					presentPrice3: false,
					polarizing3: false,
					passageway3: false,
					pricepol3: false,
					bluray3: false,
					film3: false,
					covert3: false,
					customFile: false,
          detailPic: ''
          }
        },
      methods: {

      gotoCompare() {
        let selOne, seltwo,selThree;
        if(this.selectedArr[0]) {
          selOne = this.selectedArr[0]
        }
        if(this.selectedArr[1]) {
          seltwo = this.selectedArr[1]
        }
        if(this.selectedArr[2]) {
          selThree = this.selectedArr[2]
        }
        this.$router.push('/compare')
      },
		  getChooseItem(id,checked) {
		  	this.swiperList.forEach((item, index) => {
		  		if(item.id == id) {
					item.checked = !checked;
					    if(item.checked) {
							this.selectedArr.push(item.id);
						}else {
							let index = this.selectedArr.indexOf(item.id);
							this.selectedArr.splice(index, 1)
						}
					   this.disable = this.selectedArr.length >= 3 ? true: false;
				}
		  	})
        localStorage.setItem('selectArr', this.selectedArr)
			//一个标签里选择两个系列
			// this.disable = this.selectedArr.length >= 3 ? true: false;
		  },
		  goBack() {
			  this.$router.go(-1);
		  },
		  //加载转圈
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
		  setBannerH() {
		      this.bannerH = document.body.clientHeight * 0.8
			  this.bannerW = document.body.clientHeight * 0.8 / 2 * 3
		  },
    getProDetail() {
      this.openFullScreen()
           let param = new FormData();
           param.append('id', this.id);
           axios({
             method: 'post',
             url: '/price/editSeries',
             data: param
           }).then((res) => {
             this.detailPic = res.data.data.picture;
           }).catch((err) => {
             console.log(err)
           })
    },
    getSwiper() {
		 this.openFullScreen()
          let param = new FormData();
          param.append('seriesId', this.id);
          axios({
            method: 'post',
            url: '/price/priceclient/findGlassesBySeries',
            data: param
          }).then(this.handleGetSwiperSucc.bind(this)).catch((err) => {
            console.log(err)
          })
        },
        handleGetSwiperSucc(res) {
				this.closeFullScreen(this.openFullScreen())
          if(res.data.status == 200) {
            this.swiperList = res.data.data;
						  this.swiperList.forEach((item, index) => {
								// if(!item.film) {
								// 		item.film = '无'
								// }
								// if(!item.covert) {
								// 		item.covert = '无'
								// }
								// if(!item.addLightBelow) {
								// 	item.addLightBelow = '无'
								// }
								// if(!item.customPrice) {
								// 	item.customPrice = '无'
								// }
                if(this.id == 44) {
                  if(!item.presentPrice) {
                  	item.presentPrice = '无'
                  }
                  if(!item.bluray) {
                  	item.bluray = '无'
                  }
                }

								// if(!item.polarizing) {
								// 	item.polarizing = '无'
								// }
								// if(!item.passageway) {
								// 	item.passageway = '无'
								// }
								// if(!item.pricepol) {
								// 	item.pricepol = '无'
								// }

                if(item.film) {
										this.film = true
								}
								if(item.covert) {
										this.covert = true
								}
								if(item.addLightBelow) {
									this.addLightBelow = true
								}
								if(item.customPrice) {
									this.customPrice = true
								}
								if(item.presentPrice) {
									this.presentPrice = true
								}
								if(item.polarizing) {
									this.polarizing = true
								}
								if(item.passageway) {
									this.passageway = true
								}
								if(item.pricepol) {
									this.pricepol = true
								}
								if(item.bluray) {
									this.bluray = true;
								}else {
                  this.hasBluray = false;
                }

								if(item.customFile) {
									this.customFile = true;
								}
						})
          }
        }
    }
  }
</script>
<style lang="stylus"  scoped>
.mainWrap
  display:flex;
  flex-direction: column;
  .topInner
    position:fixed;
    left: 5rem;
    right: 0;
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
      .add_compare
        .add_btn
          background: #585459;
          color: #fff;
          padding: .5rem 1.5rem;
          text-align: center;
          margin: 0 1rem;
  .swiperWrap
    padding-left: 5%
    padding-right: 5%
    padding-top: 5rem
    background: #fff;
    box-sizing: border-box
    .imgBox
      margin: 1rem 0 3rem;
      .image
        width: 100%;
        height: auto;
        border-radius: 5%;
    .box
      display: flex
      margin-bottom: 3rem
      .title
        font-weight: bold
        text-align: center
        .titleItem
          margin: .1rem
          background: #e5e5e5
          height: 4rem
          font-size: 1rem
          border-radius: .05rem
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center
          padding: 0.2rem
          box-sizing: border-box
          .topWrap
          .centerWrap
            display:flex
            justify-content: center
            flex-direction: column
            align-items: center
            .box1
              height: 1rem
              width: 1rem
              background: #a2daee
            .box2
              height: 1.5rem
              width: 1rem
              background:#a2daee
            .triangle
              border-style: solid;
              border-right-width: 1rem;
              border-bottom-width: 0;
              border-left-width: 0;
              border-right-color: transparent;
              border-bottom-color: transparent;
              border-left-color: transparent;
              // border-color: #a2daee transparent transparent  transparent;
              width: 0px;
              height: 0px;
            .des
              height: 0.2rem
              line-height: 0.2rem
              font-size: 0.14rem
           .leftWrap
            .num
              height: 1rem
              padding-top: .75rem
              box-sizing: border-box
            .num1
              height: 1.5rem
              padding-top: 1.2rem
              box-sizing: border-box
            .num2
              flex: 1
              padding-top: .5rem
              box-sizing: border-box
          .twoBox
            width: 0.33rem
            background: #00b8ec
            position: absolute
            left: 0
            top: 1.02rem
          .twoTopBox
              position: absolute;
              left: 0;
              width: 0.33rem
              background: #00b8ec
          .threeBox
             width: 0.18rem
             background: #00b8ec
             position: absolute
             left: 0
          .bottomWrap
            margin-top: 0.1rem
            .des
              height: 0.2rem
              line-height: 0.2rem
        .titleItemSecond
          margin: .1rem
          background: #e5e5e5
          height: 0.2rem
          line-height: 0.2rem
          font-size: 0.15rem
          border-radius: .05rem
          display: flex
          justify-content: center
          align-items: center
          .secondCenterWrap
            .secondBox1
              width: 1rem
              height: 1rem
              background: #00b8ec
            .secondBox2
              width: 1rem
              height: 0.8rem
              background: #00b8ec;
            .smBox1
              width: 0.3rem
              height: 1rem;
              background: #00b8ec;
            .secondTrigger
              border-style: solid;
              border-width: 0px 100px 50px 0;
              border-color:transparent transparent #00b8ec;
              width: 0px;
              height: 0px;
            .mask1
              width: 63px;
              height: 0;
              border-top: 33px solid #00b8ec;
              border-right: 37px solid transparent;
            .mask2
              width: 63px;
              height: 0;
              border-bottom: 33px solid #00b8ec;
              border-right: 37px solid transparent;
        .titleItemThird
          margin: .1rem
          background: #e5e5e5
          height: 5rem
          line-height: 0.2rem
          font-size: 0.15rem
          border-radius: .05rem
          display: flex
          justify-content: center
          align-items: center
         .thirdCenter
           .thirdBox
              height: 2.5rem
              width: 1rem
              background: #00b8ec
</style>
