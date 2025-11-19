import ProjectCard from '../../components/ProjectCard';
import projects from '../../assets/projects.json';

const ProjectsPage = () => {
  return (
    <div className='flex flex-col max-w-4xl mx-auto gap-8 bg-background p-4 md:p-8 w-full text-text'>
      <h2 className='font-bold text-3xl text-accent text-center md:text-4xl'>
        Projects
      </h2>

      {projects.map((project, index: number) => (
        <ProjectCard data={project} key={index} even={index % 2 === 0} />
      ))}
    </div>
  );
};

export default ProjectsPage;
