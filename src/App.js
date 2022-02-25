import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Router from './Components/route';
import { Link } from 'react-router-dom';
import MobileNav from './Components/mobile_nav';



function App() {
  return (
    <div className="demo-big-content">
      {/* <video className='background-video' autoPlay="autoplay" loop="loop" muted>
        <source src={Background} type="video/mp4" />
        Your browser does not support the video tag
      </video> */}
    <Layout>
        <Header id="navbar" title={<Link style={{textDecoration:'none', fontFamily: "Lobster", fontSize:'4vh', color: 'white'}} to="/">Alif</Link>} scroll>
            <Navigation>
                <a style={{fontSize:'1.75vh'}} href="/">Home</a>
                <a style={{fontSize:'1.75vh'}} href="/about">About Me</a>
                <a style={{fontSize:'1.75vh'}} href="/resume">Resume</a>
                <a style={{fontSize:'1.75vh'}} href="/skills">Skills</a>
                <a style={{fontSize:'1.75vh'}} href="/projects">Projects</a>
                <a style={{fontSize:'1.75vh'}} href="/contacts">Contacts</a>
            </Navigation>
        </Header>

        <MobileNav id='mobile_nav'/>

        <Content>
            <div className="page-content" />
            <Router/>
        </Content>
    </Layout>
    </div>  
  );
}

export default App;
