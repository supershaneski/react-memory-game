import React from 'react';
import App from 'next/app';
import Head from 'next/head';

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        const siteTitle = process.env.siteTitle;
        return (
            <>
            <Head>
                <title>{ siteTitle }</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Component { ...pageProps } />
            </>
        )
    }
}