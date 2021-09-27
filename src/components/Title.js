function Title() {
  return (
    <div className="title-container">
      <div className="divider-left" />
      <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="" />
      <div className="divider-right" />
    </div>
  );
}

export default Title;
