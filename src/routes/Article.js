import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container, Divider, Segment } from 'semantic-ui-react'
import '../styles.css';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Cta from '../comps/Cta'

const Article = () => {
    const location = useLocation();
    const { title, article } = location.state || {};

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
            </Container>
            <Divider hidden />
        </div>
    );
};

export default Article;
