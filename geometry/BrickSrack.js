class BrickStack extends ObjectGroup{
    constructor(gl){
        super(gl);

        let red1 = [178/255, 82/255, 68/255];
        let red2 = [167/255, 64/255, 55/255];
        //let brickGroup = new ObjectGroup(gl);
        let brick;
        for (let i = 0; i < 20; i++) {
            brick = new PolygonalPrism(gl, {
                topRadius: 0.05,
                bottomRadius: 0.05,
                numSides: 4,
                height: 0.02,
                topColor: red1,
                bottomColor: red2
            });
            mat4.translate(brick.coordFrame, brick.coordFrame, vec3.fromValues(0, 0, 0.02*i));

            //brickGroup.group.push(brick);
        }

        let brickGroup = new PolygonalPrism(gl, {
            topRadius: 0.05,
            bottomRadius: 0.05,
            numSides: 4,
            height: 0.02 * 20,
            topColor: red1,
            bottomColor: red2
        });

        mat4.rotateX(brickGroup.coordFrame, brickGroup.coordFrame, glMatrix.toRadian(90));

        let identity = mat4.create();
        let theta = 14.93;
        identity[0] = Math.cos(theta);
        identity[1] = Math.sin(theta);
        identity[4] = -1 * Math.sin(theta);
        identity[5] = Math.cos(theta);
        mat4.multiply(brickGroup.coordFrame, brickGroup.coordFrame, identity);

        this.group.push(brickGroup);

    }
}