<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata" class="mt-5">
        <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="song.title">
        </v-text-field>

        <v-text-field
          label="Artist"
          required
          :rules="[required]"
          v-model="song.artist">
        </v-text-field>

        <v-text-field
          label="Genre"
          required
          :rules="[required]"
          v-model="song.genre">
        </v-text-field>

        <v-text-field
          label="Album"
          required
          :rules="[required]"
          v-model="song.album">
        </v-text-field>

        <v-text-field
          required
          label="AlbumImageURL"
          :rules="[required]"
          v-model="song.albumImageUrl">
        </v-text-field>

        <v-text-field
          required
          label="YoutubeId"
          :rules="[required]"
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
          :rules="[required]"
          v-model="song.lyrics">
        </v-text-field>

        <v-text-field
          required
          label="Tab"
          multi-line
          :rules="[required]"
          v-model="song.tab">
        </v-text-field>
      </panel>
      <div class="danger-alert" v-if="error">
        {{error}}
      </div>
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
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
      .keys(this.song)
      .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please Fill in all the Required Fields.'
        return
      }
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
