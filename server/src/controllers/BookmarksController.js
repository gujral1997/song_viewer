const {Bookmark, Song, User} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {songId, userId} = req.query

      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured, trying to fetch bookmark'
      })
    }
  },
  async post (req, res) {
    try {
      const {songId, userId} = req.body
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error: 'already a bookmark'
        })
      }

      const newBookmark = await Bookmark.create(req.body)
      const song = await Song.findById(songId)
      const user = await User.findById(userId)
      await newBookmark.setUser(user)
      await newBookmark.setSong(song)
      res.send(newBookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured, trying to create bookmark'
      })
    }
  },
  async delete (req, res) {
    try {
      const {bookmarkId} = req.params

      const bookmark = await Bookmark.findById(bookmarkId
      )
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured, trying to delete bookmark'
      })
    }
  }
}
