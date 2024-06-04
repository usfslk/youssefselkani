import React from 'react';
import {
    Button, Container, Divider, Grid, Icon, Menu, Segment, Image, Header, List, Message, Form, Input,
    TextArea,
} from 'semantic-ui-react'
import Cta from '../comps/Cta'
import backgroundImage from '../assets/bg.jpeg';
import { Helmet } from 'react-helmet-async';

function About() {
    return (
        <div>
            <Helmet>
                <title>About | Youssef Selkani - Official Website</title>
            </Helmet>
            <Container>
                <Divider hidden />
                <Segment padded='very' fluid >
                    <center>
                        <h1>Youssef Selkani</h1>
                        <h3>Freelance Software Developer | Creating Custom Solutions for SMEs ✨</h3>
                    </center>
                    <Divider hidden />
                    <Grid fluid stackable verticalAlign='middle'>
                        <Grid.Column width={8} textAlign='center'>
                            <Image rounded centered src={require('../assets/hero.jpg')} size='small' />
                            <Divider hidden />
                            <Button color='black' target="_blank" href='https://calendly.com/youssefselkani'>
                                <Icon name='clock' /> Arrange a Call
                            </Button>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <p>
                                I bring a blend of technical prowess and creative vision to every project. With 7 years of hands-on experience in web and mobile app development I specialize in managing projects from conception to completion, ensuring that every piece of code is clean, flawless, and meets the highest standards of quality.
                            </p>
                            <p>
                                I thrive in remote working environments, demonstrating adaptability, attention to detail, and analytical thinking. I excel in problem-solving and have a knack for finding innovative solutions that exceed expectations. My passion for developing high-quality software products is matched by my commitment to delivering exceptional results in challenging environments.
                            </p>
                        </Grid.Column>
                    </Grid>
                    <Divider hidden />
                    <Grid columns={5} padded fluid stackable verticalAlign='middle'>
                        <Grid.Column>
                            <Button fluid target="_blank" href='https://www.linkedin.com/in/youssefselkani/' basic>
                                <Icon name='linkedin' /> LinkedIn
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button fluid target="_blank" href='https://github.com/usfslk' basic>
                                <Icon name='github' /> GitHub
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button fluid target="_blank" href='https://play.google.com/store/apps/dev?id=5139489492316756034' basic>
                                <Icon name='google play' /> Google Play
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button fluid target="_blank" href='https://www.twitter.net/youssefselkani' basic>
                                <Icon name='twitter' /> Twitter
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button fluid target="_blank" href='https://instagram.com/variablefrequencystudio' basic>
                                <Icon name='instagram' /> Instagram
                            </Button>
                        </Grid.Column>
                    </Grid>

                </Segment>

                <Divider hidden />
                <Grid columns={3} stackable>
                    <Grid.Column>
                        <Segment padded='very' >
                            <h3>Strategic <br />Planning</h3>
                            <p>Formulating strategies to achieve organizational goals.</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment padded='very' >
                            <h3>Database <br />Design</h3>
                            <p>Designing efficient and scalable modern database systems.</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment padded='very' >
                            <h3>Creative <br />Problem Solving</h3>
                            <p>Generating solutions to challenging problems.</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment padded='very' >
                            <h3>Analytical <br />Thinking</h3>
                            <p>Applying logical and rational reasoning to solve complex issues.</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment padded='very' >
                            <h3>Information <br />Architecture</h3>
                            <p>Structuring information for optimal accessibility & usability.</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment padded='very' >
                            <h3>Data <br />Analysis</h3>
                            <p>Interpreting complex data to inform decision-making.</p>
                        </Segment>
                    </Grid.Column>
                </Grid>
                <Divider hidden />
                <Cta />
                <Divider hidden />
            </Container>

        </div>
    );
}

export default About;
