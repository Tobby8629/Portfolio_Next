import Abt from './Abt';

const About = () => (
  <>
    <header
      className="header"
      style={{
        backgroundImage:
       'linear-gradient(rgba(63, 63, 63, 0.295),rgba(63, 63, 63, 0.295)),url(/about.jpg)',
      }}
    >
      <h2 className='mobile'>About</h2>
      <div className='desk'>
        <h2 className='head'>About tobby</h2>
        <Abt />
      </div>
    </header>
    <main className="abt">
      <h2 className='head'>About tobby</h2>
      <Abt />
    </main>

  </>
);

export default About;
