import React from 'react';
import { Grid, Cell } from 'react-mdl';
import * as THREE from 'three';

export default class First extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            url : '/landing'
        }
    }
    componentDidMount(){
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight
        //ADD SCENE
        this.scene = new THREE.Scene()
        //ADD CAMERA
        this.camera = new THREE.PerspectiveCamera(
          75,
          width / height,
          0.1,
          1000
        )
        this.camera.position.z = 4
        //ADD RENDERER
        this.renderer = new THREE.WebGLRenderer({ antialias: true })
        this.renderer.setClearColor('black')
        this.renderer.setSize(width, height)
        this.mount.appendChild(this.renderer.domElement)
        //ADD CUBE
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        this.cube = new THREE.Mesh(geometry)
        this.scene.add(this.cube)
    this.start()
      }
    componentWillUnmount(){
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
      }
    start = () => {
        if (!this.frameId) {
          this.frameId = requestAnimationFrame(this.animate)
        }
      }
    stop = () => {
        cancelAnimationFrame(this.frameId)
      }
    animate = () => {
       this.cube.rotation.x += 0.01
       this.cube.rotation.y += 0.01
       this.renderScene()
       this.frameId = window.requestAnimationFrame(this.animate)
     }
    renderScene = () => {
      this.renderer.render(this.scene, this.camera)
    }
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="first-grid">
                    <Cell col={12}>
                        <div className="object" style={{ width: '300px', height: '300px' }} ref={(mount) => { this.mount = mount }}></div>
                        <hr></hr><hr></hr><br></br>
                        <button className="go"><a href={this.state.url} style={{fontSize: "20px"}}>GO</a></button>
                    </Cell>
                </Grid>
            </div>
        )
    }
}