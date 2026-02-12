function Button({ label, link }) {
  return (
    <button className="nav2">
      <a href={link}>{label}</a>
    </button>
  );
}

export default Button;
