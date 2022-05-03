import 'regenerator-runtime/runtime';
import { 
  Scene, 
  WebGLRenderer,
  PerspectiveCamera,
  DirectionalLight,
  SpotLight,
  AmbientLight,
  Vector2,
  sRGBEncoding,
  PCFSoftShadowMap,
} from 'three';
import GUI from 'lil-gui';
import Blob from './Blob.class';
import Metaball from './Metaball.class';
import Ipads from './Ipads.class';
import Animation from './Animation.class';
import Grid from './Grid.class';

export default class MyScene {
  constructor(options) {

    // CONTAINER & RENDERER
    this.scene = new Scene();
    this.container = options.dom;
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer = new WebGLRenderer();
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0xf0712c, 0);
    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = sRGBEncoding;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = PCFSoftShadowMap;

    this.container.appendChild(this.renderer.domElement);

    // CAMERA
    this.camera = new PerspectiveCamera(45, this.width / this.height, 0.001, 1000);
    this.camera.position.set(-1, 0, 2.8);

    this.mouseTarget = new Vector2(0,0);

    // LIGHTS
    const light = new DirectionalLight(0xffffff);
    light.position.set(1.5, 0, 5);
    const r = 3;
    light.shadow.camera.near = .001;
    light.shadow.camera.far = 10;
    light.shadow.camera.left = -r;
    light.shadow.camera.right = r;
    light.shadow.camera.top = r;
    light.shadow.camera.bottom = -r;
    light.shadow.camera.updateProjectionMatrix();
    light.castShadow = true;
    this.scene.add(light);

    const light2 = new DirectionalLight(0xffffff, 1);
    light2.position.set(0.5, 0, 5);
    this.scene.add(light2)
    
    // this.pointLight = new PointLight(0x75ba75);
    // this.pointLight.position.set(1.5, 0, 2);
    // this.pointLight.position.set(10*this.mouseTarget.x + 1.5, 10*this.mouseTarget + 0.0, 1);
    // this.scene.add(this.pointLight);
    
    this.spotLight = new SpotLight( 0xffffff, 1.0, 4, 0.233, 0.321, 1.0 );
    this.spotLight.position.set( this.mouseTarget.x, this.mouseTarget.y, 2 );

    this.spotLight.castShadow = true;

    this.spotLight.shadow.mapSize.width = 1024;
    this.spotLight.shadow.mapSize.height = 1024;

    this.spotLight.shadow.camera.near = 500;
    this.spotLight.shadow.camera.far = 4000;
    this.spotLight.shadow.camera.fov = 30;
    this.scene.add(this.spotLight);

    this.ambientLight = new AmbientLight(0xffffff);
    this.ambientLight.position.set(0.5, 0, 2);
    // this.ambientLight.position.set(this.mouseTarget.x + 0.5, this.mouseTarget + 0.0, 2);
    this.scene.add(this.ambientLight);

    // MAIN VARIABLES
    this.time = 0;
    this.isPlaying = true;
    this.mouse = {
      moved: false,
      x: 0,
      y: 0,
    };
    this.firstPart = true;

    // objects
    this.objects = {
        blob: new Blob(),
        metaball: new Metaball(),
        ipads: new Ipads(),
        grid: new Grid(),
    }
    
    this.scene.add(this.objects.blob.mesh, this.objects.ipads.mesh, this.objects.metaball.mesh , this.objects.grid.mesh);
    
    // METHODS
    this.animation = new Animation(this.camera, this.objects);
    this.settings();
    this.resize();
    this.render();
    this.setupListeners();
    
  }

  updateObjects(params){
    this.objects.blob.updateMesh(params.time/7);
    this.objects.metaball.updateMesh(params.time/6);
    this.objects.grid.updateMesh(params);
  }
 
  setupListeners() {
    window.addEventListener("resize", this.resize.bind(this));
    window.addEventListener("mousemove", this.mousemove.bind(this));
  }

  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  }

  updateEvents(){
    if(this.animation.stage < 2){
      this.firstPart = true;
    } else {
      this.firstPart = false;
    }
  }

  mousemove(event) {
    const direction = this.mouse.x * this.width < event.x ? 1 : -1;
    this.delta = 1.0;
    if(this.firstPart){
      if(this.animation.stage === 0){
        this.delta = (event.x -  this.width/2)/this.width;
      } else if(this.animation.stage === 1){
        this.delta = (event.x -  this.width/2)/this.width - 0.4;
      }
    }

    // rotate ipads on mousemove
    this.objects.ipads.updateRotation(direction);

    // set new mouse coords
    this.mouse.x = event.x / this.width;
    this.mouse.y = event.y / this.height;
  }

  render() {
    const that = this;
    if (!this.isPlaying) return;
    this.time += 0.05;

    this.updateEvents();

    this.mouseTarget.x += (this.mouse.x - this.mouseTarget.x)*0.05
    this.mouseTarget.y += (this.mouse.y - this.mouseTarget.y)*0.05

    this.objects.blob.updateRotation(this.mouseTarget);
    this.objects.metaball.updateRotation(this.mouseTarget);

    const params = {
      time: that.time,
      firstParam: that.uniforms.firstParam,
      secondParam: that.uniforms.secondParam,
      color: that.uniforms.colorParam,
    }
    // update objects
    this.updateObjects(params);

    // rotate blob on mousemove
    this.objects.blob.updateDelta(this.delta);

    // rotate metaball on mousemove
    this.objects.metaball.updateDelta(this.delta);

    this.spotLight.position.set( -0.4, 0, 2 );

    // render
    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  }

  stop() {
    this.isPlaying = false;
  }

  play() {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.render()
    }
  }

  settings() {
    const colorRGB = {
      R: 0.91,
      G: 0.44,
      B: 0.17,
    }
    this.uniforms = {
      firstParam: 0.0,
      secondParam: 0.02,
      colorParam: colorRGB,
    };
    this.gui = new GUI();
    this.gui.add(this.uniforms, "firstParam", 0, 1, 0.01);
    this.gui.add(this.uniforms, "secondParam", 0, 1, 0.01);
    this.gui.add(colorRGB, 'R', 0.0, 1.0, 0.01);
    this.gui.add(colorRGB, 'G', 0.0, 1.0, 0.01);
    this.gui.add(colorRGB, 'B', 0.0, 1.0, 0.01);
  }

}

new MyScene({
  dom: document.querySelector("#container")
});