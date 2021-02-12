import React, { Component } from 'react';
import { fabric } from 'fabric';

class CanvasEditor extends Component {

    state = {
        img: ""
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("update");
        if(prevProps.img !== this.props.img){
            console.log(this.c);
            console.log(this.props.img);
            const canvas = new fabric.Canvas(this.c);
            const img = new fabric.Image(this.props.img, {
                left: 0,
                top: 0,
                angle: 0,
                opacity: 0.85
            });
            console.log(img);
            canvas.centerObject(img);
            canvas.add(img);
            const v = JSON.stringify(canvas);
            console.log(v);
            canvas.renderAll();
            // this.setState({img: this.props.img});
        }
    }

    componentDidMount() {
        const canvas = new fabric.Canvas('canvas');
        console.log("mount");
        const img = new fabric.Image(this.props.img, {
            left: 100,
            top: 100,
            angle: 30,
            opacity: 0.85
        });
        canvas.add(img);
    }

    render() {
        console.log("render");
        return (
            <div>
                <canvas ref={c=>(this.c = c)}  id="canvas" width="240" height="297"/>
            </div>
        );
    }

}

export default CanvasEditor;
