import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Button, Container, Divider, Grid, Icon, Menu, Segment, Image, Header, List } from 'semantic-ui-react'

const Portfolio = ({
  position,
  company,
  duration,
  tasks,
  buttonUrl,
  buttonText,
  imageUrl,
}) => {
  return (
    <Segment padded='very' fluid inverted>
      <Grid verticalAlign='middle' stackable>
        <Grid.Column width={8}>
          <h4>{position} at {company}</h4>
          <em>{duration}</em>
          <Divider />
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
          <Divider hidden />
          <Button href={buttonUrl} basic inverted target="_blank">
            {buttonText}
          </Button>
        </Grid.Column>
        <Grid.Column width={8}>
          <Image src={imageUrl} fluid />
        </Grid.Column>
      </Grid>
    </Segment>
  );
};


function App() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', minHeight: '100vh',
      // backgroundColor: '#163172', 
      background: 'linear-gradient(326deg, rgba(30,3,66,1) 0%, rgba(14,70,163,1) 62%)',

      color: '#F6F6F6', paddingTop: 28
    }}>

      <br />
      <Container inverted>
        <Menu inverted pointing secondary style={{ borderColor: 'transparent' }}>
          <Menu.Item active>
            Youssef Selkani
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item target="_blank" href='mailto:usfslk@icloud.com'>
              Contact
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment inverted fluid style={{ color: '#F6F6F6', minHeight: '90vh', backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
          <div>
            <h3 style={{ textAlign: 'center' }}>Freelance Software Developer | Creating Custom Solutions for SMEs ✨</h3>
            <Divider hidden />
            <Grid fluid stackable verticalAlign='middle'>
              <Grid.Column width={8} textAlign='center'>
                <Image circular centered src={require('./assets/hero.jpg')} size='small' />
                <Divider hidden />
                <Button color='black' target="_blank" href='https://calendly.com/youssefselkani'>
                  <Icon name='clock' /> Schedule Meeting
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

            <Grid columns={4} inverted padded fluid stackable verticalAlign='middle'>
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
          </div>

        </Segment>


        <h2>Skills</h2>
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

        <h2>Employment History</h2>
        <Divider hidden />

        <Portfolio
          position="Web Developer"
          company="Trajectory US"
          duration="Oct, 2023 - Nov, 2023"
          tasks={[
            'Implemented the UI with a focus on a seamless user experience using Svelte',
            'Translated design concepts into functional code, utilizing PrimateJS',
            'Deployed the fully developed marketing site, ensuring its accessibility',
          ]}
          buttonUrl="https://trajectory.us.com/"
          buttonText="View"
          imageUrl={require('./assets/gallery/portfolio-1.jpg')}
        />

        <Portfolio
          position="Mobile App Developer"
          company="C.F. Print"
          duration="Feb, 2021 - May, 2022"
          tasks={[
            'Developed a mobile app using React Native, Node, and Firebase that allows users to print tickets using Bluetooth printers',
            'Integrated web hook to retrieve custom data from various third-party services',
            'Deployed the app on both Google Play and Apple Store',
          ]}
          buttonUrl="https://play.google.com/store/apps/details?id=com.usfslk.cfprint"
          buttonText="View"
          imageUrl={require('./assets/gallery/portfolio-2.jpg')}
        />

        <Portfolio
          position="Mobile App Developer"
          company="Rthath One"
          duration="Jan, 2021 - May, 2021"
          tasks={[
            'Built an e-commerce app from scratch using React Native, WordPress, and WooCommerce API',
            'Developed a Node server for authentication, data handling, and orders/payment processing',
            'Successfully deployed the app on Google Play',
          ]}
          buttonUrl="https://play.google.com/store/apps/details?id=com.rthathone"
          buttonText="View"
          imageUrl={require('./assets/gallery/portfolio-3.jpg')}
        />

        <Portfolio
          position="Mobile App Developer"
          company="Netflix"
          duration="Apr, 2020 - Aug, 2020"
          tasks={[
            'Created a studio tour companion app for a media company using React Native and Python',
            'Integrated APIs to search and load individual studio profiles from survey databases',
            'Implemented features allowing users to verify, annotate, update sections of the profile, and add photos and voice notes',
            'Due to NDA restrictions, code samples are not available, but you can view simulator screenshots below',
          ]}
          buttonUrl="https://imgur.com/a/9mCawqU"
          buttonText="View"
          imageUrl={require('./assets/gallery/portfolio-4.jpg')}
        />

        <Portfolio
          position="Full-Stack Developer"
          company="Murkstom"
          duration="Jul, 2019 - Mar, 2020"
          tasks={[
            'Contributed to the development of a code-free platform for building native mobile applications using React, React Native, and Node',
            'Implemented features for user management, subscriptions, and payment gateway setup',
          ]}
          buttonUrl="https://webview-ea6af.web.app/"
          buttonText="View"
          imageUrl={require('./assets/gallery/portfolio-7.jpg')}
        />

        <Portfolio
          position="Mobile App Developer"
          company="Museum of the American Arts & Crafts Movement"
          duration="Jan, 2019 - Apr, 2019"
          tasks={[
            'Developed a production mobile app for a new art museum in Florida using React Native and SQL',
            'Responsible for UI design and API data structure',
          ]}
          buttonUrl="#"
          buttonText="Confidential"
          imageUrl={require('./assets/gallery/portfolio-8.jpg')}
        />


        <Portfolio
          position="Product Designer"
          company="GlobalBarter"
          duration="May, 2020 - Jun, 2020"
          tasks={[
            'Designed a new e-commerce platform focusing on reducing waste and carbon footprint',
            'Collaborated on the entire design process, including research, UX/UI design, and user testing',
          ]}
          buttonUrl="https://invis.io/XJNJQ946SMR"
          buttonText="View"
          imageUrl={require('./assets/gallery/portfolio-5.jpg')}
        />

        <Portfolio
          position="Front-End Developer"
          company="CVS Health"
          duration="May, 2019 - Jun, 2019"
          tasks={[
            'Created custom animations using Vanilla JavaScript for CVS Health marketing materials',
            'Developed a countdown timer and custom transitions for billboard usage',
          ]}
          buttonUrl="https://cvsbanner.firebaseapp.com"
          buttonText="View"
          imageUrl={require('./assets/gallery/portfolio-9.jpg')}
        />

        <Portfolio
          position="UX Designer"
          company="liSt"
          duration="May, 2017 - Aug, 2017"
          tasks={[
            'Designed an e-commerce mobile app for the food and drink market, revolutionizing grocery shopping',
            'Involved in the entire design process, including research, UX/UI design, and user testing',
          ]}
          buttonUrl="https://marvelapp.com/5h9j6b3/screen/37966689"
          buttonText="View"
          imageUrl={require('./assets/gallery/portfolio-10.jpg')}
        />

        <Portfolio
          position="UX Designer"
          company="BidClipz"
          duration="Feb, 2016 - Apr, 2016"
          tasks={[
            'Designed a video sharing application, enabling users to buy, sell, and broadcast various types of video content',
            'Utilized Sketch for the design process',
          ]}
          buttonUrl="https://invis.io/2ANJQCDD76B"
          buttonText="View"
          imageUrl={require('./assets/gallery/portfolio-11.jpg')}
        />


        <h2>Education</h2>
        <Divider hidden />

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

        <h2>Languages</h2>
        <Divider hidden />

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
