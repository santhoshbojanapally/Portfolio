const Skillslist = ({ List }) => {
  return (
    <div className="skill-card">
      <h3 className="skill-category-title">{List.name}</h3>

      <div className="skill-badge-container">
        {List.skills.map(({ idx, name, img }) => (
          <div key={idx} className="skill-badge">
            <img src={img} alt={name} className="skill-icon" />
            <span className="skill-name">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skillslist;
