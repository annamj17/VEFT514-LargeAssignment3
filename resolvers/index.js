const { GraphQLScalarType } = require('graphql');
const moment = require('moment');

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
    Moment: new GraphQLScalarType({
        name: 'Moment',
        parseValue: (value) => { return moment(value); },
        parseLiteral: (value) => { return moment(value); },
        serialize: (value) => moment(new Date(value)).locale('is').format('llll')
    }),
    ...basketballFieldResolver.types,
    ...playerResolver.types,
    ...pickupGameResolver.types
};