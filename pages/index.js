import { promises as fs } from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Head from 'next/head';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Next.js - Index</title>
      </Head>
      <h1>Hello, world!</h1>
    </div>
  );
}

export async function getStaticProps() {
  const app = ReactDOMServer.renderToString(<Index />);

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Next.js - Index</title>
      </head>
      <body>
        <div id="root">${app}</div>
      </body>
    </html>
  `;

  await fs.writeFile(path.resolve('public', 'index.html'), html, 'utf-8');

  return { props: {} };
}
