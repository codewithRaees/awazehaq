import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
const photos = [
  { id: 1, src: "https://media.istockphoto.com/id/1175573811/photo/smiling-teenage-boy-with-school-bag-in-front-of-school.jpg?s=1024x1024&w=is&k=20&c=px1Zz4p5x9aiwSpiL75uyIxfy8_ffQqbjBGgA2jgraI=", alt: "Photo 1" , info:"Eduction Activity "},
  { id: 2, src: "https://media.istockphoto.com/id/1175573811/photo/smiling-teenage-boy-with-school-bag-in-front-of-school.jpg?s=1024x1024&w=is&k=20&c=px1Zz4p5x9aiwSpiL75uyIxfy8_ffQqbjBGgA2jgraI=", alt: "Photo 2" , info:"Agriculture Activity "},
  { id: 3, src: "https://media.istockphoto.com/id/1175573811/photo/smiling-teenage-boy-with-school-bag-in-front-of-school.jpg?s=1024x1024&w=is&k=20&c=px1Zz4p5x9aiwSpiL75uyIxfy8_ffQqbjBGgA2jgraI=", alt: "Photo 3", info:"Agriculture Activity " },
  { id: 4, src: "https://media.istockphoto.com/id/2160439321/photo/proud-multiethnic-schoolboy-smiling-at-elementary-school.jpg?s=1024x1024&w=is&k=20&c=EidMJFN3I3r2PnIhoZ9OIJXHMdPe4gcoCM3GsYiQQgk=", alt: "Photo 4", info:"Eduction Activity " },
  { id: 5, src: "https://media.istockphoto.com/id/1757822589/photo/close-up-portrait-of-a-cute-smiling-boy-at-home.jpg?s=1024x1024&w=is&k=20&c=tyDB3etB9gE9nijHh_-foEdVKXKdoSHK502VbXVePzw=", alt: "Photo 5", info:"Donation Activity " },
  { id: 6, src: "https://cdn.pixabay.com/photo/2014/03/12/18/45/boys-286245_960_720.jpg", alt: "Photo 6", info:"Eduction Activity " },
];

const PhotoGallery = () => {
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
      <div className=" relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative cursor-pointer group  "
            onClick={() => openModal(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="rounded-t-lg shadow-lg transition-transform transform group-hover:scale-105"
                />
                <div className="   group  bottom-1 py-2  rounded-b-lg  bg-black w-full text-white transition-transform transform group-hover:scale-105">
                      <h3 className="px-2">Awaz-e-Haq Foundation</h3>  
                      </div>
            </div>
            
        ))}
      </div>

      {/* Modal */}
      {selectedPhoto && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={() => {
                 
                  closeModal()
              }}>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-xl relative w-full  "
                onClick={(e)=>{ e.stopPropagation()}}>
                      <img src={selectedPhoto.src} alt={selectedPhoto.alt} className="w-full" />
                      <div className="absolute top-2 right-3">
                          <button
                              onClick={closeModal}
                                className="text-black font-bold hover:underline text-3xl"
                            >
                <IoIosCloseCircle/>
                          </button></div>
                      
            <div className="p-2 flex justify-left items-center bg-black text-white">
              <span className="text-base font-bold">{selectedPhoto.info}: </span>
              <p className="text-sm font-semibold px-2">{selectedPhoto.info}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
