import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/colleges">Colleges</Link>
      <Link to="/admission">Admission</Link>
      <Link to="/mycollege">My Collegen</Link>
    </div>
  );
};

export default Navbar;