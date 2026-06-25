import { Link, useLocation } from "react-router-dom";
import { FaCode } from "react-icons/fa";

function Navbar() {
  const location = useLocation();

  const active = (path) =>
    location.pathname === path ? "nav-link active" : "nav-link";

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:'Segoe UI',sans-serif;
        }

        nav{
          position:fixed;
          top:0;
          left:0;
          width:100%;
          height:80px;
          background:rgba(15,15,25,0.8);
          backdrop-filter:blur(12px);
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:0 8%;
          z-index:1000;
          border-bottom:1px solid rgba(255,255,255,0.08);
        }

        .logo{
          display:flex;
          align-items:center;
          gap:10px;
          color:#7c3aed;
          font-size:1.6rem;
          font-weight:bold;
          text-decoration:none;
        }

        .logo span{
          color:white;
        }

        .nav-links{
          display:flex;
          gap:35px;
        }

        .nav-link{
          color:white;
          text-decoration:none;
          font-size:16px;
          transition:.3s;
          position:relative;
        }

        .nav-link:hover{
          color:#7c3aed;
        }

        .nav-link::after{
          content:'';
          position:absolute;
          left:0;
          bottom:-6px;
          width:0%;
          height:2px;
          background:#7c3aed;
          transition:.3s;
        }

        .nav-link:hover::after{
          width:100%;
        }

        .active{
          color:#7c3aed;
        }

        .active::after{
          width:100%;
        }

        @media(max-width:900px){
          nav{
            flex-direction:column;
            height:auto;
            padding:20px;
          }

          .nav-links{
            margin-top:15px;
            flex-wrap:wrap;
            justify-content:center;
            gap:18px;
          }
        }
      `}</style>

      <nav>
        <Link to="/" className="logo">
          <FaCode />
          <span>AP</span>
        </Link>

        <div className="nav-links">
          <Link className={active("/")} to="/">
            Home
          </Link>

          <Link className={active("/about")} to="/about">
            About
          </Link>

          <Link className={active("/skills")} to="/skills">
            Skills
          </Link>

          <Link className={active("/projects")} to="/projects">
            Projects
          </Link>

          <Link className={active("/education")} to="/education">
            Education
          </Link>

          <Link className={active("/contact")} to="/contact">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;