'use strict'

const { Schema } = Mongoose

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    default: 0
  }
})

module.exports = Mongoose.model('Score', schema)
