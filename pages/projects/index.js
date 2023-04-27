import Detail from './proDetail';
import ProNav from './pronav';

const Projects = ({project}) => {
  
return (
  <>
    <ProNav />
    <Detail  project = {project}/>
  </>

)};

export default Projects;
