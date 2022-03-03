import React, {Component} from 'react';
import {Tabs, Tab, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        const title = {
            fontSize: '4vh',
            fontFamily: "'ZCOOL QingKe HuangYou', cursive"
        }

        const date = {
            fontSize: '2vh',
            fontFamily: "'ZCOOL QingKe HuangYou', cursive"
        }

        const description = {
            fontSize: '4vh',
            width: '90%',
            lineHeight: '3vh'
        }
        if (this.state.activeTab === 0){
            return(
                <div className='resume-tab'>
                    <Card id='CAF-card1' shadow={0}>
                        <CardTitle id='automo-proj'> </CardTitle>
                        <CardText id='mohsen-text1'>
                            <b style={title}> AutoMo BC </b> <br/>
                            <b style={date}>October 2019 - Present</b>
                            <p style={description}> A production environment website
                            to book a service appointment with AutoMo BC and stores provided data in a Relational Database.<br/><br/>
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
                            <b style={title}> Colaborative Canvas </b> <br/>
                            <b style={date}>April 2020 - June 2020</b>
                            <p style={description}>A social media platform that allows users to visit each other's
                            canvases and see, create, update and delete pixels to create art! <br/><br/>
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
                            <b style={title}> Portfolio </b> <br/>
                            <b style={date}>June 2020 - Present</b>
                            <p style={description}>This beautiful piece of art right here ... Picasso! 
                            Contact me to place your ads on this website!<br/><br/>
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
                        <CardText id='caf-text1'>
                            <b style={title}>Soldier Deployment</b> <br/>
                            <b style={date}>January 2020 - April 2020</b>
                            <p style={description}>A python based software that uses tkinter Graphical User Interface to
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
                            <b style={title}> Monty Hall Simulaton </b> <br/>
                            <b style={date}>February 2020 - March 2020</b>
                            <p style={description}>An RLab experiment that runs the monty hall problem a set number of times
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
                            <b style={title}> Virtual Router </b> <br/>
                            <b style={date}>January 2020 - April 2020</b>
                            <p style={description}>Create a router for a virtual network built on Raspberry Pi. Then
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