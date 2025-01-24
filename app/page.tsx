import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mt-10">
        Welcome to Pet Care and Adoption Platform
      </h1>
      <p className="text-center mt-4 text-lg">
        Find your perfect pet or rehome your beloved companion. We also offer grooming and vet consultation services.
      </p>
      <div className="flex justify-center mt-8">
        <a
          href="#"
          className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-600"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Home;
