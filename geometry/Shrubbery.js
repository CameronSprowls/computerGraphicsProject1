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

        let leaf1 = [0/255, 211/255, 31/255];
        let leaf2 = [1/255, 153/255, 24/255];

        // let's actually make the shrubbery(ies)
        let shrub = new PolygonalPrism(gl, {
                topRadius: .05,
                bottomRadius: .0005,
                numSides: 4,
                height: .1,
                topColor: leaf2,
                bottomColor: leaf1
            });
        mat4.translate(shrub.coordFrame, shrub.coordFrame, vec3.fromValues(0, .15, 0));
        mat4.scale(shrub.coordFrame, shrub.coordFrame, vec3.fromValues(2, 2, 1));

        this.group.push(shrub);

        let shrub2 = new PolygonalPrism(gl, {
            topRadius: .05,
            bottomRadius: .0005,
            numSides: 4,
            height: .1,
            topColor: leaf2,
            bottomColor: leaf1
        });
        mat4.translate(shrub2.coordFrame, shrub2.coordFrame, vec3.fromValues(0, -.15, 0));
        mat4.scale(shrub2.coordFrame, shrub2.coordFrame, vec3.fromValues(2, 2, 1));

        this.group.push(shrub2);

        let shrub3 = new PolygonalPrism(gl, {
            topRadius: .05,
            bottomRadius: .0005,
            numSides: 4,
            height: .1,
            topColor: leaf2,
            bottomColor: leaf1
        });
        mat4.translate(shrub3.coordFrame, shrub3.coordFrame, vec3.fromValues(.15, 0, 0));
        mat4.scale(shrub3.coordFrame, shrub3.coordFrame, vec3.fromValues(2, 2, 1));

        this.group.push(shrub3);

        let dirtColor1 = [99/255, 62/255, 0/255];
        // let's actually make the shrubbery(ies)
        let dirtA = new PolygonalPrism(gl, {
            topRadius: .1,
            bottomRadius: .1,
            numSides: 4,
            height: .002,
            topColor: dirtColor1
        });
        mat4.translate(dirtA.coordFrame, dirtA.coordFrame, vec3.fromValues(.15, 0, 0));

        let dirtB = new PolygonalPrism(gl, {
            topRadius: .1,
            bottomRadius: .1,
            numSides: 4,
            height: .002,
            topColor: dirtColor1
        });
        mat4.translate(dirtB.coordFrame, dirtB.coordFrame, vec3.fromValues(0, 0.15, 0));

        let dirtC = new PolygonalPrism(gl, {
            topRadius: .1,
            bottomRadius: .1,
            numSides: 4,
            height: .002,
            topColor: dirtColor1
        });
        mat4.translate(dirtC.coordFrame, dirtC.coordFrame, vec3.fromValues(0, -0.15, 0));

        let dirtD = new PolygonalPrism(gl, {
            topRadius: .1,
            bottomRadius: .1,
            numSides: 4,
            height: .002,
            topColor: dirtColor1
        });
        mat4.translate(dirtD.coordFrame, dirtD.coordFrame, vec3.fromValues(0.08, 0.07, 0));

        let dirtE = new PolygonalPrism(gl, {
            topRadius: .1,
            bottomRadius: .1,
            numSides: 4,
            height: .002,
            topColor: dirtColor1
        });
        mat4.translate(dirtE.coordFrame, dirtE.coordFrame, vec3.fromValues(0.08, -0.07, 0));

        this.group.push(dirtA, dirtB, dirtC, dirtD, dirtE);
    }
}
