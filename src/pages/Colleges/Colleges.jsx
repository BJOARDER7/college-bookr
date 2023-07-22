import { useEffect, useState } from "react";
import CollegeCard from "../CollegeCard/CollegeCard";


const Colleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:5000/colleges')
    .then(res => res.json())
    .then(data => setColleges(data))
  },[])
  
  return (
    <div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {colleges.map( (college, index) => <CollegeCard
        key={index}
        college={college}
        ></CollegeCard>)}
      </div>
    </div>
  );
};

export default Colleges;