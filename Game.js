var Game = {

	dragStart:function(){
		console.log("L'oeuf commence à être drag");
	},

	dragUpdate:function(){
		console.log("L'oeuf est drag");
	},

	dragStop:function(){
		console.log("L'oeuf à fini d'être drag");
	},

	create:function(){
		game.add.sprite(0, 0, 'backgroundGame');
		// button = game.add.button(900, 300, 'Four', this.MiniJeu1, this, 3, 0);
		// button = game.add.button(20, 100, 'Table', this.MiniJeu2, this, 1, 0);
		var four = game.add.sprite(900, 300, 'Four');
		var table = game.add.sprite(20, 100, 'Table');
		var boutonAide = game.add.button(1180, 20, 'BoutonEd', this.aide, this, 1, 0);
		var boutonAcceuil = game.add.button(1180, 70, 'BoutonAccueil', this.menu, this, 1, 0);
		var boutonQuit = game.add.button(1183, 126, 'BoutonQuitterJeu', this.exit, this, 1, 0);
		var boutonRecette = game.add.button(60, 80, 'Recette', this.recette, this, 1, 0);

		var rocherDroit = game.add.sprite(0, 0, 'RocherDroit');
		var rocherGauche = game.add.sprite(0, 0, 'RocherGauche');
		var farine = game.add.sprite(370, 110, 'Farine');
		var lait = game.add.sprite(460, 90, 'Lait');
		var cacao = game.add.sprite(290, 87, 'Cacao');
		var oeuf = game.add.sprite(400, 300, 'Oeuf');
		console.log(phaserJSON);
		if(true /*phaserJSON.objets.oeuf.movable*/){
			oeuf.anchor.set(0.5);
			oeuf.inputEnabled = true;
    	oeuf.input.enableDrag(true);
			oeuf.events.onDragStart.add(this.dragStart);
			oeuf.events.onDragStop.add(this.dragStop);
	    //oeuf.events.onDragUpdate.add(this.dragUpdate);
		}
		game.add.sprite(600, 200, 'Verre');

		button.anchor.setTo(0.5, 0.5);

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
	}
}
