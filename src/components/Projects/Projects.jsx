import { Link } from 'react-router-dom';

function Projects() {

  const projects = [
    {
      name: "MTG Keyword Finder",
      path: "/projects/MTGKeywordFinder"
    },
    {
      name: "Progetto 2",
      path: "/projects/progetto2"
    },
    {
      name: "Progetto 3",
      path: "/projects/progetto3"
    }
    
  ];

  return (
    <div>
      <h1>Elenco dei Progetti</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <Link to={project.path}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
