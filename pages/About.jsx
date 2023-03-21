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
      <h2>About</h2>
    </header>
    <main className="main">
      <Abt />
    </main>

  </>
);

export default About;
