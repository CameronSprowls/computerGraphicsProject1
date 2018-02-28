/***
 created by cameron sprowls
 **/


class TrashCan extends ObjectGroup {
    /***
     * @param gl the open gl program that will draw the shape
     * @param props a list of parameters with the following keys: color
     *
     */

    constructor (gl, props){
        super(gl);
        //this.coordFrame = mat4.create();
        const requiredProps = ["length", "height"];
        if (!this._checkProperties(props, requiredProps)) {
            throw "Trash Can is missing required properties: " + requiredProps;
        }
        let color;
        if(typeof props.color === undefined){
            color = vec3.fromValues(Math.random(), Math.random(), Math.random());
        } else {
            color = props.color;
        }

        let height = props.height;
        let length = props.length;

        let base = new PolygonalPrism(gl, {
            topRadius: length,
            bottomRadius: length,
            numSides: 360,
            height: height,
            topColor: vec3.fromValues(21/255,51/255,217/255),
            bottomColor: color
        });

        let top = new PolygonalPrism(gl, {
            topRadius: length,
            bottomRadius: length,
            numSides: 360,
            height: height/5,
            topColor: vec3.fromValues(21/255,51/255,217/255),
            bottomColor: color
        });

        let middle = new Torus(gl, {
            majorRadius: length*0.25,
            minorRadius: length*0.25,
            majSubdiv: 50,
            minSubdiv: 50,
            topColor: vec3.fromValues(0, 0, 0),
            bottomColor: vec3.fromValues(0, 0, 0),
        });

        /**
        let ring;

        for (let i = 0; i < 100; i += 5) {
            ring = new Torus(gl, {
                majorRadius: .001,
                minorRadius: .001,
                majSubdiv: 50,
                minSubdiv: 50,
                topColor: vec3.fromValues(Math.random(), Math.random(), Math.random()),
                bottomColor: vec3.fromValues(Math.random(), Math.random(), Math.random()),
            });
            mat4.rotateY(ring.coordFrame, ring.coordFrame, glMatrix.toRadian(90));
            mat4.rotateX(ring.coordFrame, ring.coordFrame, glMatrix.toRadian(i));
            mat4.translate(ring.coordFrame, ring.coordFrame, vec3.fromValues(0, length, 0));
            mat4.rotateX(ring.coordFrame, ring.coordFrame, glMatrix.toRadian(60));

            this.group.push(ring);
        }
         **/

        let pillars = [];
        let pillarHeight = height/8;
        for(let i = 0; i < 4; i++) {
            let pillar = new PolygonalPrism(gl, {
                topRadius: length / 10,
                bottomRadius: length / 10,
                numSides: 4,
                height: pillarHeight,
                topColor: color,
                bottomColor: color
            });
            pillars.push(pillar);
        }

        mat4.translate(top.coordFrame, top.coordFrame, vec3.fromValues(0, 0, height+pillarHeight));
        mat4.translate(middle.coordFrame, middle.coordFrame, vec3.fromValues(0, 0, height+pillarHeight/2));

        // The four pillars
        let offset = length*.65;
        mat4.translate(pillars[0].coordFrame, pillars[0].coordFrame, vec3.fromValues(offset, offset, height));
        mat4.translate(pillars[1].coordFrame, pillars[1].coordFrame, vec3.fromValues(-1*offset, offset, height));
        mat4.translate(pillars[2].coordFrame, pillars[2].coordFrame, vec3.fromValues(offset, -1*offset, height));
        mat4.translate(pillars[3].coordFrame, pillars[3].coordFrame, vec3.fromValues(-1*offset, -1*offset, height));

        this.group.push(base, top, pillars[0], pillars[1], pillars[2], pillars[3], middle);
    }
}