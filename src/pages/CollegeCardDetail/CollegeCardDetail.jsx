import { useLoaderData } from "react-router-dom";


const CollegeCardDetail = () => {
  const college = useLoaderData();
  const {image, name, admissionProcess, events, researchHistory, sports} = college;
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md">
      <img src={image} alt="Image" className="mb-4 rounded-lg" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-600 mb-2">Admission Process: {admissionProcess}</p>
      <p className="text-sm text-gray-600 mb-2">Events: {events}</p>
      <p className="text-sm text-gray-600 mb-2">Research History: {researchHistory}</p>
      <p className="text-sm text-gray-600 mb-2">Sports: {sports}</p>
      
           
    </div>
  );
};

export default CollegeCardDetail;