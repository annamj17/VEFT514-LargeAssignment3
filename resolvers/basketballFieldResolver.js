const basketballFieldService = require('../services/basketballFieldService');

module.exports = {
    query: {
        allBaketballFields: async (parent, args) => {
            const filedStatus = args.status;
            const allBasketballFields = await basketballFieldService.getAllBasketBallFields(filedStatus);
            return allBasketballFields;
        }
    }
}
