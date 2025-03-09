const { gameObject } = require("./00-objectball");

export function numPointsScored(playersName) {
  for (const teamName in gameObject) {
    if (gameObject[teamName].players[playersName])
      return gameObject[teamName].players[playersName].points;
  }
}
