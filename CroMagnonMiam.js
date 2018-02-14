var game = new Phaser.Game(1366, 768, Phaser.AUTO);

game.state.add('Load', Load);
game.state.add('Menu', Menu);
game.state.add('Game', Game);
game.state.add('Over', Over);
game.state.add('Exit', Exit);

var button;
var phaserJSON;

game.state.start('Load');
