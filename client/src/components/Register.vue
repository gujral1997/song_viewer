<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
      <div class="pl-4 pr-4 pt-2 pb-2">
        <input
          type="email"
          name="email"
          placeholder="email"
          v-model="email"
          />
          <br>
        <input
          type="password"
          name="password"
          v-model="password"
          placeholder="password"
          />
        <br>
        <div class="error" v-html="error" />
        <br>
        <v-btn
          class="cyan"
          @click="register">
          Register
        </v-btn>
      </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService' // This is controller and we can bind things to our controller
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
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
  methods: { // v-__ is a vue specific attribute that bins here
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
