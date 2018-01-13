<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <div
        v-for="song in songs"
        :key="song.id">
          {{song.title}}
          {{song.artist}}
          {{song.album}}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    Panel // my panel then <my-panel /> instead of <panel />
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
