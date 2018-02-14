var Recette = {

	create:function(){

		button = game.add.button(0, 0, 'RecetteEcran', this.returnGame);
		recette=game.add.sprite(0,0,'Recette');
	},

	returnGame:function(){
		game.state.start('Game');
	},
}
