import React from 'react';
import {
    Button, Container, Divider, Grid, Icon, Menu, Segment, Image, Header, List, Message, Form, Input,
    TextArea,
} from 'semantic-ui-react'
import Cta from '../comps/Cta'
import backgroundImage from '../assets/bg.jpeg';

function About() {
    return (
        <div>
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
                <Divider hidden />
            </Container>


            <Container>
                <h2 style={{ textAlign: 'center', color: 'white', paddingTop: 11, paddingBottom:22 }}>Education</h2>
                <Segment padded='very' fluid inverted>
                    <h4>Data Science Specialization at Johns Hopkins University</h4>
                    <em>Jan, 2022 - Jul, 2022</em>
                    <Divider />
                    <li>Completed a comprehensive Data Science Specialization program covering key concepts and practical skills in data analysis, machine learning, and statistical modeling.</li>
                    <li>Courses completed: Introduction to Data Science | R Programming | Data Science in Python | Data Science Methodology | Statistical Inference | Regression Models | Practical Machine Learning | Developing Data Products</li>
                    <Divider hidden />
                    <Button href='https://coursera.org/share/ca90a0c5642a0b6a026b7a2331873643' basic inverted target="_blank">View</Button>
                </Segment>

                <Segment padded='very' fluid inverted>
                    <h4>Data Analytics Certificate at Google</h4>
                    <em>Jul, 2022 - Aug, 2022</em>
                    <Divider />
                    <li>Earned a Data Analytics Certificate from Google, demonstrating proficiency in using data analysis tools and techniques.</li>
                    <li>Completed coursework focused on data visualization, data cleaning, data analysis, and data-driven decision making.</li>
                    <Divider hidden />
                    <Button href='https://www.credly.com/badges/8a794dbb-1bd9-46e0-8ac6-f7b32d170ddb/public_url' basic inverted target="_blank">View</Button>
                </Segment>

                <h2 style={{ textAlign: 'center', color: 'white', paddingTop: 22,  paddingBottom: 22 }}>Languages</h2>
                <Segment padded='very' fluid inverted>
                    <Grid stackable columns={2} verticalAlign='middle'>
                        <Grid.Column>
                            <h3>English</h3>
                            <em>EF Standard English Test</em>
                        </Grid.Column>
                        <Grid.Column>
                            <b>C1 Advanced 70/100</b>
                            <Divider hidden />
                            <Button href='https://cert.efset.org/U4FpUr' basic inverted target="_blank">View</Button>
                        </Grid.Column>
                    </Grid>
                </Segment>

                <Segment padded='very' fluid inverted>
                    <Grid stackable columns={2} verticalAlign='middle'>
                        <Grid.Column>
                            <h3>French</h3>
                            <em>Test de Francais International</em>
                        </Grid.Column>
                        <Grid.Column>
                            <b>C1 Advanced 815/990</b>
                            <Divider hidden />
                            <Button href='https://drive.google.com/file/d/0B6WgLbFXe65MT0pCeGswME83WEk/view?usp=sharing&resourcekey=0-XFu5t-6xKTyw3U9ha-8HpQ' basic inverted target="_blank">View</Button>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Divider hidden />
                <Cta />
                <Divider hidden />
            </Container>

        </div>
    );
}

export default About;
