import React from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Tooltip, Icon } from 'react-mdl';
import { Link } from 'react-router-dom';
// import NavBar from './navbar';

export default class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeTab : 0
        }
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{borderRadius:'10px', width: '50%', margin: 'auto'}}>
                        <CardTitle style={{height: '240px', width: "230px", marginLeft: "34%", marginTop: "15px", background: 'url(https://farm8.staticflickr.com/7174/6479325377_ba1fa998bc_b.jpg) center / cover'}}></CardTitle>
                        <CardText style={{width: '100%', textAlign:'left', overflowY: "scroll", height:"150px", marginTop:"-10px", marginRight:"10px"}}>
                            <span style={{fontWeight:"bold"}}>[ Used Language ]</span><br></br>
                            NodeJS, Socketio, Javascript, HTML, Jade, CSS, MySQL<br></br><br></br>	

                            <span style={{fontWeight:"bold"}}>[ Purpose ]</span><br></br>
                            In order to challenge creating first project with real-time function by using what I learned<br></br><br></br>	

                            <span style={{fontWeight:"bold"}}>[ Hard Point & Way to overcome ]</span><br></br>
                            1. The thing to compare between user input and datas in MySQL 
                            (Analyzed datas in MySQL by using for loop with SQL commands 
                            as well as figure out existing data with if statement)<br></br><br></br>
                            2. Clumsy to utilize Socketio
                            (Through searching for way to use socketio, I was able to find out 
                            the use for ' socket.on ' and ' io.emit '. In other words, those commands call different events)
                        </CardText>
                        <CardActions border style={{textAlign: 'center'}}>
                            <a href="https://github.com/Cool-Hongsi/Real-Chat-Version-2" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{borderRadius:'10px', width: '50%', margin: 'auto'}}>
                        <CardTitle style={{height: '240px', width: "230px", marginLeft: "34%", marginTop: "15px", background: 'url(https://farm4.staticflickr.com/3132/3134778075_d6b61688df_m.jpg) center / cover'}}></CardTitle>
                        <CardText style={{width: '100%', textAlign:'left', overflowY: "scroll", height:"150px", marginTop:"-10px", marginRight:"10px"}}>
                        <br></br>
                            <span style={{fontWeight:"bold"}}>[ Used Language ]</span><br></br>
                            C++<br></br><br></br>	

                            <span style={{fontWeight:"bold"}}>[ Purpose ]</span><br></br>
                            As one of the school projects, I created this program to manage expiry date of products properly<br></br><br></br>	

                            <span style={{fontWeight:"bold"}}>[ Hard Point & Way to overcome ]</span><br></br>
                            1. Management of memory space for all products 
                            (Since all products have own memory spaces,
                            I was supposed to make well-organized copy and move constructor as well as operator)
                        </CardText>
                        <CardActions border style={{textAlign: 'center'}}>
                            <a href="https://github.com/Cool-Hongsi/OOP244-cpp" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{borderRadius:'10px', width: '50%', margin: 'auto'}}>
                        <CardTitle style={{height: '240px', width: "230px", marginLeft: "34%", marginTop: "15px", background: 'url(https://t3.ftcdn.net/jpg/00/24/88/80/240_F_24888017_LdPrIiC5owOWARn2E5iGyLxzmCRRPNHb.jpg) center / cover'}}></CardTitle>
                        <CardText style={{width: '100%', textAlign:'left', overflowY: "scroll", height:"150px", marginTop:"-10px", marginRight:"10px"}}>
                        <br></br>
                            <span style={{fontWeight:"bold"}}>[ Used Language ]</span><br></br>
                            Javascript(HandleBar), CSS, BootStrap, NodeJS, MongoDB<br></br><br></br>	

                            <span style={{fontWeight:"bold"}}>[ Purpose ]</span><br></br>
                            As one of the school projects, I created the web application to manage user information <br></br>with MongoDB<br></br><br></br>	

                            <span style={{fontWeight:"bold"}}>[ Hard Point & Way to overcome ]</span><br></br>
                            1. Asynchronous (Promise)
                            (This oustanding method was unfamiliar for me 
                            since I have been learning procedure-oriented programming usually. 
                            However, I completely was able to understand the Promise method 
                            and the purpose of asynchronous
                            (resolve - then) <br></br>(reject - catch) by studying from W3school and open source)<br></br><br></br>

                            2. Using HandleBar
                            (It was also unfamiliar for me to use. 
                            Once I need to declare Main handlebar as standard, After then, 
                            all of other handlebars are able to use frame in designing page from main handlebar)
                        </CardText>
                        <CardActions border style={{textAlign: 'center'}}>
                            <a href="https://github.com/Cool-Hongsi/WEB322-Project" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 3){
            return(
                <div className="projects-grid">
                   <Card shadow={5} style={{borderRadius:'10px', width: '50%', margin: 'auto'}}>
                        <CardTitle style={{height: '240px', width: "230px", marginLeft: "34%", marginTop: "15px", background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTgrNvmKc2v86va_dTFubyJtzQ9RuoKmd_tB2dFklA8l-dGJEz) center / cover'}}></CardTitle>
                        <CardText style={{width: '100%', textAlign:'left', overflowY: "scroll", height:"150px", marginTop:"-10px", marginRight:"10px"}}>
                        <br></br>
                            <span style={{fontWeight:"bold"}}>[ Used Language ]</span><br></br>
                            PHP, HTML, CSS<br></br><br></br>	

                            <span style={{fontWeight:"bold"}}>[ Purpose ]</span><br></br>
                            I created this application to have a knowledge about
                            transfering information to PHP from HTML. Likewise, NodeJS<br></br><br></br>	

                            <span style={{fontWeight:"bold"}}>[ Hard Point & Way to overcome ]</span><br></br>
                            1. Connection to MySQL 
                            (Unlike NodeJS, the syntax of connection to MySQL was totally <br></br>different for me.
                            For this reason, I studied the way to connect database with PHP)
                        </CardText>
                        <CardActions border style={{textAlign: 'center'}}>
                            <a href="https://github.com/Cool-Hongsi/PhoneBook-PHP-" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 4){
            return(
                <div className="projects-grid">
                   <Card shadow={5} style={{borderRadius:'10px', width: '50%', margin: 'auto'}}>
                        <CardTitle style={{height: '240px', width: "230px", marginLeft: "34%", marginTop: "15px", background: 'url(https://pbs.twimg.com/profile_images/1016355093569040386/Dehk33x-_400x400.jpg) center / cover'}}></CardTitle>
                        <CardText style={{width: '100%', textAlign:'left', overflowY: "scroll", height:"150px", marginTop:"-10px", marginRight:"10px"}}>
                        <br></br>
                            <span style={{fontWeight:"bold"}}>[ Used Language ]</span><br></br>
                            Jade, NodeJS, MongoDB<br></br><br></br>	

                            <span style={{fontWeight:"bold"}}>[ Purpose ]</span><br></br>
                            In order to be good at using MongoDB<br></br><br></br>	

                            <span style={{fontWeight:"bold"}}>[ Hard Point & Way to overcome ]</span><br></br>
                            1. There was not hardship to create this application because it was a simple coding to connect MongoDB as well as controll it.
                        </CardText>
                        <CardActions border style={{textAlign: 'center'}}>
                            <a href="https://github.com/Cool-Hongsi/Manage-Information-MongoDB" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 5){
            return(
                <div className="projects-grid">
                   <Card shadow={5} style={{borderRadius:'10px', width: '50%', margin: 'auto'}}>
                        <CardTitle style={{height: '240px', width: "50%", marginLeft: "28%", marginTop: "15px", background: 'url(https://farm1.staticflickr.com/183/407615640_8e3d6381fb_m.jpg) center / cover'}}></CardTitle>
                        <CardText style={{width: '100%', textAlign:'left', overflowY: "scroll", height:"150px", marginTop:"-10px", marginRight:"10px"}}>
                        <br></br>
                            <span style={{fontWeight:"bold"}}>[ Used Language ]</span><br></br>
                            NodeJS, Javascript, Jade, CSS, PostgreSQL, MongoDB, GoogleAPI<br></br><br></br>

                            <span style={{fontWeight:"bold"}}>[ Purpose ]</span><br></br>
                            In order to provide Seneca students with information of every course<br></br><br></br>	

                            <span style={{fontWeight:"bold"}}>[ Hard Point & Way to overcome ]</span><br></br>
                            1. Use GoogleAPI
                            (This API is one of convenient way for user to sign up easily without any hard procedure.
                            However, In order to use it, I was supposed to be good at using passport module with authentificate.
                            Once I studied for that module, I used serialize and deserialize as well as declared session to store user information (signup))<br></br><br></br>

                            2. Connection to two database
                            (I connected this application to PostgreSQL (Read course information) and 
                            MongoDB (Store and Read user information). The way for connection to each database was different respectively.
                            In order to connect, I use sequelize module for PostgreSQL and mongoose module for MongoDB.
                            In addition, to read information, I used pgAdmin for PostgreSQL and Robo3T (with mlab) for MongoDB)<br></br><br></br>

                            3. Filter Function
                            (It was the hardest part for me. 
                            Firstly, I needed to create search bar to filter data which is what the user wants to search easily.
                            For this one, I used Promise method and filtered the information through indexOf method within table tag by using tag ID.
                            Secondly, once the user clicks a course link, it should take the user to another page with information of a course. 
                            For this, I used jade template to put a variable into 'a' link and was able to receive the link data by using 'req.body.params' in NodeJS
                            Lastly, I declared one array to store all information of courses with such a very long and repeated lines honestly.
                            Normally, I really hate to see repeated lines. So, I constantly tried to come up with the way how to make those lines as small.
                            That is why I used 'map' function and was able to overcome those problems super easily)
                        </CardText>
                        <CardActions border style={{textAlign: 'center'}}>
                            <a href="https://github.com/Cool-Hongsi/Seneca-Course-Application" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 6){
            return(
                <div className="projects-grid">
                   <Card shadow={5} style={{borderRadius:'10px', width: '50%', margin: 'auto'}}>
                        <CardTitle style={{height: '240px', width: "50%", marginLeft: "26%", marginTop: "15px", background: 'url(data:image/png;base64,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) center / cover'}}></CardTitle>
                        <CardText style={{width: '100%', textAlign:'left', overflowY: "scroll", height:"150px", marginTop:"-10px", marginRight:"10px"}}>
                        <br></br>
                            <span style={{fontWeight:"bold"}}>[ Used Language ]</span><br></br>
                            ?<br></br><br></br>	

                            <span style={{fontWeight:"bold"}}>[ Purpose ]</span><br></br>
                            ?<br></br><br></br>	

                            <span style={{fontWeight:"bold"}}>[ Hard Point & Way to overcome ]</span><br></br>
                            Thesedays, I has been studying ReactJS, AngularJS, Java. Next project would be one of them.<br></br>
                            HaHa
                        </CardText>
                        <CardActions border style={{textAlign: 'center'}}>
                            <a href="https://google.com" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render(){
        return(
            <div style={{width:'100%', height:'100%', margin:'auto'}}>
                <Grid className="project-grid">
                    <Cell col={12}>
                    <br></br>
                        <div style={{marginLeft: '80%', paddingTop: '1%'}}>
                            <div class="changePage">
                                <Link to="/about"><Tooltip label="Move About Me" position="left"><Icon name="arrow_back" /></Tooltip></Link>&nbsp;&nbsp;&nbsp;
                                <Link to="/contact"><Tooltip label="Move Contact" position="right"><Icon name="arrow_forward" /></Tooltip></Link>
                            </div>
                        </div>
                    </Cell>
                    <Tabs className="project-tab" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                        <Tab style={{fontSize: '20px'}}>RealChat</Tab>
                        <Tab style={{fontSize: '20px'}}>ManageProd</Tab>
                        <Tab style={{fontSize: '20px'}}>ManageInfo</Tab>
                        <Tab style={{fontSize: '20px'}}>PhoneBook</Tab>
                        <Tab style={{fontSize: '20px'}}>EasyMongo</Tab>
                        <Tab style={{fontSize: '20px'}}>SenecaCourse</Tab>
                        <Tab style={{fontSize: '20px'}}>NextProj</Tab>
                    </Tabs>
                    <br></br><br></br>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </Grid>
                </div>
        )
    }
}