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
import { HelmetProvider } from 'react-helmet-async';

// Routes
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Portfolio from "./routes/Portfolio";
import Success from "./routes/Success";

function App() {
  return (
    <Router>
      
      <div style={{ backgroundColor: '#111' }}>
        <Container>
          <Menu inverted pointing secondary style={{ borderColor: 'transparent', paddingTop: 14, paddingBottom: 7 }}>
            <Menu.Item href='/'>
              Home
            </Menu.Item>
            <Menu.Item href='/about'>
              About
            </Menu.Item>
            <Menu.Item href='/portfolio'>
              Porfolio
            </Menu.Item>

            <Menu.Menu position='right'>
              <Menu.Item href='/contact'>
               Contact
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Container>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/success" element={<Success />} />
          </Routes>

        <Segment inverted vertical verticalAlign='middle' style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Legal' />
                  <List link inverted>
                    <List.Item as='a'>Privacy Policy</List.Item>
                    <List.Item as='a'>Terms of Services</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7} textAlign='center'>
                  <p style={{ color: 'white', marginTop: 28, marginBottom: 7 }}>© 2014-2024 Youssef Selkani - All Rights Reserved.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    </Router>
  );
}

export default App;