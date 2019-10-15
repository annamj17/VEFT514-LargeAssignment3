const Schema = require('mongoose').Schema;

module.exports = new Schema({
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    fieldLocationId: { type: String, required: true },
    registeredPlayersIds: { type: [Schema.Types.ObjectId], required: true },
    hostId: { type: Schema.Types.ObjectId, required: true }
});