<template>
  <div class="white elevation-2">
    <v-toolbar flat dense class="light-green">
      <v-toolbar-title>{{title}}</v-toolbar-title> <!-- {{}} stands for binding -->
    </v-toolbar>

  <v-btn>
    <v-icon>add</v-icon>
  </v-btn>

  <div class="pl-4 pr-4 pt-2 pb-2">
    <slot>
      No slot Content defined
    </slot>
  </div>
  </div>
</template>

<script>
// import AuthenticationService from
export default {
  props: [
    'title' // Will go to {{title}} and it is defined as songs in songs.vue
  ]
}
</script>

<style scoped>

</style>
