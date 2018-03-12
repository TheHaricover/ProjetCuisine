var Game = {

	create:function(){
		game.add.sprite(0, 0, 'backgroundGame');
		button = game.add.button(900, 300, 'Four', this.MiniJeu1, this, 3, 0);
		button = game.add.button(20, 100, 'Table', this.MiniJeu2, this, 1, 0);
		button = game.add.button(1180, 20, 'BoutonEd', this.aide, this, 1, 0);
		button = game.add.button(1180, 70, 'BoutonAccueil', this.menu, this, 1, 0);
		button = game.add.button(1183, 126, 'BoutonQuitterJeu', this.exit, this, 1, 0);
		button = game.add.button(60, 80, 'Recette', this.recette, this, 1, 0);
		game.add.sprite(0, 0, 'RocherDroit');
		game.add.sprite(0, 0, 'RocherGauche');
		game.add.sprite(370, 110, 'Farine');
		game.add.sprite(460, 90, 'Lait');
		game.add.sprite(290, 87, 'Cacao');
		game.add.sprite(400, 300, 'Oeuf');
		game.add.sprite(600, 200, 'Doseur');
		//var phaserJSON = game.cache.getJSON('json');
		button.anchor.setTo(0.5, 0.5);
		//for (var i=0; i<)

	},

	MiniJeu1:function(){
		game.state.start('MiniJeu1');
	},

	MiniJeu2:function(){
		game.state.start('MiniJeu2');
	},

	aide:function(){
		game.state.start('Aide2');
	},

	menu:function(){
		game.state.start('Menu');
	},

	exit:function(){
		game.state.start('Exit');
	},

	recette:function(){
		game.state.start('Recette');
	},
}
