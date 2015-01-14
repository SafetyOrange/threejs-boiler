var loadModel = loadModel || {};
loadModel.window = window;

var loadModel =  {

	loadThree: function(path, xpos, ypos, zpos, scale){
		var loader = new THREE.JSONLoader();
	    loader.load( path, function(geometry, materials){
	      	mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
	      	Config.scene.add(mesh);
	      	mesh.postion={x:xpos, y:ypos, z:zpos};
	      	mesh.scale.x = mesh.scale.y = mesh.scale.z = scale;
	      	mesh.material.materials[0].side = 1;
	    });
	}


};

