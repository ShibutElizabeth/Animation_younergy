import * as THREE from '../libs/three.module.min.js';
import * as fragmentShader from '../shaders/fragment.glsl';
import * as vertexShader from '../shaders/vertex.glsl';

(function () {
    //Hero banner particle wave animation
    var SEPARATION = 160,
        AMOUNTX = 140,
        AMOUNTY = 100;

    let container;
    let camera, scene, renderer;

    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    let particles,
        count = 0;

    var moveable = [];
    var limit = 180;

    var clock = new THREE.Clock();
    var newTime = 0;
    var isWaveDirection = true;

    init();
    animate();

    function init() {
        container = document.body;

        camera = new THREE.PerspectiveCamera(
            25,
            window.innerWidth / window.innerHeight,
            0.01,
            30000
        );

        scene = new THREE.Scene();

        const numParticles = AMOUNTX * AMOUNTY;
        const positions = new Float32Array(numParticles * 3);
        const scales = new Float32Array(numParticles * 3);

        let i = 0,
            j = 0;
        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                moveable.push(positions[i], positions[i * 2], 0.0, 0.0);
                positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;

                positions[i + 2] = 0;
                positions[i + 2] =
                    iy * SEPARATION * 3 + (AMOUNTY * SEPARATION) / 10000;
                scales[j] = 1;
                i += 3;
                j++;
            }
        }

        const geometry = new THREE.BufferGeometry();

        geometry.setAttribute(
            'position',
            new THREE.BufferAttribute(positions, 3)
        );

        geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

        geometry.setAttribute(
            'moveable',
            new THREE.BufferAttribute(new Uint8Array(moveable), 1)
        );

        const material = new THREE.ShaderMaterial({
            uniforms: {
                color: { value: new THREE.Color(0xffffff) },
                time: { value: 0.0 },
                limits: { value: new THREE.Vector2(0, limit) },
                angle: { value: 0 },
                speed: { value: 900 },
            },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            alphaToCoverage: true,
            blending: THREE.AdditiveBlending,
            depthTest: true,
            transparent: true,
        });

        particles = new THREE.Points(geometry, material);

        scene.add(particles);
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio = devicePixelRatio;
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);
        renderer.setClearColor(0x00000000, 1);
        container.style.touchAction = 'none';
        window.addEventListener('resize', onWindowResize);
    }

    function onWindowResize() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        var lastFrameTime;
        var deltaT;

        function recurse(thisFrameTime) {
            window.requestAnimationFrame(recurse);
            lastFrameTime = lastFrameTime || thisFrameTime;
            deltaT = thisFrameTime - lastFrameTime;
            render(deltaT);
            lastFrameTime = thisFrameTime;
        }
        recurse();
    }

    function render(deltaT) {
        camera.position.x = 0;
        camera.position.y = 760;
        camera.position.z = 20000;

        camera.lookAt(scene.position);

        const positions = particles.geometry.attributes.position.array;
        const scales = particles.geometry.attributes.scale.array;

        let i = 0,
            j = 0;
        newTime += clock.getDelta();
        newTime += 0.015;
        isWaveDirection
            ? (particles.material.uniforms.time.value += 0.02)
            : (particles.material.uniforms.time.value -= 0.02);
        renderer.render(scene, camera);
        count += 0.08;
    }
})();
