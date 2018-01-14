import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  }, // show ()
  post (song) {
    return Api().post('songs', song)
  }
}

// /songs
// /songs/:id
