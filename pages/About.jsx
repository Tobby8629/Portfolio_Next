import Abt from './Abt';

const About = () => (
  <>
    <header
      className="header about"
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
