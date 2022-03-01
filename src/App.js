import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Router from './Components/route';
import { Link } from 'react-router-dom';
import MobileNav from './Components/mobile_nav';



function App() {

  function onHover(button){
    document.getElementById(button).style.animation = 'bgColorChange 0.5s linear forwards';
  }
  function onLeave(button){
    document.getElementById(button).style.animation = 'bgColorChangeBack 5s linear forwards';
  }
  const alifStyle = {
    textDecoration:'none', 
    fontFamily: "Lobster", 
    fontSize:'4vh', 
    color: 'white'
  };
  return (
    <div className="demo-big-content">
    <Layout>
        <Header id="navbar" title={<Link style={alifStyle} to="/">Alif</Link>} scroll>
            <Navigation>
                <a id='nav-home' style={{fontSize:'200%', borderRadius: '5%'}} href="/" onMouseOver={() => onHover('nav-home')} onMouseLeave={() => onLeave('nav-home')}><b>Home</b></a>
                <a id='nav-about' style={{fontSize:'200%', borderRadius: '5%'}} href="/about" onMouseOver={() => onHover('nav-about')} onMouseLeave={() => onLeave('nav-about')}><b>About Me</b></a>
                <a id='nav-resume' style={{fontSize:'200%', borderRadius: '5%'}} href="/resume" onMouseOver={() => onHover('nav-resume')} onMouseLeave={() => onLeave('nav-resume')}><b>Resume</b></a>
                <a id='nav-skills' style={{fontSize:'200%', borderRadius: '5%'}} href="/skills" onMouseOver={() => onHover('nav-skills')} onMouseLeave={() => onLeave('nav-skills')}><b>Skills</b></a>
                <a id='nav-projects' style={{fontSize:'200%', borderRadius: '5%'}} href="/projects" onMouseOver={() => onHover('nav-projects')} onMouseLeave={() => onLeave('nav-projects')}><b>Projects</b></a>
                <a id='nav-contacts' style={{fontSize:'200%', borderRadius: '5%'}} href="/contacts" onMouseOver={() => onHover('nav-contacts')} onMouseLeave={() => onLeave('nav-contacts')}><b>Contacts</b></a>
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
