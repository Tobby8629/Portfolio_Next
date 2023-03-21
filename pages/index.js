import Head from 'next/head';
import Abt from './Abt';

export default function Home() {
  return (
    <>
      <Head>
        <title> Tobby || Home</title>
      </Head>
      <header className="header" style={{ backgroundImage: 'linear-gradient(#43434372, #43434372),url(/home.jpg)' }}>
        <h3>
          {' '}
          <span className="hello">Hello! </span>
          My name is oluwatobby, and i am
          {' '}
          <span className="duty" />
        </h3>
        {/* <p>
        Lorem Ipsum is simply dummy text of the printing and
         typesetting industry.
        Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type
        and scrambled it to make a type specimen boo</p> */}
      </header>
      <div className="main">
        <h2>Want to Know about Tobby?</h2>
        <Abt />
      </div>
    </>
  );
}
