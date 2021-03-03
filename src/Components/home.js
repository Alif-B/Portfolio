import React, { Component } from 'react';
import { Spinner } from 'react-mdl';
import MyLogo from './Images/node.png';

class homepage extends Component {
    render(){
        return (
            <div id='homepage'>
                <div id='mobile-app-bar'>
                    <a style={{textDecoration:'none'}} href='/'> <p href='/' id='homepage-alif'> Alif </p> </a>
                </div>
                <div className='background-video' id="animation">
                    <img id='my_pic' src={MyLogo} alt='Logo'/>
                    {/* <Spinner id='spinner1'/> */}
                </div>
                <div id='some_text'>
                    <p id='intro' className='traits'> Hi I'm Sheikh, <br/><br/> But they call me Alif! </p>
                    <p id='coder' className='traits'> Great Coder. </p>
                    <p id='player' className="traits"> Non-Nobel Prize Winner </p>
                    <p id='genius' className="traits"> Secret Genius... </p>
                    <p id='hide' className="traits"> I hide it very well. </p>
                </div>
            </div>
        )
    }
}

export default homepage;