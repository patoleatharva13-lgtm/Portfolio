import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <>
      <style>{`
        footer{
          background:#0b1120;
          color:white;
          padding:50px 8%;
          text-align:center;
          border-top:1px solid rgba(255,255,255,.08);
        }

        .footer-title{
          font-size:28px;
          font-weight:bold;
          margin-bottom:10px;
          background:linear-gradient(90deg,#7c3aed,#06b6d4);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .footer-text{
          color:#cbd5e1;
          margin-bottom:25px;
          font-size:15px;
        }

        .socials{
          display:flex;
          justify-content:center;
          gap:20px;
          margin-bottom:25px;
        }

        .socials a{
          width:50px;
          height:50px;
          border-radius:50%;
          background:#1e293b;
          display:flex;
          align-items:center;
          justify-content:center;
          color:white;
          font-size:22px;
          transition:.3s;
          text-decoration:none;
        }

        .socials a:hover{
          background:#7c3aed;
          transform:translateY(-5px);
        }

        .copyright{
          color:#94a3b8;
          font-size:14px;
        }

        .heart{
          color:#ef4444;
          margin:0 4px;
        }
      `}</style>

      <footer>

        <h2 className="footer-title">Atharva Patole</h2>

        <p className="footer-text">
          Diploma 3rd Year Computer Engineering Student
          <br />
          Passionate about Web Development, Programming and Problem Solving.
        </p>

        <div className="socials">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:your@email.com">
            <FaEnvelope />
          </a>

        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Atharva Patole
          <br />
          Made with <FaHeart className="heart" /> using React
        </p>

      </footer>
    </>
  );
}

export default Footer;