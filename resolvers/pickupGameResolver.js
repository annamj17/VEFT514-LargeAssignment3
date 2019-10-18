const pickupGameService = require('../services/pickupGameService');
const basketballFieldService = require('../services/basketballFieldService');
const { NotFoundError } = require('../errors');
const Schema = require('mongoose').Schema;

module.exports = {
    Query: {
        allPickupGames: async () => {
            const pickupGames = await pickupGameService.getAllPickupGames();
            if (pickupGames === null) { throw new NotFoundError; }
            return pickupGames.map(pickupGame => {
                console.log("PickupGames: ");
                console.log(pickupGameService.returnPickupGame(pickupGame));
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
    Type: {
        
        }

};