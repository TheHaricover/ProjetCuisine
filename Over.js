var Over = {

	create:function(){
		
		game.add.sprite(0, 0, 'gameover');
	
	},
	
	update: function(){
		if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
		{
			game.state.start('Game');
		}
	}
	
}