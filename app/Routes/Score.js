const Score = require('../Models/Score')
module.exports = app => {
    app.get('/scores', async (request, response) => {
        const scores = await Score.find({}, {score: 1, name: 1}).sort({score: -1}).limit(20)
        response.status(200).send(scores)
    })

    app.post('/scores/:_id', async (request, response) => {
        const {_id} = request.params
        await Score.findOneAndUpdate(
            {_id: Mongoose.Types.ObjectId(_id)},
            { $inc: { score: 1 } }
        )
        response.status(200).send({success: true})
    })
}