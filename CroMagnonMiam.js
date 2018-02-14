var game = new Phaser.Game(1366, 768, Phaser.AUTO);

game.state.add('Load', Load);
game.state.add('Menu', Menu);
game.state.add('Game', Game);
game.state.add('Over', Over);
game.state.add('Aide', Aide);
game.state.add('Exit', Exit);
game.state.add('MiniJeu1', MiniJeu1);
game.state.add('MiniJeu2', MiniJeu2);

var button;

game.state.start('Load');