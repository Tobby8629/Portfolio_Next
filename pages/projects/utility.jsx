import ProNav from './pronav';
import Detail from './proDetail';

const Utility = ({project}) => {
  const utility = project.filter((pro) => pro.group === 'utility');
  return (
    <>
      <ProNav />
      <Detail project = {utility} />
    </>

  );
};



export default Utility;
