import {
  FaGraduationCap,
  FaBook,
  FaLaptopCode,
  FaCertificate
} from "react-icons/fa";

function Education() {
  return (
    <>
      <style>{`
        .education{
          min-height:100vh;
          background:#050816;
          color:white;
          padding:120px 8%;
        }

        .education h1{
          text-align:center;
          font-size:50px;
          margin-bottom:15px;
        }

        .education h1 span{
          color:#7c3aed;
        }

        .subtitle{
          text-align:center;
          color:#94a3b8;
          font-size:18px;
          margin-bottom:60px;
        }

        .timeline{
          max-width:900px;
          margin:auto;
          display:flex;
          flex-direction:column;
          gap:30px;
        }

        .card{
          background:rgba(255,255,255,.05);
          border:1px solid rgba(255,255,255,.08);
          border-radius:20px;
          padding:30px;
          transition:.3s;
        }

        .card:hover{
          transform:translateY(-8px);
          border-color:#7c3aed;
          box-shadow:0 15px 35px rgba(124,58,237,.25);
        }

        .heading{
          display:flex;
          align-items:center;
          gap:15px;
          margin-bottom:20px;
        }

        .icon{
          width:60px;
          height:60px;
          border-radius:50%;
          background:#7c3aed;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:25px;
        }

        h2{
          font-size:24px;
        }

        .year{
          color:#06b6d4;
          margin-top:5px;
          font-weight:bold;
        }

        .description{
          color:#cbd5e1;
          line-height:1.8;
        }

        .subjects{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
          gap:20px;
          margin-top:30px;
        }

        .subject{
          background:#111827;
          border-radius:12px;
          padding:18px;
          text-align:center;
          transition:.3s;
        }

        .subject:hover{
          background:#7c3aed;
        }

        .subject svg{
          font-size:28px;
          margin-bottom:10px;
          color:#06b6d4;
        }

        @media(max-width:768px){

          .education h1{
            font-size:40px;
          }

          .subtitle{
            font-size:16px;
          }

        }
      `}</style>

      <section className="education">

        <h1>
          My <span>Education</span>
        </h1>

        <p className="subtitle">
          My academic journey and the technologies I have learned.
        </p>

        <div className="timeline">

          <div className="card">

            <div className="heading">

              <div className="icon">
                <FaGraduationCap />
              </div>

              <div>
                <h2>Diploma in Computer Engineering</h2>
                <div className="year">
                  Third Year Student
                </div>
              </div>

            </div>

            <p className="description">
              I am currently pursuing a Diploma in Computer Engineering.
              Throughout my diploma, I have gained knowledge in programming,
              databases, software development, web technologies, data
              structures and networking while building practical projects.
            </p>

          </div>

        </div>

        <div className="subjects">

          <div className="subject">
            <FaLaptopCode />
            <h3>Programming</h3>
            <p>C, C++, Java, Python</p>
          </div>

          <div className="subject">
            <FaBook />
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>

          <div className="subject">
            <FaCertificate />
            <h3>Database</h3>
            <p>DBMS & SQL</p>
          </div>

          <div className="subject">
            <FaBook />
            <h3>Problem Solving</h3>
            <p>DSA</p>
          </div>

        </div>

      </section>

    </>
  );
}

export default Education;