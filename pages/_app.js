import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import Layout from '../components/layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {

  const [project, setprojects] = useState([])
  useEffect (()=>{
   const pro = async () => {
     const response = await fetch('/projects.json')
     const data = await response.json();
     setprojects(data.projects)
   }
   pro()
  },[])
  return (
    <>
      <div className='container'>
        <Script src="https://kit.fontawesome.com/196c781b0b.js" crossOrigin="anonymous" />
      </div>
      <Layout>
        <Component {...pageProps} project = {project}/>
      </Layout>
    </>

  );
}

