"use client";
import React, { useState, useEffect } from 'react';
import PetCard from '../components/PetCard';
import Link from 'next/link';
import { Pet } from './types';

const Adoption: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const fetchPets = async () => {
      const response = await fetch('/api/pets');
      const data: Pet[] = await response.json();
      setPets(data);
    };

    fetchPets();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mt-10">Adoption</h1>
      <p className="text-center mt-4 text-lg">
        Browse and adopt pets or post your pet for adoption.
      </p>
      <div className="flex justify-center mt-8">
        <Link href="/adoption/new" className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-600">
          Post a Pet for Adoption
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {pets.map((pet) => (
          <PetCard
            key={pet.id}
            name={pet.name}
            breed={pet.breed}
            age={pet.age}
            category={pet.category}
            state={pet.state}
            city={pet.city}
            contact={pet.contact}
            image={pet.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Adoption;

