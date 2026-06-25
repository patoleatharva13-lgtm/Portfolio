import { FaUserGraduate, FaLaptopCode, FaLightbulb, FaCode } from "react-icons/fa";

function About() {
  return (
    <>
      <style>{`
        .about{
          min-height:100vh;
          background:#050816;
          color:white;
          padding:120px 8%;
          display:flex;
          flex-direction:column;
          justify-content:center;
        }

        .title{
          text-align:center;
          font-size:50px;
          margin-bottom:20px;
        }

        .title span{
          color:#7c3aed;
        }

        .subtitle{
          text-align:center;
          color:#94a3b8;
          max-width:800px;
          margin:0 auto 60px;
          font-size:18px;
          line-height:1.8;
        }

        .about-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
          gap:30px;
        }

        .card{
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:20px;
          padding:30px;
          transition:.4s;
          backdrop-filter:blur(12px);
        }

        .card:hover{
          transform:translateY(-10px);
          border-color:#7c3aed;
          box-shadow:0 15px 40px rgba(124,58,237,.25);
        }

        .icon{
          width:65px;
          height:65px;
          border-radius:50%;
          background:#7c3aed;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:28px;
          margin-bottom:20px;
        }

        h3{
          margin-bottom:15px;
          font-size:24px;
        }

        p{
          color:#cbd5e1;
          line-height:1.8;
          font-size:16px;
        }

        .stats{
          margin-top:60px;
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
          gap:25px;
        }

        .stat-card{
          background:#111827;
          padding:30px;
          border-radius:18px;
          text-align:center;
          transition:.3s;
        }

        .stat-card:hover{
          background:#7c3aed;
          transform:scale(1.05);
        }

        .number{
          font-size:42px;
          font-weight:bold;
          color:#06b6d4;
        }

        .label{
          margin-top:10px;
          color:#e2e8f0;
          font-size:17px;
        }

        @media(max-width:768px){

          .title{
            font-size:38px;
          }

          .subtitle{
            font-size:16px;
          }

        }
      `}</style>

      <section className="about">

        <h1 className="title">
          About <span>Me</span>
        </h1>

        <p className="subtitle">
          I'm a Diploma 3rd Year Computer Engineering student who enjoys
          learning new technologies and creating modern web applications.
          I love solving programming problems and continuously improving my
          development skills.
        </p>

        <div className="about-grid">

          <div className="card">
            <div className="icon">
              <FaUserGraduate />
            </div>

            <h3>Education</h3>

            <p>
              Currently pursuing Diploma in Computer Engineering.
              My academic journey has helped me build a strong foundation
              in programming, databases, networking and software development.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <FaLaptopCode />
            </div>

            <h3>Web Development</h3>

            <p>
              I enjoy creating responsive and interactive websites using
              HTML, CSS, JavaScript and React. I focus on clean UI,
              reusable components and user-friendly experiences.
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <FaLightbulb />
            </div>

            <h3>Career Goal</h3>

            <p>
              My goal is to become a skilled Full Stack Developer,
              contribute to innovative projects and continuously learn
              modern technologies while solving real-world problems.
            </p>
          </div>

        </div>

        <div className="stats">

          <div className="stat-card">
            <div className="number">10+</div>
            <div className="label">Technologies Learned</div>
          </div>

          <div className="stat-card">
            <div className="number">8+</div>
            <div className="label">Programming Languages</div>
          </div>

          <div className="stat-card">
            <div className="number">5+</div>
            <div className="label">Projects Built</div>
          </div>

          <div className="stat-card">
            <div className="number">
              <FaCode />
            </div>
            <div className="label">Always Learning</div>
          </div>

        </div>

      </section>
    </>
  );
}

export default About;