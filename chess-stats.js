var chessStats = {
  Alex : {wins: 3, losses: 2},
  Eddie : {wins: 2, losses: 3},
  Griff : {wins: 2, losses: 2},
  Kevin : {wins: 2, losses: 2}
};

var winRatio = function(player) {
  var wins = chessStats[player].wins;
  var losses = chessStats[player].losses;
  return player + " has a " + ((wins/(wins + losses))*100).toString() + '% win rate';
};

console.log(winRatio("Alex"));
console.log(winRatio("Eddie"));
console.log(winRatio("Griff"));
console.log(winRatio("Kevin"));