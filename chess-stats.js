var Chess = function() {
  this.games = {
    1 : {date:"june25", white:'Eddie', black:'Griff', winner:'Eddie', loser:'Griff'},
    2 : {date:"june26", white:'Griff', black:'Eddie', winner:'Griff', loser:'Eddie'},
    3 : {date:"june26", white:'Kevin', black:'Alex', winner:'Kevin',loser:'Alex'},
    4 : {date:"june27", white:'Alex', black:'Kevin', winner:'Alex',loser:'Kevin'},
    5 : {date:"june27", white:'Alex', black:'Eddie', winner:'Alex',loser:'Eddie'},
    6 : {date:"june28", white:'Eddie', black:'Griff', winner:'Eddie',loser:'Griff'},
    7 : {date:"june29", white:'Eddie', black:'Griff', winner:'Griff',loser:'Eddie'},
  };
  this.totalGames = 7;
  this.stats = {
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
  match.loser = loser;
}; 

//add games or players
Chess.prototype.addGame = function(date, playerWhite, playerBlack, winner, loser) {
  var matchInsert = new Match(date, playerWhite, playerBlack, winner, loser);
  this.totalGames++;
  this.games[this.totalGames] = matchInsert;
  if (winner === 'draw' || winner === 'Draw') {
    this.stats[playerWhite].draws++;
    this.stats[playerBlack].draws++;
  }
  else {
    this.stats[winner].wins++;
    this.stats[loser].losses++;
  }
};

Chess.prototype.addPlayer = function(player) {
  this.stats[player] = {wins: 0, losses: 0, draws: 0};
}

//info/stats retrival
Chess.prototype.winPercentage = function(player) {
  var wins = this.stats[player].wins;
  var losses = this.stats[player].losses;
  return player + " has a " + ((wins/(wins + losses))*100).toString() + '% win rate';
};

Chess.prototype.totalGames = function() {
  return this.totalGames;
}

Chess.prototype.searchGameNumber = function(number) {
  return this.games[number];
}

Chess.prototype.searchPlayerStats = function(player) {
  return this.stats;
}

Chess.prototype.searchPlayerHistory = function(player) {
  var array = [];
  for(var match in this.games) {
    if (this.games[match].white === player) {
      array.push(this.games[match]);
    }
    if (this.games[match].black === player) {
      array.push(this.games[match]);
    }
  }
  return array;
};

var chess = new Chess;

// console.log(chess.winPercentage("Alex"));
// console.log(chess.winPercentage("Eddie"));
// console.log(chess.winPercentage("Griff"));
// console.log(chess.winPercentage("Kevin"));

console.log(chess.searchPlayerHistory("Kevin"));