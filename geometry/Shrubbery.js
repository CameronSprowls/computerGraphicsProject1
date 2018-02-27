/***
 created by cameron sprowls
 **/

class Shrubbery extends ObjectGroup {
    /***
     * @param gl the open gl program that will draw the shape
     *
     */
    constructor (gl) {
        super(gl);

        // Base essentials
        let baseColor = vec3.fromValues(217 / 255, 217 / 255, 217 / 255);
        let baseHeight = 0.02;

        let partOfBase1 = new PolygonalPrism(gl, {
            topRadius: .05,
            bottomRadius: .05,
            numSides: 4,
            height: baseHeight,
            topColor: baseColor,
            bottomColor: baseColor
        });

        this.group.push(partOfBase1);

        let partOfBase2, partOfBase3;
        for (let i = 1; i < 4; i++) {

            partOfBase2 = new PolygonalPrism(gl, {
                topRadius: .05,
                bottomRadius: .05,
                numSides: 4,
                height: baseHeight,
                topColor: baseColor,
                bottomColor: baseColor
            });
            mat4.translate(partOfBase2.coordFrame, partOfBase2.coordFrame, vec3.fromValues(-0.05 * i, -0.05 * i, 0));

            partOfBase3 = new PolygonalPrism(gl, {
                topRadius: .05,
                bottomRadius: .05,
                numSides: 4,
                height: baseHeight,
                topColor: baseColor,
                bottomColor: baseColor
            });
            mat4.translate(partOfBase3.coordFrame, partOfBase3.coordFrame, vec3.fromValues(-0.05 * i, 0.05 * i, 0));

            this.group.push(partOfBase2, partOfBase3);
        }

        let partOfBase4, partOfBase5;
        let identity = mat4.create();
        for (let i = 1; i < 4; i++){
            partOfBase4 = new PolygonalPrism(gl, {
                topRadius: .05,
                bottomRadius: .05,
                numSides: 4,
                height: baseHeight,
                topColor: baseColor,
                bottomColor: baseColor
            });

            identity[12] = -.15;
            identity[13] = -.15;
            mat4.multiply(partOfBase4.coordFrame, identity, partOfBase4.coordFrame);

            identity[12] = .05 * i;
            identity[13] = -.05 * i;
            mat4.multiply(partOfBase4.coordFrame, identity, partOfBase4.coordFrame);

            partOfBase5 = new PolygonalPrism(gl, {
                topRadius: .05,
                bottomRadius: .05,
                numSides: 4,
                height: baseHeight,
                topColor: baseColor,
                bottomColor: baseColor
            });
            identity[12] = -.15;
            identity[13] = .15;
            mat4.multiply(partOfBase5.coordFrame, identity, partOfBase5.coordFrame);

            identity[12] = .05 * i;
            identity[13] = .05 * i;
            mat4.multiply(partOfBase5.coordFrame, identity, partOfBase5.coordFrame);

            this.group.push(partOfBase4, partOfBase5);
        }

        let partOfBase6 = new PolygonalPrism(gl, {
            topRadius: .05,
            bottomRadius: .05,
            numSides: 4,
            height: baseHeight,
            topColor: baseColor,
            bottomColor: baseColor
        });
        mat4.translate(partOfBase6.coordFrame, partOfBase6.coordFrame, vec3.fromValues(0.3, 0, 0));
        this.group.push(partOfBase6);


        let partOfBase7, partOfBase8;
        identity = mat4.create();
        for (let i = 1; i < 6; i++){
            partOfBase7 = new PolygonalPrism(gl, {
                topRadius: .05,
                bottomRadius: .05,
                numSides: 4,
                height: baseHeight,
                topColor: baseColor,
                bottomColor: baseColor
            });
            identity[12] = .3;
            identity[13] = 0;
            mat4.multiply(partOfBase7.coordFrame, identity, partOfBase7.coordFrame);

            identity[12] = -.05 * i;
            identity[13] = -.05 * i;
            mat4.multiply(partOfBase7.coordFrame, identity, partOfBase7.coordFrame);


            partOfBase8 = new PolygonalPrism(gl, {
                topRadius: .05,
                bottomRadius: .05,
                numSides: 4,
                height: baseHeight,
                topColor: baseColor,
                bottomColor: baseColor
            });
            identity[12] = .3;
            identity[13] = 0;
            mat4.multiply(partOfBase8.coordFrame, identity, partOfBase8.coordFrame);

            identity[12] = -.05 * i;
            identity[13] = .05 * i;
            mat4.multiply(partOfBase8.coordFrame, identity, partOfBase8.coordFrame);

            this.group.push(partOfBase7, partOfBase8);
        }
    }
}
