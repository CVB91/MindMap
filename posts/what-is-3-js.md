---
title: 'What is ThreeJs? : An explainer and example'
date: '2023-02-13 '
excerpt: "Three.js is an open-source JavaScript library that is used to create and display 3D graphics on the web."
isFeatured: true
---
## What is Three JS ?

Three.js is an open-source JavaScript library that is used to create and display 3D graphics on the web. It provides a wide range of tools for creating and manipulating 3D objects and scenes in real-time. The library is designed to be easy to use and is widely popular for its versatility and ease of integration into web-based projects.

One of the main advantages of Three.js is its ability to create complex 3D scenes and animations without requiring extensive knowledge of computer graphics or 3D modeling. The library provides a set of easy-to-use tools and methods for creating 3D objects, rendering textures and materials, and animating objects.

Three.js supports a variety of 3D file formats, including OBJ, FBX, and STL, and provides the ability to load 3D models directly into a web page. This allows developers to create interactive 3D experiences that can be viewed and manipulated by users directly in the browser, without requiring any additional software or plugins.

Another key feature of Three.js is its support for WebGL, a web-based standard for rendering 3D graphics using the GPU. This provides fast and efficient rendering performance and enables Three.js to create high-quality 3D graphics on a wide range of devices and platforms.

Overall, Three.js is a powerful and versatile tool for creating and displaying 3D graphics on the web. Its ease of use and support for a wide range of features and platforms make it an ideal choice for developers looking to create interactive and engaging 3D experiences on the web.

Here is an example of a simple Three.js scene that displays a rotating cube:

```js
<!DOCTYPE html>
<html>
<head>
  <title>Three.js Example</title>
  <style>
    body { margin: 0; }
    canvas { width: 100%; height: 100%; }
  </style>
</head>
<body>

<script src="https://threejs.org/build/three.min.js"></script>

<script>
  // Set up the scene, camera, and renderer
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  // Create a cube and add it to the scene
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  // Position the camera
  camera.position.z = 5;

  // Render the scene
  function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
  }
  animate();
</script>

</body>
</html>
```

This code sets up a Three.js scene, adds a green cube to the scene, positions the camera, and renders the scene with the cube rotating on its x and y axes. Note that this example uses the MeshBasicMaterial, which only renders the object in a solid color. For more complex materials, such as textures and lighting, you would need to use a different type of material, such as MeshStandardMaterial.

Here is the equivalent Three.js scene in React code:

```js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function ThreeScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create a cube and add it to the scene
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Position the camera
    camera.position.z = 5;

    // Render the scene
    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return <canvas ref={canvasRef} />;
}

export default ThreeScene;
```

This code sets up a Three.js scene and renders it in a canvas element using React's useRef hook. The useEffect hook is used to run the scene setup and rendering code once when the component mounts. The rest of the code is similar to the non-React example, with the canvasRef being used to specify the canvas element for the renderer to render to.

