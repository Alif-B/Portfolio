import React, { Component } from 'react';
import Me from './Images/Me.JPG';


class About extends Component {
    render(){
        return(
            <div>
                <div id='mobile-app-bar'>
                    <a className='otherpage-alif' style={{textDecoration:'none'}} href='/'>  Alif  </a>
                    <p className='current-page'>About me</p>
                </div>
                <div id='id_card'>
                    <img id="beautiful_me" src={Me} alt='Me' /> 
                    <p id='about1' className='about_text'> British Columbia Institue of Technology </p>
                    <p id='about2' className='about_text'> Computer Information Technology (C.I.T) </p>
                    <p id='about3' className='about_text'>
                        As an IT student, I am fascinated by innovative ideas related to technology and the modern economy. 
                        I am curious about how technology and the economy relate to each other and the impact they have 
                        on our lives. I am an avid learner in search of novel ideas and always looking to accept new 
                        challenges in my personal and professional life. Check out my resume to learn more about me.
                    </p>
                </div>
            </div>
        )
    }
}

export default About;