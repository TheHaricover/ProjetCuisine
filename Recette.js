var Recette = {
	
	create:function(){
		
		button = game.add.button(0, 0, 'RecetteEcran', this.returnGame);
	
	},
	
	returnGame:function(){
		game.state.start('Game');
	},
} 