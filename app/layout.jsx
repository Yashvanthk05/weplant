"use client"
import React from 'react';
import './globals.css';
import {Helmet} from 'react-helmet';

export default function RootLayout({ children }) {
  return (
    <>
    <Helmet>
        <title>WePlant</title>
        <meta name="description" content="AI Driven Crop Disease Prediction" />
    </Helmet>
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
    </>
  );
}
