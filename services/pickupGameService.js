const { PickupGame } = require('../data/db.js');
const { InternalServerError } = require('../errors');

const pickupGameService = () => {
    const getAllPickupGames = () => {
        const allPickupGames = PickupGame.find({}, function (error) {
            if (error) { error(new InternalServerError); }
        })
        return allPickupGames;
    };

    const getPickupGameById = (id) => {
        const pickupGame = PickupGame.findById(id, function (error) {
            if (error) { error(new InternalServerError); }
        }) 
        return pickupGame;
    };

    const returnPickupGame = (p) => {
        return {
            id: p._id.toString(),
            start: p.start,
            end: p.end,
            location: p.location,
            registeredPlayers: p.registeredPlayers,
            host: p.host
        }
    }

    return {
        getAllPickupGames,
        getPickupGameById,
        returnPickupGame
    };
};

module.exports = pickupGameService();