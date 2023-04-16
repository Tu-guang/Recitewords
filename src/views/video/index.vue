<template>
  <div class="short-video">
    <van-nav-bar title="视频" left-arrow @click-left="$router.back()" />
    <!--顶部搜索栏-->
    <van-search placeholder="搜索你感兴趣的内容" />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div style="margin-bottom: 66px">
        <div class="main">
          <div class="item" v-for="(item, index) in videoList" :key="index">
            <div class="titles">{{ item.title }}</div>
            <div class="des">{{ item.type }}｜发布时间 {{ item.createAt }}</div>
            <div class="play" :style="'height:' + playHeight + 'px'">
              <video
                class="video"
                :autoplay="false"
                :width="windowWidth"
                :height="playHeight"
                controls
                :src="src"
                type="video/mp4"
              />
            </div>
          </div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      videos: [
        {
          src: "https://api.ainio.cn/mp4/sp/235.mp4",
          poster: "https://i1.funletu.com/img/Cv4PY0.jpg",
          avatar: "https://i1.funletu.com/img/Cv4PY0.jpg",
          username: "小鱼儿",
          title: "111",
          createAt: "2002",
          type: "2002",
        },
        {
          src: "https://api.ainio.cn/mp4/sp/630.mp4",
          poster: "https://images.alphacoders.com/824/thumbbig-824050.jpg",
          avatar: "https://images.alphacoders.com/824/thumbbig-824050.jpg",
          username: "小狗狗",
          title: "111",
          type: "2002",
        },
        {
          src: "https://api.ainio.cn/mp4/sp/1012.mp4",
          poster: "https://images2.alphacoders.com/112/thumbbig-1126230.jpg",
          avatar: "https://images2.alphacoders.com/112/thumbbig-1126230.jpg",
          username: "小",
          title: "111",
          type: "2002",
        },
      ],
      isLoading: false,
      videoList: [],
      windowWidth: document.documentElement.clientWidth - 30, //实时屏幕宽度
      windowHeight: document.documentElement.clientHeight, //实时屏幕高度
      playHeight: 0,
      src: "https://api.ainio.cn/mp4/sp/630.mp4",
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
  created() {},
  computed: {},
  mounted() {
    this.playHeight = this.windowWidth * (9 / 16);
    // FindAllVideo().then((res) => {
    //   if (res.status) {
    //     this.videoList = res.data;
    //     console.log(res.data);
    //   }
    // });
    this.videoList = this.videos;
  },
  watch: {},
};
</script>

<style scoped>
.title {
  padding: 20px 10px;
  text-align: center;
  font-size: 20px;
}
.main {
  margin-top: 20px;
  padding: 0 15px;
}
.item {
  margin-bottom: 20px;
  letter-spacing: 1px;
}
.titles {
  font-size: 16px;
  font-weight: 500;
  line-height: 23px;
}
.des {
  font-size: 11px;
  color: rgba(0, 0, 0, 0.5);
  line-height: 30px;
}
.play {
  width: 100%;
  height: 120px;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
}
video {
  border-radius: 10px;
}
</style>