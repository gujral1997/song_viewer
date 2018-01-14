<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata" class="mt-5">
        <v-text-field
          label="Title"
          v-model="song.title">
        </v-text-field>

        <v-text-field
          label="Artist"
          v-model="song.artist">
        </v-text-field>

        <v-text-field
          label="Type"
          v-model="song.type">
        </v-text-field>

        <v-text-field
          label="Genre"
          v-model="song.genre">
        </v-text-field>

        <v-text-field
          label="Album"
          v-model="song.album">
        </v-text-field>

        <v-text-field
          label="AlbumImageURL"
          v-model="song.albumImageUrl">
        </v-text-field>

        <v-text-field
          label="YoutubeId"
          v-model="song.youtubeId">
        </v-text-field>


      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-3 mt-5">
        <v-text-field
          label="Lyrics"
          multi-line
          v-model="song.lyrics">
        </v-text-field>

        <v-text-field
          label="Tab"
          multi-line
          v-model="song.tab">
        </v-text-field>
      </panel>
      <v-btn
        class="light-green"
        @click="create">
        Create a Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      // call Api
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
