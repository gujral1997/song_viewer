<template>
      <v-toolbar fixed class="light-green">
            <v-toolbar-title class="mr-4">
                  <span
                  class="home"
                  @click="navigateTo({name: 'root'})">
                  Header
            </span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-toolbar-items>
                  <!--router-link to="register"--> <!--Look through register in index.js-->
                        <v-btn flat dark
                        @click="navigateTo({name: 'login'})">
                              Login
                        </v-btn>
                        <v-btn flat dark
                        @click="navigateTo({name: 'register'})">
                              Sign Up
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
