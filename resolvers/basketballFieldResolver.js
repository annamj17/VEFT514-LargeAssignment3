const basketballFieldService = require('../services/basketballFieldService');

module.exports = {
    query: {
        allBaketballFields: async (parent, args) => {
            const allBasketballFields = await basketballFieldService.getAllBasketBallFields(args.status);
            return allBasketballFields;
        },
        basketballField: async (parent, args) => {
            const basketballField = await basketballFieldService.getBasketballFieldById(args.id);
            return basketballField;
        }
    }
}
