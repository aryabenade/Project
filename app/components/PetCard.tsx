// PetCard component in app/components/PetCard.tsx
import React from 'react';

interface PetCardProps {
  name: string;
  breed: string;
  age: number;
  category: string;
  state: string;
  city: string;
  contact: string;
  image: string | null;
  onEdit?: () => void;    // Add onEdit prop
  onDelete?: () => void;  // Add onDelete prop
}

const PetCard: React.FC<PetCardProps> = ({ name, breed, age, category, state, city, contact, image, onEdit, onDelete }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      {image && <img className="w-full h-48 object-cover" src={image} alt={name} />}
      <div className="px-6 py-4 bg-white">
        <div className="font-bold text-2xl mb-2 text-gray-800">{name}</div>
        <p className="text-gray-600 text-base">
          <strong>Category:</strong> {category} <br />
          <strong>Breed:</strong> {breed} <br />
          <strong>Age:</strong> {age} years <br />
          <strong>Location:</strong> {city}, {state} <br />
          <strong>Contact:</strong> {contact}
        </p>
      </div>
      <div className="flex justify-center px-6 pt-4 pb-2 bg-gray-50">
        {onEdit && (
          <button onClick={onEdit} className="bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-blue-600 transition-colors duration-300">
            Edit
          </button>
        )}
        {onDelete && (
          <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-red-600 transition-colors duration-300 ml-2">
            Delete
          </button>
        )}
        {!onEdit && !onDelete && (
          <button className="bg-green-500 text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-green-600 transition-colors duration-300">
            Adopt
          </button>
        )}
      </div>
    </div>
  );
};

export default PetCard;
