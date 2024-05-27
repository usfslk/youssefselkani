// Youssef Selkani
// 2024

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Button, Container, Divider, Grid, Icon, Menu, Segment, Image, Header, List, Message, Form, Input,
  TextArea,
} from 'semantic-ui-react'
//Components
// import NavBar from "./components/NavBar";
// import SideBarMenuAuth from "./components/SideBarMenuAuth";
// import Footer from "./components/Footer";

// Routes
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";

function App() {
  return (
    <Router>
      <div>
      <Menu inverted pointing secondary style={{ borderColor: 'transparent', paddingTop: 14 }}>
            <Menu.Item active>
              Youssef Selkani
            </Menu.Item>

            <Menu.Menu position='right'>
              <Menu.Item target="_blank" href='mailto:usfslk@icloud.com'>
                <Button inverted>Get Consultation</Button>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;