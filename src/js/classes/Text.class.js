import * as THREE from 'three';
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
// import font from "three/examples/fonts/helvetiker_regular.typeface.json"

export default class Text3d{
    constructor(){
        this.geometry = null;
        this.setupMesh();
    }
    
    setupMesh(){
        function loadFont(url) {
            const loader = new FontLoader();
            return new Promise((resolve, reject) => {
              loader.load(url, resolve, undefined, reject);
            });
        }
        function getFont(){
            let font  = async (c) => {
                f = await loadFont('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json');
                // some code..
                return f;
            };
            console.log(font)
        }
        console.log(getFont());
        // let g;
        // loader.load( 'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) =>{
        //     g = new TextGeometry( 'Hello', {
        //         font: font,
        //         size: 3,
        //         height: 0.2,
        //     });
        //     // console.log(this.geometry)
        // });
        // console.log(font)
        this.material = new THREE.MeshStandardMaterial({ color: 0x888888 });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(-2, 0, 2);
    }
}