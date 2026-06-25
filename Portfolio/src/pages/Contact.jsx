import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <style>{`
        .contact{
          min-height:100vh;
          background:#050816;
          color:white;
          padding:120px 8%;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .container{
          width:100%;
          max-width:1200px;
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:40px;
        }

        .left h1{
          font-size:50px;
          margin-bottom:20px;
        }

        .left span{
          color:#7c3aed;
        }

        .left p{
          color:#cbd5e1;
          line-height:1.8;
          margin-bottom:35px;
        }

        .info{
          display:flex;
          align-items:center;
          gap:18px;
          margin-bottom:22px;
          background:rgba(255,255,255,.05);
          padding:18px;
          border-radius:15px;
          border:1px solid rgba(255,255,255,.08);
          transition:.3s;
        }

        .info:hover{
          border-color:#7c3aed;
          transform:translateX(8px);
        }

        .icon{
          width:50px;
          height:50px;
          border-radius:50%;
          background:#7c3aed;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:20px;
        }

        .right{
          background:rgba(255,255,255,.05);
          padding:35px;
          border-radius:20px;
          border:1px solid rgba(255,255,255,.08);
        }

        form{
          display:flex;
          flex-direction:column;
          gap:20px;
        }

        input,
        textarea{
          background:#111827;
          border:none;
          color:white;
          padding:16px;
          border-radius:10px;
          outline:none;
          font-size:16px;
        }

        textarea{
          resize:none;
          height:180px;
        }

        button{
          background:#7c3aed;
          color:white;
          border:none;
          padding:15px;
          border-radius:10px;
          font-size:17px;
          cursor:pointer;
          transition:.3s;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:10px;
        }

        button:hover{
          background:#6d28d9;
        }

        @media(max-width:900px){

          .container{
            grid-template-columns:1fr;
          }

          .left h1{
            font-size:40px;
          }

        }

      `}</style>

      <section className="contact">

        <div className="container">

          <div className="left">

            <h1>
              Contact <span>Me</span>
            </h1>

            <p>
              I'm always interested in learning, collaborating, and working on exciting projects.
              Feel free to reach out if you'd like to connect.
            </p>

            <div className="info">
              <div className="icon">
                <FaEnvelope />
              </div>

              <div>
                <h3>Email</h3>
                <p>patole.atharva13@gmail.com</p>
              </div>
            </div>

            <div className="info">
              <div className="icon">
                <FaPhoneAlt />
              </div>

              <div>
                <h3>Phone</h3>
                <p>+91 9876543210</p>
              </div>
            </div>

            <div className="info">
              <div className="icon">
                <FaGithub />
              </div>

              <div>
                <h3>GitHub</h3>
                <p>github.com/atharva-patole</p>
              </div>
            </div>

            <div className="info">
              <div className="icon">
                <FaLinkedin />
              </div>

              <div>
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/atharva-patole</p>
              </div>
            </div>

            <div className="info">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3>Location</h3>
                <p>Maharashtra, India</p>
              </div>
            </div>

          </div>

          <div className="right">

            <form>

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Your Email"
              />

              <textarea
                placeholder="Write your message..."
              ></textarea>

              <button>
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

    </>
  );
}

export default Contact;