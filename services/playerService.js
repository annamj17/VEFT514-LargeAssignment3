const { Player } = require('../data/db.js');

const playerService = () => {
    const getAllPlayers = () => {
        return Player.find({});
    }

    const returnPlayer = (player) => {
        return {
            id: player._id.toString(),
            name: player.name,
            playedGames: player.playedGames,
        }
    };


    return {
        getAllPlayers,
        returnPlayer
    };
}

module.exports = playerService();