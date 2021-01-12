<template>
  <div class="mainWrap">
    <div class="topWrap">
      <div class="back_pic" @click="goback">
        <img  class="back_img" src="../assets/image/back.png"/>
      </div>
      <div class="pro_title">
        视疲劳症状问卷调查表
      </div>
    </div>
    <div class="centerBox">
      <div class="itemBox">
        <div class="itemTitle">1、阅读或近距离学习时你是否觉得眼部疲劳或不适？</div>
        <div class="itemMain">
          <div class="radioItem">
            <input type="radio" id="one" value="0" @change="chooseItem($event, 1)" v-model="picked1">
            <label for="one">从不</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="1" @change="chooseItem($event, 1)" v-model="picked1">
            <label for="one">有时</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="2" @change="chooseItem($event, 1)" v-model="picked1">
            <label for="one">经常</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="3"  @change="chooseItem($event, 1)" v-model="picked1">
            <label for="one">频繁</label>
          </div>
        </div>
      </div>

      <div class="itemBox">
        <div class="itemTitle">2、阅读或近距离学习时你是否头痛？</div>
        <div class="itemMain">
          <div class="radioItem">
            <input type="radio" id="one" value="0" @change="chooseItem($event, 2)" v-model="picked2">
            <label for="one">从不</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="1"  @change="chooseItem($event, 2)" v-model="picked2">
            <label for="one">有时</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="2"  @change="chooseItem($event, 2)" v-model="picked2">
            <label for="one">经常</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="3"  @change="chooseItem($event, 2)" v-model="picked2">
            <label for="one">频繁</label>
          </div>
        </div>
      </div>

      <div class="itemBox">
        <div class="itemTitle">3、阅读或近距离学习时你是否觉得容易困乏？</div>
        <div class="itemMain">
          <div class="radioItem">
            <input type="radio" id="one" value="0" @change="chooseItem($event, 3)" v-model="picked3">
            <label for="one">从不</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="1"  @change="chooseItem($event, 3)" v-model="picked3">
            <label for="one">有时</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="2"  @change="chooseItem($event, 3)" v-model="picked3">
            <label for="one">经常</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="3"  @change="chooseItem($event, 3)" v-model="picked3">
            <label for="one">频繁</label>
          </div>
        </div>
      </div>

      <div class="itemBox">
        <div class="itemTitle">4、阅读或近距离学习时,你注意力是否不集中？</div>
        <div class="itemMain">
          <div class="radioItem">
            <input type="radio" id="one" value="0" @change="chooseItem($event, 4)" v-model="picked4">
            <label for="one">从不</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="1"  @change="chooseItem($event, 4)" v-model="picked4">
            <label for="one">有时</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="2"  @change="chooseItem($event, 4)" v-model="picked4">
            <label for="one">经常</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="3"  @change="chooseItem($event, 4)" v-model="picked4">
            <label for="one">频繁</label>
          </div>
        </div>
      </div>

      <div class="itemBox">
        <div class="itemTitle">5、你是否对记住读过的东西感到困难？</div>
        <div class="itemMain">
          <div class="radioItem">
            <input type="radio" id="one" value="0" @change="chooseItem($event, 5)" v-model="picked5">
            <label for="one">从不</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="1"  @change="chooseItem($event, 5)" v-model="picked5">
            <label for="one">有时</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="2"  @change="chooseItem($event, 5)" v-model="picked5">
            <label for="one">经常</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="3"  @change="chooseItem($event, 5)" v-model="picked5">
            <label for="one">频繁</label>
          </div>
        </div>
      </div>

      <div class="itemBox">
        <div class="itemTitle">6、阅读或近距离学习时是否会出现重影？</div>
        <div class="itemMain">
          <div class="radioItem">
            <input type="radio" id="one" value="0" @change="chooseItem($event, 6)" v-model="picked6">
            <label for="one">从不</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="1"  @change="chooseItem($event, 6)" v-model="picked6">
            <label for="one">有时</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="2"  @change="chooseItem($event, 6)" v-model="picked6">
            <label for="one">经常</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="3"  @change="chooseItem($event, 6)" v-model="picked6">
            <label for="one">频繁</label>
          </div>
        </div>
      </div>

      <div class="itemBox">
        <div class="itemTitle">7、阅读或近距离学习时你是否觉得文字移动、跳动、游动或在纸面上漂浮？</div>
        <div class="itemMain">
          <div class="radioItem">
            <input type="radio" id="one" value="0" @change="chooseItem($event, 7)" v-model="picked7">
            <label for="one">从不</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="1"  @change="chooseItem($event, 7)" v-model="picked7">
            <label for="one">有时</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="2"  @change="chooseItem($event, 7)" v-model="picked7">
            <label for="one">经常</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="3"  @change="chooseItem($event, 7)" v-model="picked7">
            <label for="one">频繁</label>
          </div>
        </div>
      </div>

      <div class="itemBox">
        <div class="itemTitle">8、你是否觉得你的阅读速度慢？</div>
        <div class="itemMain">
          <div class="radioItem">
            <input type="radio" id="one" value="0" @change="chooseItem($event, 8)" v-model="picked8">
            <label for="one">从不</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="1"  @change="chooseItem($event, 8)" v-model="picked8">
            <label for="one">有时</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="2"  @change="chooseItem($event, 8)" v-model="picked8">
            <label for="one">经常</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="3"  @change="chooseItem($event, 8)" v-model="picked8">
            <label for="one">频繁</label>
          </div>
        </div>
      </div>
      <div class="itemBox">
        <div class="itemTitle">9、阅读或近距离学习时你是否觉得眼痛、眼酸？</div>
        <div class="itemMain">
          <div class="radioItem">
            <input type="radio" id="one" value="0" @change="chooseItem($event, 9)" v-model="picked9">
            <label for="one">从不</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="1"  @change="chooseItem($event, 9)" v-model="picked9">
            <label for="one">有时</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="2"  @change="chooseItem($event, 9)" v-model="picked9">
            <label for="one">经常</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="3"  @change="chooseItem($event, 9)" v-model="picked9">
            <label for="one">频繁</label>
          </div>
        </div>
      </div>

      <div class="itemBox">
        <div class="itemTitle">10、阅读或近距离学习时你是否有一种眼球牵拉感？</div>
        <div class="itemMain">
          <div class="radioItem">
            <input type="radio" id="one" value="0" @change="chooseItem($event, 10)" v-model="picked10">
            <label for="one">从不</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="1"  @change="chooseItem($event, 10)" v-model="picked10">
            <label for="one">有时</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="2"  @change="chooseItem($event, 10)" v-model="picked10">
            <label for="one">经常</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="3"  @change="chooseItem($event, 10)" v-model="picked10">
            <label for="one">频繁</label>
          </div>
        </div>
      </div>

      <div class="itemBox">
        <div class="itemTitle">11、阅读或近距离学习时你是否会出现视物模糊或聚焦不准？</div>
        <div class="itemMain">
          <div class="radioItem">
            <input type="radio" id="one" value="0" @change="chooseItem($event, 11)" v-model="picked11">
            <label for="one">从不</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="1"  @change="chooseItem($event, 11)" v-model="picked11">
            <label for="one">有时</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="2"  @change="chooseItem($event, 11)" v-model="picked11">
            <label for="one">经常</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="3"  @change="chooseItem($event, 11)" v-model="picked11">
            <label for="one">频繁</label>
          </div>
        </div>
      </div>

      <div class="itemBox">
        <div class="itemTitle">12、阅读或近距离学习时你是否会串行？</div>
        <div class="itemMain">
          <div class="radioItem">
            <input type="radio" id="one" value="0" @change="chooseItem($event, 12)" v-model="picked12">
            <label for="one">从不</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="1"  @change="chooseItem($event, 12)" v-model="picked12">
            <label for="one">有时</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="2"  @change="chooseItem($event, 12)" v-model="picked12">
            <label for="one">经常</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="3"  @change="chooseItem($event, 12)" v-model="picked12">
            <label for="one">频繁</label>
          </div>
        </div>
      </div>

      <div class="itemBox">
        <div class="itemTitle">13、阅读或近距离学习时你是否不得不重复读同一行？</div>
        <div class="itemMain">
          <div class="radioItem">
            <input type="radio" id="one" value="0" @change="chooseItem($event, 13)" v-model="picked13">
            <label for="one">从不</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="1"  @change="chooseItem($event, 13)" v-model="picked13">
            <label for="one">有时</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="2"  @change="chooseItem($event, 13)" v-model="picked13">
            <label for="one">经常</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="3"  @change="chooseItem($event, 13)" v-model="picked13">
            <label for="one">频繁</label>
          </div>
        </div>
      </div>
      <div class="itemBox">
        <div class="itemTitle">14、你是否回避阅读或近距离学习？</div>
        <div class="itemMain">
          <div class="radioItem">
            <input type="radio" id="one" value="0" @change="chooseItem($event, 14)" v-model="picked14">
            <label for="one">从不</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="1"  @change="chooseItem($event, 14)" v-model="picked14">
            <label for="one">有时</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="2"  @change="chooseItem($event, 14)" v-model="picked14">
            <label for="one">经常</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="3"  @change="chooseItem($event, 14)" v-model="picked14">
            <label for="one">频繁</label>
          </div>
        </div>
      </div>
      <div class="itemBox">
        <div class="itemTitle">15、你是否从视远转到视近或者从视近转到视远聚焦困难？</div>
        <div class="itemMain">
          <div class="radioItem">
            <input type="radio" id="one" value="0" @change="chooseItem($event, 15)" v-model="picked15">
            <label for="one">从不</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="1"  @change="chooseItem($event, 15)" v-model="picked15">
            <label for="one">有时</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="2"  @change="chooseItem($event, 15)" v-model="picked15">
            <label for="one">经常</label>
          </div>
          <div class="radioItem">
            <input type="radio" id="one" value="3"  @change="chooseItem($event, 15)" v-model="picked15">
            <label for="one">频繁</label>
          </div>
        </div>
      </div>
      <div class="resultBtn" @click="seeResult">
        查看结果
      </div>
      <div>

      </div>
      <div class="greyBg" v-if="showRemin" @click="hideRemin">

      </div>
      <div class="showRemin" v-if="showRemin">
        <div class="quxiaoRemin" @click="hideRemin">
          <img class="quImg" src="../assets/image/cancle.png"/>
        </div>
        <div class="level" :class="[resultA]">
           {{level}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        picked1: '',
        picked2: '',
        picked3: '',
        picked4: '',
        picked5: '',
        picked6: '',
        picked7: '',
        picked8: '',
        picked9: '',
        picked10: '',
        picked11: '',
        picked12: '',
        picked13: '',
        picked14: '',
        picked15: '',
        selectArr: [],
        level: '',
        showRemin: false,
        totalNum: 0
      }
    },
    methods: {
      hideRemin() {
        this.showRemin = false;
        this.level = '';
        this.picked1 = '';
        this.picked2 = '';
        this.picked3 = '';
        this.picked4 = '';
        this.picked5 = '';
        this.picked6 = '';
        this.picked7 = '';
        this.picked8 = '';
        this.picked9 = '';
        this.picked10 = '';
        this.picked11 = '';
        this.picked12 = '';
        this.picked13 = '';
        this.picked14 = '';
        this.picked15 = '';
      },
      chooseItem(e, index) {
        let arr = this.selectArr;
      },
      goback() {
        this.$router.go(-1);
      },
      seeResult() {
        this.totalNum = Number(this.picked1) + Number(this.picked2)+ Number(this.picked3) + Number(this.picked4) +
        Number(this.picked5) + Number(this.picked6) + Number(this.picked7) + Number(this.picked8) +
        Number(this.picked9) +  Number(this.picked10) + Number(this.picked11) + Number(this.picked12)+
        Number(this.picked13)+ Number(this.picked14) + Number(this.picked15);
        if(this.totalNum !== 0) {
          this.showRemin = true;
        }
        if(this.totalNum <= 16) {
          this.level = '轻度视疲劳';
          this.resultA = 'light';
        }
        if(this.totalNum > 16 && this.totalNum <= 28) {
          this.level = '中度视疲劳';
          this.resultA = 'middle';
        }
        if(this.totalNum > 28){
          this.level = '重度视疲劳';
          this.resultA = 'serious';
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
.mainWrap
  padding: .5rem
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display:flex;
  flex-direction: column;
  .topWrap
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
      font-size: 1.6rem;
  .centerBox
    flex: 1
    overflow-y: scroll;
    padding-bottom: 5rem;
    .itemBox
      margin: 2rem 5%;
      .itemTitle
        font-size: 1.2rem
        margin: 0.8rem 0;
      .itemMain
         display: flex;
        .radioItem
          margin-right: 4rem;
    .resultBtn
      width: 40%;
      padding: 0.4rem;
      margin: 1rem auto;
      border-radius: 0.5rem;
      text-align: center;
      background: #4db2fd;
      color: #fff;
      font-size: 1.4rem;
      letter-spacing: 0.5rem
      font-weight: bold;
      cursor: pointer
    .greyBg
      position: fixed;
      top: 0%;
      left: 0%;
      width: 100%;
      height: 100%;
      background-color: black;
      z-index: 10
      opacity: 0.70;
    .showRemin
      position: fixed;
      top: 40%;
      left: 20%;
      width: 60%;
      box-sizing: border-box;
      background-color: white;
      z-index: 12;
      overflow: auto;
      margin: auto;
      color: #000;
      border-radius: 0.6rem;
      padding: 1rem;
      .quxiaoRemin
        text-align: right
        .quImg
          width: 1.4rem
          height: 1.4rem
      .level
        font-size: 1.6rem;
        text-align: center;
        margin-bottom: 1rem;
        letter-spacing: .5rem;
        font-weight: bold;
      .light
        color: green;
      .middle
        color: orange;
      .serious
        color: red;
</style>
