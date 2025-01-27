// OurApproach.js

import data from "../Data/data";

const OurApproach = () => {
   const  {ourApproachData} = data
  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-16">


      <div className="max-w-6xl mx-auto">
        {ourApproachData.map((section, index) => (
          <section key={index} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              {index + 1}. {section.title}
            </h2>
            <p className="text-lg text-gray-600">{section.description}</p>
            {section.points.length > 0 && (
              <ul className="list-disc pl-5 mt-4 text-gray-600">
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-gray-800">
            {ourApproachData[ourApproachData.length - 1].title}
          </p>
          <p className="mt-4 text-lg text-gray-600">
            {ourApproachData[ourApproachData.length - 1].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
