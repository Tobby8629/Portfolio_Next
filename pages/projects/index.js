import Detail from './proDetail';
import ProNav from './pronav';
import project from '../../public/projects';

const Projects = () => (
  <>
    <ProNav />
    <Detail  project = {project}/>
  </>

);

export default Projects;
