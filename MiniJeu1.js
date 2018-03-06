var MiniJeu1 = {
	create:function(){
		console.log("state MiniJeu1 : Four");

		game.add.sprite(0, 0, 'backgroundGame');

		var phaserJSON = game.cache.getJSON('json');
		//console.log(phaserJSON.minijeu1);

		for (var key in phaserJSON.minijeu1) {
    		if (phaserJSON.minijeu1.hasOwnProperty(key)) { 
    			obj = phaserJSON.minijeu1[key]        
        		console.log(key, obj);
        		sprite = game.add.sprite(obj.x, obj.y, key);
        		if (key == 'Four'){
        			sprite.scale.setTo(1.25, 1.25);
        		}
				sprite.scale.setTo(obj.scale, obj.scale);
        		if (obj.draggable){
    				sprite.inputEnabled = true;
    				sprite.input.enableDrag(true);
        		}
    		}
		}
	},

	retour:function(){
		game.state.start('game');
	}
}