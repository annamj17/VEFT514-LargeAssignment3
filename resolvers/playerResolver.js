const playerService = require('../services/playerService');
const { NotFoundError } = require('../errors');

module.exports = {
    Query: {
        allPlayers: async () => {
            const players = await playerService.getAllPlayers();
            if (players === null) throw new NotFoundError;
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
