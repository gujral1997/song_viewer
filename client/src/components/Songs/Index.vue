<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <songs-panel />
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
import SongsPanel from './SongsPanel'
export default {
  components: {
    Panel, // my panel then <my-panel /> instead of <panel />
    SongsPanel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () { // if not async, mount wont work
    // do request to the backend for all the Songs
    this.songs = (await SongsService.index()).data // It will send data in panel
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
</style>
