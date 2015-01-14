var loadModel = loadModel || {};
loadModel.window = window;

var loadModel =  {

	loadThree: function(path, xpos, ypos, zpos, scale){
		var loader = new THREE.JSONLoader();
	    loader.load( path, function(geometry, materials){
	      	mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
	      	mesh.postion={x:xpos, y:ypos, z:zpos};
	      	mesh.scale={x:scale, y:scale, z:scale};
	      	Config.scene.add(mesh);
	      	mesh.material.materials[0].side = 1;
	    });
	}
 
};

