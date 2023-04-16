<template>
  <div class="spoken">
    <van-nav-bar title="口语" left-arrow @click-left="$router.back()" />
    <!-- 口语页面 -->
    <div class="swiper-slide swiper-no-swiping">
      <div class="contentRead p-2">
        <div class="card1">
          <div class="top">
            <div class="text">
              <h3>每日单词口语练习</h3>
              <p>
                English word memorization methods and skills, choose EF adult
                English
              </p>
            </div>
            <div class="pic">
              <img src="../../assets/image/1.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="wordList">
          <div class="item">
            <div class="tit">
              <i>application</i>
              <span class="iconfont icon-shengyin_shiti"></span>
            </div>
            <p>应用程序、应用</p>
          </div>
          <div class="item">
            <div class="tit">
              <i>sing</i>
              <span class="iconfont icon-shengyin_shiti"></span>
            </div>
            <p>唱</p>
          </div>
          <div class="item">
            <div class="tit">
              <i>jump</i>
              <span class="iconfont icon-shengyin_shiti"></span>
            </div>
            <p>跳</p>
          </div>
          <div class="item">
            <div class="tit">
              <i>rap</i>
              <span class="iconfont icon-shengyin_shiti"></span>
            </div>
            <p>说唱音乐</p>
          </div>
          <div class="item">
            <div class="tit">
              <i>Because you are so beautiful</i>
              <span class="iconfont icon-shengyin_shiti"></span>
            </div>
            <p>只因你太美</p>
          </div>
          <div class="item">
            <div class="tit">
              <i>abate</i>
              <span class="iconfont icon-shengyin_shiti"></span>
            </div>
            <p>减轻</p>
          </div>
          <div class="item">
            <div class="tit">
              <i>abrade</i>
              <span class="iconfont icon-shengyin_shiti"></span>
            </div>
            <p>切除</p>
          </div>
          <div class="item">
            <div class="tit">
              <i>what are you doing</i>
              <span class="iconfont icon-shengyin_shiti"></span>
            </div>
            <p>你在干什么</p>
          </div>
          <div class="item">
            <div class="tit">
              <i>absurd</i>
              <span class="iconfont icon-shengyin_shiti"></span>
            </div>
            <p>荒唐的</p>
          </div>
          <div class="item">
            <div class="tit">
              <i>Pure passers-by</i>
              <span class="iconfont icon-shengyin_shiti"></span>
            </div>
            <p>纯路人</p>
          </div>
          <div class="item">
            <div class="tit">
              <i>abstain</i>
              <span class="iconfont icon-shengyin_shiti"></span>
            </div>
            <p>防止</p>
          </div>
          <div class="item">
            <div class="tit">
              <i>my god!</i>
              <span class="iconfont icon-shengyin_shiti"></span>
            </div>
            <p>我的天</p>
          </div>
          <div class="item">
            <div class="tit">
              <i>not bad</i>
              <span class="iconfont icon-shengyin_shiti"></span>
            </div>
            <p>还不错</p>
          </div>
          <div class="item">
            <div class="tit">
              <i>shut up!</i>
              <span class="iconfont icon-shengyin_shiti"></span>
            </div>
            <p>闭嘴</p>
          </div>
          <div class="item">
            <div class="tit">
              <i>allow me</i>
              <span class="iconfont icon-shengyin_shiti"></span>
            </div>
            <p>让我来</p>
          </div>
          <div class="item">
            <div class="tit">
              <i>hold on</i>
              <span class="iconfont icon-shengyin_shiti"></span>
            </div>
            <p>等一等</p>
          </div>
          <div class="item">
            <div class="tit">
              <i>ruler</i>
              <span class="iconfont icon-shengyin_shiti"></span>
            </div>
            <p>尺子</p>
          </div>
          <div class="item">
            <div class="tit">
              <i>browm</i>
              <span class="iconfont icon-shengyin_shiti"></span>
            </div>
            <p>棕</p>
          </div>
          <div class="item">
            <div class="tit">
              <i>bird</i>
              <span class="iconfont icon-shengyin_shiti"></span>
            </div>
            <p>鸟</p>
          </div>
          <div class="item">
            <div class="tit">
              <i>ant</i>
              <span class="iconfont icon-shengyin_shiti"></span>
            </div>
            <p>蚂蚁</p>
          </div>
          <div class="item">
            <div class="tit">
              <i>monkey</i>
              <span class="iconfont icon-shengyin_shiti"></span>
            </div>
            <p>猴子</p>
          </div>
          <div class="item">
            <div class="tit">
              <i>cow</i>
              <span class="iconfont icon-shengyin_shiti"></span>
            </div>
            <p>奶牛</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      disabled: false,
    };
  },
  methods: {},
  created() {},
  computed: {},
  mounted() {
    // 点击朗读单词
    let message = new SpeechSynthesisUtterance();
    message.lang = "am-ET";
    window.speechSynthesis.cancel();
    function setMessageText(text) {
      console.log(text);
      message.text = text;
      speechSynthesis.speak(message);
    }
    let readBtn = document.querySelectorAll(".contentRead .wordList .item");
    readBtn.forEach((el, i) => {
      el.addEventListener("click", function () {
        let msg = el.querySelector(".tit i").innerHTML;
        readBtn.forEach((item) => {
          item.querySelector(".tit").classList.remove("active");
        });
        el.querySelector(".tit").classList.add("active");
        setMessageText(msg);
      });
    });
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.logo {
  img {
    width: 80px;
  }
  h2 {
    margin: 10px 0 0 20px;
    font-size: 28px;
    font-weight: 500;
    color: #666;
  }
  .github {
    margin-top: 30px;
    color: $text-color-gray;
    p {
      margin-top: 15px;
    }
    a {
      color: -webkit-link;
      cursor: pointer;
      text-decoration: underline;
    }
  }
  .wxchat-group {
    margin-top: 10px;
    color: $text-color-gray;
    img {
      width: 150px;
    }
  }
  .qrcode {
    margin-top: 20px;
    vertical-align: middle;
    color: lighten($color: #000000, $amount: 60%);
    .van-button {
      background: #ff5500;
    }
  }
  .author {
    display: inline-block;
    width: 250px;
    height: 250px;
    background-image: url($cdn + "/2020/11/23/DJL4UI.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}
/*  */
.card1 {
  margin-bottom: 10px;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
}
.card1:last-child {
  margin-bottom: 0;
}
.card1 .top {
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
}
.card1 .top .pic {
  position: relative;
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.card1 .top .pic img {
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.card1 .top .pic .tip {
  position: absolute;
  bottom: 3px;
  right: 3px;
  padding: 0 10px;
  line-height: 15px;
  color: #fff;
  font-size: 12px;
  font-style: normal;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 25px;
}
.card1 .top .text {
  margin-right: 5px;
  color: rgb(218, 23, 23);
}
.card1 .top .text h3 {
  margin-bottom: 15px;
  line-height: 20px;
  color: #333;
}
.card1 .top .text p {
  line-height: 1.2;
}
.card1 .bottom {
  color: #666;
}
.wordList {
  display: flex;
  flex-wrap: wrap;
}
.wordList .item {
  margin-bottom: 10px;
  margin-right: 3%;
  padding: 10px;
  width: 48.5%;
  background: #fff;
  border-radius: 5px;
}
.wordList .item:nth-child(2n) {
  margin-right: 0;
}
.wordList .item .tit {
  margin-bottom: 10px;
  padding-bottom: 10px;
  color: #0265fe;
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid #eee;
}
.wordList .item .tit.active {
  color: red;
}
.wordList .item .tit i {
  font-style: normal;
  line-height: 1.2;
}
.wordList .item p {
  color: #666;
}
.wordList {
  display: flex;
  flex-wrap: wrap;

  .item {
    margin-bottom: 10px;
    margin-right: 3%;
    padding: 10px;
    width: 48.5%;
    background: #fff;
    border-radius: 5px;

    &:nth-child(2n) {
      margin-right: 0;
    }

    .tit {
      margin-bottom: 10px;
      padding-bottom: 10px;
      color: rgb(2, 101, 254);
      font-size: 18px;
      font-weight: 600;
      border-bottom: 1px solid #eee;

      &.active {
        color: red;
      }

      i {
        font-style: normal;
        line-height: 1.2;
      }
    }

    p {
      color: #666;
    }
  }
}
.wordList {
  display: flex;
  flex-wrap: wrap;
}
.wordList .item {
  margin-bottom: 10px;
  margin-right: 3%;
  padding: 10px;
  width: 48.5%;
  background: #fff;
  border-radius: 5px;
}
.wordList .item:nth-child(2n) {
  margin-right: 0;
}
.wordList .item .tit {
  margin-bottom: 10px;
  padding-bottom: 10px;
  color: #0265fe;
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid #eee;
}
.wordList .item .tit.active {
  color: red;
}
.wordList .item .tit i {
  font-style: normal;
  line-height: 1.2;
}
.wordList .item p {
  color: #666;
}
</style>

<style scoped src="../../assets/css/iconfont.css">
</style>

