import Link from 'next/link';
import project from '../../public/projects';
import ProNav from './pronav';
import Detail from './proDetail';

const Portfolio = () => {
  const portfolio = project.filter((pro) => pro.group === 'portfolio');
  return (
    <>
      <ProNav />
      <Detail project={portfolio} />
    </>
  );
};

export default Portfolio;
