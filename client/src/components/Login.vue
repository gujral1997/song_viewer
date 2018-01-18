<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title = "Login">
        <v-text-field
          label="E-mail"
          v-model="email">
        </v-text-field>
          <br>
          <v-text-field
               name="input-10-1"
               autocomplete="new-password"
               label="Password"
               hint="At least 8 characters"
               v-model="password"
               min="8"
               :append-icon="e1 ? 'visibility' : 'visibility_off'"
               :append-icon-cb="() => (e1 = !e1)"
               :type="e1 ? 'password' : 'text'"
               counter
             ></v-text-field>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          class="light-green"
          @click="login">
          Login
        </v-btn>
    </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      e1: false,
      password: '',
      email: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        // const token = response.data.token
        // console.log(token)
        this.$store.dispatch('setToken', response.data.token) // Will call stores setToken method which will further call mutation setToken which eill update the state to token
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

<style scoped>
</style>
