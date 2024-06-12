import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container, Divider, Segment, Button, Grid, Loader, Image } from 'semantic-ui-react'
import '../styles.css';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Cta from '../comps/Cta'
import { Link } from 'react-router-dom';

const Article = () => {
    const [dataArray, setDataArray] = useState([]);
    const [article, setArticle] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        console.log('Fetching data...');
        const fetchData = async () => {
            try {
                const response = await fetch('https://chordgen.onrender.com/api/v1/blogjson');
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                console.log('data :', data);
                let latestDataArray;
                const transformedData = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }));
                const foundArticle = transformedData.find(item => item.id === id);
                setArticle(foundArticle);
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
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div style={{ minHeight: '100vh' }}>
            {article && <Helmet>
                <title>{article.title} | Youssef Selkani - Official Website</title>
            </Helmet>
            }
            <Container>
                {article &&
                    <div>
                        <Divider hidden />
                        <h1 style={{ textAlign: 'center' }}>{article.title}</h1>
                        <Divider hidden />
                        <Image src={article.imageUrl} fluid style={{ height: 500, objectFit: 'cover' }} />
                    </div>
                }
                <Segment padded='very' style={{ marginTop: '-5vh', borderRadius: 0 }}>
                    {article ? <div dangerouslySetInnerHTML={{ __html: article.article }}></div> :
                        <Loader active inline='centered' size='small' />}
                </Segment>
                <Cta />

                <Grid stackable verticalAlign='middle' columns={4}>
                    {dataArray.map((item) => (
                        <Grid.Column>
                            <Segment padded fluid key={item.id}>
                                <Image src={item.imageUrl} fluid style={{ height: 100, objectFit: 'cover' }} />
                                <h4>{item.title}</h4>
                                <Link
                                    to={`/article/${item.id}`}
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
