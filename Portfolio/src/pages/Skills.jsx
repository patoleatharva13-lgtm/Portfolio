import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaCode
} from "react-icons/fa";

function Skills() {

  const skills = [
    { icon: <FaCode />, name: "C", level: "90%" },
    { icon: <FaCode />, name: "C++", level: "85%" },
    { icon: <FaJava />, name: "Java", level: "85%" },
    { icon: <FaJs />, name: "JavaScript", level: "80%" },
    { icon: <FaHtml5 />, name: "HTML5", level: "95%" },
    { icon: <FaCss3Alt />, name: "CSS3", level: "90%" },
    { icon: <FaReact />, name: "React", level: "80%" },
    { icon: <FaPython />, name: "Python", level: "75%" },
    { icon: <FaDatabase />, name: "DBMS", level: "85%" },
    { icon: <FaCode />, name: "DSA", level: "80%" },
    { icon: <FaGitAlt />, name: "Git", level: "75%" },
    { icon: <FaGithub />, name: "GitHub", level: "80%" }
  ];

  return (
    <>
      <style>{`

      .skills{
        min-height:100vh;
        background:#050816;
        color:white;
        padding:120px 8%;
      }

      .skills-title{
        text-align:center;
        font-size:50px;
        margin-bottom:15px;
      }

      .skills-title span{
        color:#7c3aed;
      }

      .skills-subtitle{
        text-align:center;
        color:#94a3b8;
        margin-bottom:60px;
        font-size:18px;
      }

      .skills-grid{
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
        gap:25px;
      }

      .skill-card{
        background:rgba(255,255,255,.05);
        border:1px solid rgba(255,255,255,.08);
        border-radius:20px;
        padding:25px;
        transition:.4s;
      }

      .skill-card:hover{
        transform:translateY(-8px);
        border-color:#7c3aed;
        box-shadow:0 10px 30px rgba(124,58,237,.25);
      }

      .skill-top{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:18px;
      }

      .skill-left{
        display:flex;
        align-items:center;
        gap:12px;
      }

      .skill-icon{
        font-size:28px;
        color:#7c3aed;
      }

      .skill-name{
        font-size:20px;
        font-weight:600;
      }

      .skill-level{
        color:#06b6d4;
        font-weight:bold;
      }

      .bar{
        width:100%;
        height:10px;
        background:#1e293b;
        border-radius:20px;
        overflow:hidden;
      }

      .fill{
        height:100%;
        background:linear-gradient(90deg,#7c3aed,#06b6d4);
        border-radius:20px;
      }

      @media(max-width:768px){

        .skills-title{
          font-size:40px;
        }

        .skills-subtitle{
          font-size:16px;
        }

      }

      `}</style>

      <section className="skills">

        <h1 className="skills-title">
          My <span>Skills</span>
        </h1>

        <p className="skills-subtitle">
          Technologies and programming languages I have learned during my diploma journey.
        </p>

        <div className="skills-grid">

          {skills.map((skill,index)=>(
            <div className="skill-card" key={index}>

              <div className="skill-top">

                <div className="skill-left">
                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <div className="skill-name">
                    {skill.name}
                  </div>
                </div>

                <div className="skill-level">
                  {skill.level}
                </div>

              </div>

              <div className="bar">
                <div
                  className="fill"
                  style={{width:skill.level}}
                ></div>
              </div>

            </div>
          ))}

        </div>

      </section>

    </>
  );
}

export default Skills;