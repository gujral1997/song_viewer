import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  }, // show ()
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  post (song) {
    return Api().post('songs', song)
  }
}

// /songs
// /songs/:id
