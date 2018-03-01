class Clock extends ObjectGroup {
    constructor(gl) {
        super(gl);

        this.secondHandRotation = glMatrix.toRadian(-6);
        this.minHandRotation = glMatrix.toRadian(-1/15);
        this.hourHandRotation = glMatrix.toRadian(-1/360);

        let time = new Date();

        let handColor1 = [165/255, 151/255, 51/255];
        let handColor2 = [106/255, 69/255, 29/255];

        this.secondHand = new PolygonalPrism(gl, {
            topRadius: .001,
            bottomRadius: .001,
            numSides: 360,
            height: .11,
            topColor: handColor1,
            bottomColor: handColor2
        });

        mat4.rotateX(this.secondHand.coordFrame, this.secondHand.coordFrame, glMatrix.toRadian(-1 * time.getSeconds() * 6));

        this.minHand = new PolygonalPrism(gl, {
            topRadius: .002,
            bottomRadius: .001,
            numSides: 360,
            height: .1,
            topColor: handColor1,
            bottomColor: handColor2
        });

        mat4.rotateX(this.minHand.coordFrame, this.minHand.coordFrame, glMatrix.toRadian(-1 * time.getMinutes() * 6));

        this.hourHand = new PolygonalPrism(gl, {
            topRadius: .005,
            bottomRadius: .001,
            numSides: 360,
            height: .06,
            topColor: handColor1,
            bottomColor: handColor2
        });

        mat4.rotateX(this.hourHand.coordFrame, this.hourHand.coordFrame, glMatrix.toRadian(-1 * time.getHours() * 30));
        this.group.push(this.secondHand, this.minHand, this.hourHand);
    }

    clockMove(){
        mat4.rotateX(this.secondHand.coordFrame, this.secondHand.coordFrame, this.secondHandRotation);
        mat4.rotateX(this.minHand.coordFrame, this.minHand.coordFrame, this.minHandRotation);
        mat4.rotateX(this.hourHand.coordFrame, this.hourHand.coordFrame, this.hourHandRotation);
    }
}