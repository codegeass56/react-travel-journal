import globeIcon from "../assets/Fill213.png"
function Navbar() {
  return (
    <nav className="navbar">
      <img src={globeIcon} className="globe-icon" />
      <p>my travel journal.</p>
    </nav>
  );
}

export default Navbar;