<template>
  <div class="login">
    <van-nav-bar title="登录" />
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
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
    submit(){
      console.log(1)
    }
  },
  created() {
    
  },
  computed: {
    ...mapGetters(['count'])
  },
  mounted(){},
  watch: {}
};
</script>

<style lang="scss" scoped>
.login {
    padding: 20px;
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