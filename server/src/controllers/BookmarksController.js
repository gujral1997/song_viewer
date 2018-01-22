const {Bookmark} = require('../models')

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
      const bookmark = req.body

      await Bookmark.create(bookmark)
      res.send(bookmark)
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
