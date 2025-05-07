import React from "react";
import type { Painting } from "../data/paintings";

const PaintingCard = ({ painting }: { painting: Painting }) => (
  <div className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden">
    <img
      src={painting.image}
      alt={painting.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-1">{painting.title}</h3>
      <p className="text-sm text-gray-600 mb-1">{painting.medium}</p>
      <p className="text-sm text-gray-600 mb-1">{painting.size}</p>
      <p className="text-sm text-gray-800 font-bold mb-2">{painting.price}</p>
      <span className={painting.available ? "text-green-600" : "text-red-500"}>
        {painting.available ? "Available" : "Sold"}
      </span>
    </div>
  </div>
);

export default PaintingCard;
