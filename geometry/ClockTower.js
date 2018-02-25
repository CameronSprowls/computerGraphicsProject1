/**
 * Created by Dustin Thurston
 **/

class ClockTower extends ObjectGroup {

    constructor(gl){
        super(gl);

        let base = new PolygonalPrism(gl, {
            topRadius: 0.2,
            bottomRadius: 0.2,
            numSides: 4,
            height: 0.7,
            topColor: vec3.fromValues(216/255,39/255,50/255),
            bottomColor: vec3.fromValues(155/255,38/255,46/255)
        });

        let prism1 = new PolygonalPrism(gl, {
            topRadius: 0.07,
            bottomRadius: 0.07,
            numSides: 4,
            height: 1.0,
            topColor: vec3.fromValues(216/255,39/255,50/255),
            bottomColor: vec3.fromValues(155/255,38/255,46/255)
        });
        mat4.translate(prism1.coordFrame, prism1.coordFrame, vec3.fromValues(0.15,0, 0));

        let prism2 = new PolygonalPrism(gl, {
            topRadius: 0.07,
            bottomRadius: 0.07,
            numSides: 4,
            height: 1.0,
            topColor: vec3.fromValues(216/255,39/255,50/255),
            bottomColor: vec3.fromValues(155/255,38/255,46/255)
        });
        mat4.translate(prism2.coordFrame,prism2.coordFrame, vec3.fromValues(-0.15,0,0));


        let prism3 = new PolygonalPrism(gl, {
            topRadius: 0.07,
            bottomRadius: 0.07,
            numSides: 4,
            height: 1.0,
            topColor: vec3.fromValues(216/255,39/255,50/255),
            bottomColor: vec3.fromValues(155/255,38/255,46/255)
        });
        mat4.translate(prism3.coordFrame,prism3.coordFrame,vec3.fromValues(0,0.15,0));

        let prism4 = new PolygonalPrism(gl, {
            topRadius: 0.07,
            bottomRadius: 0.07,
            numSides: 4,
            height: 1.0,
            topColor: vec3.fromValues(216/255,39/255,50/255),
            bottomColor: vec3.fromValues(155/255,38/255,46/255)
        });
        mat4.translate(prism4.coordFrame,prism4.coordFrame, vec3.fromValues(0,-0.15,0));

        let top = new PolygonalPrism(gl, {
            topRadius: 0.22,
            bottomRadius: 0.22,
            numSides: 4,
            height: 0.1,
            topColor: vec3.fromValues(216/255,39/255,50/255),
            bottomColor: vec3.fromValues(155/255,38/255,46/255)
        });
        mat4.translate(top.coordFrame,top.coordFrame,vec3.fromValues(0,0,1.0));

        let clockPart = new PolygonalPrism(gl, {
            topRadius: 0.2,
            bottomRadius: 0.2,
            numSides: 4,
            height: 0.2,
            topColor: vec3.fromValues(249/255,237/255,238/255),
            bottomColor: vec3.fromValues(219/255,208/255,209/255)
        });
        mat4.translate(clockPart.coordFrame,clockPart.coordFrame,vec3.fromValues(0,0,1.1));

        this.group.push(base);
        this.group.push(prism1,prism2,prism3,prism4);
        this.group.push(top);
        this.group.push(clockPart);

    }
}