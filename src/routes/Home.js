import React, { useState } from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import {
    Button, Container, Divider, Grid, Icon, Accordion, Segment, Image, Header, List, Message, Form, Input,
    TextArea, Statistic
} from 'semantic-ui-react'
import '../styles.css';
import Cta from '../comps/Cta'
import { Helmet } from 'react-helmet-async';

import Node from '../assets/tech/node.svg';
import Block from '../assets/tech/block.png';
import Python from '../assets/tech/python.svg';
import ReactIco from '../assets/tech/react.svg';
import Vue from '../assets/tech/vue.svg';
import TypeScript from '../assets/tech/type.png';
import Graph from '../assets/tech/graph.png';
import Figma from '../assets/tech/figma.png';

import Hero from '../assets/geo.jpg';
import backgroundImage from '../assets/ocean.jpg';

const Tech = ({ imageSrc, text }) => {
    return (
        <Grid.Column>
            <Segment  padded='very' textAlign='center'>
                <Image centered src={imageSrc} size='mini' />
                <Divider hidden />
                <p>{text}</p>
            </Segment>
        </Grid.Column>
    );
};

const Portfolio = ({
    company,
    imageUrl,
}) => {
    return (
        <Grid.Column textAlign='center' style={{ marginBottom: 14 }}>
            <h4>{company}</h4>
            <Image src={imageUrl} centered style={{ width: 250, height: 200, objectFit: 'cover', borderRadius: 7 }} />
        </Grid.Column>
    );
};

const items = [
    'Web Development',
    'Mobile Development',
    'DevOPS',
    'Data Analytics',
    'UI/UX Design',
    'Business Intelligence'
];

const Expertise = ({ items }) => {
    return (
        <Grid columns={3} stackable>
            {items.map((item, index) => (
                <Grid.Column key={index}>
                    <Segment  padded='very'>
                        <p>{item}</p>
                    </Segment>
                </Grid.Column>
            ))}
        </Grid>
    );
};


const App = () => {


    return (

        <div>
            <Helmet>
                <title>Youssef Selkani - Official Website | Home</title>
            </Helmet>
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', 
            // backgroundImage: `url(${backgroundImage})`, 
            backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Container>
                    <Grid verticalAlign='middle' stackable>
                        <Grid.Column width={8}>
                            <h1>Transformative Business Software & Awesome UX</h1>
                            <p>With over 7 years of experience in crafting advanced IT systems, we excel at aligning your business goals with your schedule, budget, and desired outcomes.</p>
                            <Divider />
                            <Button  href='/portfolio'>Portfolio</Button>
                            <Button  href='/contact'>Get Free Consultation</Button>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Image centered src={Hero} size='medium' rounded />
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
            <Container>

                <Divider hidden />

                <Grid columns={3} stackable>
                    <Grid.Column>
                        <Segment placeholder  padded='very' >
                            <p>Boost productivity and efficiency with our cutting-edge solutions</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment placeholder  padded='very' >
                            <p>Stay ahead of the competition with our innovative technology offerings</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment placeholder  padded='very' >
                            <p>Mitigate risks and ensure data security with our robust cybersecurity solutions</p>
                        </Segment>
                    </Grid.Column>
                </Grid>

                <Statistic.Group  widths='2' style={{ paddingTop: 44, paddingBottom: 44 }}>
                    <Statistic>
                        <Statistic.Value>7+</Statistic.Value>
                        <Statistic.Label>Years of Experience</Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>35+</Statistic.Value>
                        <Statistic.Label>Projects Completed</Statistic.Label>
                    </Statistic>
                </Statistic.Group>

                <a href='/about'  >
                    <p style={{ textDecoration: 'underline', textAlign: 'center'}}>
                        More about us
                        <Icon name='arrow right' />
                    </p>
                </a>
                <h3 style={{ paddingTop: 44 }}>[Expertise]</h3>
                <p>Skilled in creating custom applications, implementing cutting-edge technologies, and optimizing infrastructure to meet your business needs</p>
                <Expertise items={items} />

                <h3 style={{ paddingTop: 44 }}>[Our Work]</h3>
                <Divider hidden />

                <Grid stackable verticalAlign='middle' columns={3}>
                    <Portfolio
                        company="Trajectory US"
                        imageUrl={require('../assets/gallery/portfolio-1.jpg')}
                    />
                    <Portfolio
                        company="C.F. Print"
                        imageUrl={require('../assets/gallery/portfolio-2.jpg')}
                    />
                    <Portfolio
                        company="CVS Health"
                        imageUrl={require('../assets/gallery/portfolio-9.jpg')}
                    />
                    <Portfolio
                        company="Netflix"
                        imageUrl={require('../assets/gallery/portfolio-4.jpg')}
                    />
                    <Portfolio
                        company="Rthath One"
                        imageUrl={require('../assets/gallery/portfolio-3.jpg')}
                    />
                    <Portfolio
                        company="Murkstom"
                        imageUrl={require('../assets/gallery/portfolio-7.jpg')}
                    />
                </Grid>

                <Divider hidden />
                <a href='/portfolio'  >
                    <p style={{ textDecoration: 'underline', textAlign: 'center'}}>
                        See more
                        <Icon name='arrow right' />
                    </p>
                </a>


                <h3 style={{ paddingTop: 44 }}>[Technology]</h3>
                <p>We work with various different technologies and strive to pick the right tool for the job</p>
                <Grid columns={4} stackable style={{ paddingBottom: 44 }}>
                    <Tech imageSrc={Node} text='Node.js' />
                    <Tech imageSrc={Graph} text='Graph QL' />
                    <Tech imageSrc={ReactIco} text='React' />
                    <Tech imageSrc={Python} text='Python' />
                    <Tech imageSrc={Block} text='Blockchain' />
                    <Tech imageSrc={TypeScript} text='TypeScript' />
                    <Tech imageSrc={Vue} text='Vue' />
                    <Tech imageSrc={Figma} text='Figma' />
                </Grid>

                <Cta />

                <Divider hidden />
            </Container>

        </div>

    );
};

export default App;
