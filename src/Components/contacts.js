import React, {Component} from 'react';
import Me from './Images/Me.JPG';
import Link from '@material-ui/core/Link';

class contacts extends Component{

    phone()     {document.getElementById('actual_contact').innerHTML = '604-679-1622';}
    github()    {document.getElementById('actual_contact').innerHTML = "<a href='https://github.com/Alif-B'>Alif-B</a>";}
    email()     {document.getElementById('actual_contact').innerHTML = 'ambam3110@gmail.com';}
    linkedin()  {document.getElementById('actual_contact').innerHTML = "<a href='https://www.linkedin.com/in/sheikh-billah-44a762112/'>Sheikh Billah</a>";}
    skype()     {document.getElementById('actual_contact').innerHTML = "ambam3110@hotmail.com";}

    render(){
        return(
            <div>
                <div id='mobile-app-bar'>
                    <a className='otherpage-alif' style={{textDecoration:'none'}} href='/'>  Alif  </a>
                    <p className='current-page'>About me</p>
                </div>
            
                <div id='contact_card'>
                    <img id="beautiful_me" src={Me} alt='Me' />
                    <div id='about_div'>
                        <div id='about_inside_div'></div>
                            <div className='about_text'>
                                <p id='about1' className='about_text'> Sheikh Billah </p>
                                <p id='about2' className='about_text'> DevOps Engineer at East Side Games Group </p>
                            </div>
                            <div id='contact-div'>
                                <Link href='https://github.com/Alif-B' target="_blank" rel="noopener noreferrer" onClick={this.github}><div className='contact_icons' onClick={this.github}></div></Link>
                                <Link href='tel:604-679-1622'> <div id='phone_icon' className='contact_icons' onClick={this.phone}></div> </Link>
                                <Link href='mailto:ambam3110@gmail.com?subject=From Portfolio'> <div id='email_icon' className='contact_icons' onClick={this.email}></div> </Link>
                                <Link href='https://www.linkedin.com/in/sheikh-billah-44a762112/' target="_blank" rel="noopener noreferrer"> <div id='linkedin_icon' className='contact_icons' onClick={this.linkedin}></div> </Link>
                                <Link href='skype:ambam3110@hotmail.com?chat'> <div id='skype_icon' className='contact_icons' onClick={this.skype}></div> </Link>
                            </div>
                            <div id='actual_contact'>
                                Click any icon to connect with me
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default contacts;