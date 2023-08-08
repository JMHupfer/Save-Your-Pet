import React from "react";
import {Link} from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MEDICINE } from "../utils/queries";
import "../home.css"

const Medicine = () => {
    const {loading, data} = useQuery(QUERY_MEDICINE, {
        fetchPolicy: "no-cache",
    });

    const medicineList = data?.medicine || [];

    return (
        <div className="container">
            <h1>Stats on your Medicine</h1>

            <div className="tabs">
            <Link to="/adoption" className="tab">
          Adoption
        </Link>
            </div>
            <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="2">Loading...</td>
            </tr>
          ) : (
            medicineList.map((medicine) => (
              <tr key={medicine._id}>
                <td>{medicine.name}</td>
                <td>
                  {/* <Link to={`/pet/${pet._id}`}>
                    {pet.tech1} vs. {pet.tech2}
                  </Link> */}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
        </div>
    );
};

export default Medicine;