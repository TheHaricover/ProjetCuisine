var Aide2 = {
	
	create:function(){
		
		button = game.add.button(0, 0, 'AideBackground', this.returnGame);
	
	},
	
	returnGame:function(){
		game.state.start('Game');
	},
} 