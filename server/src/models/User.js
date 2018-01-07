module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true // Tells that email should be unique
    },
    password: DataTypes.STRING
  })
