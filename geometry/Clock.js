class Clock extends ObjectGroup {
    constructor(gl) {
        super(gl);

        //12,3,6,9 ticks on clock
        let twelve = new PolygonalPrism(gl, {
            topRadius: .001,
            bottomRadius: .001,
            numSides: 4,
            height: 0.04,
            topColor: vec3.fromValues(0,0,0),
            bottomColor: vec3.fromValues(0,0,0)
        });
        mat4.translate(twelve.coordFrame,twelve.coordFrame,vec3.fromValues(-0.01,0,0.055));
        this.group.push(twelve);

        let three = new PolygonalPrism(gl, {
            topRadius: .001,
            bottomRadius: .001,
            numSides: 4,
            height: 0.04,
            topColor: vec3.fromValues(0,0,0),
            bottomColor: vec3.fromValues(0,0,0)
        });
        mat4.rotateX(three.coordFrame,three.coordFrame,glMatrix.toRadian(90));
        mat4.translate(three.coordFrame,three.coordFrame,vec3.fromValues(-.01,0,-0.095));
        this.group.push(three);

        let six = new PolygonalPrism(gl, {
            topRadius: .001,
            bottomRadius: .001,
            numSides: 4,
            height: 0.04,
            topColor: vec3.fromValues(0,0,0),
            bottomColor: vec3.fromValues(0,0,0)
        });
        mat4.translate(six.coordFrame,six.coordFrame,vec3.fromValues(-.01,0,-.095));
        this.group.push(six);

        let nine = new PolygonalPrism(gl, {
            topRadius: .001,
            bottomRadius: .001,
            numSides: 4,
            height: 0.04,
            topColor: vec3.fromValues(0,0,0),
            bottomColor: vec3.fromValues(0,0,0)
        });
        mat4.rotateX(nine.coordFrame,nine.coordFrame,glMatrix.toRadian(90));
        mat4.translate(nine.coordFrame,nine.coordFrame, vec3.fromValues(-0.01,0,0.055));
        this.group.push(nine);


        this.secondHandRotation = glMatrix.toRadian(-6);
        this.minHandRotation = glMatrix.toRadian(-1/60);
        this.hourHandRotation = glMatrix.toRadian(-1/360);

        let time = new Date();

        let handColor1 = [165/255, 151/255, 51/255];
        let handColor2 = [106/255, 69/255, 29/255];

        this.secondHand = new PolygonalPrism(gl, {
            topRadius: .001,
            bottomRadius: .001,
            numSides: 360,
            height: .095,
            topColor: handColor1,
            bottomColor: handColor2
        });

        mat4.rotateX(this.secondHand.coordFrame, this.secondHand.coordFrame, glMatrix.toRadian(-1 * time.getSeconds() * 6));

        this.minHand = new PolygonalPrism(gl, {
            topRadius: .002,
            bottomRadius: .001,
            numSides: 360,
            height: .09,
            topColor: handColor1,
            bottomColor: handColor2
        });

        mat4.rotateX(this.minHand.coordFrame, this.minHand.coordFrame, glMatrix.toRadian(-1 * time.getMinutes() * 6));

        this.hourHand = new PolygonalPrism(gl, {
            topRadius: .003,
            bottomRadius: .001,
            numSides: 360,
            height: .06,
            topColor: handColor1,
            bottomColor: handColor2
        });

        mat4.rotateX(this.hourHand.coordFrame, this.hourHand.coordFrame, glMatrix.toRadian((-1 * time.getHours() * 30) - time.getMinutes()/2));

        let centerSphere = new Sphere(gl, 0.005, 5, vec3.fromValues(0, 0, 0));

        this.group.push(this.secondHand, this.minHand, this.hourHand, centerSphere);
    }

    clockMove(){
        mat4.rotateX(this.secondHand.coordFrame, this.secondHand.coordFrame, this.secondHandRotation);
        mat4.rotateX(this.minHand.coordFrame, this.minHand.coordFrame, this.minHandRotation);
        mat4.rotateX(this.hourHand.coordFrame, this.hourHand.coordFrame, this.hourHandRotation);
    }
}