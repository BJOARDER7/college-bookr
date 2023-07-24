import { Link } from "react-router-dom";


const CollegeCard = ({college}) => {
  const {name, image, admissionDates, events, researchHistory, sports, _id } = college;

  const handleCardDetails = () => {
    console.log('clicked')
  }

  
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md">
      <img src={college.image} alt={image} className="mb-4 rounded-lg" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-600 mb-2">Admission Dates: {admissionDates}</p>
      <p className="text-sm text-gray-600 mb-2">Events: {events}</p>
      <p className="text-sm text-gray-600 mb-2">Research History: {researchHistory}</p>
      <p className="text-sm text-gray-600 mb-2">Sports: {sports}</p>
      <div>
      <Link to={`/colleges/${_id}`}>
      <button className="bg-blue-600 border rounded-md px-4 py-2 text-white" onClick={handleCardDetails}>Details</button>
      </Link>
      </div>
           
    </div>
  );
};

export default CollegeCard;