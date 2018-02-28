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
            topColor: vec3.fromValues(170/255,82/255,68/255),
            bottomColor: vec3.fromValues(167/255,64/255,55/255)
        });

        let prism1 = new PolygonalPrism(gl, {
            topRadius: 0.07,
            bottomRadius: 0.07,
            numSides: 4,
            height: 1.0,
            topColor: vec3.fromValues(170/255,82/255,68/255),
            bottomColor: vec3.fromValues(167/255,64/255,55/255)
        });
        mat4.translate(prism1.coordFrame, prism1.coordFrame, vec3.fromValues(0.15,0, 0));

        let prism2 = new PolygonalPrism(gl, {
            topRadius: 0.07,
            bottomRadius: 0.07,
            numSides: 4,
            height: 1.0,
            topColor: vec3.fromValues(170/255,82/255,68/255),
            bottomColor: vec3.fromValues(167/255,64/255,55/255)
        });
        mat4.translate(prism2.coordFrame,prism2.coordFrame, vec3.fromValues(-0.15,0,0));


        let prism3 = new PolygonalPrism(gl, {
            topRadius: 0.07,
            bottomRadius: 0.07,
            numSides: 4,
            height: 1.0,
            topColor: vec3.fromValues(170/255,82/255,68/255),
            bottomColor: vec3.fromValues(167/255,64/255,55/255)
        });
        mat4.translate(prism3.coordFrame,prism3.coordFrame,vec3.fromValues(0,0.15,0));

        let prism4 = new PolygonalPrism(gl, {
            topRadius: 0.07,
            bottomRadius: 0.07,
            numSides: 4,
            height: 1.0,
            topColor: vec3.fromValues(170/255,82/255,68/255),
            bottomColor: vec3.fromValues(167/255,64/255,55/255)
        });
        mat4.translate(prism4.coordFrame,prism4.coordFrame, vec3.fromValues(0,-0.15,0));

        let top = new PolygonalPrism(gl, {
            topRadius: 0.22,
            bottomRadius: 0.22,
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

        let hat = new ObjectGroup(gl);
        this.group.push(hat);

        let cyl1 = new PolygonalPrism(gl, {
            topRadius: .14,
            bottomRadius: .14,
            numSides: 20,
            height: .277,
            topColor: vec3.fromValues(81/255,118/255,118/255),
            bottomColor: vec3.fromValues(69/255,99/255,97/255)
        });

        let cyl2 = new PolygonalPrism(gl, {
            topRadius: .14,
            bottomRadius: .14,
            numSides: 20,
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

        let hatSphere = new Sphere(gl,0.01,5, vec3.fromValues(69/255,99/255,97/255));

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

        this.group.push(base);
        this.group.push(prism1,prism2,prism3,prism4);
        this.group.push(top);
        this.group.push(clockPart);
        this.group.push(hat);

    }
}