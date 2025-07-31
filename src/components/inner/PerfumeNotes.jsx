import React from "react";

const notes = [
  {
    type: "Top Notes",
    description: "Floral -Raspberry",
    image: "src/assets/raspberry.png",
  },
  {
    type: "Heart Notes",
    description: "White Flowers, Oud Extract",
    image: "src/assets/musk.webp",
  },
  {
    type: "Base Notes",
    description: "Guaiac Wood, Sandalwood, Amber Absolute",
    image: "src/assets/woody.jpg",
  },
];

const PerfumeNotes = () => {
  return (
    <div className="px-2 lg:px-0 py-3 space-y-1">
      <h2 className="text-lg font-bold tracking-wide uppercase text-gray-800 mb-6">
        Perfume Notes
      </h2>
      <div className="flex flex-col sm:flex-row gap-6 max-w-full justify-between">
        {notes.map((note, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            <img
              src={note.image}
              alt={note.type}
              className="h-16 w-16 object-contain mb-2"
            />
            <h3 className="font-semibold text-sm text-gray-900">{note.type}</h3>
            <p className="text-xs text-gray-600 whitespace-pre-line mt-1">
              {note.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerfumeNotes;
