import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "TechShop",
      tech: "React • Supabase • CSS",
      desc:
        "A modern e-commerce website with product listing, add product page and responsive user interface.",
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      tech: "React • JavaScript • CSS",
      desc:
        "A personal portfolio showcasing my skills, education, projects and contact information.",
      github: "#",
      demo: "#"
    },
    {
      title: "Student Management System",
      tech: "Java • MySQL",
      desc:
        "A Java application for managing student records, attendance and academic information.",
      github: "#",
      demo: "#"
    },
    {
      title: "Weather App",
      tech: "HTML • CSS • JavaScript",
      desc:
        "A responsive weather application that displays real-time weather information using an API.",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <>
      <style>{`
        .projects{
          min-height:100vh;
          background:#050816;
          color:white;
          padding:120px 8%;
        }

        .projects h1{
          text-align:center;
          font-size:50px;
          margin-bottom:15px;
        }

        .projects h1 span{
          color:#7c3aed;
        }

        .projects p.title{
          text-align:center;
          color:#94a3b8;
          margin-bottom:60px;
          font-size:18px;
        }

        .project-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
          gap:30px;
        }

        .card{
          background:rgba(255,255,255,.05);
          border:1px solid rgba(255,255,255,.08);
          border-radius:20px;
          padding:30px;
          transition:.35s;
          backdrop-filter:blur(10px);
        }

        .card:hover{
          transform:translateY(-10px);
          border-color:#7c3aed;
          box-shadow:0 15px 35px rgba(124,58,237,.25);
        }

        .card h2{
          margin-bottom:15px;
          color:#7c3aed;
        }

        .tech{
          color:#06b6d4;
          margin-bottom:15px;
          font-weight:600;
        }

        .desc{
          color:#cbd5e1;
          line-height:1.7;
          margin-bottom:25px;
        }

        .buttons{
          display:flex;
          gap:15px;
          flex-wrap:wrap;
        }

        .btn{
          display:flex;
          align-items:center;
          gap:8px;
          padding:12px 18px;
          border-radius:10px;
          text-decoration:none;
          font-weight:600;
          transition:.3s;
        }

        .github{
          background:#7c3aed;
          color:white;
        }

        .github:hover{
          background:#6d28d9;
        }

        .demo{
          border:2px solid #06b6d4;
          color:#06b6d4;
        }

        .demo:hover{
          background:#06b6d4;
          color:white;
        }

        @media(max-width:768px){
          .projects h1{
            font-size:40px;
          }

          .projects p.title{
            font-size:16px;
          }
        }
      `}</style>

      <section className="projects">

        <h1>
          My <span>Projects</span>
        </h1>

        <p className="title">
          Some of the projects I have developed while learning programming and web development.
        </p>

        <div className="project-grid">

          {projects.map((project, index) => (
            <div className="card" key={index}>

              <h2>{project.title}</h2>

              <div className="tech">
                {project.tech}
              </div>

              <p className="desc">
                {project.desc}
              </p>

              <div className="buttons">

                <a
                  href={project.github}
                  className="btn github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="btn demo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>
          ))}

        </div>

      </section>
    </>
  );
}

export default Projects;