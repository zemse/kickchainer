// jshint esversion: 6
import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header.js';

export default (props) => {
  return (
    <Container>
      <Head>
        <title>KickChainer dApp</title>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
        <link rel="stylesheet" href="/static/style.css"/>
        <meta name="viewport" content="initial-scale=0.9,width=device-width" />
      </Head>

      <Header />
      {props.children}
      
    </Container>
  );
};
