import React, { useState, useEffect } from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container, Divider, Segment, Button, Grid } from 'semantic-ui-react'
import '../styles.css';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Cta from '../comps/Cta'
import { Link } from 'react-router-dom';


const Article = () => {
    const [dataArray, setDataArray] = useState([]);

    useEffect(() => {
        console.log('Fetching data...');
        const fetchData = async () => {
            try {
                const response = await fetch('https://chordgen.onrender.com/api/v1/blogjson');
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                let latestDataArray;
                const transformedData = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                console.log('Transformed Data:', transformedData);
                latestDataArray = transformedData.reverse().slice(0, 4);
                setDataArray(latestDataArray);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                console.log('Fetch complete');
            }
        };

        fetchData();
    }, []);

    
    const location = useLocation();
    const { title, article } = location.state || {};
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div style={{ minHeight: '100vh' }}>
            <Helmet>
                <title>{title} | Youssef Selkani - Official Website</title>
            </Helmet>
            <Container>
                <Segment padded='very'>
                    <div dangerouslySetInnerHTML={{ __html: article }}></div>
                </Segment>
                <Cta />
                <Grid stackable verticalAlign='middle' columns={4}>
                    {dataArray.map((item) => (
                        <Grid.Column>
                            <Segment padded fluid key={item.id}>
                                <h4>{item.title}</h4>
                                <Divider hidden />
                                <Link
                                    to={`/article/${item.id}`}
                                    state={{ title: item.title, article: item.article }}
                                >
                                    <Button fluid color='black' basic size='tiny'>Read More</Button>
                                </Link>
                            </Segment>
                        </Grid.Column>
                    ))}
                </Grid>
            </Container>
            <Divider hidden />
        </div>
    );
};

export default Article;
