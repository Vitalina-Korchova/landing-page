export default function HeroPage() {
  return (
    <>
      <div className="hero-page">
        <img src="./shine.png " className="layer shine " />
        <img src="./beams.png " className="layer beams " />
        <img src="./vector.png " className="layer vector" />

        <nav className="navbar">
          <div className="logo">
            <img className="logo-icon" src="./logo.png" alt="" />
            <span>SpaceV</span>
          </div>
          <div className="nav-link">
            <ul className="nav-links-items">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Benefits</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Reviews</a>
              </li>
            </ul>
          </div>
        </nav>
        <hr />
      </div>
    </>
  );
}
