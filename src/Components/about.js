import React, { Component } from 'react';
import Me from './Images/Me.JPG';


class About extends Component {
    render(){
        return(
            <div>
                <div id='mobile-app-bar'>
                    <a className='otherpage-alif' style={{textDecoration:'none'}} href='/'>  Alif  </a>
                    <p className='current-page'>About Me</p>
                </div>
                <div id='id_card'>
                    <img id="beautiful_me" src={Me} alt='Me' /> 
                    <div id='about_div'>
                        <div id='about_inside_div'>
                            <p id='about1' className='about_text'> <b>East Side Games Group</b> </p>
                            <p id='about2' className='about_text'> <b>DevOps Engineer</b> </p>
                            <p id='about3' className='about_text'>
                                Not only as an Engineer, but also a DevOps enthusiast, I am fascinated by innovative ideas and solutions 
                                that technology gives us everyday. Some good, some bad, but all fascinating none the less. I am an avid
                                learner in search of cool ideas and always looking to get my hands on the latest and greatest automation 
                                tools. Check out my resume and LinkedIn to learn more about me.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;