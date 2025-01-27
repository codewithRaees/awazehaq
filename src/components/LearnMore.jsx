import { useParams, useNavigate } from "react-router-dom";
import data from "../Data/data.js";

const LearnMore = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = data.projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-red-500">Project not found.</h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-[#676838] text-white rounded hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="relative p-8 bg-gray-100 min-h-screen">
      <div className="flex gap-8">
        {/* Left Side: Text Content */}
        <div className="flex-1 max-w-[60%]">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-700 leading-relaxed">{project.details}</p>
        </div>

        {/* Right Side: Image */}
        <div className="w-1/2 flex-shrink-0 relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-md object-cover max-h-[400px]"
          />
        </div>
      </div>

      {/* Additional Text Expansion (Visible only if text exceeds the image height) */}
      <div className="lg:hidden mt-8 ">
        <p className="text-gray-700 leading-relaxed tracking-wide">{project.details}</p>
      </div>
    </div>
  );
};

export default LearnMore;
