'use strict'

const mongoose = require('mongoose')

let uri = `mongodb://cluster0-shard-00-00-lv8o5.mongodb.net:27017,cluster0-shard-00-01-lv8o5.mongodb.net:27017,cluster0-shard-00-02-lv8o5.mongodb.net:27017/tic-tac-toe`

mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    replicaSet: 'Cluster0-shard-0',
    authSource: 'admin',
    ssl: true,
    auth: { user: 'user535335', password: 'user535335' }
  }
)

global.Mongoose = mongoose