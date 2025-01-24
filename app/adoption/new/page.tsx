

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import from next/navigation
import { Pet } from '../types';

interface NewAdoptionProps {
  onNewPet?: (pet: Pet) => void;
}

const NewAdoption: React.FC<NewAdoptionProps> = ({ onNewPet }) => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [category, setCategory] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [contact, setContact] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !breed || !age || !category || !state || !city || !contact) {
      alert('Please fill out all fields.');
      return;
    }

    const newPet: Pet = {
      name,
      breed,
      age: parseInt(age, 10),
      category,
      state,
      city,
      contact,
      image: image ? URL.createObjectURL(image) : null,
    };

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show confirmation message
    setFormSubmitted(true);

    // Temporarily add new pet to the list (until backend integration)
    if (onNewPet) {
      onNewPet(newPet);
    }

    // Redirect to adoption page after a short delay
    setTimeout(() => {
      router.push('/adoption');
    }, 2000);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mt-10">Post a Pet for Adoption</h1>
      {formSubmitted ? (
        <div className="text-center text-green-500 text-lg mt-6">
          Your pet has been posted successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="name">Pet Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="breed">Breed</label>
            <input
              type="text"
              id="breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="contact">Contact Information</label>
            <input
              type="text"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="image">Upload Image</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-600">
              Post for Adoption
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
export default NewAdoption;

