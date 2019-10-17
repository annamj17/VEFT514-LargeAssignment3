const playerResolver = require('./playerResolver');
const pickupGameResolver = require('./pickupGameResolver');
const basketballFieldResolver = require('./basketballFieldResolver');

module.exports = {
    Query: {
        ...basketballFieldResolver.query,
        ...playerResolver.Query,
        ...pickupGameResolver.Query
    },
    Mutation: {
    },
    ...basketballFieldResolver.types,
    ...playerResolver.types,
    ...pickupGameResolver.types
};