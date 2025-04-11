import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import data from "../Data/data.js";

const PhotoGallery = () => {
  const { photos } = data;
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Photo Gallery</h1>

      {/* Gallery Grid */}
      <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative cursor-pointer group"
            onClick={() => openModal(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-48 object-cover object-center rounded-t-lg shadow-lg transition-transform transform group-hover:scale-105"
            />
            <div className="group bottom-1 py-2 rounded-b-lg bg-black w-full text-white transition-transform transform group-hover:scale-105">
              <h3 className="px-2">Awaz-e-Haq Foundation</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg overflow-hidden shadow-lg max-w-xl relative w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="w-full object-cover"
            />
            <div className="absolute top-2 right-3">
              <button
                onClick={closeModal}
                className="text-black font-bold hover:underline text-3xl"
              >
                <IoIosCloseCircle />
              </button>
            </div>
            <div className="p-3 flex justify-start flex-col flex-wrap bg-black text-white">
              <span className="text-base font-bold">{selectedPhoto.title}:</span>
              <p className="text-sm">{selectedPhoto.detail}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
