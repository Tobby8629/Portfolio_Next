import project from '@/pages/api/projects';
import Detail from './proDetail';
import ProNav from './pronav';

const Projects = () => {
  
return (
  <>
    <ProNav />
    <Detail  project = {project}/>
  </>

)};

export default Projects;
