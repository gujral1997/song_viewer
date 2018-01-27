<template>
  <v-layout>
    <v-flex>
      <songs-bookmarks />
    </v-flex>
    <v-flex xs6 class="ml-2">
      <songs-search-panel />
      <songs-panel class="mt-3"/>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsBookmarks from './SongsBookmarks'
export default {
  components: {
    // Panel, // my panel then <my-panel /> instead of <panel />
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () { // if not async, mount wont work
    // do request to the backend for all the Songs
    this.songs = (await SongsService.index()).data // It will send data in panel
  }
}
</script>

<style scoped>
</style>
