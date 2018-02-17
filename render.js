/**
 * Created by Hans Dulimarta.
 *
 * Edited by Cameron Sprowls
 */
let canvas;
let gl;
let allObjs = [];

let projUnif;
let projMat, viewMat;


/* Global variables for consistency through the shapes */
const SIZE_OF_CITY = 100;
const SHAPE_RADIUS = .1;

/* Program essentials */
let autoMove = true;
let time = Date.now();
let camera = mat4.create();

function main() {
    canvas = document.getElementById("my-canvas");

    /* setup window resize listener */
    window.addEventListener('resize', resizeWindow);
    gl = WebGLUtils.create3DContext(canvas, null);

    ShaderUtils.loadFromFile(gl, "vshader.glsl", "fshader.glsl")
        .then (prog => {

            /* put all one-time initialization logic here */
            gl.useProgram (prog);
            gl.clearColor (0, 0, 0, 1);
            gl.enable(gl.CULL_FACE);
            gl.enable(gl.DEPTH_TEST);
            gl.cullFace(gl.BACK);

            /* the vertex shader defines TWO attribute vars and ONE uniform var */
            let posAttr = gl.getAttribLocation (prog, "vertexPos");
            let colAttr = gl.getAttribLocation (prog, "vertexCol");
            Object3D.linkShaderAttrib({
                positionAttr: posAttr,
                colorAttr: colAttr
            });
            let modelUnif = gl.getUniformLocation (prog, "modelCF");
            projUnif = gl.getUniformLocation (prog, "projection");
            viewUnif = gl.getUniformLocation (prog, "view");
            Object3D.linkShaderUniform({
                projection: projUnif,
                view: viewUnif,
                model: modelUnif
            });
            gl.enableVertexAttribArray (posAttr);
            gl.enableVertexAttribArray (colAttr);
            projMat = mat4.create();
            gl.uniformMatrix4fv (projUnif, false, projMat);
            viewMat = mat4.lookAt(mat4.create(),   // Out
                vec3.fromValues (1, 1, 1.5),  // eye coord
                vec3.fromValues (-5, -5, 0),  // center
                vec3.fromValues (0, 0, 1)   // Z is up
            );

            gl.uniformMatrix4fv (viewUnif, false, viewMat);

            /* recalculate new viewport */
            resizeWindow();
            createObject();

            /* initiate the render request */
            window.requestAnimFrame(drawScene);
            window.requestAnimFrame(moveForward);
        });

    // Listener for the movement of the camera/airplane
    window.addEventListener ('keydown', event => {
        let key = String.fromCharCode(event.keyCode);
        switch (key) {
            case 'W':      // Forward down Z
                mat4.invert(camera, viewMat);
                mat4.translate(camera, camera, vec3.fromValues(0, 0, -.1/2));
                mat4.invert(viewMat, camera);
                break;
            case 'S':      // Backward
                mat4.invert(camera, viewMat);
                mat4.translate(camera, camera, vec3.fromValues(0, 0, .1/2));
                mat4.invert(viewMat, camera);
                break;
            case 'Q':      // Angle Up
                mat4.invert(camera, viewMat);
                mat4.rotateX(camera, camera, .1/2);
                mat4.invert(viewMat, camera);
                break;
            case 'E':      // Angle Down
                mat4.invert(camera, viewMat);
                mat4.rotateX(camera, camera, -.1/2);
                mat4.invert(viewMat, camera);
                break;
            case 'A':      // Roll Left
                mat4.invert(camera, viewMat);
                mat4.rotateY(camera, camera, .1/2);
                mat4.invert(viewMat, camera);
                break;
            case 'D':     // Roll Right
                mat4.invert(camera, viewMat);
                mat4.rotateY(camera, camera, -.1/2);
                mat4.invert(viewMat, camera);
                break;
            case 'Z':      // Turn Left
                mat4.invert(camera, viewMat);
                mat4.rotateZ(camera, camera, .1/2);
                mat4.invert(viewMat, camera);
                break;
            case 'C':     // Turn Right
                mat4.invert(camera, viewMat);
                mat4.rotateZ(camera, camera, -.1/2);
                mat4.invert(viewMat, camera);
                break;
            default:
                break;
        }

        gl.uniformMatrix4fv (viewUnif, false, viewMat);
        window.requestAnimationFrame(drawScene);
    });

    // Listener for the drop down menu for the auto-move feature
    const movementMode = document.getElementById("Auto Move");
    movementMode.addEventListener('click', event => {
        switch (movementMode.selectedIndex) {
            case 0:
                autoMove = true;
                moveForward();
                break;
            case 1:
                autoMove = false;
                break;
            default:
                break;
        }
    });
}

function drawScene() {
    // Clear the screen
    gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);

    for (let k = 0; k < allObjs.length; k++) {
        allObjs[k].draw(gl);
    }
}

/***
 * Function that moves the camera forward on a different
 * thread so the user can still move around.
 */
function moveForward() {
    if (autoMove) {
        if (new Date() - time > 10) {
            // Update view matrix via the camera
            mat4.invert(camera, viewMat);
            mat4.translate(camera, camera, vec3.fromValues(0, 0, -.01));
            mat4.invert(viewMat, camera);

            time = Date.now();
        }
        // Refresh screen then keep running in a loop
        gl.uniformMatrix4fv(viewUnif, false, viewMat);
        drawScene();
        //window.requestAnimFrame(moveForward);
    }
}

/***
 * Creates all of the "buildings" for the city, pushed them back to the array to be drawn
 *
 * Currently draws the city in a bad grid, works for now until I can move the camera
 */
function createObject() {
    let count = 0;
    /**
    for (let i = 0; i < SIZE_OF_CITY; i++) {
        let shape;
        let shapeType = Math.random();

        // Get a random shape to add. Either a polygonal prism, sphere, or a cone
        if (shapeType < (1/3)) {
            shape = new PolygonalPrism(gl, {
                topRadius: SHAPE_RADIUS,
                bottomRadius: .1,
                numSides: 4,
                height: Math.random()/2
            });
        } else if (shapeType > (2/3)) {
            shape = new Sphere (gl,
                SHAPE_RADIUS,
                5,
                undefined);
            // Used to move the sphere up to ground level so it's not in the ground
            shape.coordFrame[14] += SHAPE_RADIUS;
        } else {
            shape = new Cone(gl, {
                radius: SHAPE_RADIUS,
                height: Math.random()/2,
            });
        }

        // Weird way to set up a block, but it's the first thing I thought of, so I guess I'll leave it
        if (i%9 === 0)
            count = 0;

        mat4.translate(shape.coordFrame, shape.coordFrame, vec3.fromValues(i/10, count/2, 0));
        allObjs.push(shape);

        count++;
    }
     **/

    // Basic shapes to get us started with a platform and some perspective
    // Huge floor

    let rgb;
    let shape;
        /**
    let rgb = vec3.fromValues(66/255, 191/255, 244/255);
    let shape = new PolygonalPrism(gl, {
        topRadius: 100,
        bottomRadius: 100,
        numSides: 4,
        height: .1,
        topColor: rgb,
        bottomColor: rgb
    });
    allObjs.push(shape);**/

    // Red platform to build on
    rgb = vec3.fromValues(244/255, 66/255, 66/255);
    shape = new PolygonalPrism(gl, {
        topRadius: 1,
        bottomRadius: 1,
        numSides: 4,
        height: .1,
        topColor: rgb,
        bottomColor: rgb
    });
    mat4.translate(shape.coordFrame, shape.coordFrame, vec3.fromValues(0, 0, 1));
    allObjs.push(shape);

    // Start creating the scene
    let trashCan1 = new TrashCan(gl, {
        height: .1,
        length: .05,
        color: vec3.fromValues(14/255, 98/255, 234/255),
    });
    mat4.translate(trashCan1.coordFrame, trashCan1.coordFrame, vec3.fromValues(0, 0, 2));
    allObjs.push(trashCan1);

    allObjs.push(shape);
}

function resizeWindow() {
  let w = window.innerWidth - 16;
  let h = 0.75 * window.innerHeight;
  canvas.width = w;
  canvas.height = h;
  mat4.perspective (projMat, glMatrix.toRadian(60), w/h, 0.05, 20);
  gl.uniformMatrix4fv (projUnif, false, projMat);
  gl.viewport(0, 0, w, h);
}

