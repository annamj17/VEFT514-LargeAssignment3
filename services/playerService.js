const { Player } = require('../data/db.js');
const { InternalServerError } = require('../errors');

const playerService = () => {
    const getAllPlayers = () => {
        const allPlayers = Player.find({}, function (error) {
            if (error) { error(new InternalServerError); }
        })
        return allPlayers;
    }

    const getPlayerById = (id) => {
        const player = Player.findById(id, function (error) {
            if (error) { error(new InternalServerError); }
        })
        return player;
    }

    const returnPlayer = (p) => {
        return {
            id: p._id.toString(),
            name: p.name,
            playedGames: p.playedGames,
        }
    };

    return {
        getAllPlayers,
        getPlayerById,
        returnPlayer
    };
}

module.exports = playerService();