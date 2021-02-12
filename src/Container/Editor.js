import React, { Component } from 'react';
import CanvasEditor from '../Component/CanvasEditor.js'

class Editor extends Component {
    state = {
        image : ""
    };

    loadFile = (e) =>{
        const fileList = e.target.files;
        console.log(fileList);
        const reader = new FileReader();
        reader.onloadend = (event) => {
            const imgObj = new Image();
            console.log(event.target.result);
            imgObj.src = event.target.result;
            imgObj.onload = ()=>{
                this.setState({image: imgObj});
            }
        }
        reader.readAsDataURL(fileList[0]);
    }

    render() {
        return (
            <div>
                <CanvasEditor img={this.state.image}/>
                <input type="file" id="file-selectpr" accept=".jpg, .jpeg, .png" onChange={this.loadFile}/>
            </div>
        );
    }

}

export default Editor;
