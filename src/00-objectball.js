function gameObject() {
    return { //<== turns constant into a function 
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1            
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7            
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15            
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 17,
                    points: 26,
                    rebounds: 12, 
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15            
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 1            
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2            
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10           
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14, 
                    points: 24,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 5,
                    slamDunks: 5            
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 0            
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12, 
                    assists: 12,
                    steals: 22,
                    blocks: 5, 
                    slamDunks: 12            
                }
            }
        } 
    }
}


// function homeTeamName() {
//     //let object = gameObject()
//     return object['home']['teamName']
// }

// console.log(homeTeamName())

// let object = gameObject();

// for-in loop allows us to iterate of object specified
// for (let key in object) { // 
//     let value = object.home // <== turns function into variable
//     console.log('key:', key, 'value:', value)
// }

// Given a player's name, return the number of points scored by that player
// function numPointsScored(playerInput) {
//     let game = gameObject()
//     for (let gameKey in game) { // iterate through game keys (home, away)
//         let teamObj = game[gameKey]
//         for (let teamKey in teamObj) { // iterate through team keys (teamName, colors, players)
//             let playerObj = teamObj.players
//             for (let playerKey in playerObj) { // iterate through players
//                 if (playerKey === playerInput) { // check to see if player matches function argument
//                     return playerObj[playerKey].points // return the player's points
//                 }
//             }
//         }
//     }
// }

function numPointsScored (playerInput) {
    let game = gameObject(); // <== turn function into variable to iterate through
    for (let gameKey in game) {  // iterates through all keys in "game"
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {
            let 
            
    //    }
    }
        // console.log("In this game, we have" game[gameKey])        
}


numPointsScored()