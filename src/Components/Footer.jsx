import "../stylesheets/footer.css";

function Footer() {
  return (
    <div className="footer section">
      <div style={{ display: "flex", gap: "10px" }}>
        <a href="https://www.linkedin.com/in/bojanapally-santhoshkumar/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="santhoshbojanapally@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
      </div>
      <p>Built using &hearts; & React.js By Santhosh</p>
      <p>Hosted on Vercel</p>
    </div>
  );
}

export default Footer;
