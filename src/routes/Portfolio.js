import React from 'react';
import {
    Button, Container, Divider, Grid, Icon, Menu, Segment, Image, Header, List, Message, Form, Input,
    TextArea,
} from 'semantic-ui-react'
import Cta from '../comps/Cta'

const Item = ({
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


const Portfolio = () => {
    return (
        <Container>
            <div style={{ color: 'white', paddingTop: 48, paddingBottom: 48 }}>
                <h1>Portfolio</h1>
                <p>
                    Explore my recent works showcasing the diverse range of projects I've successfully delivered for clients across various industries.
                    With a focus on quality, usability, and cutting-edge technology,
                    each project in my portfolio reflects my dedication to exceeding client expectations and driving business success.
                </p>
            </div>


            <Item
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
                imageUrl={require('../assets/gallery/portfolio-1.jpg')}
            />

            <Item
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
                imageUrl={require('../assets/gallery/portfolio-2.jpg')}
            />

            <Item
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
                imageUrl={require('../assets/gallery/portfolio-3.jpg')}
            />

            <Item
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
                imageUrl={require('../assets/gallery/portfolio-4.jpg')}
            />

            <Item
                position="Full-Stack Developer"
                company="Murkstom"
                duration="Jul, 2019 - Mar, 2020"
                tasks={[
                    'Contributed to the development of a code-free platform for building native mobile applications using React, React Native, and Node',
                    'Implemented features for user management, subscriptions, and payment gateway setup',
                ]}
                buttonUrl="https://webview-ea6af.web.app/"
                buttonText="View"
                imageUrl={require('../assets/gallery/portfolio-7.jpg')}
            />

            <Segment style={{ textAlign: 'center' }} inverted padded>
                <Grid verticalAlign='middle' stackable>
                    <Grid.Column width={10}>
                        <h4>Schedule a Meeting to Discuss Your Goals</h4>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Button inverted target="_blank" href='https://calendly.com/youssefselkani'>
                            <Icon name='phone' /> Book a Call Now
                        </Button>
                    </Grid.Column>
                </Grid>
            </Segment>

            <Item
                position="Mobile App Developer"
                company="Museum of the American Arts & Crafts Movement"
                duration="Jan, 2019 - Apr, 2019"
                tasks={[
                    'Developed a production mobile app for a new art museum in Florida using React Native and SQL',
                    'Responsible for UI design and API data structure',
                ]}
                buttonUrl="#"
                buttonText="Confidential"
                imageUrl={require('../assets/gallery/portfolio-8.jpg')}
            />


            <Item
                position="Product Designer"
                company="GlobalBarter"
                duration="May, 2020 - Jun, 2020"
                tasks={[
                    'Designed a new e-commerce platform focusing on reducing waste and carbon footprint',
                    'Collaborated on the entire design process, including research, UX/UI design, and user testing',
                ]}
                buttonUrl="https://invis.io/XJNJQ946SMR"
                buttonText="View"
                imageUrl={require('../assets/gallery/portfolio-5.jpg')}
            />

            <Item
                position="Front-End Developer"
                company="CVS Health"
                duration="May, 2019 - Jun, 2019"
                tasks={[
                    'Created custom animations using Vanilla JavaScript for CVS Health marketing materials',
                    'Developed a countdown timer and custom transitions for billboard usage',
                ]}
                buttonUrl="https://cvsbanner.firebaseapp.com"
                buttonText="View"
                imageUrl={require('../assets/gallery/portfolio-9.jpg')}
            />

            <Item
                position="UX Designer"
                company="liSt"
                duration="May, 2017 - Aug, 2017"
                tasks={[
                    'Designed an e-commerce mobile app for the food and drink market, revolutionizing grocery shopping',
                    'Involved in the entire design process, including research, UX/UI design, and user testing',
                ]}
                buttonUrl="https://marvelapp.com/5h9j6b3/screen/37966689"
                buttonText="View"
                imageUrl={require('../assets/gallery/portfolio-10.jpg')}
            />

            <Item
                position="UX Designer"
                company="BidClipz"
                duration="Feb, 2016 - Apr, 2016"
                tasks={[
                    'Designed a video sharing application, enabling users to buy, sell, and broadcast various types of video content',
                    'Utilized Sketch for the design process',
                ]}
                buttonUrl="https://invis.io/2ANJQCDD76B"
                buttonText="View"
                imageUrl={require('../assets/gallery/portfolio-11.jpg')}
            />
            <Cta />
            <Divider hidden />
        </Container>
    );
};

export default Portfolio;
