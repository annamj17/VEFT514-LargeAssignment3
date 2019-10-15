const mongoose = require('mongoose');
const pickupGameSchema = require('../schema/schemas/pickupGame');
const playerSchema = require('../schema/schemas/player');

const connection = mongoose.createConnection('mongodb+srv://Anna:Abc1234@cluster0-hkoga.mongodb.net/hoop_dreams'
, {
    useNewUrlParser: true
}, () => {
    console.log('Connected to mongo db server');
});

module.exports = {
    PickupGame: connection.model('PickupGame', pickupGameSchema, 'pickupGames'),
    Player: connection.model('Player', playerSchema, 'players')
};



