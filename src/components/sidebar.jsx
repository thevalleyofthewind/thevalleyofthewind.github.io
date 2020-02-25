import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about1.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">御風族</a></h1>
              <span className="email"><i className="icon-mail"></i> thevalleyofthewind.channel@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">介紹</a></li>
                  <li><a href="#about" data-nav-section="about">關於柳御風</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">過往演出</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/thevalleyofthewind/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.instagram.com/thevalleyofthewind/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.youtube.com/channel/UCr-HSil26ve-Lff6HSBR0zQ/featured" target="_blank" rel="noopener noreferrer"><i className="icon-youtube2" /></a></li>
                </ul>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
