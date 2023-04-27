import ProNav from './pronav';
import Detail from './proDetail';

const Portfolio = ({project}) => {
  const portfolio = project.filter((pro) => pro.group === 'portfolio');
  return (
    <>
      <ProNav />
      <Detail project={portfolio} />
    </>
  );
};

export default Portfolio;
