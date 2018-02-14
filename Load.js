var Load = {

	preload:function() {		
		game.load.json('json', 'structure_cuisine.json');
		game.load.spritesheet('BoutonJouer', 'assets/BoutonJouerSprite.png', 381, 108);
		game.load.spritesheet('BoutonRegle', 'assets/BoutonRegleSprite.png', 381, 108);
		game.load.spritesheet('BoutonQuitter', 'assets/BoutonQuitterSprite.png', 381, 108);
		game.load.spritesheet('BoutonAccueil', 'assets/BoutonAccueilSprite.png', 156, 50);
		game.load.spritesheet('BoutonEd', 'assets/BoutonEdSprite.png', 156, 50);
		game.load.spritesheet('BoutonRetourCaverne', 'assets/BoutonRetourCaverneSprite.png', 156, 50);
		game.load.spritesheet('BoutonQuitterJeu', 'assets/BoutonQuitterJeuSprite.png', 156, 50);
		game.load.spritesheet('Four', 'assets/FourSprite.png', 445, 307);
		game.load.spritesheet('Table', 'assets/TableSprite.png', 846, 599);
		game.load.spritesheet('Recette', 'assets/RecetteBouton.png', 68, 113);
		game.load.image('backgroundMenu', 'assets/EcranMenu.png');
		game.load.image('backgroundGame', 'assets/FondEcranJeu.png');
		game.load.image('AideBackground', 'assets/AideBackground.png');
		game.load.image('RocherDroit', 'assets/RocherDroit.png');
		game.load.image('RocherGauche', 'assets/RocherGauche.png');
		game.load.image('Bois', 'assets/Bois.png');
		game.load.image('RecetteEcran', 'assets/RecetteEcran.png');
		game.load.image('EcranPerdu', 'assets/EcranPerdu.png');
		game.load.image('EcranGagné', 'assets/EcranGagné.png');
		game.load.spritesheet('Bol', 'assets/Bol.png', 84, 54);
		game.load.spritesheet('Cacao', 'assets/Cacao.png', 69, 69);
		game.load.spritesheet('Farine', 'assets/Farine.png', 69, 69);
		game.load.spritesheet('Lait', 'assets/Lait.png', 69, 69);
		game.load.spritesheet('Miel', 'assets/Miel.png', 69, 69);
		game.load.spritesheet('QuatreEpices', 'assets/QuatreEpices.png', 69, 69);
		game.load.spritesheet('SucreEnPoudre', 'assets/SucreEnPoudre.png', 69, 69);
		game.load.spritesheet('SucreVanille', 'assets/SucreVanille.png', 69, 69);
		game.load.spritesheet('Casserole', 'assets/Casserole.png', 168, 64);
		game.load.spritesheet('Louche', 'assets/Louche.png', 31, 61);
		game.load.spritesheet('Moule', 'assets/Moule.png', 102, 56);
		game.load.spritesheet('Oeuf', 'assets/Oeuf.png', 80, 39);
		game.load.spritesheet('Verre', 'assets/Verre.png', 32, 48);
	},

	create:function(){
		console.log('create');
		var phaserJSON = game.cache.getJSON('json');
		game.state.start('Menu');
	},
	
}