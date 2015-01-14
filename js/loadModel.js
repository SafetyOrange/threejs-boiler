var loadModel = loadModel || {};
loadModel.window = window;

var loadModel =  {

	loadJson: function(path, xpos, ypos, zpos, scale){
		var loader = new THREE.JSONLoader();
	    loader.load( path, function(geometry, materials){
	      	mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
	      	Config.scene.add(mesh);
	      	mesh.postion={x:xpos, y:ypos, z:zpos};
	      	mesh.scale.x = mesh.scale.y = mesh.scale.z = scale;
	      	mesh.material.materials[0].side = 1;
	    });
	},

	loadJsonAnim: function(path, xpos, ypos, zpos, scale){
	    var loader = new THREE.JSONLoader();
		loader.load( path, function( geometry ) {
			mesh = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: 0x606060, morphTargets: true } ) );
			mesh.postion={x:xpos, y:ypos, z:zpos};
			mesh.scale.x = mesh.scale.y = mesh.scale.z = scale;
			Config.scene.add( mesh );
			animation = new THREE.MorphAnimation( mesh );
			// animation.play();

		} );
	},

};

