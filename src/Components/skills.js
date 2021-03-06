import { SurroundSoundOutlined } from '@material-ui/icons';
import React, { Component } from 'react';
import {Tabs, Tab, Chip, ChipContact} from 'react-mdl';

class Skills extends Component {
    constructor(props){
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if (this.state.activeTab === 0){
            let languages = document.getElementsByClassName("language-chip");
            let tools = document.getElementsByClassName("tool-chip");
            let softwares =document.getElementsByClassName("software-chip");

            for (let i=0; i<languages.length; i++)  {languages[i].style.animation = 'fade-in 1s linear forwards'};
            for (let i=0; i<tools.length; i++)  {tools[i].style.animation = 'fade-in 1s linear forwards'};
            for (let i=0; i<softwares.length; i++)  {softwares[i].style.animation = 'fade-in 1s linear forwards'};

        }
        else if(this.state.activeTab === 1){
            let languages = document.getElementsByClassName("language-chip");
            let tools = document.getElementsByClassName("tool-chip");
            let softwares =document.getElementsByClassName("software-chip");

            for (let i=0; i<languages.length; i++)  {languages[i].style.animation = 'fade-in 1s linear forwards'};
            for (let i=0; i<tools.length; i++)  {tools[i].style.animation = 'fade-out 1s linear forwards'};
            for (let i=0; i<softwares.length; i++)  {softwares[i].style.animation = 'fade-out 1s linear forwards'};
        }
        else if(this.state.activeTab === 2){
            let languages = document.getElementsByClassName("language-chip");
            let tools = document.getElementsByClassName("tool-chip");
            let softwares =document.getElementsByClassName("software-chip");

            for (let i=0; i<languages.length; i++)  {languages[i].style.animation = 'fade-out 1s linear forwards'};
            for (let i=0; i<softwares.length; i++)  {softwares[i].style.animation = 'fade-out 1s linear forwards'};
            for (let i=0; i<tools.length; i++)  {tools[i].style.animation = 'fade-in 1s linear forwards'};
        }
        else if(this.state.activeTab === 3){
            let languages = document.getElementsByClassName("language-chip");
            let tools = document.getElementsByClassName("tool-chip");
            let softwares =document.getElementsByClassName("software-chip");

            for (let i=0; i<languages.length; i++)  {languages[i].style.animation = 'fade-out 1s linear forwards'};
            for (let i=0; i<tools.length; i++)  {tools[i].style.animation = 'fade-out 1s linear forwards'};
            for (let i=0; i<softwares.length; i++)  {softwares[i].style.animation = 'fade-in 1s linear forwards'};
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
                    <Tab id='tababo'> All </Tab>
                    <Tab id='tababo'> Languages </Tab>
                    <Tab id='tababo'> Tools </Tab>
                    <Tab id='tababo'> Softwares </Tab>
                </Tabs>
                <div className='hobbies'>I am a man of many skills aswell. So use the tabs above to narrow your search</div>

                <div id='skills'>
                    <Chip className='language-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/C.png'/>
                    </ChipContact> C&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src="/Skills/WireShark.png"/>
                    </ChipContact> Wireshark&nbsp;&nbsp;&nbsp;
                    </Chip>
                     <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Visio.png'/>
                    </ChipContact> Microsoft Visio&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='language-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/JavaScript.png'/>
                    </ChipContact> JavaScript&nbsp;&nbsp;&nbsp;
                    </Chip>
                     <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/VisualStudio.png'/>
                    </ChipContact> Visual Studio Code&nbsp;&nbsp;&nbsp;
                    </Chip>
                     <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Postman.png'/>
                    </ChipContact> Postman&nbsp;&nbsp;&nbsp;
                    </Chip>
                     <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/VirtualBox.png'/>
                    </ChipContact> Virtual Box&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='language-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/C++.png'/>
                    </ChipContact> C++&nbsp;&nbsp;&nbsp;
                    </Chip>
                     <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/vmware.png'/>
                    </ChipContact> vmware&nbsp;&nbsp;&nbsp;
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/TravisCI.png'/>
                    </ChipContact> Travis CI&nbsp;&nbsp;&nbsp;
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/CPanel.png'/>
                    </ChipContact> cPanel&nbsp;&nbsp;&nbsp;
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/SSH.png'/>
                    </ChipContact> Secure Shell&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='language-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/php.jpg'/>
                    </ChipContact> PHP&nbsp;&nbsp;&nbsp;
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/MongoDB.png'/>
                    </ChipContact> Mongo DB&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='language-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Bash.jpg'/>
                    </ChipContact> BASH&nbsp;&nbsp;&nbsp;
                    </Chip>
                     <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Putty.jpg'/>
                    </ChipContact> Putty&nbsp;&nbsp;&nbsp;
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Git.png'/>
                    </ChipContact> GitHub&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='language-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/CSS.jpg'/>
                    </ChipContact> CSS&nbsp;&nbsp;&nbsp;
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/SQLite.png'/>
                    </ChipContact> SQLite&nbsp;&nbsp;&nbsp;
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/RaspberryPi.png'/>
                    </ChipContact> Raspberry Pi&nbsp;&nbsp;&nbsp;
                    </Chip>
                     <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/SQLServer.jpg'/>
                    </ChipContact> SQL Server Management Studio&nbsp;&nbsp;&nbsp;
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Networking.jpg'/>
                    </ChipContact> Enterprise Networking&nbsp;&nbsp;&nbsp;
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/OSI.png'/>
                    </ChipContact> OSI Model and Protocols&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='language-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Python.png'/>
                    </ChipContact> Python&nbsp;&nbsp;&nbsp;
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/React.png'/>
                    </ChipContact> React&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='language-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/R.jpg'/>
                    </ChipContact> R Studio&nbsp;&nbsp;&nbsp;
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Angular.png'/>
                    </ChipContact> Angular&nbsp;&nbsp;&nbsp;
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/MVC.png'/>
                    </ChipContact> MVC&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='language-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/VHDL.png'/>
                    </ChipContact> VHDL&nbsp;&nbsp;&nbsp;
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Flask.png'/>
                    </ChipContact> Flask&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='language-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/HTML.png'/>
                    </ChipContact> HTML&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/TDD.png'/>
                    </ChipContact> Test Driven Develoment&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Stats.jpg'/>
                    </ChipContact> Statistical Analysis&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Agile.jpg'/>
                    </ChipContact> Agile Development Method&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/OS.jpg'/>
                    </ChipContact> Windows / MacOS / Linux&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Office.jpg'/>
                    </ChipContact> Microsoft Word / Powerpoint / Excel&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='language-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/SQL.png'/>
                    </ChipContact> MySQL&nbsp;&nbsp;&nbsp;
                    </Chip>
                     <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Vim.png'/>
                    </ChipContact> Vi / Vim&nbsp;&nbsp;&nbsp;
                    </Chip>


                    {/*-------------------- Term 3 Things --------------------------*/}


                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/WinServer.png'/>
                    </ChipContact> Windows Server 2019&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/AWS.png'/>
                    </ChipContact> Amazon Web Services&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/WinServer.png'/>
                    </ChipContact> Microsoft IIS&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Nginx.png'/>
                    </ChipContact> NginX&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Apache.png'/>
                    </ChipContact> Apache HTTP Server&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/PyTorch.png'/>
                    </ChipContact> PyTorch&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/ML.png'/>
                    </ChipContact> Machine Learning&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='language-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Java.jpg'/>
                    </ChipContact> Java&nbsp;&nbsp;&nbsp;
                    </Chip>


                    {/*-------------------- Term 3 Things --------------------------*/}



                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Confluence.png'/>
                    </ChipContact> Confluence&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Jira.jpg'/>
                    </ChipContact> Jira&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/GitLab.jpg'/>
                    </ChipContact> GitLab&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Jenkins.png'/>
                    </ChipContact> Jenkins&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/SonarQube.png'/>
                    </ChipContact> SonarQube&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Packer.png'/>
                    </ChipContact> Packer&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/SOA.png'/>
                    </ChipContact> Service Oriented Architecture&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Docker.png'/>
                    </ChipContact> Docker&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Kubernetes.png'/>
                    </ChipContact> Kubernetes&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Tableau.png'/>
                    </ChipContact> Tableau&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/PowerBI.png'/>
                    </ChipContact> Power BI&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Azure.jpg'/>
                    </ChipContact> Microsoft Azure&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Grafana.jpg'/>
                    </ChipContact> Grafana&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/InfluxDB.png'/>
                    </ChipContact> InfluxDB&nbsp;&nbsp;&nbsp;
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='/Skills/Apache.png'/>
                    </ChipContact> Apache JMeter&nbsp;&nbsp;&nbsp;
                    </Chip>
                </div>

                <section>
                    <div className='content'>{this.toggleCategories()}</div>
                </section>
            </div>
        )
    }
}

export default Skills;




