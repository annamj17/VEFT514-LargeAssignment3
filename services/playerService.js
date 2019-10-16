const { Player } = require('../data/db.js');

const playerService = () => {
    const getAllPlayers = () => {
        const allPlayers = Player.find({}, function (error) {
            if (error) error(new InternalServerError)
        })
        return allPlayers;
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
        returnPlayer
    };
}

module.exports = playerService();