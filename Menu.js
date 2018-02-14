var Menu = {

	create:function(){
		game.add.sprite(0, 0, 'backgroundMenu');
		button = game.add.button(840, 200, 'BoutonJouer', this.playthegame, this, 1, 0);
		button = game.add.button(840, 310, 'BoutonRegle', this.aide, this, 1, 0);
		button = game.add.button(840, 420, 'BoutonQuitter', this.exit, this, 1, 0);
		
	},

	playthegame:function(){
		game.state.start('Game');
	},
	
	aide:function(){
		game.state.start('Aide');
	},
	
	exit:function(){
		game.state.start('Exit');
	},
}