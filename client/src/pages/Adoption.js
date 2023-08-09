import React from 'react';
import {useQuery} from "@apollo/client";
import { QUERY_ADOPTIONS } from '../utils/queries';

const Adoption = () => {

const { data,error } = useQuery(QUERY_ADOPTIONS);
const adoptions = data?.adoptions||[];

console.log(adoptions)
console.log(error)

  return (
    <div className="adoption-page">
      <h1>Adoption Page</h1>
      {adoptions.map(pet => (
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
