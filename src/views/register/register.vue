<template>
  <div class="register">
    <van-nav-bar title="注册" left-arrow @click-left="$router.back()" />
    <van-form @submit="submit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 14px;">
        <van-button round block type="info" native-type="submit">注册</van-button>
        <div style="right:70px;bottom:0px;">
          <a href="#/login" >去登录</a>
        </div>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Register } from "@/plugins/api"
export default {
  components: {},
  data() {
    return {
      value: '',
      username: '',
      password: '',
    };
  },
  methods: {
    async submit() {
      if (this.username === "" && this.password === "") {
        this.$toast.fail('填写账号密码');
        return
      }
      let res=await Register({
        username: this.username,
        password: this.password,
      })
      if (res.code === 200) {
        this.$toast.success("注册成功")
      } else {
        this.$toast.fail("账号已经存在")
      }
      
    }
  },
  created() {
    
  },
  computed: {
  },
  mounted(){},
  watch: {}
};
</script>

<style lang="scss" scoped>
.register {
    h2 {
      text-align: center;
      letter-spacing: 10px;
    }
    .van-field {
      background: #f2f3f5;
      border-radius: 20px;
      margin-bottom: 20px;
      input {
        background: transparent;
      }
    }
  }
.van-form{
  margin: 30px;
  // margin-bottom: 10px;
}
   
</style>