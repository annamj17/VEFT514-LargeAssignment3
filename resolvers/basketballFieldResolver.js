const basketballFieldService = require('../services/basketballFieldService');

module.exports = {
    query: {
        allBasketballFields: async (parent, args) => {
            const filedStatus = args.status;
            const allBasketballFields = await basketballFieldService.getAllBasketballFields(filedStatus);
            return allBasketballFields;
        }
    }
}
