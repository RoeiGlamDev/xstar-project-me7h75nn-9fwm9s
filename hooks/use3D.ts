import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Hook to create a 3D interactive element for the AI business "VidNexus".
 * This hook utilizes three.js to render and manage 3D interactions.
 * 
 * @param {string} modelPath - The path to the 3D model to be rendered.
 * @returns {HTMLElement} The ref to attach the 3D canvas to.
 */
const use3D = (modelPath: string): React.RefObject<HTMLDivElement> => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // Set background color to white as per the brand colors
    scene.background = new THREE.Color(0xffffff);

    // Load the 3D model
    const loader = new THREE.GLTFLoader();
    loader.load(modelPath, (gltf) => {
      scene.add(gltf.scene);
      renderer.render(scene, camera);
    }, undefined, (error) => {
      console.error('An error occurred while loading the 3D model:', error);
    });

    // Set camera position
    camera.position.z = 5;

    // Create an animation loop
    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function to dispose of the renderer and scene on component unmount
    return () => {
      renderer.dispose();
      scene.clear();
    };
  }, [modelPath]);

  return canvasRef;
};

export default use3D;