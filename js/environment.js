var Environment = Environment || {};
Environment.window = window;

var Environment =  {

	init: function(){
		//this is where you set up all of the meshes of your environment. Just make sure you use Config.Scene.add() 

		  // var cube = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
		  // Config.scene.add(cube);

		  // var cube2 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
		  // cube2.position.x = 400;
		  // Config.scene.add(cube2);

		// this section is for loading models. Below is an example of terrain from blender

		// loadModel.loadJson("js/models/mountain.js",0,0,0,200);

		horseAnim = new Environment.sceneAnim("js/models/horse.js",0,0,0,1);


	}
 
};



$(function() {

    Environment.init();
 
});