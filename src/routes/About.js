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
                <Segment padded='very' inverted fluid style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <center>
                        <h1>Youssef Selkani</h1>
                        <h3>Freelance Software Developer | Creating Custom Solutions for SMEs ✨</h3>
                    </center>
                    <Divider hidden />
                    <Grid fluid stackable verticalAlign='middle'>
                        <Grid.Column width={8} textAlign='center'>
                            <Image circular centered src={require('../assets/hero.jpg')} size='small' />
                            <Divider hidden />
                            <Button color='black' target="_blank" href='https://calendly.com/youssefselkani'>
                                <Icon name='clock' /> Arrange a Call
                            </Button>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <p>
                                Highly skilled professional with a strong background in designing modern user interfaces and managing end-to-end projects.
                                With 7 years of experience in remote working environments, I am adept at producing clean and flawless code that meets the highest standards of quality.
                            </p>
                            <p>
                                One of my key strengths lies in my ability to build and consume various types of APIs enabling me to seamlessly
                                integrate external services and enhance the functionality of applications.
                                Additionally, I have a solid grasp of design tools, which allows me to create visually appealing and user-friendly interfaces.
                            </p>
                            <p>
                                Throughout my career, I have demonstrated adaptability, attention to detail, and analytical thinking skills.
                                I thrive in challenging environments and consistently deliver exceptional results.
                                With a passion for problem-solving and a creative approach to finding innovative solutions,
                                I am committed to developing high-quality software products that exceed expectations.
                            </p>
                        </Grid.Column>
                    </Grid>
                    <Divider hidden />
                    <Grid columns={5} inverted padded fluid stackable verticalAlign='middle'>
                        <Grid.Column>
                            <Button fluid target="_blank" href='https://www.linkedin.com/in/youssefselkani/' inverted basic>
                                <Icon name='linkedin' /> LinkedIn
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button fluid target="_blank" href='https://github.com/usfslk' inverted basic>
                                <Icon name='github' /> GitHub
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button fluid target="_blank" href='https://play.google.com/store/apps/dev?id=5139489492316756034' inverted basic>
                                <Icon name='google play' /> Google Play
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button fluid target="_blank" href='https://www.twitter.net/youssefselkani' inverted basic>
                                <Icon name='twitter' /> Twitter
                            </Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button fluid target="_blank" href='https://instagram.com/variablefrequencystudio' inverted basic>
                                <Icon name='instagram' /> Instagram
                            </Button>
                        </Grid.Column>
                    </Grid>

                </Segment>

                <Divider hidden />
                <Grid columns={3} stackable>
                    <Grid.Column>
                        <Segment inverted padded='very' >
                            <h3>Strategic <br />Planning</h3>
                            <p>Formulating strategies to achieve organizational goals.</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment inverted padded='very' >
                            <h3>Database <br />Design</h3>
                            <p>Designing efficient and scalable modern database systems.</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment inverted padded='very' >
                            <h3>Creative <br />Problem Solving</h3>
                            <p>Generating solutions to challenging problems.</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment inverted padded='very' >
                            <h3>Analytical <br />Thinking</h3>
                            <p>Applying logical and rational reasoning to solve complex issues.</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment inverted padded='very' >
                            <h3>Information <br />Architecture</h3>
                            <p>Structuring information for optimal accessibility & usability.</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment inverted padded='very' >
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
