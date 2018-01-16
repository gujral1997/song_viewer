<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn
          slot="action"
          @click="navigateTo({name: 'songs-create'})"
          class="green"
          light
          medium
          absolute
          right
          middle
          fab>
          <v-icon>add</v-icon>
        </v-btn>
        <div
        v-for="song in songs"
        class="song"
        :key="song.id">
        <v-layout>
          <v-flex xs6>
            <div class="song-title">
              {{song.title}}
            </div>
            <div class="song-artist">
              {{song.artist}}
            </div>
            <div class="song-genre">
              {{song.genre}}
            </div>
            <v-btn
              class="light-green"
              @click="navigateTo({name: 'song', params: {songId: song.id}})">
              Edit
            </v-btn>
          </v-flex>
          <v-flex xs6>
            <img class="album-image" :src="song.albumImageUrl" />
          </v-flex>
        </v-layout>
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
