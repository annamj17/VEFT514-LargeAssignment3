const playerResolver = require('./playerResolver');
const pickupGameResolver = require('./pickupGameResolver');

module.exports = {
    Query: {
        ...playerResolver.Query,
        ...pickupGameResolver.Query
    },
    Mutation: {
    },
    ...playerResolver.types,
    ...pickupGameResolver.types
};