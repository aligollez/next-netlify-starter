import { promises as fs } from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';

export default function Index() {
  return <div>Hello, world!</div>;
}

export async function getStaticProps() {
  // index.html dosyasının içeriğini oluştur
  const htmlContent = renderToString(<Index />);

  // index.html dosyasını oluşturulan içerikle birlikte yaz
  await fs.writeFile(path.join(process.cwd(), 'public', 'index.html'), htmlContent, 'utf-8');

  return {
    props: {},
  };
}