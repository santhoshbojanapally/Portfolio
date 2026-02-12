import "../stylesheets/skillslist.css";

const Skillslist = ({ List }) => {
  return (
    <div>
      <div className="skillList shadyborder">
        <h3
          style={{ opacity: "0.6", textAlign: "center", marginBottom: "20px" }}
        >
          {List.name}
        </h3>
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          {List.skills.map(({ idx, name, img }) => (
            <div style={{ display: "flex", gap: "5px" }}>
              <img src={img} style={{ height: "20px" }} alt="" />
              <br />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skillslist;
