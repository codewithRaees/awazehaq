import { Link } from "react-router-dom";
import data from "../Data/data.js";

const OnGoingProjects = () => {
  const { projects } = data;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg p-6 border hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-4 h-11">{project.description}</p>
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
            <div className="mt-auto flex justify-center">
              <Link
                to={`/learnmore/${project.id}`}
                className="px-4 py-2 bg-[#676838] text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnGoingProjects;
