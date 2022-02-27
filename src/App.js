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
                <a style={{fontSize:'3vh'}} href="/"><b>Home</b></a>
                <a style={{fontSize:'3vh'}} href="/about"><b>About Me</b></a>
                <a style={{fontSize:'3vh'}} href="/resume"><b>Resume</b></a>
                <a style={{fontSize:'3vh'}} href="/skills"><b>Skills</b></a>
                <a style={{fontSize:'3vh'}} href="/projects"><b>Projects</b></a>
                <a style={{fontSize:'3vh'}} href="/contacts"><b>Contacts</b></a>
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
