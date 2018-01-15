<template>
  <v-layout>
    <v-flex xs6>
      <panel title="Song Metadata">
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
          </v-flex>
          <v-flex xs6>
            <img class="album-image" :src="song.albumImageUrl" />
            <br>
            {{song.album}}
          </v-flex>
        </v-layout>
      </panel>
    </v-flex>
    <v-flex xs6 class="ml-2">
      <panel title="Tabs">
        <textarea
        readonly
        v-model="song.tab"
        ></textarea>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.album-image {
  width :100%;
  margin:0 auto
}
.song-title {
  font-size: 30px;
}
.song-genre {
  font-size: 24px;
}
.song-artist {
  font-size: 18px;
}
textarea {
  width: 100%;
  font-family: monospace;;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 20px;
}
</style>
