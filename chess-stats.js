var Chess = function() {
  var games = {
    1 : {date:"june25", white:'Eddie', black:'Griff', winner:'Eddie', loser:'Griff'},
    2 : {date:"june26", white:'Griff', black:'Eddie', winner:'Griff', loser:'Eddie'},
    3 : {date:"june26", white:'Kevin', black:'Alex', winner:'Kevin',loser:'Alex'},
    4 : {date:"june27", white:'Alex', black:'Kevin', winner:'Alex',loser:'Kevin'},
    5 : {date:"june27", white:'Alex', black:'Eddie', winner:'Alex',loser:'Eddie'},
    6 : {date:"june28", white:'Eddie', black:'Griff', winner:'Eddie',loser:'Griff'},
    7 : {date:"june29", white:'Eddie', black:'Griff', winner:'Griff',loser:'Eddie'},
    total : 7
  };
  var ratio = {
    Alex : {wins: 2, losses: 1, draws: 0},
    Eddie : {wins: 2, losses: 3, draws: 0},
    Griff : {wins: 2, losses: 2, draws: 0},
    Kevin : {wins: 1, losses: 1, draws: 0}
  };
};

//match object helper function
var Match = function(date, playerWhite, playerBlack, winner, loser) {
  var match = {};
  match.date = date;
  match.white = playerWhite;
  match.black = playerBlack;
  match.winner = winner;
  match.loser = lower;
}; 

//add games or players
Chess.prototype.addGame = function(date, playerWhite, playerBlack, winner, loser) {
  var matchInsert = new Match(date, playerWhite, playerBlack, winner, loser);
  this.games.total++;
  this.games[total] = matchInsert;
  if (winner === 'draw' || winner === 'Draw') {
    this.ratio[playerWhite].draws++;
    this.ratio[playerBlack].draws++;
  }
  else {
    this.ratio[winner].wins++;
    this.ratio[loser].losses++;
  }
};

Chess.prototype.addPlayer = function(player) {
  this.ratio[player] = {wins: 0, losses: 0, draws: 0};
}

//info/stats retrival
Chess.prototype.winRatio = function(player) {
  var wins = this.ratio[player].wins;
  var losses = this.ratio[player].losses;
  return player + " has a " + ((wins/(wins + losses))*100).toString() + '% win rate';
};

Chess.prototype.totalGames = function() {
  return this.games.total;
}

Chess.prototype.searchGameNumber = function(number) {
  return this.games[number];
}

Chess.prototype.searchPlayerHistory = function(player) {
  var array = [];
  for(var match in this.games) {
    if(typeof Match === "number") {
      if (match.white === player) {
        array.push(match);
      }
      if (match.white === player) {
        array.push(match);
      }
    }
  }
  return array;
};

console.log(Chess);
console.log(Chess.winRatio("Alex"));
console.log(Chess.winRatio("Eddie"));
console.log(Chess.winRatio("Griff"));
console.log(Chess.winRatio("Kevin"));