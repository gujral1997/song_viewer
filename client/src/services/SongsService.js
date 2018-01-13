import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  }
  // show ()
}

// /songs
// /songs/:id
