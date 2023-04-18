<template>
  <div class="short-video">
    <van-nav-bar title="视频" left-arrow @click-left="$router.back()" />
    <!--顶部搜索栏-->
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      @search="onSearch"
      :clearable="true"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template></van-search
    >
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div style="margin-bottom: 66px">
        <div class="main">
          <div class="item" v-for="(item, index) in videos" :key="index">
            <div class="titles">{{ item.title }}</div>
            <div class="des">{{ item.type }}｜发布时间 {{ item.createAt }}</div>
            <div class="play" :style="'height:' + playHeight + 'px'">
              <video
                class="video"
                :autoplay="false"
                :width="windowWidth"
                :height="playHeight"
                controls
                :src="item.src"
                type="video/mp4"
              />
            </div>
          </div>
        </div>
      </div>
    </van-pull-refresh>
    <div class="d">没有更多内容了</div>
  </div>
</template>

<script>
import { GetVideo, FindVideo } from "@/plugins/api";
export default {
  components: {},
  data() {
    return {
      value: "",
      videos: [{}],
      isLoading: false,
      windowWidth: document.documentElement.clientWidth - 30, //实时屏幕宽度
      windowHeight: document.documentElement.clientHeight, //实时屏幕高度
      playHeight: 0,
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.GetAllVideo();
      }, 1000);
    },
    onSearch() {
      FindVideo({ title: this.value }).then((res) => {
        console.log(res);
        if (res.code === 200) {
          this.videos = res.data;
          console.log(res.data);
        } else {
        }
      });
    },
    GetAllVideo() {
      GetVideo().then((res) => {
        if (res.code === 200) {
          this.videos = res.data;
          console.log(res.data);
        }
      });
    },
  },
  created() {},
  computed: {},
  mounted() {
    this.playHeight = this.windowWidth * (9 / 16);
    this.GetAllVideo();
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
.d {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 2px;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
}
</style>