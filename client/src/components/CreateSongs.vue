<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata" class="mt-5">
        <v-text-field
          label="Title"
          required
          :rules="[rules.required]"
          v-model="song.title">
        </v-text-field>

        <v-text-field
          label="Artist"
          required
          v-model="song.artist">
        </v-text-field>

        <v-text-field
          label="Type"
          required
          v-model="song.type">
        </v-text-field>

        <v-text-field
          label="Genre"
          required
          v-model="song.genre">
        </v-text-field>

        <v-text-field
          label="Album"
          required
          v-model="song.album">
        </v-text-field>

        <v-text-field
          required
          label="AlbumImageURL"
          v-model="song.albumImageUrl">
        </v-text-field>

        <v-text-field
          required
          label="YoutubeId"
          v-model="song.youtubeId">
        </v-text-field>


      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-3 mt-5">
        <v-text-field
          required
          label="Lyrics"
          multi-line
          v-model="song.lyrics">
        </v-text-field>

        <v-text-field
          required
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
      },
      rules: {
        required: (value) => !!value || 'Required.'
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
