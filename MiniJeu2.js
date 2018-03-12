var MiniJeu2 = {

  create: function() {
    //console.log("state MiniJeu2 : Table");

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'backgroundGame');

    //console.log(phaserJSON);

    for (var key in phaserJSON.minijeu2) {
      if (phaserJSON.minijeu2.hasOwnProperty(key)) {
        if (key == "Doseur"){
          console.log("Key is (minijeu 2):" + key);
        }
        obj = phaserJSON.minijeu2[key];
        if (key == "Doseur"){
          console.log("Object is (minijeu 2):");
  				console.log(obj);
        }
        //console.log(key, obj);
        sprite = game.add.sprite(obj.x, obj.y, key);
        sprite.enableBody = true;
        obj.sprite = sprite;
        obj.sprite.key = key;
        game.physics.arcade.enable(obj.sprite);
        //console.log(obj.sprite.key);
        if (key == 'Table') {
          sprite.scale.setTo(1.25, 1.25);
        }
        if (obj.draggable) {
          obj.sprite.inputEnabled = true;
          obj.sprite.input.enableDrag(true);
          obj.sprite.events.onDragStart.add(this.startDrag, this);
          obj.sprite.events.onDragStop.add(this.stopDrag, this);
        }
      }
    }
  },

  update: function() {
    //var phaserJSON = game.cache.getJSON('json');
    game.physics.arcade.overlap(phaserJSON.minijeu2.Louche.sprite, phaserJSON.minijeu2.SucreEnPoudre.sprite, this.loucheSucre, null, this);
  },

  startDrag: function(sprite) {
    sprite.body.moves = false;
    console.log(sprite);
  },

  stopDrag: function(sprite) {
    sprite.body.moves = true;
  },

  loucheSucre: function() {
    phaserJSON.minijeu2.Louche.etat = "LoucheSucre";
    phaserJSON.minijeu2.Louche.sprite.frame = phaserJSON.minijeu2.Louche.etats['loucheSucre'];
    phaserJSON.minijeu2.SucreEnPoudre.etat = "sucreVide";
    phaserJSON.minijeu2.SucreEnPoudre.sprite.frame = phaserJSON.minijeu2.SucreEnPoudre.etats['sucreVide'];
  },

  retour: function() {
    game.state.start('game');
  }
}
