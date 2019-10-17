module.exports = `
    type Query {
        allBaketballFields(status: BasketballFieldStatus): [BasketballField!]!
        allPickupGames: [PickupGame!]!
        allPlayers: [Player!]!
        basketballField(id: ID!): BasketballField!
        pickupGame(id: ID!): PickupGame!
        player(id: ID!): Player!
    }
`;