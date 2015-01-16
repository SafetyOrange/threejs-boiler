Environment.sceneAnim = function(path, xpos, ypos, zpos, scale){

	var loader = new THREE.JSONLoader();
	loader.load( path, function( geometry ) {
		mesh = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: 0x606060, morphTargets: true } ) );
		mesh.position.x = xpos;
		mesh.position.y = ypos;
		mesh.position.z = zpos;
		mesh.scale.x = mesh.scale.y = mesh.scale.z = scale;
		Config.scene.add( mesh );
		anim = new THREE.MorphAnimation( mesh );
		anim.play();
		Environment.animations.push(anim)
		
		

	});
}




