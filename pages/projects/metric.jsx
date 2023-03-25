import project from '../../public/projects';
import Detail from './proDetail';
import ProNav from './pronav';

const Metric = () => {
  const metric = project.filter((pro) => pro.group === 'metric');
  return (
    <>
      <ProNav />
      <Detail project = {metric} />
    </>
  );
};

export default Metric;
