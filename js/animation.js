Environment.sceneAnim = function(path, xpos, ypos, zpos, scale){

	var loader = new THREE.JSONLoader();
	loader.load( path, function( geometry ) {
		mesh = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: 0x606060, morphTargets: true } ) );
		mesh.postion={x:xpos, y:ypos, z:zpos};
		mesh.scale.x = mesh.scale.y = mesh.scale.z = scale;
		Config.scene.add( mesh );
		Environment.sceneAnim.animation = new THREE.MorphAnimation( mesh );
		

	} );
}

Environment.sceneAnim.prototype.playAnim = function(){

	console.log(1);
	this.animation.play();
}


