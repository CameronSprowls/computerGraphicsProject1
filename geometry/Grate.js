/*
* Grating for the clock tower.
*
* Created by Dustin Thurston
 */
class Grate extends ObjectGroup{

    constructor(gl){
        super(gl);

        //Vertical Bars
        let vCenter = new PolygonalPrism(gl, {
            topRadius: 0.006,
            bottomRadius: 0.006,
            numSides: 4,
            height: 0.35,
            topColor: vec3.fromValues(215/255,220/255,224/255),
            bottomColor: vec3.fromValues(204/255,209/255,213/255)
        });

        let vLeft = new PolygonalPrism(gl, {
            topRadius: 0.006,
            bottomRadius: 0.006,
            numSides: 4,
            height: 0.35,
            topColor: vec3.fromValues(215/255,220/255,224/255),
            bottomColor: vec3.fromValues(204/255,209/255,213/255)
        });

        let vRight = new PolygonalPrism(gl, {
            topRadius: 0.006,
            bottomRadius: 0.006,
            numSides: 4,
            height: 0.35,
            topColor: vec3.fromValues(215/255,220/255,224/255),
            bottomColor: vec3.fromValues(204/255,209/255,213/255)
        });
        mat4.translate(vLeft.coordFrame, vLeft.coordFrame, vec3.fromValues(0.025, -0.025, 0));
        mat4.translate(vRight.coordFrame, vRight.coordFrame, vec3.fromValues(-0.025,0.025, 0));
        this.group.push(vLeft);
        this.group.push(vCenter);
        this.group.push(vRight);

        //horizontal bars
        let hCenter = new PolygonalPrism(gl, {
            topRadius: 0.006,
            bottomRadius: 0.006,
            numSides: 4,
            height: 0.2,
            topColor: vec3.fromValues(215/255,220/255,224/255),
            bottomColor: vec3.fromValues(204/255,209/255,213/255)
        });
        mat4.rotateX(hCenter.coordFrame, hCenter.coordFrame, glMatrix.toRadian(90));
        mat4.rotateY(hCenter.coordFrame, hCenter.coordFrame, glMatrix.toRadian(45));
        mat4.translate(hCenter.coordFrame,hCenter.coordFrame,vec3.fromValues(0,0.15,-0.1));

        let hTop = new PolygonalPrism(gl, {
            topRadius: 0.006,
            bottomRadius: 0.006,
            numSides: 4,
            height: 0.2,
            topColor: vec3.fromValues(215/255,220/255,224/255),
            bottomColor: vec3.fromValues(204/255,209/255,213/255)
        });
        mat4.rotateX(hTop.coordFrame, hTop.coordFrame, glMatrix.toRadian(90));
        mat4.rotateY(hTop.coordFrame, hTop.coordFrame, glMatrix.toRadian(45));
        mat4.translate(hTop.coordFrame,hTop.coordFrame,vec3.fromValues(0,0.175,-0.1));

        let hTopest = new PolygonalPrism(gl, {
            topRadius: 0.006,
            bottomRadius: 0.006,
            numSides: 4,
            height: 0.2,
            topColor: vec3.fromValues(215/255,220/255,224/255),
            bottomColor: vec3.fromValues(204/255,209/255,213/255)
        });
        mat4.rotateX(hTopest.coordFrame, hTopest.coordFrame, glMatrix.toRadian(90));
        mat4.rotateY(hTopest.coordFrame, hTopest.coordFrame, glMatrix.toRadian(45));
        mat4.translate(hTopest.coordFrame,hTopest.coordFrame,vec3.fromValues(0,0.225,-0.1));

        let hTop2 = new PolygonalPrism(gl, {
            topRadius: 0.006,
            bottomRadius: 0.006,
            numSides: 4,
            height: 0.2,
            topColor: vec3.fromValues(215/255,220/255,224/255),
            bottomColor: vec3.fromValues(204/255,209/255,213/255)
        });
        mat4.rotateX(hTop2.coordFrame, hTop2.coordFrame, glMatrix.toRadian(90));
        mat4.rotateY(hTop2.coordFrame, hTop2.coordFrame, glMatrix.toRadian(45));
        mat4.translate(hTop2.coordFrame,hTop2.coordFrame,vec3.fromValues(0,0.25,-0.1));

        let hBot = new PolygonalPrism(gl, {
            topRadius: 0.006,
            bottomRadius: 0.006,
            numSides: 4,
            height: 0.2,
            topColor: vec3.fromValues(215/255,220/255,224/255),
            bottomColor: vec3.fromValues(204/255,209/255,213/255)
        });
        mat4.rotateX(hBot.coordFrame, hBot.coordFrame, glMatrix.toRadian(90));
        mat4.rotateY(hBot.coordFrame, hBot.coordFrame, glMatrix.toRadian(45));
        mat4.translate(hBot.coordFrame,hBot.coordFrame,vec3.fromValues(0,0.1,-0.1));

        let hBot2 = new PolygonalPrism(gl, {
            topRadius: 0.006,
            bottomRadius: 0.006,
            numSides: 4,
            height: 0.2,
            topColor: vec3.fromValues(215/255,220/255,224/255),
            bottomColor: vec3.fromValues(204/255,209/255,213/255)
        });
        mat4.rotateX(hBot2.coordFrame, hBot2.coordFrame, glMatrix.toRadian(90));
        mat4.rotateY(hBot2.coordFrame, hBot2.coordFrame, glMatrix.toRadian(45));
        mat4.translate(hBot2.coordFrame,hBot2.coordFrame,vec3.fromValues(0,0.075,-0.1));

        this.group.push(hTop, hTop2, hTopest);
        this.group.push(hCenter);
        this.group.push(hBot, hBot2);

    }
}