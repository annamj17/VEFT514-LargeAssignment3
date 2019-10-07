const { gql } = require('apollo-server');
const types = require('./types');
const input = require('./input');
const enums = require('./enums');
const queries = require('./queries');
const mutations = require('./mutations');

module.exports = gql`
    scalar Moment
    ${types}
    ${input}
    ${enums}
    ${queries}
    ${mutations}
`;