import * as THREE from 'three'

// init
export default function Anime() {
let textures = [ `https://allyourhtml.club/carousel/img1.jpg`, `https://allyourhtml.club/carousel/img2.jpg`, `https://allyourhtml.club/carousel/img3.jpg`, `https://allyourhtml.club/carousel/img4.jpg`,
].map((url) => new THREE.TextureLoader().load(url));

const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.01,
  10
);
camera.position.z = 2;

const scene = new THREE.Scene();

const geometry = new THREE.PlaneGeometry(1, 1, 10, 10);
const material = new THREE.ShaderMaterial({
  uniforms: {
    uTexture: { value: textures[0] },
  },
  vertexShader: `
      varying vec2 vUv;
      void main(){
        vUv = uv;
        vec3 newposition = position;
        float distanceFromCenter = abs(
            (modelMatrix * vec4(position, 1.0)).x
        );
         
        // most important
        newposition.y *= 1.0 + 0.3*pow(distanceFromCenter,2.);
          
        gl_Position = projectionMatrix * modelViewMatrix * vec4( newposition, 1.0 );
      }`,
  fragmentShader: `
        uniform sampler2D uTexture;
        varying vec2 vUv;
        void main()	{
          gl_FragColor = texture2D(uTexture,vUv);
        }
       `,
});

for (let i = 0; i < 30; i++) {
  let m = material.clone();
  m.uniforms.uTexture.value = textures[i % 4];
  let mesh = new THREE.Mesh(geometry, m);
  mesh.position.x = (i - 15) * 1.2;
  scene.add(mesh);
}

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);

// animation
let time = 0;
function animation(time) {
  time += 0.001;
  scene.position.x = 3 * Math.sin(time / 1000);
  renderer.render(scene, camera);
}
}
