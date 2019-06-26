const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config()
const PORT = process.env.PORT
require('./mongoose')
const route = require('./route')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

route(app)

app.listen(PORT || 3000, () => console.log(`Running on port ${PORT}`))
