<template>
      <v-toolbar fixed class="light-green" >
            <v-toolbar-title class="mr-4">
                  <router-link
                  class="home"
                  tag="span"
                  :to="{
                  name: 'root'
                  }"> <!-- Alternative of navigateTo -->
                  Header
            </router-link>
            <v-btn
            flat
            dark
            @click="navigateTo({name: 'songs'})">
                  Browse
            </v-btn>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-toolbar-items>
              <!--router-link to="register"--> <!--Look through register in index.js-->
              <v-btn
              <v-btn
              v-if="!$store.state.isUserLoggedIn"
              flat
              dark
              @click="navigateTo({name: 'login'})">
                    Login
              </v-btn>
              <v-btn
              v-if="!$store.state.isUserLoggedIn"
              flat
              dark
              @click="navigateTo({name: 'register'})">
                    Sign Up
              </v-btn>
              <v-btn
              v-if="$store.state.isUserLoggedIn"
              flat
              dark
              @click="logout">
                    Log Out
              </v-btn>
              <!--/router-link-->
            </v-toolbar-items>
      </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // To redirect to home page
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>
.home {
      cursor: pointer;
}

.home:hover {
      color: #E9E
}
</style>
