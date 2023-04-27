import ProNav from './pronav';
import Detail from './proDetail';

const Other = ({project}) => {
  const others = project.filter((pro) => pro.group === 'others');
  return (
    <>
      <ProNav />
      <Detail project = {others} />
    </>
  );
};

export default Other;
