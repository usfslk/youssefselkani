import React, { useState } from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import {
    Button, Container, Divider, Grid, Icon, Menu, Segment, Image, Header, List, Message, Form, Input,
    TextArea,
} from 'semantic-ui-react'
import '../styles.css';
import Cta from '../comps/Cta'
import { Helmet } from 'react-helmet-async';

const Contact = () => {

    return (

        <div style={{ display: 'flex', alignItems: 'center', minHeight: '100vh' }}>
          
          <Helmet>
                <title>Contact | Youssef Selkani - Official Website</title>
            </Helmet>
              <Container>
            <Cta />
            </Container>
        </div>

    );
};

export default Contact;
