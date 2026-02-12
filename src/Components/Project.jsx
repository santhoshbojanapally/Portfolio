const Project = ({ name, img, Tech_Stack, Link, description }) => {
  return (
    <div className="shadyborder project">
      <img
        src={img}
        alt=""
        style={{ borderRadius: "20px", marginBottom: "10px" }}
      />
      <br />
      <h2 style={{ fontWeight: 800, fontSize: "18px" }}>{name}</h2>
      Check it out here:{" "}
      <a href={Link} style={{ textDecoration: "none", color: "black" }}>
        <i class="fa-solid fa-link"></i>
      </a>
      <br />
      <br />
      <h4>{description}</h4>
      <br />
      <h4>
        {" "}
        <span style={{ fontWeight: 800, fontSize: "18px" }}>
          {" "}
          Tech Stack used:
        </span>{" "}
        {Tech_Stack}
      </h4>
    </div>
  );
};
export default Project;
