import React from 'react';

const Card = () => {
  const cardData = [
    {
      id: 1,
      image: '/assets/s1.png',
      heading: 'Education ',
      text: 'This is a short description of the card content. It gives a brief overview of the topic.',
      link: '/read-more', // Replace with your target URL
    },
    {
      id: 2,
      image: '/assets/s1.png',
      heading: 'Agriculture',
      text: 'This is a short description of the card content. It gives a brief overview of the topic.',
      link: '/read-more', // Replace with your target URL
    },
    {
      id: 3,
      image: '/assets/s1.png',
      heading: 'Impoverty',
      text: 'This is a short description of the card content. It gives a brief overview of the topic.',
      link: '/read-more', // Replace with your target URL
      },
     
  ];

  return (
    <div className="relative flex items-center justify-center ">

      {/* Cards */}
      <div className="sm:absolute w-auto  bottom-0    transform   m-auto px-10   sm:translate-y-3/4     grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cardData.map((card) => (
          <div
            key={card.id}
            className=" max-w-80 border-t-0   border-[#676838]   rounded shadow transform hover:scale-110 cursor-pointer hover:shadow-lg transition"
          >
            <img
              src={card.image}
              alt="Card"
              className=" h-48 w-full object-cover rounded-t-lg"
            />
            <div className="p-4 bg-[#676838] rounded-b-lg flex flex-col items-center">
              {/* Heading */}
              <h2 className="text-xl text-white font-bold mb-1">{card.heading}</h2>

              {/* Short Text */}
              <p className="text-sm text-white mb-2">{card.text}</p>

              {/* Read More Button */}
              <a
                href={card.link}
                className="inline-block px-4 py-2 text-[#20200a]  bg-[#33d664] hover:bg-blue-600 rounded-full transition"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
