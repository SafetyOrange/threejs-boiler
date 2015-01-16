var Environment = Environment || {};
Environment.window = window;

var Environment =  {

	animations: [],

	init: function(){
		//this is where you set up all of the meshes of your environment. Just make sure you use Config.Scene.add() 

		  // var cube = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
		  // Config.scene.add(cube);

		  // var cube2 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
		  // cube2.position.x = 400;
		  // Config.scene.add(cube2);

		  // Ground
		ground_material = Physijs.createMaterial(
			new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture( 'images/rocks.jpg' ) }),
			.8, // high friction
			.3 // low restitution
		);
		ground_material.map.wrapS = ground_material.map.wrapT = THREE.RepeatWrapping;
		ground_material.map.repeat.set( 3, 3 );
		
		ground = new Physijs.BoxMesh(
			new THREE.BoxGeometry(100, 1, 100),
			ground_material,
			0 // mass
		);
		ground.receiveShadow = true;
		Config.scene.add( ground );

	   // Box
        box = new Physijs.BoxMesh(
            new THREE.CubeGeometry( 10, 10, 10 ),
            new THREE.MeshBasicMaterial({ color: 0x888888 })
        );

        box.position.y = 20;

        Config.scene.add(box);

		// this section is for loading models. Below is an example of terrain from blender

		// loadModel.loadJson("js/models/mountain.js",0,0,0,200);

		// horseAnim = new loadModel.anim("js/models/horse.js",0,0,0,1);
		// horseAnim2 = new loadModel.anim("js/models/horse.js",100,0,0,1);


	}
 
};



$(function() {

    Environment.init();
 
});