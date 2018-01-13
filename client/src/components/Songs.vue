<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel>
        <div slot = "hello">
        <h1>YO YO YO</h1>
        <p>
          Hello This is Paragraph
        </p>
      </div>
      <div slot ="bye">
      <h1>bye bye bye</h1>
      <p>
        Bye
      </p>
    </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel // my panel then <my-panel /> instead of <panel />
  }
}
</script>

<style scoped>

</style>
