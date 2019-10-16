const playerResolver = require('./playerResolver');

module.exports = {
    Query: {
        ...playerResolver.Query
    },
    Mutation: {
    },
    ...playerResolver.types

};