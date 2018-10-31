import React from 'react';
import { Grid, Cell, Tooltip, Icon, List, ListItem, ListItemContent } from 'react-mdl';
import { Link } from 'react-router-dom';
// import NavBar from './navbar';

export default class Contact extends React.Component{
    render(){
        return(
            <div style={{width:'100%', height:'100%', margin:'auto'}}>
                <Grid className="contact-grid">
                    <Cell col={12}>
                    <br></br>
                        <div style={{marginLeft: '80%', paddingTop: '1%'}}>
                            <div class="changePage">
                                <Link to="/projects"><Tooltip label="Move Projects" position="left"><Icon name="arrow_back" /></Tooltip></Link>
                            </div>
                        </div>
                        <br></br><br></br>
                        <div className="contact-banner">
                        <br></br>
                            <h2 style={{textAlign:"center"}}>Contact Me</h2>
                            <hr></hr>
                            <div className="contact-list">
                                <List>
                                    <ListItem>
                                        <ListItemContent style={{fontSize: "30px", marginLeft:"50px"}}>
                                            <i className="fa fa-phone-square" aria-hidden="true"/>
                                            <span style={{color:"white"}}>647 - 673 - 0479</span><br></br><br></br><br></br>
                                            <i className="fa fa-envelope" aria-hidden="true"/>
                                            <span style={{color:"white"}}>hongsi140626@gmail.com</span><br></br><br></br><br></br>
                                            <i className="fa fa-wordpress" aria-hidden="true"/>
                                            <a href="https://stotos.cafe24.com" rel="noopener noreferrer" target="_blank">WordPress Website</a>
                                        </ListItemContent>
                                    </ListItem>
                                </List>
                            </div>
                            <br></br>
                        </div>


                    </Cell>
                </Grid>
            </div>
        )
    }
}