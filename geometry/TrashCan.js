/***
 created by cameron sprowls
 **/


class TrashCan extends ObjectGroup {
    /***
     * @param gl the open gl program that will draw the shape
     * @param props a list of parameters with the following keys: color
     *
     */

    constructor (gl, props){
        super(gl);
        //this.coordFrame = mat4.create();
        const requiredProps = ["length", "height"];
        if (!this._checkProperties(props, requiredProps)) {
            throw "Trash Can is missing required properties: " + requiredProps;
        }
        let color;
        if(typeof props.color === undefined){
            color = vec3.fromValues(Math.random(), Math.random(), Math.random());
        } else {
            color = props.color;
        }

        let height = props.height;
        let length = props.length;

        let base = new PolygonalPrism(gl, {
            topRadius: length,
            bottomRadius: length,
            numSides: 4,
            height: height,
            topColor: color,
            bottomColor: color
        });

        let top = new PolygonalPrism(gl, {
            topRadius: length/2,
            bottomRadius: length/2,
            numSides: 4,
            height: height/5,
            topColor: color,
            bottomColor: color
        });

        let pillars = [];
        let pillarHeight = height/8;
        for(let i = 0; i < 4; i++) {
            let pillar = new PolygonalPrism(gl, {
                topRadius: length / 10,
                bottomRadius: length / 10,
                numSides: 4,
                height: pillarHeight,
                //topColor: color,
                //bottomColor: color
            });
            pillars.push(pillar);
        }

        mat4.translate(top.coordFrame, top.coordFrame, vec3.fromValues(0, 0, height+pillarHeight));

        // The four pillars
        let offset = length/2;
        mat4.translate(pillars[0].coordFrame, pillars[0].coordFrame, vec3.fromValues(offset, 0, height));
        mat4.translate(pillars[1].coordFrame, pillars[1].coordFrame, vec3.fromValues(-1*offset, offset, height));
        mat4.translate(pillars[2].coordFrame, pillars[2].coordFrame, vec3.fromValues(offset, -1*offset, height));
        mat4.translate(pillars[3].coordFrame, pillars[3].coordFrame, vec3.fromValues(-1*offset, -1*offset, height));

        this.group.push(base, top, pillars[0], pillars[1], pillars[2], pillars[3]);

        //mat4.translate(this.coordFrame, this.coordFrame, vec3.fromValues(1,1,-1));
    }
}