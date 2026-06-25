import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";

function Home() {
  const roles = [
    "React Developer",
    "Java Developer",
    "Frontend Developer",
    "Problem Solver"
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timer = setTimeout(() => {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1800);

      return () => clearTimeout(timer);
    }
  }, [charIndex, roleIndex]);

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:'Segoe UI',sans-serif;
        }

        body{
          background:#050816;
          overflow-x:hidden;
        }

        .hero{
          min-height:100vh;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:0 10%;
          position:relative;
          overflow:hidden;
          background:
          radial-gradient(circle at top left,#7c3aed33,transparent 40%),
          radial-gradient(circle at bottom right,#06b6d433,transparent 40%),
          #050816;
        }

        .content{
          max-width:800px;
          text-align:center;
          z-index:2;
        }

        .hello{
          color:#06b6d4;
          letter-spacing:2px;
          font-size:18px;
          margin-bottom:15px;
        }

        h1{
          font-size:70px;
          color:white;
          margin-bottom:15px;
          line-height:1.1;
        }

        h1 span{
          background:linear-gradient(90deg,#7c3aed,#06b6d4);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .subtitle{
          font-size:30px;
          color:#7c3aed;
          min-height:40px;
          margin-bottom:20px;
          font-weight:600;
        }

        .cursor{
          color:white;
          animation:blink .7s infinite;
        }

        @keyframes blink{
          50%{
            opacity:0;
          }
        }

        .desc{
          color:#cbd5e1;
          font-size:18px;
          line-height:1.8;
          margin-bottom:40px;
        }

        .buttons{
          display:flex;
          justify-content:center;
          gap:20px;
          flex-wrap:wrap;
        }

        .btn{
          padding:15px 32px;
          border-radius:50px;
          text-decoration:none;
          font-size:17px;
          font-weight:600;
          transition:.4s;
          display:flex;
          align-items:center;
          gap:10px;
        }

        .primary{
          background:#7c3aed;
          color:white;
        }

        .primary:hover{
          background:#6d28d9;
          transform:translateY(-5px);
          box-shadow:0 10px 25px rgba(124,58,237,.4);
        }

        .secondary{
          border:2px solid #06b6d4;
          color:#06b6d4;
        }

        .secondary:hover{
          background:#06b6d4;
          color:white;
          transform:translateY(-5px);
        }

        .circle1,
        .circle2{
          position:absolute;
          border-radius:50%;
          filter:blur(90px);
          animation:float 8s ease-in-out infinite;
        }

        .circle1{
          width:250px;
          height:250px;
          background:#7c3aed;
          top:-60px;
          left:-60px;
        }

        .circle2{
          width:300px;
          height:300px;
          background:#06b6d4;
          bottom:-80px;
          right:-80px;
        }

        @keyframes float{
          50%{
            transform:translateY(40px);
          }
        }

        @media(max-width:768px){

          h1{
            font-size:45px;
          }

          .subtitle{
            font-size:24px;
          }

          .desc{
            font-size:16px;
          }

        }
      `}</style>

      <section className="hero">

        <div className="circle1"></div>
        <div className="circle2"></div>

        <div className="content">

          <p className="hello">
            HELLO, I'M
          </p>

          <h1>
            Atharva <span>Patole</span>
          </h1>

          <div className="subtitle">
            {text}
            <span className="cursor">|</span>
          </div>

          <p className="desc">
            I am a Diploma 3rd Year Computer Engineering student passionate
            about Web Development, Programming and Problem Solving.
            I enjoy building responsive websites using React and continuously
            improving my skills in modern technologies.
          </p>

          <div className="buttons">

            <Link to="/projects" className="btn primary">
              View Projects
              <FaArrowRight />
            </Link>

            <Link to="/contact" className="btn secondary">
              Contact Me
              <FaEnvelope />
            </Link>

          </div>

        </div>

      </section>
    </>
  );
}

export default Home;