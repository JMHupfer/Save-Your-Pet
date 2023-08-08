import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ACCOUNT } from "../utils/queries";
import "../home.css";

const Home = () => {
  const { loading, data } = useQuery(QUERY_ACCOUNT, {
    fetchPolicy: "no-cache",
  });

  const petList = data?.pets || [];

  return (
    <div className="container">
      <h1>Welcome to Save Your Pet!</h1>

      <div className="tabs">
        <Link to="/adoption" className="tab">
          Adoption
        </Link>
        <Link to="/medicine" className="tab">
          Medicine
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
            petList.map((pet) => (
              <tr key={pet._id}>
                <td>{pet.name}</td>
                <td>
                  <Link to={`/pet/${pet._id}`}>
                    {pet.tech1} vs. {pet.tech2}
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="footer">
        <h2>Ready to save your pet?</h2>
        <Link to="/pet">
          <button className="btn btn-danger">Let's do it!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

// api URL https://api.fda.gov/animalandveterinary/event.json
