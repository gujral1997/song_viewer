<template>
  <panel title="Search">
    <v-text-field
    label="Search by song name, artist, album, genre"
    v-model="search"
    >
    </v-text-field>
  </panel>

</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>

</style>
