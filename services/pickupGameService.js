const { PickupGame } = require('../data/db.js');

const pickupGameService = () => {
    const getAllPickupGames = () => {
        return PickupGame.find({});
    }

    const returnPickupGame = (pickupGame) => {
        return {
            id: pickupGame._id.toString(),
            start: pickupGame.start,
            end: pickupGame.end,
            location: pickupGame.location,
            registeredPlayedGames: pickupGame.registeredPlayedGames,
            host: pickupGame.host
        }
    }

    return {
        getAllPickupGames,
        returnPickupGame
    };
};

module.exports = pickupGameService();