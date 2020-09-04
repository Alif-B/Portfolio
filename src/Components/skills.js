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
                        <img alt='logo' class="mdl-chip__contact" src='https://f0.pngfuel.com/png/465/779/blue-and-white-c-logo-png-clip-art.png'/>
                    </ChipContact> C
                    </Chip>
                    <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://www.wireshark.org/assets/images/sflogo.png'/>
                    </ChipContact> Wireshark
                    </Chip>
                     <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://www.logopik.com/wp-content/uploads/edd/2018/07/Microsoft-Visio-Vector-Logo-01.png'/>
                    </ChipContact> Microsoft Visio
                    </Chip>
                    <Chip className='language-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png'/>
                    </ChipContact> JavaScript
                    </Chip>
                     <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://www.pngitem.com/pimgs/m/80-800968_vscode-visual-studio-logo-png-transparent-png.png'/>
                    </ChipContact> Visual Studio Code
                    </Chip>
                     <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://user-images.githubusercontent.com/2676579/34940598-17cc20f0-f9be-11e7-8c6d-f0190d502d64.png'/>
                    </ChipContact> Postman
                    </Chip>
                     <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Virtualbox_logo.png'/>
                    </ChipContact> Virtual Box
                    </Chip>
                    <Chip className='language-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg'/>
                    </ChipContact> C++
                    </Chip>
                     <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://www.vmware.com/content/dam/digitalmarketing/microsites/en/images/timeline/vmware-logo-200x200.png'/>
                    </ChipContact> vmware
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://travis-ci.org/images/logos/TravisCI-Mascot-1.png'/>
                    </ChipContact> Travis CI
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://www.uokpl.rs/fpng/d/599-5991278_transparent-cpanel-logo.png'/>
                    </ChipContact> cPanel
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://image.winudf.com/v2/image1/Y29tLmZpcmV3YWxsLnNzaGNsaWVudF9pY29uXzE1NTk3NTI0NDhfMDA1/icon.png?w=&fakeurl=1'/>
                    </ChipContact> Secure Shell
                    </Chip>
                    <Chip className='language-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://upload.wikimedia.org/wikipedia/commons/c/c1/PHP_Logo.png'/>
                    </ChipContact> PHP
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://xebialabs.com/wp-content/uploads/files/tool-chest/mongodb.jpg'/>
                    </ChipContact> Mongo DB
                    </Chip>
                    <Chip className='language-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://tecadmin.net/tutorial/wp-content/uploads/2017/09/bash-logo.jpg'/>
                    </ChipContact> BASH
                    </Chip>
                     <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/53d9ae70251739.5b9d484cde8a2.jpg'/>
                    </ChipContact> Putty
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'/>
                    </ChipContact> Git / GitHub
                    </Chip>
                    <Chip className='language-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png'/>
                    </ChipContact> CSS
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://dwglogo.com/?download=5380'/>
                    </ChipContact> SQLite
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/5c/a885e0771b11e7bbe2d932d1701172/FPGAs-Icon_4x.png?auto=format%2Ccompress&dpr=1'/>
                    </ChipContact> Field Programming Gate Array
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://f1.pngfuel.com/png/290/754/404/green-circle-raspberry-pi-raspbian-liquidcrystal-display-raspberry-pi-projects-singleboard-computer-booting-generalpurpose-inputoutput-png-clip-art.png'/>
                    </ChipContact> Raspberry Pi
                    </Chip>
                     <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://banner2.cleanpng.com/20180614/sg/kisspng-microsoft-sql-server-sql-server-management-studio-transactional-analysis-5b2207401c5992.0038138215289567361161.jpg'/>
                    </ChipContact> SQL Server Management Studio
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://images.creativemarket.com/0.1.0/ps/1029583/300/200/m2/fpnw/wm0/networking-logo-01-.jpg?1456486626&s=8b1136894ab079efd312f6e02c2490c2'/>
                    </ChipContact> Enterprise Networking
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://w7.pngwing.com/pngs/37/949/png-transparent-osi-model-communication-protocol-network-layer-physical-layer-computer-network-others-blue-computer-network-text.png'/>
                    </ChipContact> OSI Model and Protocols
                    </Chip>
                    <Chip className='language-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://newhorizons.com.sg/wp-content/uploads/2019/04/python.png'/>
                    </ChipContact> Python
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png'/>
                    </ChipContact> React
                    </Chip>
                    <Chip className='language-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://banner2.cleanpng.com/20180714/hut/kisspng-programming-language-rstudio-icon-github-icon-5b4a3801aa0270.4893537115315906576964.jpg'/>
                    </ChipContact> R
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png'/>
                    </ChipContact> Angular
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://www.vervelogic.com/images/services/other/mvc-framework-development/mvc-framework-development.png'/>
                    </ChipContact> MVC
                    </Chip>
                    <Chip className='language-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://image.winudf.com/v2/image1/Y29tLmtyYXplYXBwcy52aGRscHJvZ3JhbW1pbmdjb21waWxlcl9pY29uXzE1NTUzNDQ2NzJfMDM4/icon.png?w=170&fakeurl=1'/>
                    </ChipContact> VHDL
                    </Chip>
                     <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://i1.wp.com/www.corellis.eu/wp-content/uploads/2018/09/logo-flask.png'/>
                    </ChipContact> Flask
                    </Chip>
                    <Chip className='language-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png'/>
                    </ChipContact> HTML
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://marsner.com/wp-content/uploads/test-driven-development-TDD.png'/>
                    </ChipContact> Test Driven Develoment
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://thumbs.dreamstime.com/b/stats-report-stock-market-business-icon-logo-design-can-be-used-as-as-complement-to-design-97512936.jpg'/>
                    </ChipContact> Statistical Analysis
                    </Chip>
                    <Chip className='tool-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://www.daxima.com/wp-content/uploads/2017/05/agile.jpg'/>
                    </ChipContact> Agile Development Method
                    </Chip>
                    <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://p1.hiclipart.com/preview/128/619/641/bird-icon-linux-macos-computer-software-operating-systems-linux-foundation-computer-servers-free-and-opensource-software-png-clipart.jpg'/>
                    </ChipContact> Windows / MacOS / Linux
                    </Chip>
                    <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://p7.hiclipart.com/preview/994/90/443/microsoft-office-365-microsoft-office-2016-computer-software-icon-office-365-library.jpg'/>
                    </ChipContact> Microsoft Word / Powerpoint / Excel
                    </Chip>
                    <Chip className='language-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://image.shutterstock.com/image-photo/image-260nw-684826648.jpg'/>
                    </ChipContact> SQL
                    </Chip>
                     <Chip className='software-chip'><ChipContact>
                        <img alt='logo' class="mdl-chip__contact" src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/1200px-Vimlogo.svg.png'/>
                    </ChipContact> Vi / Vim
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