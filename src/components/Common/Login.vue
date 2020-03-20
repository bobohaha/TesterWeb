<template>
  <div>
    <header>头+++++++++++++++++++++++++++++++++++++++++=</header>
    <hr/>
    <div>
      用户名:<input type="text" v-model="loginInfoVo.username" placeholder="请输入用户名" />
      <br/>
      密码：<input type="password" v-model="loginInfoVo.password" placeholder="请输入密码" />
      <br/>
      <button v-on:click="login">登录</button>
      <br/>
      登录验证情况：<textarea cols="30" rows="10" v-model="responseResult"></textarea>
    </div>
    <hr/>
    <footer>Footer++++++++++++++++++++++++++++++++++++++++++</footer>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
  name: 'Login',
  components: {Header, Footer},
  data () {
    return {
      loginInfoVo: {username: '', password: ''},
      responseResult: []
    }
  },
  methods: {
    login () {
      this.$http
        .post('/login', {
          username: this.loginInfoVo.username,
          password: this.loginInfoVo.password
        })
        .then(successResponse => {
          this.responseResult = JSON.stringify(successResponse.data)
          if (successResponse.data.code === 200) {
            this.$router.replace({path: '/index'})
          }
        })
        .catch(failResponse => {
        })
    }
  }
}
</script>

<style scoped>

</style>
