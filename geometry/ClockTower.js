/**
 * Created by Dustin Thurston
 **/

class ClockTower extends ObjectGroup {

    constructor(gl){
        super(gl);

        let grate1 = new Grate(gl);
        mat4.translate(grate1.coordFrame,grate1.coordFrame,vec3.fromValues(0.09,0.09,0.699));
        this.group.push(grate1);

        let grate2 = new Grate(gl);
        mat4.translate(grate2.coordFrame, grate2.coordFrame,vec3.fromValues(-0.09,-0.09,0.699));
        this.group.push(grate2);

        let grate3 = new Grate(gl);
        mat4.rotateZ(grate3.coordFrame, grate3.coordFrame,glMatrix.toRadian(90));
        mat4.translate(grate3.coordFrame,grate3.coordFrame,vec3.fromValues(0.09,0.09,0.699));
        this.group.push(grate3);

        let grate4 = new Grate(gl);
        mat4.rotateZ(grate4.coordFrame, grate4.coordFrame,glMatrix.toRadian(90));
        mat4.translate(grate4.coordFrame,grate4.coordFrame,vec3.fromValues(-0.09,-0.09,0.699));
        this.group.push(grate4);


        //let grate2 = new Grate(gl);

        /**
         * Small Base Pillar 1
         * */
        let subBase = new ObjectGroup(gl);
        let top1 = new PolygonalPrism(gl,{
            topRadius: 0.04,
            bottomRadius: 0.11,
            numSides: 4,
            height: 0.03,
            topColor: vec3.fromValues(215/255,220/255,224/255),
            bottomColor: vec3.fromValues(204/255,209/255,213/255)
        });
        subBase.group.push(top1);
        mat4.translate(top1.coordFrame,top1.coordFrame,vec3.fromValues(0.15,0,0.2));

        let sPill1 = new PolygonalPrism(gl, {
            topRadius: 0.075,
            bottomRadius: 0.075,
            numSides: 4,
            height: 0.2,
            topColor: vec3.fromValues(170/255,82/255,68/255),
            bottomColor: vec3.fromValues(167/255,64/255,55/255)
        });
        subBase.group.push(sPill1);
        mat4.translate(sPill1.coordFrame,sPill1.coordFrame,vec3.fromValues(0.15,0,0));

        /**
         * Small base pillar 2
         * @type {PolygonalPrism}
         */
        let top2 = new PolygonalPrism(gl,{
            topRadius: 0.04,
            bottomRadius: 0.11,
            numSides: 4,
            height: 0.03,
            topColor: vec3.fromValues(215/255,220/255,224/255),
            bottomColor: vec3.fromValues(204/255,209/255,213/255)
        });
        subBase.group.push(top2);
        mat4.translate(top2.coordFrame,top2.coordFrame,vec3.fromValues(-0.15,0,0.2));

        let sPill2 = new PolygonalPrism(gl, {
            topRadius: 0.075,
            bottomRadius: 0.075,
            numSides: 4,
            height: 0.2,
            topColor: vec3.fromValues(170/255,82/255,68/255),
            bottomColor: vec3.fromValues(167/255,64/255,55/255)
        });
        subBase.group.push(sPill2);
        mat4.translate(sPill2.coordFrame, sPill2.coordFrame, vec3.fromValues(-0.15,0,0));

        /**
         * Small Base Pillar 3
         * @type {PolygonalPrism}
         */
        let top3 = new PolygonalPrism(gl,{
            topRadius: 0.04,
            bottomRadius: 0.11,
            numSides: 4,
            height: 0.03,
            topColor: vec3.fromValues(215/255,220/255,224/255),
            bottomColor: vec3.fromValues(204/255,209/255,213/255)
        });
        subBase.group.push(top3);
        mat4.translate(top3.coordFrame,top3.coordFrame,vec3.fromValues(0,0.15,0.2));
        let sPill3 = new PolygonalPrism(gl, {
            topRadius: 0.075,
            bottomRadius: 0.075,
            numSides: 4,
            height: 0.2,
            topColor: vec3.fromValues(170/255,82/255,68/255),
            bottomColor: vec3.fromValues(167/255,64/255,55/255)
        });
        subBase.group.push(sPill3);
        mat4.translate(sPill3.coordFrame, sPill3.coordFrame, vec3.fromValues(0,0.15,0));


        /**
         * Small Base Pillar 4
         * @type {PolygonalPrism}
         */
        let top4 = new PolygonalPrism(gl,{
            topRadius: 0.04,
            bottomRadius: 0.11,
            numSides: 4,
            height: 0.03,
            topColor: vec3.fromValues(215/255,220/255,224/255),
            bottomColor: vec3.fromValues(204/255,209/255,213/255)
        });
        subBase.group.push(top4);
        mat4.translate(top4.coordFrame,top4.coordFrame,vec3.fromValues(0,-0.15,0.2));
        let sPill4 = new PolygonalPrism(gl, {
            topRadius: 0.075,
            bottomRadius: 0.075,
            numSides: 4,
            height: 0.2,
            topColor: vec3.fromValues(170/255,82/255,68/255),
            bottomColor: vec3.fromValues(167/255,64/255,55/255)
        });
        subBase.group.push(sPill4);
        mat4.translate(sPill4.coordFrame, sPill4.coordFrame, vec3.fromValues(0,-0.15,0));

        /**
         * The Actual Base below the clock.
         * @type {PolygonalPrism}
         */
        let base = new PolygonalPrism(gl, {
            topRadius: 0.2,
            bottomRadius: 0.2,
            numSides: 4,
            height: 0.7,
            topColor: vec3.fromValues(170/255,82/255,68/255),
            bottomColor: vec3.fromValues(167/255,64/255,55/255)
        });

        let prism1 = new PolygonalPrism(gl, {
            topRadius: 0.06,
            bottomRadius: 0.06,
            numSides: 4,
            height: 1.0,
            topColor: vec3.fromValues(170/255,82/255,68/255),
            bottomColor: vec3.fromValues(167/255,64/255,55/255)
        });
        mat4.translate(prism1.coordFrame, prism1.coordFrame, vec3.fromValues(0.15,0, 0));

        let prism2 = new PolygonalPrism(gl, {
            topRadius: 0.06,
            bottomRadius: 0.06,
            numSides: 4,
            height: 1.0,
            topColor: vec3.fromValues(170/255,82/255,68/255),
            bottomColor: vec3.fromValues(167/255,64/255,55/255)
        });
        mat4.translate(prism2.coordFrame,prism2.coordFrame, vec3.fromValues(-0.15,0,0));


        let prism3 = new PolygonalPrism(gl, {
            topRadius: 0.06,
            bottomRadius: 0.06,
            numSides: 4,
            height: 1.0,
            topColor: vec3.fromValues(170/255,82/255,68/255),
            bottomColor: vec3.fromValues(167/255,64/255,55/255)
        });
        mat4.translate(prism3.coordFrame,prism3.coordFrame,vec3.fromValues(0,0.15,0));

        let prism4 = new PolygonalPrism(gl, {
            topRadius: 0.06,
            bottomRadius: 0.06,
            numSides: 4,
            height: 1.0,
            topColor: vec3.fromValues(170/255,82/255,68/255),
            bottomColor: vec3.fromValues(167/255,64/255,55/255)
        });
        mat4.translate(prism4.coordFrame,prism4.coordFrame, vec3.fromValues(0,-0.15,0));

        let top = new PolygonalPrism(gl, {
            topRadius: 0.21,
            bottomRadius: 0.21,
            numSides: 4,
            height: 0.1,
            topColor: vec3.fromValues(170/255,82/255,68/255),
            bottomColor: vec3.fromValues(167/255,64/255,55/255)
        });
        mat4.translate(top.coordFrame,top.coordFrame,vec3.fromValues(0,0,1.0));

        let clockPart = new PolygonalPrism(gl, {
            topRadius: 0.2,
            bottomRadius: 0.2,
            numSides: 4,
            height: 0.2,
            topColor: vec3.fromValues(215/255,220/255,224/255),
            bottomColor: vec3.fromValues(204/255,209/255,213/255)
        });

        mat4.translate(clockPart.coordFrame,clockPart.coordFrame,vec3.fromValues(0,0,1.1));



        /**
         * Topper
         * @type {ObjectGroup}
         */
        let hat = new ObjectGroup(gl);
        this.group.push(hat);
        let cyl1 = new PolygonalPrism(gl, {
            topRadius: .14,
            bottomRadius: .14,
            numSides: 360,
            height: .277,
            topColor: vec3.fromValues(81/255,118/255,118/255),
            bottomColor: vec3.fromValues(69/255,99/255,97/255)
        });

        let cyl2 = new PolygonalPrism(gl, {
            topRadius: .14,
            bottomRadius: .14,
            numSides: 360,
            height: .277,
            topColor: vec3.fromValues(81/255,118/255,118/255),
            bottomColor: vec3.fromValues(69/255,99/255,97/255)
        });

        let hatCone = new Cone(gl,{
            radius: 0.01,
            height: 0.3,
            tipColor: vec3.fromValues(81/255,118/255,118/255),
            baseColor: vec3.fromValues(69/255,99/255,97/255),
            radialDiv: 20
        });

        let hatSphere = new Sphere(gl,0.01,5, vec3.fromValues(81/255,118/255,118/255));

        hat.group.push(cyl1);
        hat.group.push(cyl2);
        hat.group.push(hatCone);
        hat.group.push(hatSphere);

        mat4.translate(hatSphere.coordFrame,hatSphere.coordFrame,vec3.fromValues(0,0,0.22));

        //NOTE: have to rotate around x and y axis, because x/y plane is diagonal
        mat4.rotateX(cyl1.coordFrame,cyl1.coordFrame,glMatrix.toRadian(90));
        mat4.rotateY(cyl1.coordFrame, cyl1.coordFrame,glMatrix.toRadian(45));
        mat4.translate(cyl1.coordFrame,cyl1.coordFrame,vec3.fromValues(0,-0.01,-0.14));

        mat4.rotateX(cyl2.coordFrame,cyl2.coordFrame,glMatrix.toRadian(-90));
        mat4.rotateY(cyl2.coordFrame, cyl2.coordFrame,glMatrix.toRadian(45));
        mat4.translate(cyl2.coordFrame,cyl2.coordFrame,vec3.fromValues(0,0.01,-0.14));

        mat4.translate(hat.coordFrame,hat.coordFrame, vec3.fromValues(0,0,1.3));

        this.group.push(subBase);
        this.group.push(base);
        this.group.push(prism1,prism2,prism3,prism4);
        this.group.push(top);
        this.group.push(clockPart);
        this.group.push(hat);

        //Add Clocks
        this.c1 = new Clock(gl);
        mat4.translate(this.c1.coordFrame,this.c1.coordFrame,vec3.fromValues(0.11,0.11,1.2));
        mat4.rotateZ(this.c1.coordFrame,this.c1.coordFrame,glMatrix.toRadian(45));
        this.group.push(this.c1);

        this.c2 = new Clock(gl);
        mat4.translate(this.c2.coordFrame,this.c2.coordFrame,vec3.fromValues(-0.11,-0.11,1.2));
        mat4.rotateZ(this.c2.coordFrame,this.c2.coordFrame,glMatrix.toRadian(225));
        this.group.push(this.c2);

        this.c3 = new Clock(gl);
        mat4.translate(this.c3.coordFrame,this.c3.coordFrame,vec3.fromValues(-0.11,0.11,1.2));
        mat4.rotateZ(this.c3.coordFrame,this.c3.coordFrame,glMatrix.toRadian(135));
        this.group.push(this.c3);

        this.c4 = new Clock(gl);
        mat4.translate(this.c4.coordFrame,this.c4.coordFrame,vec3.fromValues(0.11,-0.11,1.2));
        mat4.rotateZ(this.c4.coordFrame,this.c4.coordFrame,glMatrix.toRadian(-45));
        this.group.push(this.c4);
    }

    move(){
        this.c1.clockMove();
        this.c2.clockMove();
        this.c3.clockMove();
        this.c4.clockMove();
    }
}