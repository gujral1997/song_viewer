<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="light-green">
      <v-toolbar-title>{{title}}</v-toolbar-title> <!-- {{}} stands for binding -->
    </v-toolbar>
  <div class="pl-4 pr-4 pt-2 pb-2">
    <slot name="hello">
      No slot Content defined
    </slot>
    <slot name ="bye">
      No slot Content defined
    </slot>
  </div>
  </div>
</template>

<script>
// import AuthenticationService from
export default {
  data () {
    return {
      title: 'hello world'
    }
  }
}
</script>

<style scoped>

</style>
