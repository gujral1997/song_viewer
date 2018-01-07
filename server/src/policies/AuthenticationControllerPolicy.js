const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex( // must read about regex
        new RegExp('^[a-zA-Z0-9]{8,32}$') // min 8 max 32 characters
      )
    }

    const {error} = Joi.validate(req.body, schema) // validated the body against schema and there was also error at (error,value)

    if (error) { //
      switch (error.details[0].context.key) { // Will give key that failed which is password here
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password failed to match with the following rules:
      <br>
      1. It must contain ONLY the following characters: lower case, upper case, and must be alpha-numeric.
      <br>
      2. It must be between 8 and 32 characters.
        `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next() // means go from AuthenticationControllerPolicy.js to AuthenticationController.js
    }
  }
}
