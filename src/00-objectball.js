function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          asissts: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          asissts: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopaez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          asissts: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          asissts: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          asissts: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
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
          asissts: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          asissts: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          asissts: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          asissts: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          asissts: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}
console.log(gameObject());

function numPointsScored(playersName) {
  for (const teamName in gameObject()) {
    if (gameObject()[teamName].players[playersName])
      return gameObject()[teamName].players[playersName].points;
  }
}
console.log(numPointsScored("Brendan Haywood"));

function shoeSize(playersName) {
    for (const teamName in gameObject()) {
      if (gameObject()[teamName].players[playersName])
        return gameObject()[teamName].players[playersName].shoe;
    }
}
console.log(shoeSize("Brendan Haywood"));

function teamColors(teamName) {
    for (const teamName in gameObject()) {
      if (gameObject()[teamName].teamName)
        return gameObject()[teamName].colors
    }
}
console.log(teamColors("Brooklyn Nets"));

function playerNumbers(teamName) {
    for (const teamName in gameObject()) {
        if (gameObject()[teamName].teamName) {
            const numbers = [];
            for (const player in gameObject()[teamName].players) {
                numbers.push(gameObject()[teamName].players[player].number)
            }
            return numbers
        }
    }
}
console.log(playerNumbers("Charlotte Hornets"));

function playerStats(playersName) {
    for (const teamName in gameObject()) {
        if (gameObject()[teamName].players[playersName]) 
        return gameObject()[teamName].players[playersName];
            
}
}
console.log(playerStats("Alan Anderson"))

function bigShoeRebounds() {
    let biggestShoeSize = 19
    let rebounds;
    for (const teamName in gameObject()) {
        for (const player in gameObject()[teamName].players) {
            if (gameObject()[teamName].players[player].shoe === biggestShoeSize) {
                rebounds = gameObject()[teamName].players[player].rebounds
            }
        }
    }
    return rebounds; 
}
console.log(bigShoeRebounds());

// bonus questions

function mostPointsScored() {
    let mostPoints = 33
    let bestPlayer = ""
    for (const teamName in gameObject()) {
        for (const player in gameObject()[teamName].players) {
            if (gameObject()[teamName].players[player].points === mostPoints) {
                bestPlayer = player
            }
        }
    }
    return bestPlayer
}
console.log(mostPointsScored());

function winningTeam() {
    let winners = ""
    let mosttotalpoints = 96
    for (const teamName in gameObject()) {
        let totalTeamPoints = 0
        for (const player in gameObject()[teamName].players) {
            totalTeamPoints += gameObject()[teamName].players[player].points
        }
        if (totalTeamPoints >= mosttotalpoints) {
            winners = gameObject()[teamName].teamName
        }
    }
        return winners
}
console.log(winningTeam())
