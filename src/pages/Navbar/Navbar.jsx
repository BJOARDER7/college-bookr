import { Link } from "react-router-dom";


const Navbar = () => {
  return (
   
      <nav className='md:flex justify-between items-center'>
      <h4 className='text-3xl font-bold'>College Bookr</h4>
      <div className='flex flex-col md:flex md:flex-row justify-between md:gap-5'>
      <Link to="/">Home</Link>
      <Link to="/colleges">Colleges</Link>
      <Link to="/admission">Admission</Link>
      <Link to="/mycollege">My Collegen</Link>
      </div>
      <button className='bg-purple-800 text-white p-2 rounded mt-2'>Start Applying</button>
    </nav>
     
  );
};

export default Navbar;