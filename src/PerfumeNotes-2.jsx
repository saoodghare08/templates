import React from "react";

const notes = [
  {
    type: "Top Notes",
    description: "Lily of the Valley, Rose",
    image:
      "https://amouage.com/cdn/shop/files/Existence_Lily_of_the_valley.png?v=1741594453&width=200",
  },
  {
    type: "Heart Notes",
    description: "Frankincense, Mystikal,\nLabdanum",
    image:
      "https://amouage.com/cdn/shop/files/Existence_Frankincense_2.png?v=1741594484&width=200",
  },
  {
    type: "Base Notes",
    description: "Ambergris, White Musk,\nBenzoin",
    image:
      "https://amouage.com/cdn/shop/files/Existence_White_musk.png?v=1741594511&width=200",
  },
];

const PerfumeNotes2 = () => {
  return (
    <div className="px-2 lg:px-0 space-y-3">
      <h2 className="text-sm sm:text-base font-bold tracking-wide uppercase text-gray-800 mb-2 sm:mb-4">
        Star Notes
      </h2>

      <div className="flex sm:flex-row flex-nowrap sm:flex-wrap gap-4 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">
        {notes.map((note, index) => (
          <div
            key={index}
            className="flex-shrink-0 sm:flex-1 flex flex-col items-center sm:items-center text-center sm:text-center min-w-[120px]"

          >
            <img
              src={note.image}
              alt={note.type}
              className="h-12 w-12 object-contain mb-1 sm:mb-2"
            />
            <h3 className="font-semibold text-xs sm:text-sm text-gray-900">
              {note.type}
            </h3>
            <p className="text-[10px] sm:text-xs text-gray-600 whitespace-pre-line mt-0.5">
              {note.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerfumeNotes2;
