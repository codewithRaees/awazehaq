import React, { useState } from 'react';

const TestCard = () => {
  const cards = [
    {
      id: 1,
      title: 'Card 1',
      description: 'This is the description for Card 1.',
      details: 'More detailed information about Card 1.',
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'This is the description for Card 2.',
      details: 'More detailed information about Card 2.',
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'This is the description for Card 3.',
      details: 'More detailed information about Card 3.',
    },
  ];
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="p-4 bg-white rounded shadow cursor-pointer hover:shadow-lg transition"
           
          >
            <h3 className="font-bold text-lg mb-2">{card.title}</h3>
            <p className="text-gray-700">{card.description}</p>
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default TestCard;
