import React, { useState, useEffect } from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import {
    Button, Container, Divider, Grid, Icon, Menu, Segment, Image, Header, List, Message, Form, Input,
    TextArea,
} from 'semantic-ui-react'
import '../styles.css';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [dataArray, setDataArray] = useState([]);

    useEffect(() => {
        console.log('Fetching data...');
        const fetchData = async () => {
            try {
                const response = await fetch('https://chordgen.onrender.com/api/v1/blogjson');
                console.log('Response received');
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                console.log('Data fetched:', data);

                // Ensure that the fetched data is an array
                if (Array.isArray(data)) {
                    // Reverse the array to inverse the order
                    setDataArray(data.reverse());
                } else {
                    // Transform the object into an array
                    const dataArray = Object.keys(data).map(key => ({
                        id: key,
                        ...data[key]
                    }));
                    console.log('Transformed Data:', dataArray);
                    // Reverse the array to inverse the order
                    setDataArray(dataArray.reverse());
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                // setError(error.message);
            } finally {
                // setLoading(false);
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
                <h1 style={{ textAlign: 'center', marginTop: 48, marginBottom: 48 }}>Blog</h1>
                {dataArray.map((item) => (
                    <Segment padded='very' key={item.id}>
                        <div dangerouslySetInnerHTML={{ __html: item.article.substring(0, 280) + '...' }}></div>
                        <Divider hidden />
                        <Link
                            to={`/article/${item.id}`}
                            state={{ title: item.title, article: item.article }}
                        >
                            <Button size='tiny'>Read More</Button>
                        </Link>
                    </Segment>
                ))}
            </Container>
        </div>
    );
};

export default Blog;