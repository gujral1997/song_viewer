<template>
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
        <v-btn
          dark
          class="light-green"
          :to="{name: 'song-edit',
          params() {
            return {
              songId: song.id
            }
          }
        }">
          Edit
        </v-btn>
        <v-btn
          v-if="$store.state.isUserLoggedIn"
          dark
          class="light-green"
          @click="unbookmark"
          >
          Bookmark
        </v-btn>
        <!-- // not using $store.state.isUserLoggedIn as using mapState  -->
        <v-btn
          v-if="isUserLoggedIn"
          dark
          class="light-green"
          @click="bookmark"
          >
          UnBookmark
        </v-btn>
      </v-flex>
      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl" />
        <br>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
export default {
  props: [
    'song'
  ],
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  methods: {
    bookmark () {
      console.log('bookmark')
    },
    unbookmark () {
      console.log('unbookmark')
    }
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
</style>
