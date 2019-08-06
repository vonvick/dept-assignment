import React from 'react';
import NextHead from 'next/head';

const Head = () => {
  return (
    <NextHead>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1"/>

      <link
        href="https://fonts.googleapis.com/css?family=Teko:300,400,500,600,700&display=swap"
        rel="stylesheet"/>
      <style jsx global>{`
        html {
          box-sizing: border-box;
          font-family: 'Teko', sans-serif;
        }

        body {
          font-family: 'Teko', sans-serif;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        .container {
          max-width: 1140px;
          margin: 0 auto;
          padding-left: 10px;
          padding-right: 10px;
          clear: both
        }

        .cases-container {
          margin-top: 50px;
          position: relative;
          bottom: 140px;
        }
        h1 {
          font-size: 32px;
        }
        h2 {
          font-size: 28px;
        }
        h3 {
          font-size: 24px;
        }
        h4 {
          font-size: 22px;
        }
        h5 {
          font-size: 20px;
        }
        h6 {
          font-size: 18px;
        }

      `}</style>
    </NextHead>
  )
};

export default Head;
