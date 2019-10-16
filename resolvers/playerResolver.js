const playerService = require('../services/playerService');
const { InternalServerError } = require('../errors');

module.exports = {
    Query: {
        allPlayers: async () => {
            const players = await playerService.getAllPlayers();
            if (players === null) throw new InternalServerError;
            return players.map(player => {
                return {
                    ...playerService.returnPlayer(player)
                }
            })
        },
    },
    Mutation: {

    },
};
