import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Button, Container, Divider, Grid, Icon, Menu, Segment, Image, Header, List } from 'semantic-ui-react'


function App() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', minHeight: '100vh', backgroundColor: '#000', color: '#fff', paddingTop: 28 }}>

      <br />
      <Container inverted>
        <Menu inverted pointing secondary>
          <Menu.Item active>
            Youssef Selkani
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item target="_blank" href='mailto:usfslk@icloud.com'>
              Contact
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Segment inverted basic fluid padded='very'>
          <center>
            <h3>Freelance Software Developer</h3>
          </center>
          <Divider hidden />

          <Grid fluid stackable verticalAlign='middle'>
            <Grid.Column width={6}>
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
            <Grid.Column width={10} textAlign='center'>
              <Image circular centered src={require('./assets/hero.jpg')} size='small' />
              <Divider hidden />
              <Button inverted target="_blank" href='https://calendly.com/youssefselkani'>
                <Icon name='clock' /> Schedule Meeting
              </Button>

            </Grid.Column>
          </Grid>

        </Segment>

        <Grid columns={4} inverted padded divided fluid stackable verticalAlign='middle'>
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
        </Grid>

        <h2>Skills</h2>

        <Grid columns={3}>
          <Grid.Column>
            <Segment inverted padded='very' placeholder>
              <h3>Strategic <br/>Planning</h3>
              <p>Formulating strategies to achieve organizational goals.</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment inverted padded='very' placeholder>
              <h3>Database <br/>Design</h3>
              <p>Designing efficient and scalable modern database systems.</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment inverted padded='very' placeholder>
              <h3>Creative <br/>Problem Solving</h3>
              <p>Generating solutions to challenging problems.</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment inverted padded='very' placeholder>
              <h3>Analytical <br/>Thinking</h3>
              <p>Applying logical and rational reasoning to solve complex issues.</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment inverted padded='very' placeholder>
              <h3>Information <br/>Architecture</h3>
              <p>Structuring information for optimal accessibility & usability.</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment inverted padded='very' placeholder>
              <h3>Data <br/>Analysis</h3>
              <p>Interpreting complex data to inform decision-making.</p>
            </Segment>
          </Grid.Column>
        </Grid>

        <h2>Employment History</h2>

        <Segment fluid inverted>
          <h4>Web Developer at Trajectory US</h4>
          <em>Oct, 2023 - Nov, 2023</em>
          <Divider />
          <li>Implemented the UI with a focus on a seamless user experience using Svelte</li>
          <li>Translated design concepts into functional code, utilizing PrimateJS</li>
          <li>Deployed the fully developed marketing site, ensuring its accessibility</li>
          <Divider hidden />
          <Button href='https://trajectory.us.com/' basic inverted target="_blank">View</Button>
        </Segment>

        <Segment fluid inverted>
          <h4>Mobile App Developer at C.F. Print</h4>
          <em>Feb, 2021 - May, 2022</em>
          <Divider />
          <li>Developed a mobile app using React Native, Node, and Firebase that allows users to print tickets using Bluetooth printers</li>
          <li>Integrated web hook triggers to retrieve custom data from various third-party services</li>
          <li>Deployed the app on both Google Play and Apple Store</li>
          <Divider hidden />
          <Button href='https://play.google.com/store/apps/details?id=com.usfslk.cfprint' basic inverted target="_blank">View</Button>
        </Segment>

        <Segment fluid inverted>
          <h4>Mobile App Developer at Rthath One</h4>
          <em>Jan, 2021 - May, 2021</em>
          <Divider />
          <li>Built an e-commerce app from scratch using React Native, WordPress, and WooCommerce API</li>
          <li>Developed a Node server for authentication, data handling, and orders/payment processing</li>
          <li>Successfully deployed the app on Google Play</li>
          <Divider hidden />
          <Button href='https://play.google.com/store/apps/details?id=com.rthathone' basic inverted target="_blank">View</Button>
        </Segment>

        <Segment fluid inverted>
          <h4>Mobile App Developer at Netflix</h4>
          <em>Apr, 2020 - Aug, 2020</em>
          <Divider />
          <li>Created a studio tour companion app for a media company using React Native and Python</li>
          <li>Integrated APIs to search and load individual studio profiles from survey databases</li>
          <li>Implemented features allowing users to verify, annotate, update sections of the profile, and add photos and voice notes</li>
          <li>Due to NDA restrictions, code samples are not available, but you can view simulator screenshots below</li>
          <Divider hidden />
          <Button href='https://imgur.com/a/9mCawqU' basic inverted target="_blank">View</Button>
        </Segment>

        <Segment fluid inverted>
          <h4>Product Designer at GlobalBarter</h4>
          <em>May, 2020 - Jun, 2020</em>
          <Divider />
          <li>Designed a new e-commerce platform focusing on reducing waste and carbon footprint</li>
          <li>Collaborated on the entire design process, including research, UX/UI design, and user testing</li>
          <Divider hidden />
          <Button href='https://invis.io/XJNJQ946SMR ' basic inverted target="_blank">View</Button>
        </Segment>

        <Segment fluid inverted>
          <h4>Full-Stack Developer at Earthmo</h4>
          <em>Mar, 2020 - Apr, 2020</em>
          <Divider />
          <li>Developed a business directory web app with zip code search functionality using React, Node, and Firebase</li>
          <Divider hidden />
          <Button href='https://earthmo-d47b3.firebaseapp.com/' basic inverted target="_blank">View</Button>
        </Segment>

        <Segment fluid inverted>
          <h4>Full-Stack Developer at Murkstom</h4>
          <em>Jul, 2019 - Mar, 2020</em>
          <Divider />
          <li>Contributed to the development of a code-free platform for building native mobile applications using React, React Native, and Node</li>
          <li>Implemented features for user management, subscriptions, and payment gateway setup</li>
          <Divider hidden />
          <Button href='https://webview-ea6af.web.app/' basic inverted target="_blank">View</Button>
        </Segment>

        <Segment fluid inverted>
          <h4>Mobile App Developer at Museum of the American Arts & Crafts Movement</h4>
          <em>Jan, 2019 - Apr, 2019</em>
          <Divider />
          <li>Developed a production mobile app for a new art museum in Florida using React Native and SQL</li>
          <li>Responsible for UI design and API data structure</li>
          <Divider hidden />
          <Button disabled basic inverted target="_blank">Confidential</Button>
        </Segment>

        <Segment fluid inverted>
          <h4>Front-End Developer at CVS Health</h4>
          <em>May, 2019 - Jun, 2019</em>
          <Divider />
          <li>Created custom animations using Vanilla JavaScript for CVS Health marketing materials</li>
          <li>Developed a countdown timer and custom transitions for billboard usage</li>
          <Divider hidden />
          <Button href='https://cvsbanner.firebaseapp.com' basic inverted target="_blank">View</Button>
        </Segment>

        <Segment fluid inverted>
          <h4>UX Designer at liSt</h4>
          <em>May, 2017 - Aug, 2017</em>
          <Divider />
          <li>Designed an e-commerce mobile app for the food and drink market, revolutionizing grocery shopping</li>
          <li>Involved in the entire design process, including research, UX/UI design, and user testing</li>
          <Divider hidden />
          <Button href='https://marvelapp.com/5h9j6b3/screen/37966689' basic inverted target="_blank">View</Button>
        </Segment>

        <Segment fluid inverted>
          <h4>UX Designer at BidClipz</h4>
          <em>Feb, 2016 - Apr, 2016</em>
          <Divider />
          <li>Designed a video sharing application, enabling users to buy, sell, and broadcast various types of video content</li>
          <li>Utilized Sketch for the design process</li>
          <Divider hidden />
          <Button href='https://invis.io/2ANJQCDD76B' basic inverted target="_blank">View</Button>
        </Segment>

        <h2>Education</h2>

        <Segment fluid inverted>
          <h4>Data Science Specialization at Johns Hopkins University</h4>
          <em>Jan, 2022 - Jul, 2022</em>
          <Divider />
          <li>Completed a comprehensive Data Science Specialization program covering key concepts and practical skills in data analysis, machine learning, and statistical modeling.</li>
          <li>Courses completed: Introduction to Data Science | R Programming | Data Science in Python | Data Science Methodology | Statistical Inference | Regression Models | Practical Machine Learning | Developing Data Products</li>
          <Divider hidden />
          <Button href='https://coursera.org/share/ca90a0c5642a0b6a026b7a2331873643' basic inverted target="_blank">View</Button>
        </Segment>

        <Segment fluid inverted>
          <h4>Data Analytics Certificate at Google</h4>
          <em>Jul, 2022 - Aug, 2022</em>
          <Divider />
          <li>Earned a Data Analytics Certificate from Google, demonstrating proficiency in using data analysis tools and techniques.</li>
          <li>Completed coursework focused on data visualization, data cleaning, data analysis, and data-driven decision making.</li>
          <Divider hidden />
          <Button href='https://www.credly.com/badges/8a794dbb-1bd9-46e0-8ac6-f7b32d170ddb/public_url' basic inverted target="_blank">View</Button>
        </Segment>

        <Segment fluid inverted>
          <h4>Introduction to APIs in Google Cloud at Google</h4>
          <em>Jul, 2022 - Sep, 2022</em>
          <Divider />
          <li>Successfully completed an introductory course on APIs in Google Cloud, gaining practical knowledge and hands-on experience in building and integrating APIs.</li>
          <li>Explored key concepts such as API design, authentication, authorization, and API management.</li>
          <li>Developed proficiency in working with Google Cloud Platform's API services.</li>
          <Divider hidden />
          <Button href='https://coursera.org/verify/UQPAL75F4D6C' basic inverted target="_blank">View</Button>
        </Segment>



        <h2>Languages</h2>

        <Segment fluid inverted>
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

        <Divider />

        <Segment fluid inverted>
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

        <Segment inverted vertical verticalAlign='middle' style={{ padding: '5em 0em', backgroundColor: 'transparent' }}>
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
                  <Button color='black' target="_blank" href='https://docs.google.com/document/d/1P5pDcOx3YoVFZDGicqBF12mMt60rY3rX9Ko6_4uYmHA/edit?usp=sharing'>
                    <Icon name='download' /> Download Resume
                  </Button>
                  <p style={{ color: 'white', marginTop: 28, marginBottom: 7 }}>© 2014-2024 Youssef Selkani - All Rights Reserved.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>

      </Container>
    </div>

  );
}

export default App;
