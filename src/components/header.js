import React from 'react';
import logo from './logo.svg';
import './css_files/header.css';
function Header(){
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"><img src={logo} alt="Logo"></img></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link scrollto active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link scrollto" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link scrollto" href="#services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link scrollto" href="#contactus">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Job Updates</a>
        </li>
      </ul>
    </div>
  </nav>
    );
    
}
export default Header;