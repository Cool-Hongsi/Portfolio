import React from 'react';
import { Grid, Cell, Tooltip, Icon } from 'react-mdl';
// import NavBar from './navbar';
import { Link } from 'react-router-dom';

export default class Landing extends React.Component{
    render(){
        return(
            <div style={{width:'100%', height:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <br></br>
                        <div style={{marginLeft: '80%', paddingTop: '1%'}}>
                            <div class="changePage"><Link to="/about"><Tooltip label="Move About Me" position="right"><Icon name="arrow_forward" /></Tooltip></Link></div><br></br>
                        </div>
                        <br></br><br></br>
                        <div className="banner-text">
                        <br></br>
                            <h1>Web Developer</h1>
                            <hr/><hr/><br></br><br></br>
                            <span>HTML/CSS | Javascript | Bootstrap | ReactJS | AngularJS | NodeJS | Jade</span><br></br>
                            <span>C | C++ | JAVA | SQL | MySQL | PostgreSQL | OracleDB | MongoDB | AS400 | WordPress</span><br></br>
                            <br></br><br></br>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/sungjun-hong-929496165/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"></i>
                                </a>
                                {/* Github */}
                                <a href="https://github.com/Cool-Hongsi" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                {/* FreeCodeCamp */}
                                <a href="https://www.freecodecamp.org/hongsi140626" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true"></i>
                                </a>
                            </div>
                            <br></br>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}