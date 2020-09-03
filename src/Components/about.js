import React, { Component } from 'react';
import Me from './Images/Me.JPG';


class About extends Component {
    render(){
        return(
            <div id='id_card'>
                <img id="beautiful_me" src={Me} alt='Me' /> 
                <p id='about1' className='about_text'> British Columbia Institue of Technology </p>
                <p id='about2' className='about_text'> Computer Information Technology (C.I.T) </p>
                <p id='about3' className='about_text'>
                    All of that is in my resume already. But I'll tell you something that is not on there.
                    I am fascinated by ideas I don't understand thoroughly. If I can't conceive an idea, I get
                    obsessed with that idea until such time that I can. Technology and Economy are two things 
                    that never seizes to surprise me. It's my belief that I will never truely understand
                    technology and modern economy. For this reason I am addicted to both.
                </p>
            </div>
        )
    }
}

export default About;