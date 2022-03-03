import React, {Component} from 'react';
import {Tabs, Tab, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if (this.state.activeTab === 0){
            return(
                <div className='resume-tab'>
                    <Card id='CAF-card1' shadow={0}>
                        <CardTitle id='automo-proj'> </CardTitle>
                        <CardText id='mohsen-text'>
                            <b style={{fontSize: '4vh', fontFamily: "'ZCOOL QingKe HuangYou', cursive"}}> AutoMo BC </b> <br/>
                            <b style={{fontSize: '2vh', fontFamily: "'ZCOOL QingKe HuangYou', cursive"}}>October 2019 - Present</b>
                            <p style={{fontSize: '3vh', width: '90%'}}> A production environment web application that serves end users
                            trying to book a vehicle service appointment with AutoMo BCand stores provided data in a Relational Database.<br/>
                            <b>Skills:</b> HTML, CSS, JavaScript, PHP, SQL, Database Desgining <br/></p>
                        </CardText>
                        <CardActions style={{backgroundColor: 'black', textAlign: "left"}} border>
                        <a href='https://github.com/Alif-B/AutoMo.git'>
                            <Button style={{color: 'white', width: '50%'}} colored>GitHub</Button>
                        </a>
                        <a href='https://automobc.ca'>
                            <Button style={{color: 'white', width: '50%'}} colored>Live Demo</Button>
                        </a>
                        </CardActions>
                    </Card>
                    <Card id='Mohsen-card1' shadow={0}>
                        <CardTitle id='canvas-title'> </CardTitle>
                        <CardText id='canvas-text'> 
                            <b style={{fontSize: '4vh', fontFamily: "'ZCOOL QingKe HuangYou', cursive"}}> Colaborative Canvas </b> <br/>
                            <b style={{fontSize: '2vh', fontFamily: "'ZCOOL QingKe HuangYou', cursive"}}>April 2020 - June 2020</b>
                            <p style={{fontSize: '3vh', width: '90%'}}>A social media platform that allows users to visit each other's
                            canvases and see, create, update and delete pixels to create art! <br/>
                            <b>Skills:</b> Python, Peewee ORM, Flask Web Framework, SQLite Database, Mocha  </p>
                        </CardText>
                        <CardActions style={{backgroundColor: 'black', textAlign: "left"}} border>
                        <a href='https://github.com/crockk/collaborative-canvas.git'>
                            <Button style={{color: 'white', width: '50%'}} colored>GitHub</Button>
                        </a>
                        <a href='https://acit2911-canvas.herokuapp.com/'>
                            <Button style={{color: 'white', width: '50%'}} colored>Live Demo</Button>
                        </a>
                        </CardActions>
                    </Card>
                    <Card id='Microserve-card1' shadow={0}>
                        <CardTitle id='portfolio-title'> </CardTitle>
                        <CardText id='portfolio-text'> 
                            <b style={{fontSize: '4vh', fontFamily: "'ZCOOL QingKe HuangYou', cursive"}}> Portfolio </b> <br/>
                            <b style={{fontSize: '2vh', fontFamily: "'ZCOOL QingKe HuangYou', cursive"}}>June 2020 - Present</b>
                            <p style={{fontSize: '3vh', width: '90%'}}>This beautiful piece of art right here ... Picasso! 
                            Contact me to place your ads on this website!<br/>
                            <b>Skills:</b> React, HTML, CSS, JaveScript, GitHub, Material UI, React MDL, CloudFlare, Hostinger, cPanels </p>
                        </CardText>
                        <CardActions style={{backgroundColor: 'black', textAlign: "left"}} border>
                        <a href='https://github.com/Alif-B/Portfolio'>
                            <Button style={{color: 'white', width: '50%'}} colored>GitHub</Button>
                        </a>
                        <a href='/'>
                            <Button style={{color: 'white', width: '50%'}} colored>Live Demo</Button>
                        </a>
                        </CardActions>
                    </Card>
                    <div id='proj-footer-space'/>
                </div>
            )
        }
        else {
            return(
                <div className='resume-tab'>
                    <Card id='CAF-card1' shadow={0}>
                        <CardTitle id='soldier-proj'> </CardTitle>
                        <CardText id='caf-text'>
                            <b style={{fontSize: '4vh', fontFamily: "'ZCOOL QingKe HuangYou', cursive"}}>Soldier Deployment</b> <br/>
                            <b style={{fontSize: '2vh', fontFamily: "'ZCOOL QingKe HuangYou', cursive"}}>January 2020 - April 2020</b>
                            <p style={{fontSize: '3vh', width: '90%'}}>A python based software that uses tkinter Graphical User Interface to
                            help track soldier deployments locations and status. <br/>
                            <b>Skills:</b> Python, Peewee ORM, SQLite DB, Test Driven Development, Flask RESTful API, Postman </p>
                        </CardText>
                        <CardActions style={{backgroundColor: 'black', textAlign: "left"}} border>
                        <a href='https://github.com/Alif-B/Soldier-Management.git'>
                            <Button style={{color: 'white', width: '100%', textAlign: 'center'}} colored>GitHub</Button>
                        </a>
                        </CardActions>
                    </Card>
                    <Card id='Mohsen-card1' shadow={0}>
                        <CardTitle id='monty-title'> </CardTitle>
                        <CardText id='monty-text'> 
                            <b style={{fontSize: '4vh', fontFamily: "'ZCOOL QingKe HuangYou', cursive"}}> Monty Hall Simulaton </b> <br/>
                            <b style={{fontSize: '2vh', fontFamily: "'ZCOOL QingKe HuangYou', cursive"}}>February 2020 - March 2020</b>
                            <p style={{fontSize: '3vh', width: '90%'}}>An RLab experiment that runs the monty hall problem a set number of times
                            and reports the results to confirm the decision of switching the door when given the option to <br/>
                            <b>Skills:</b> Problem Solving, RLab </p>
                        </CardText>
                        <CardActions style={{backgroundColor: 'black', textAlign: "left"}} border>
                        <a href='https://github.com/Alif-B/MontyHall'>
                            <Button style={{color: 'white', width: '100%', textAlign: 'center'}} colored>GitHub</Button>
                        </a>
                        </CardActions>
                    </Card>
                    <Card id='Microserve-card1' shadow={0}>
                        <CardTitle id='router-title'> </CardTitle>
                        <CardText id='router-text'> 
                            <b style={{fontSize: '4vh', fontFamily: "'ZCOOL QingKe HuangYou', cursive"}}> Virtual Router </b> <br/>
                            <b style={{fontSize: '2vh', fontFamily: "'ZCOOL QingKe HuangYou', cursive"}}>January 2020 - April 2020</b>
                            <p style={{fontSize: '3vh', width: '90%'}}>Create a router for a virtual network built on Raspberry Pi. Then
                            tested it by adding multiple CentOS VM clients to the network<br/>
                            <b>Skills:</b> VMWare, Vi/Vim, BASH Scripting, Windows Linux Subsystem, Windows Powershell </p>
                        </CardText>
                        <CardActions style={{backgroundColor: 'black', textAlign: "left"}} border>
                        <a href='#navbar'>
                            <Button style={{color: 'white', width: '100%', textAlign: 'center'}} colored> Not Applicable </Button>
                        </a>
                        </CardActions>
                    </Card>
                    <div id='proj-footer-space'/>
                </div>
            )
        }
    }

    render(){
        return(
            <div className='resume-tab'>
                <div id='mobile-app-bar'>
                    <a className='otherpage-alif' style={{textDecoration:'none'}} href='/'>  Alif  </a>
                    <p className='current-page'>Projects</p>
                </div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab: tabId})} ripple>
                    <Tab id='tababo'> Cloud </Tab>
                    <Tab id='tababo'> Local </Tab>
                </Tabs>
                <section>
                    <div className='content'>{this.toggleCategories()}</div>
                </section>
            </div>
        )
    }
}

export default Projects;