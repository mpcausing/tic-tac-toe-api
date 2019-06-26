'use strict'

const mongoose = require('mongoose')

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
)

global.Mongoose = mongoose