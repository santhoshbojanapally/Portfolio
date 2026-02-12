const Codingprofile = ({ name, img, Link, Description }) => {
  return (
    <div className="profile shadyborder">
      <a href={Link}>
        <img src={img} alt="" />
      </a>
      <p>{Description}</p>
      <br />
    </div>
  );
};
export default Codingprofile;
