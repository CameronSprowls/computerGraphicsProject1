class BrickGroup extends ObjectGroup {
    constructor(gl) {
        super(gl);

        let bricks;

        for (let i = 0; i < 7; i++){
            bricks = new BrickStack(gl);
            mat4.rotateZ(bricks.coordFrame, bricks.coordFrame, glMatrix.toRadian(i*5.5));
            mat4.translate(bricks.coordFrame, bricks.coordFrame, vec3.fromValues(0, -.7, 0));
            this.group.push(bricks);
        }

    }

}