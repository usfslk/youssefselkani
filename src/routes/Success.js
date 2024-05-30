import React, { useState } from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import {
    Button, Container, Divider, Grid, Icon, Menu, Segment, Image, Header, List, Message, Form, Input,
    TextArea,
} from 'semantic-ui-react'
import '../styles.css';
import Cta from '../comps/Cta'

const Contact = () => {

    return (

        <div style={{ display: 'flex', alignItems: 'center', minHeight: '100vh', color: 'white' }}>
            <Container>
                <h1>Thank You</h1>
            <Message positive>Your message has been sent successfully!</Message>
            </Container>
        </div>

    );
};

export default Contact;
