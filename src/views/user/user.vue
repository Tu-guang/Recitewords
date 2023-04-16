<template>
  <div class="user">
    <van-nav-bar
      title="个人信息"
      right-text="保存"
      left-arrow
      @click-left="$router.back()"
      @click-right="save"
    />
    <van-cell title="头像" is-link>
      <template #default>
        <van-uploader
          :before-read="beforeRead"
          :after-read="afterRead"
          multiple
        >
          <img :src="photo" width="60" height="60" />
        </van-uploader>
      </template>
    </van-cell>
    <van-cell @click="nameshow = true" title="昵称" :value="name" is-link />
    <van-cell title="我的打卡天数" :value="sign_day" is-link />
    <van-cell title="记单词数" :value="word_num" is-link />
    <van-cell title="我的徽章数" :value="badge_num" is-link />
    <van-cell title="我的购买的课程" :value="class_num" is-link />
    <van-cell title="订单查看" :value="order_num" is-link />
    <!-- 修改用户昵称弹出层 -->
    <van-popup v-model="nameshow" position="bottom" height="8%">
      <van-field required placeholder="请输入" />
    </van-popup>
  </div>
</template>

<script>
import { Upload, UserInfo } from "@/plugins/api";
export default {
  components: {},
  data() {
    return {
      name: "123",
      sign_day: "" + "天",
      word_num: "" + "个",
      badge_num: "" + "个",
      class_num: "" + "门",
      order_num: "" + "条",
      fileList: [], // 上传文件列表，用于与 van-uploader 组件 v-model 绑定
      nameshow: false,
      photo:
        "https://img.wxcha.com/m00/08/16/6cfad11f9dd28f01b97e4d3e6569a85b.jpg?down",
    };
  },
  methods: {
    // 上传文件前的校验
    beforeRead(file) {
      if (file.type !== "image/jpeg" && file.type !== "image/png") {
        this.$toast("只能上传 JPG/PNG 格式的图片");
        return false;
      }
      return true;
    },
    // 上传文件成功后的回调函数
    async afterRead(file) {
      // 保存头像预览地址
      this.photo = file.content;
      // let formData = new FormData();
      // formData.append("file", file.file);
      // console.log(formData);

      // // 发起上传请求
      let res = await Upload({ photo: file });
      console.log(res);
      if (res.code === 200) {
        this.$toast("上传成功");
      } else {
        this.$toast("上传失败");
      }
    },
    save() {
      console.log("保存");
    },
    openAvatar() {
      console.log("openAvatar");
    },
  },
  created() {},
  computed: {},
  mounted() {
    let name = JSON.parse(sessionStorage.getItem("user")).loginData;
    UserInfo({ name }).then((res) => {
      if (res.code === 200) {
        this.name = name;
        this.sign_day = res.data[0].sign_day;
        this.word_num = res.data[0].word_num;
        this.badge_num = res.data[0].badge_num;
        this.class_num = res.data[0].class_num;
        this.order_num = res.data[0].order_num;
      }
    });
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
</style>