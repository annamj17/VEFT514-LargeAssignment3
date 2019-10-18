const playerService = require('../services/playerService');
const pickupGameService = require('../services/pickupGameService');
const { NotFoundError } = require('../errors');

module.exports = {
    Query: {
        allPlayers: async () => {
            const players = await playerService.getAllPlayers();
            if (players === null) { throw new NotFoundError; }
            return players.map(player => {
                console.log("Players: ");
                console.log(playerService.returnPlayer(player));
                return playerService.returnPlayer(player);
            });
        },
        player: async (parent, args) => {
            let player = await playerService.getPlayerById(args.id);
            if (player === null) { throw new NotFoundError; }
            return playerService.returnPlayer(player);
        },
    },
    Mutation: {
        createPlayer: async (parent, args) => {
            const newPlayer = await playerService.createPlayer(args.input);
            return playerService.returnPlayer(newPlayer);
        }
    },
    Type: {

    }
};
