import React from 'react';
// import NavBar from './navbar';
import { Tooltip, Icon, Grid, Cell, Tabs, Tab, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import { Link } from 'react-router-dom';

export default class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeTab : 0,
            addressResume : 'https://stotos.cafe24.com/wp-content/uploads/2018/06/Hong_Resume.pdf'
        }
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div>
                    <div className="banner-text" style={{width:"70%", opacity:".8", marginTop:"-20px"}}>
                    <br></br>
                        <h3 style={{color:"orange"}}>Sungjun Hong</h3>
                        <h4>From South Korea | Has been living in Canada for 2 years</h4>
                        <p style={{fontSize: "15px"}}>The man who likes playing sports.<br></br>
                            The man who is able to say Korean super nicely.<br></br>
                            The man who wants to say English super nicely.<br></br>
                            The man who wants to challenge Computer Science.</p><br></br>
                    </div>
                    <img style={{marginTop:"-140px", width:"70%", height:"200px", opacity:".7"}}
                        src="https://stotos.cafe24.com/wp-content/uploads/2018/06/Hobby.png"
                        alt="Hobby"
                        className="hobby">
                    </img>
                </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid" style={{justifyContent:"center"}}>
                    <Card shadow={0} style={{borderRadius:'10px', width: '320px', height: '300px'}}>
                        <CardTitle expand style={{width:'300px', marginLeft:'15px', marginBottom:'-15px', marginTop: '15px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAgld1s0FLcu3N1x-VqYVQEkz7IInKqdlPWdp99j167tRz0iZO) no-repeat'}}></CardTitle>
                        <CardText>
                            Inje University (South Korea)<br></br>
                            Economics & Finance<br></br>
                        </CardText>
                        <CardActions border>
                            <a href="http://www.inje.ac.kr/english/" rel="noopener noreferrer" target="_blank"><Button colored>Website</Button></a>
                        </CardActions>
                    </Card>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Card shadow={0} style={{borderRadius:'10px', width: '320px', height: '300px'}}>
                        <CardTitle expand style={{width:'300px', marginLeft:'52px', marginTop: '25px', background: 'url(https://estudios.com.sv/wp-content/uploads/2016/01/SEneca-1.jpg) no-repeat'}}></CardTitle>
                        <CardText>
                            Seneca College (Canada)<br></br>
                            Computer Programmer<br></br>
                        </CardText>
                        <CardActions border>
                            <a href="http://www.senecacollege.ca/" rel="noopener noreferrer" target="_blank"><Button colored>Website</Button></a>
                        </CardActions>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                    <Card shadow={0} style={{borderRadius:'10px', width: '350px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{width:'300px', marginLeft:'100px',  marginTop: '100px', background: 'url(http://www.shinhanheavy.co.kr/img/common/logo.png) no-repeat'}}></CardTitle>
                        <CardText style={{height:"100px"}}>
                        <br></br><br></br>
                            SHINHAN HEAVY INDUSTRY (South Korea)<br></br>
                            Material & Budget Management Department<br></br>
                            2y 6m<br></br>
                        </CardText>
                        <CardActions border>
                            <a href="http://www.shinhanheavy.co.kr/index_e.php" rel="noopener noreferrer" target="_blank"><Button colored>Website</Button></a>
                        </CardActions>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 3){
            return( 
                <div>
                    <Grid>
                        <Cell className="resume-left-col" col={4}>
                            <div style={{textAlign:"center"}}>
                                <img
                                    src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                    alt="Sungjun Hong"
                                    style={{height: "200px"}}
                                />
                            </div>
                            <h2 style={{paddingTop: "2em"}}>Sungjun Hong</h2>
                            <h4 style={{color: 'grey'}}>Programmer</h4>
                            <hr style={{borderTop: "3px solid #833fb2", width:"50%"}}/>
                            <p style={{color:"black"}}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br></br>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                            <hr style={{borderTop: "3px solid #833fb2", width:"50%"}}/>
                            <h5>Address</h5>
                            <p>830 Lawrence Ave West</p>
                            <h5>Phone</h5>
                            <p>647 - 673 - 0479</p>
                            <h5>Email</h5>
                            <p>hongsi140626@gmail.com</p>
                            <hr style={{borderTop: "3px solid #833fb2", width:"50%"}}/>
                        </Cell> 
                        <Cell className="resume-right-col" col={8}>

                        </Cell>
                    </Grid>

                    {/* <br></br><br></br><br></br><br></br><br></br>
                    <a href="https://stotos.cafe24.com/wp-content/uploads/2018/06/Hong_Resume.pdf"><Button primary style={{height:"40px", fontSize:"30px"}}> Resume </Button></a>
                    <img style={{marginTop:"-50px", marginRight:"20px", width:"20%", height:"20%"}}
                        src="https://stotos.cafe24.com/wp-content/uploads/2018/10/Face-300x300.png"
                        alt="Sungjun Hong"
                        className="face">
                    </img> */}
                </div>
            )
        }
    }

    render(){
        return(
            <div style={{width:'100%', height:'100%', margin:'auto'}}>
            <Grid className="about-grid">
                    <Cell col={12}>
                    <br></br>
                        <div style={{marginLeft: '80%', paddingTop: '1%'}}>
                            <div class="changePage">
                                <Link to="/landing"><Tooltip label="Move Main" position="left"><Icon name="arrow_back" /></Tooltip></Link>&nbsp;&nbsp;&nbsp;
                                <Link to="/projects"><Tooltip label="Move Projects" position="right"><Icon name="arrow_forward" /></Tooltip></Link>
                            </div>
                        </div>
                        <div className="demo-tabs">
                            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => {this.setState({activeTab : tabId})}} ripple>
                                <Tab style={{fontSize: '20px'}}>WhoAmI</Tab>
                                <Tab style={{fontSize: '20px'}}>School</Tab>
                                <Tab style={{fontSize: '20px'}}>Work</Tab>
                                <Tab style={{fontSize: '20px'}}>Resume</Tab>
                            </Tabs>
                            <br></br><br></br>
                            <Grid>
                                <Cell col={12}>
                                    <div className="content">{this.toggleCategories()}</div>
                                </Cell>
                            </Grid>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}