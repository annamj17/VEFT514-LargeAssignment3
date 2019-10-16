const pickupGameService = require('../services/pickupGameService');
const { NotFoundError } = require('../errors');

module.exports = {
    Query: {
        allPickupGames: async () => {
            const pickupGames = await pickupGameService.getAllPickupGames();
            if (pickupGames === null) { throw new NotFoundError; }
            return pickupGames.map(pickupGame => {
                return pickupGameService.returnPickupGame(pickupGame);
            });
        },
        pickupGame: async (parnet, args) => {
            const pickupGame = await pickupGameService.getPickupGameById(args.id);
            if (pickupGame === null) { throw new NotFoundError; }
            return pickupGameService.returnPickupGame(pickupGame);
        },
    },
    Mutation: {

    },
};