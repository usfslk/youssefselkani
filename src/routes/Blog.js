import React, { useState, useEffect } from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import {
    Button, Container, Divider, Grid, Icon, Menu, Segment, Image, Header, List, Message, Form, Input,
    TextArea,
    Loader,
} from 'semantic-ui-react'
import '../styles.css';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [dataArray, setDataArray] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('https://chordgen.onrender.com/api/v1/blogjson');
                console.log('Response received');
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                console.log('Data fetched:', data);

                const dataArray = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                setDataArray(dataArray.reverse());
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message);
            } finally {
                setLoading(false);
                console.log('Fetch complete');
            }
        };
        fetchData();
    }, []);

    return (
        <div style={{ minHeight: '100vh' }}>
            <Helmet>
                <title>Blog | Youssef Selkani - Official Website</title>
            </Helmet>
            <Container>
                {loading && <Loader inline='centered' size='small' active />}
                {error && <Message error>{error}</Message>}
                <Divider hidden />
                {dataArray.map((item) => (
                    <Segment padded key={item.id}>
                        <Grid stackable verticalAlign='middle'>
                            <Grid.Column width={6}>
                                <Image src={item.imageUrl} fluid style={{height: 240, objectFit: 'cover'}} />
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <div dangerouslySetInnerHTML={{ __html: item.article.substring(0, 280) + '...' }}></div>
                                <Divider hidden />
                                <Link
                                    to={`/article/${item.id}`}
                                >
                                    <Button size='tiny' color='black' basic>Read More</Button>
                                </Link>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                ))}
            </Container>
        </div>
    );
};

export default Blog;
