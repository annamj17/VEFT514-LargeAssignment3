const  { Player, Connection } = require('../data/db');
const { InternalServerError, NotFoundError } = require('../errors');

const playerService = () => {
    
    // Should return a collection of all players
    const getAllPlayers = (error) => {
        Player.find({}, function (err, player) {
            if (error) { error(new InternalServerError(true)); }
            return player;
        });
    };

    // Should return a specific player by id
    const getPlayer = (error, id) => {
        Player.findById(id, function (err, player) {
            if (error) { error(new NotFoundError(`Player with id ${id} not found in system`)); }
            return player;
        });
    }

    return {
        getAllPlayers,
        getPlayer
    };
};

module.exports = playerService();