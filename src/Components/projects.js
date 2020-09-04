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
                        <CardTitle id='mohsen-title'> </CardTitle>
                        <CardText id='mohsen-text'>
                            <p style={{fontSize: '6vh'}}> AutoMo BC </p>
                            <p style={{fontSize: '4vh', width: '90%'}}>Website for AutoMo, a car services delivery company <br/>
                            October 2019 - Present <br/></p>
                        </CardText>
                        <CardActions style={{backgroundColor: 'black', textAlign: "left"}} border>
                        <a href='https://github.com/Alif-B/AutoMo.git'>
                            <Button style={{color: 'white', width: '50%'}} colored>GitHub</Button>
                        </a>
                        <a href='https://automobc.ca' download>
                            <Button style={{color: 'white', width: '50%'}} colored>Live Demo</Button>
                        </a>
                        </CardActions>
                    </Card>
                    <Card id='Mohsen-card1' shadow={0}>
                        <CardTitle id='canvas-title'> </CardTitle>
                        <CardText id='canvas-text'> 
                            <p style={{fontSize: '6vh'}}> Colaborative Canvas </p>
                            <p style={{fontSize: '4vh', width: '90%'}}>A social media platform for pixel artists <br/>
                            April 2020 - June 2020 <br/></p>
                        </CardText>
                        <CardActions style={{backgroundColor: 'black', textAlign: "left"}} border>
                        <a href='https://github.com/crockk/collaborative-canvas.git'>
                            <Button style={{color: 'white', width: '50%'}} colored>GitHub</Button>
                        </a>
                        <a href='https://acit2911-canvas.herokuapp.com/' download>
                            <Button style={{color: 'white', width: '50%'}} colored>Live Demo</Button>
                        </a>
                        </CardActions>
                    </Card>
                    <Card id='Microserve-card1' shadow={0}>
                        <CardTitle id='portfolio-title'> </CardTitle>
                        <CardText id='portfolio-text'> 
                            <p style={{fontSize: '6vh'}}> Portfolio </p>
                            <p style={{fontSize: '4vh', width: '90%'}}>This beautiful piece of art right here <br/>
                            June 2020 - Present <br/></p>
                        </CardText>
                        <CardActions style={{backgroundColor: 'black', textAlign: "left"}} border>
                        <a href='#'>
                            <Button style={{color: 'white', width: '50%'}} colored>GitHub</Button>
                        </a>
                        <a href='#' download>
                            <Button style={{color: 'white', width: '50%'}} colored>Live Demo</Button>
                        </a>
                        </CardActions>
                    </Card>
                </div>
            )
        }
        else {
            return(
                <div className='resume-tab'>
                    <Card id='CAF-card1' shadow={0}>
                        <CardTitle id='caf-title'> </CardTitle>
                        <CardText id='caf-text'>
                            <p style={{fontSize: '6vh'}}> Soldier Deployment </p>
                            <p style={{fontSize: '4vh', width: '90%'}}>A python based software that helps track soldier deployments locations and status <br/>
                            January 2020 - April 2020 <br/></p>
                        </CardText>
                        <CardActions style={{backgroundColor: 'black', textAlign: "left"}} border>
                        <a href='https://github.com/Alif-B/Soldier-Management.git'>
                            <Button style={{color: 'white', width: '50%'}} colored>GitHub</Button>
                        </a>
                        <a href='#' download>
                            <Button style={{color: 'white', width: '50%'}} colored>Live Demo</Button>
                        </a>
                        </CardActions>
                    </Card>
                    <Card id='Mohsen-card1' shadow={0}>
                        <CardTitle id='monty-title'> </CardTitle>
                        <CardText id='monty-text'> 
                            <p style={{fontSize: '6vh'}}> Monty Hall Problem Simulaton </p>
                            <p style={{fontSize: '4vh', width: '90%'}}>An RLab experiment that runs the monty hall problem a set number of times <br/>
                            February 2020 - March 2020 <br/></p>
                        </CardText>
                        <CardActions style={{backgroundColor: 'black', textAlign: "left"}} border>
                        <a href='#'>
                            <Button style={{color: 'white', width: '50%'}} colored>GitHub</Button>
                        </a>
                        <a href='#' download>
                            <Button style={{color: 'white', width: '50%'}} colored>Live Demo</Button>
                        </a>
                        </CardActions>
                    </Card>
                    <Card id='Microserve-card1' shadow={0}>
                        <CardTitle id='router-title'> </CardTitle>
                        <CardText id='router-text'> 
                            <p style={{fontSize: '6vh'}}> Router </p>
                            <p style={{fontSize: '4vh', width: '90%'}}>A fully functional router for Virtual Machine networks built by modifying CentOS Linux operating system<br/>
                            January 2020 - April 2020 <br/></p>
                        </CardText>
                        <CardActions style={{backgroundColor: 'black', textAlign: "left"}} border>
                        <a href='#'>
                            <Button style={{color: 'white', width: '50%'}} colored>GitHub</Button>
                        </a>
                        <a href='#' download>
                            <Button style={{color: 'white', width: '50%'}} colored>Live Demo</Button>
                        </a>
                        </CardActions>
                    </Card>
                </div>
            )
        }
    }

    render(){
        return(
            <div className='resume-tab'>
                <div id='mobile-app-bar'>
                    <a className='otherpage-alif' style={{textDecoration:'none'}} href='/'>  Alif  </a>
                    <p className='current-page'>About me</p>
                </div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab: tabId})} ripple>
                    <Tab id='tababo'> Web Projects </Tab>
                    <Tab id='tababo'> Local Projects</Tab>
                </Tabs>
                <section>
                    <div className='content'>{this.toggleCategories()}</div>
                </section>
            </div>
        )
    }
}

export default Projects;