const Score = require('../Models/Score')
module.exports = app => {
    app.post('/users', async (request, response) => {
        const {player1, player2} = request.body
        const players = await Score.create([
            { name: player1 },
            { name: player2 }
        ])
        response.send(players)
    })
}