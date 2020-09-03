import React, {Component} from 'react';
import Me from './Images/Me.JPG';

class contacts extends Component{

    phone()     {document.getElementById('actual_contact').innerHTML = '604-679-1622';}
    github()    {document.getElementById('actual_contact').innerHTML = "<a href='https://github.com/Alif-B'>Alif-B</a>";}
    email()     {document.getElementById('actual_contact').innerHTML = 'ambam3110@gmail.com';}
    linkedin()  {document.getElementById('actual_contact').innerHTML = "<a href='https://www.linkedin.com/in/sheikh-billah-44a762112/'>Sheikh Billah</a>";}
    skype()     {document.getElementById('actual_contact').innerHTML = "ambam3110@hotmail.com";}
      
    render(){
        return(
            <div id='contact_card'>
                <img id="beautiful_me" src={Me} alt='Me' />
                <div className='about_text'>
                    <p id='about1' className='about_text'> British Columbia Institue of Technology </p>
                    <p id='about2' className='about_text'> Computer Information Technology (C.I.T) </p>
                </div>
                <div id='contact-div'>
                    <div className='contact_icons' onClick={this.github}></div>
                    <div id='phone_icon' className='contact_icons' onClick={this.phone}></div>
                    <div id='email_icon' className='contact_icons' onClick={this.email}></div>
                    <div id='linkedin_icon' className='contact_icons' onClick={this.linkedin}></div>
                    <div id='skype_icon' className='contact_icons' onClick={this.skype}></div>
                </div>
                <div id='actual_contact'>
                    Click the icons to find that contact
                </div>
            </div>
        )
    }
}

export default contacts;