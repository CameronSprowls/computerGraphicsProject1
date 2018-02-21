

class Brick extends ObjectGroup{
    constructor(gl){
        super(gl);

        let brick1 = new PolygonalPrism(gl, {
            topRadius: 0.05, bottomRadius: 0.05,
            numSides: 4, height: 0.02
        });

        this.group.push(brick1);

    }
}