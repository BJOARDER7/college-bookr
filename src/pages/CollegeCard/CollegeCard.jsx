

const CollegeCard = ({college}) => {
  const {name, image, admissionDates, events, researchHistory, sports } = college;
  console.log(college)
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md">
      <img src={college.image} alt={image} className="mb-4 rounded-lg" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-600 mb-2">Admission Dates: {admissionDates}</p>
      <p className="text-sm text-gray-600 mb-2">Events: {events}</p>
      <p className="text-sm text-gray-600 mb-2">Research History: {researchHistory}</p>
      <p className="text-sm text-gray-600 mb-2">Sports: {sports}</p>
    </div>
  );
};

export default CollegeCard;