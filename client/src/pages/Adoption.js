import React from 'react';
import adoptionData from '../seeders/adoptionSeeds.json';

const Adoption = () => {
  return (
    <div className="adoption-page">
      <h1>Adoption Page</h1>
      {adoptionData.map(pet => (
        <div key={pet.id} className="pet-card">
          <h2>{pet.name}</h2>
          <p>Type: {pet.type}</p>
          <p>Age: {pet.age}</p>
          <p>Description: {pet.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Adoption;
