<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form
        name="tab-tracker-form"
        autocomplete="off">
        <v-text-field
          label="E-mail"
          v-model="email">
        </v-text-field>
          <br>
          <v-text-field
               name="input-10-1"
               label="Password"
               hint="At least 8 characters"
               v-model="password"
               min="8"
               :append-icon="e1 ? 'visibility' : 'visibility_off'"
               :append-icon-cb="() => (e1 = !e1)"
               :type="e1 ? 'password' : 'text'"
               counter
               autocomplete="new-password"
             ></v-text-field>
        </form>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          class="light-green"
          @click="register">
          Register
        </v-btn>
    </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService' // This is controller and we can bind things to our controller
export default {
  data () {
    return {
      e1: false,
      password: '',
      email: '',
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
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
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
</style>
