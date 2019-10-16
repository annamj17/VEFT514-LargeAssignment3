
const request = require('request');


const basketballFieldService = () => {

    // https://basketball-fields.herokuapp.com/api/basketball-fields

    // var resp = request('https://basketball-fields.herokuapp.com/api/basketball-fields');
    //resp.pipe(process.stdout);
    // Should return a collection of all basketball fields
    // request('https://basketball-fields.herokuapp.com/api/basketball-fields', {json: true}, (err, res, body) => {
    //     console.log("HERE1")
    //     console.log(body.url);
    //     console.log("HERE2")
    //     console.log(body.explanation);
    // });
    let url = 'https://basketball-fields.herokuapp.com/api/basketball-fields';

    const getAllBasketBallFields = status => {
        const route = status === undefined ? url : `${ url }?status=${ status }`;
        return new Promise((res, err) => {
            request(route, function(error, response, body) {
                if (error || response.statusCode !== 200) {
                    return console.log(error);
                }
                console.log("First: ");
                console.log(res(JSON.parse(body))); // held tad komi undefined her tvi promise-id er pending
                res(JSON.parse(body))
                console.log("Second: ");
                console.log(JSON.parse(body)); // Ait ait choa!
                // já klárleg. Er þetta verkefni fyrir nútíma Arnar og Önnu eða framíðar?
            });
        });


        // const route = status === undefined ? 'https://basketball-fields.herokuapp.com/api/basketball-fields' : `${ 'https://basketball-fields.herokuapp.com/api/basketball-fields' }?status=${ status }`;
        // return new Promise((res, err) => {
        //     request(route, ((error, response, body) => {
        //         console.log(res(JSON.parse(body)));
        //         res(JSON.parse(body));
        //     })
        // });

    };




    // Should return a collection of all pickup games
    const getAllPickupGames = (cb, errorCb) => {

    };

    // Should return a collection of all players
    const getAllPlayers = (cb, errorCb) => {

    };

    // Should return a specific basketball field by id
    const getBasketballField = (cb, errorCb) => {

    };

    // Should return a specific pickup game by id
    const getPickupGame = (cb, errorCb) => {

    };

    // Should return a specific player by id
    const getPlayer = (cb, errorCb) => {

    };

    return {
        getAllBasketBallFields,
        getAllPickupGames,
        getAllPlayers,
        getBasketballField,
        getPickupGame,
        getPlayer
    };
};
module.exports = basketballFieldService();

