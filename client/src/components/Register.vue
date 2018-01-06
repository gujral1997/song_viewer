<template>
  <div>
    <h1>Register</h1>

    <input
    type="email"
    name="email"
    placeholder="email"
    v-model="email"
    />
    <!-- v-model means find any property known as email and bind it-->
    <input
    type="password"
    name="password"
    v-model="password"
    placeholder="password"
    />
    <br>
    <button
    @click="register">
    Register
    </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService' // This is controller and we can bind things to our controller
export default {
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  /* Few more cool features
  watch:{
    email (value) {
      comsole.log('email hase changed value', value)
    }
  },
  mounted() {
    setTimeout(() => {
      this.email= 'hello world'
    },2000)
  } */
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
