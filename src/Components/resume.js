import React, {Component} from 'react';
import {Tabs, Tab, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
import ReactWordcloud from 'react-wordcloud';
import ResumePDF from './Images/Resume.pdf';

class Resume extends Component{
    constructor(props){
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if (this.state.activeTab === 0){
            const company = {
                fontSize: '4vh',
                fontFamily: "'ZCOOL QingKe HuangYou', cursive"
            }
    
            const role = {
                fontSize: '3vh',
                fontFamily: "'ZCOOL QingKe HuangYou', cursive"
            }
    
            const description = {
                fontSize: '4vh',
                width: '90%',
                lineHeight: '3vh'
            }
            return(
                <div className='resume-cards'>
                    <Card id='CAF-card' shadow={0}>
                        <CardTitle id='caf-title'> </CardTitle>
                        <CardText id='caf-text'>
                            <div className="resume-card-texts">
                                <b style={company}> East Side Games Group </b> <br/>
                                <b style={role}>DevOps Engineer </b><br/>
                                <b>August 2021 - Present</b> <br/><br/>
                                <p style={description}>Automate the creation and maintenance of AWS resources for the developers using GitOps. 
                                Also managed several services like Jenkins, Datadog, Kubernetes, PlasticSCM, Atlantis, Ansible etc.</p>
                            </div>
                        </CardText>
                    </Card>
                    <Card id='Mohsen-card' shadow={0}>
                        <CardTitle id='mohsen-title'> </CardTitle>
                        <CardText id='mohsen-text'> 
                            <div className="resume-card-texts">
                                <b style={company}> Procurify Inc </b><br/>
                                <b style={role}>DevOps Intern </b><br/>
                                <b>January 2021 - August 2021 </b><br/><br/>
                                <p style={description}>Built custom exporters that collects logs and metrics from various development platforms such as
                                SonarQube, CircleCI, Elasticsearch. Then use them to make monitoring dashboards in Grafana.</p>
                            </div>
                        </CardText>
                    </Card>
                    <Card id='Microserve-card' shadow={0}>
                        <CardTitle id='microserve-title'> </CardTitle>
                        <CardText id='microserve-text'> 
                            <div className="resume-card-texts">
                                <b style={company}> Canadian Armed Forces </b><br/>
                                <b style={role}>Infantry Solider </b><br/>
                                <b>October 2018 - March 2021 </b><br/><br/>
                                <p style={description}>Trained for descipline and adaptability to the extreme conditions and stress.
                                Also practiced leadership skills such as communication, resource management and time management.</p>
                            </div>
                        </CardText>
                    </Card>
                    <div id='job-footer-space'></div>
                </div>
            )
        }
        else if (this.state.activeTab === 1){
            const company = {
                fontSize: '4vh',
                fontFamily: "'ZCOOL QingKe HuangYou', cursive"
            }
            return(
                <div className='resume-cards'>
                    <Card id='SFU-card' shadow={10}>
                        <CardTitle id='sfu-title'> </CardTitle>
                        <CardText id='sfu-text'>
                            <div className="resume-card-texts">
                                <p className='school_cards'> <b style={company}> Simon Fraser University </b> </p>
                                Faculty of Applied Sciences <br/>
                                Computer Enginnering <br/>
                                September 2015 - April 2018 
                            </div>
                        </CardText>
                    </Card>
                    <Card id='BCIT-card' shadow={10}>
                        <CardTitle id='bcit-title'> </CardTitle>
                        <CardText id='bcit-text'> 
                            <div className="resume-card-texts">
                                <p className='school_cards'> <b style={company}>BC Institute of Technology </b></p>
                                Computer Information Technology (C.I.T) <br/>
                                September 2019 - April 2021 <br/>
                                Graduation Date: April 2021
                            </div>
                        </CardText>
                    </Card>
                    <div id='edu-footer-space'></div>
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            let words = [
                { text: 'MMA', value: 10 },
                { text: 'Rugby', value: 10 },
                { text: 'Football', value: 20 },
                { text: 'Algorythms', value: 20 },
                { text: 'Guitar', value: 30 },
                { text: 'Scientific Theories', value: 30 },
                { text: 'LeetCode', value: 30 },
                { text: 'Fun Facts', value: 30 },
                { text: 'Economy', value: 30 },
                { text: 'Learning', value: 40 },
                { text: 'Singing', value: 40 },
                { text: 'Badmintion', value: 50 },
                { text: 'Blockchain', value: 50},
                { text: 'Band', value: 50 },
                { text: 'Problem Solving', value: 60 },
                { text: 'Cryptocurrency', value: 60},
                { text: 'Philosophy', value: 60 },
                { text: 'Ulitimate Frisbee', value: 60 },
                { text: 'Friends', value: 70 },
                { text: 'Dodgeball', value: 70 },
                { text: 'Cosmology', value: 70},
                { text: 'League of Legends', value: 80 },
                { text: 'Baseball', value: 80 },
                { text: 'Stargazing', value: 80},
                { text: 'Cricket', value: 90 },
                { text: 'Marvel Movies', value: 90},
                { text: 'Technology', value: 100 },
                { text: 'Music', value: 100 },
                { text: 'Bitcoin', value: 100 },
                { text: 'Decentralizing Technology', value: 100}
            ];
            let options = {              
                fontFamily: "'Amatic SC', cursive",
                fontSizes: [20, 50],
                fontWeight: '900',
                width: '50vw',
                enableTooltip: false
            };
            const cloudStyle = {
                position: 'relative', 
                top: '5vh',
                backgroundColor: 'rgba(0,0,0,0.8)'
            };
            return(
                <div className='hobbies'>
                    <b>When I am not DevOps-ing... <br/><br/>You can find me doing one of the following!</b>
                    <ReactWordcloud id='wordcloud' words={words} options={options} style={cloudStyle} />
                </div>
            )
        }
        else {
            return(
                <Card id='downres-card' shadow={0}>
                    <CardTitle id='downres-title'> </CardTitle>
                    <CardText id='downres-text'> 
                        <div className="resume-card-texts">
                        <b style={{fontSize: '4vh', fontFamily: "'ZCOOL QingKe HuangYou', cursive"}}> Full Resume </b> <br/>
                            In Portable Document Format <br/>
                        </div>
                    </CardText>
                    <CardActions style={{backgroundColor: 'black', textAlign: "left"}} border>
                        <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
                            <Button style={{color: 'white', width: '50%'}} colored>View PDF</Button>
                        </a>
                        <a href={ResumePDF} download>
                            <Button style={{color: 'white', width: '50%'}} colored>Download PDF</Button>
                        </a>
                    </CardActions>
                </Card>
            )
        }
    }
    render(){
        return(
            <div className='resume-tab'>
                <div id='mobile-app-bar'>
                    <a className='otherpage-alif' style={{textDecoration:'none'}} href='/'>  Alif  </a>
                    <p className='current-page'>Resume</p>
                </div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab: tabId})} ripple>
                    <Tab id='tababo'> Experience </Tab>
                    <Tab id='tababo'> Education </Tab>
                    <Tab id='tababo'> Hobbies </Tab>
                    <Tab id='tababo'> Resume </Tab>
                </Tabs>
                <section>
                    <div className='content'>{this.toggleCategories()}</div>
                </section>
            </div>
        )
    }
}

export default Resume;