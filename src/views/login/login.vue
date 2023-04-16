<template>
  <div class="login">
    <van-nav-bar title="登录" left-arrow @click-left="$router.back()"  />
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
      <div style="margin: 15px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
          <div style="right:70px;bottom:10px;">
            <a href="#/register" >没有账号,去注册</a>
          </div>
      </div>
      
    </van-form>
  </div>
</template>

<script>
import { Login } from "@/plugins/api"
import router from '@/router';
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
      let res=await Login({
        username: this.username,
        password: this.password,
      })
      if (res.code === 200) {
        this.$toast.success("登录成功")
        router.push({ path: '/home' })
        sessionStorage.setItem("user",`{"loginData":"${this.username}","AA":"1"}`)
      } else {
        this.$toast.fail("账号或密码错误")
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
.login {
    
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