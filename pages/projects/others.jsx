import project from '../api/projects';
import ProNav from './pronav';
import Detail from './proDetail';

const Utility = () => {
  const others = project.filter((pro) => pro.group === 'others');
  return (
    <>
      <ProNav />
      <Detail project = {others} />
    </>
  );
};

export default Utility;
