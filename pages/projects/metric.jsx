import Detail from './proDetail';
import ProNav from './pronav';

const Metric = ({project}) => {
  const metric = project.filter((pro) => pro.group === 'metric');
  return (
    <>
      <ProNav />
      <Detail project = {metric} />
    </>
  );
};

export default Metric;
