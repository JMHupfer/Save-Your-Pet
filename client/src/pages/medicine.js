import React from 'react';
import {useQuery} from "@apollo/client";
import { QUERY_MEDICINE } from '../utils/queries';

const Medicine = () => {

const { data,error } = useQuery(QUERY_MEDICINE);
const medicines = data?.medicines||[];

console.log(medicines)
console.log(error)

  return (
    <div className="medicine-page">
      <h1>Medicine Page</h1>
      {medicines.map(pet => (
        <div key={pet.id} className="pet-card">
          <h2>{pet.name}</h2>
          <p>Recovered: {pet.recovered}</p>
          <p>Died: {pet.died}</p>
        </div>
      ))}
    </div>
  );
};

export default Medicine;
