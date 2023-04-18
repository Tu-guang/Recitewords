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
          <img :src="datas.url" width="60" height="60" />
        </van-uploader>
      </template>
    </van-cell>
    <van-cell
      @click="nameshow = true"
      title="账号"
      :value="datas.name"
      is-link
    />
    <van-cell
      @click="passwordshow = true"
      title="密码"
      :value="datas.password"
      is-link
    />
    <van-cell
      @click="sign_dayshow = true"
      title="我的打卡天数"
      :value="datas.sign_day"
      is-link
    />
    <van-cell
      @click="word_numshow = true"
      title="记单词数"
      :value="datas.word_num"
      is-link
    />
    <van-cell
      @click="badge_numshow = true"
      title="我的徽章数"
      :value="datas.badge_num"
      is-link
    />
    <van-cell
      @click="class_numshow = true"
      title="我的购买的课程"
      :value="datas.class_num"
      is-link
    />
    <van-cell
      @click="order_numshow = true"
      title="订单数量"
      :value="datas.order_num"
      is-link
    />
    <!-- 修改用户昵称弹出层 -->
    <van-popup v-model="nameshow" position="bottom" height="8%">
      <van-field v-model="datas.name" required placeholder="请输入账号" />
    </van-popup>

    <van-popup v-model="passwordshow" position="bottom" height="8%">
      <van-field v-model="datas.password" required placeholder="请输入密码" />
    </van-popup>

    <van-popup v-model="sign_dayshow" position="bottom" height="8%">
      <van-field
        v-model="datas.sign_day"
        required
        placeholder="请输入打卡天数"
      />
    </van-popup>

    <van-popup v-model="word_numshow" position="bottom" height="8%">
      <van-field
        v-model="datas.word_num"
        required
        placeholder="请输入记单词数"
      />
    </van-popup>
    <van-popup v-model="badge_numshow" position="bottom" height="8%">
      <van-field
        v-model="datas.badge_num"
        required
        placeholder="请输入徽章数"
      />
    </van-popup>
    <van-popup v-model="class_numshow" position="bottom" height="8%">
      <van-field
        v-model="datas.class_num"
        required
        placeholder="请输入购买的课程数"
      />
    </van-popup>
    <van-popup v-model="order_numshow" position="bottom" height="8%">
      <van-field
        v-model="datas.order_num"
        required
        placeholder="请输入订单数量"
      />
    </van-popup>
  </div>
</template>

<script>
import { Upload, UserInfo, UpdateUserInfo } from "@/plugins/api";
import router from "@/router";
export default {
  components: {},
  data() {
    return {
      datas: {
        name: "",
        oldname: "",
        password: "",
        sign_day: "" + "天",
        word_num: "" + "个",
        badge_num: "" + "个",
        class_num: "" + "门",
        order_num: "" + "条",
        url: "",
      },
      fileList: [], // 上传文件列表，用于与 van-uploader 组件 v-model 绑定
      nameshow: false,
      sign_dayshow: false,
      word_numshow: false,
      badge_numshow: false,
      class_numshow: false,
      order_numshow: false,
      passwordshow: false,
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

      let formData = new FormData();
      formData.append("file", file.file);
      // console.log(formData);

      // // 发起上传请求
      let res = await Upload(formData);
      console.log(res);
      if (res.code === 200) {
        this.datas.url = "http://localhost:8081/image/" + res.data.filename;
        this.$toast.success("上传成功");
      } else {
        this.$toast.fail("上传失败");
      }
    },
    save() {
      console.log("保存");
      console.log(this.datas);
      UpdateUserInfo(this.datas).then((res) => {
        console.log(res);
        if (res.code === 200) {
          let name = JSON.parse(sessionStorage.getItem("user")).loginData;
          this.$toast.success("保存成功");
          if (name !== this.datas.name || this.datas.password !== "") {
            router.push({ path: "/login" });
          }
        } else {
          this.$toast.fail("上传失败");
        }
      });
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
        this.datas.name = name;
        this.datas.oldname = res.data[0].username;
        this.datas.sign_day = res.data[0].sign_day;
        this.datas.word_num = res.data[0].word_num;
        this.datas.badge_num = res.data[0].badge_num;
        this.datas.class_num = res.data[0].class_num;
        this.datas.order_num = res.data[0].order_num;
        this.datas.url = res.data[0].url;
      }
    });
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
</style>