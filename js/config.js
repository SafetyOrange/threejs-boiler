var Config = Config || {};
Config.window = window;

var Config =  {
	
	
	camera: new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000),
	scene: new THREE.Scene(),
	renderer: new THREE.WebGLRenderer(),
	oculus: true,
	animate: null,
	bodyAngle: 45,
	
	init: function() {

	  //basic three.js configs: Here is where you can set up the initial settings for the environment
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setClearColor( 0xFFFFFF, 1);

      document.body.appendChild(this.renderer.domElement);
 
      this.camera.position.z = 700;
      this.camera.position.y = 50;

      var light = new THREE.PointLight(0xffffcc);
	  light.position.set(0,500,0);
	  light.intensity=2;
	  this.scene.add(light);

	  var ambientLight = new THREE.AmbientLight(0x000044);
  	  this.scene.add(ambientLight);

      // controls = new THREE.FlyControls(this.camera);
      // controls.dragToLook = "true";	

      controller = new Leap.Controller();	
      controls = new THREE.LeapSpringControls( this.camera , controller , this.scene );	

      controls.dampening      = .75;
	  controls.size           = 120;
	  controls.springConstant =   1;
	  controls.mass           = 100;
	  controls.anchorSpeed    =  .1;
	  controls.staticLength   = 100;

	  var geo = new THREE.IcosahedronGeometry( 5, 2 ); 
      var mat = new THREE.MeshNormalMaterial(); 

      var targetMesh  = new THREE.Mesh( geo , mat );
      var anchorMesh  = new THREE.Mesh( geo , mat );
      var handMesh    = new THREE.Mesh( geo , mat );

      controls.addTargetMarker( targetMesh );
      controls.addAnchorMarker( anchorMesh );
      controls.addHandMarker(     handMesh );		

	
	controller.connect();
	},

	
	render: function() {

		controls.update();
		this.renderer.render( this.scene, this.camera );
		Logic.rotate();

	}
	
		
};

