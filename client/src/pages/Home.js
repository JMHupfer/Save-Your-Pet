import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ACCOUNT } from "../utils/queries";
import "../home.css";

const Home = () => {
  const { loading, data } = useQuery(QUERY_ACCOUNT, {
    fetchPolicy: "no-cache",
  });

  const petList = data?.pets || [];

  let petData 
  fetch ('https://api.fda.gov/animalandveterinary/event.json')
  .then (data => { 
    data.json()
    console.log(data)
  })
  .then(response => {
    console.log(response)
  })
  console.log(petData);

  return (
    <div className="home-container">
    <div className="home-card bg-white home-card-rounded w-50">
      <div className="home-card-header bg-dark text-center">
        <h1>Welcome to Save Your Pet!</h1>
      </div>
      <div className="home-card-body m-5">
        <h2>Here is a list of pets you can choose from:</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="home-square">
            {petList.map((pet) => {
              return (
                <li key={pet._id}>
                  <Link to={{ pathname: `/pet/${pet._id}` }}>
                    {pet.tech1} vs. {pet.tech2}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="home-card-footer text-center m-3">
        <h2>Ready to save your pet?</h2>
        <Link to="/pet">
          <button className="home-btn btn-lg btn-danger">Let's do it!</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Home;



// api URL https://api.fda.gov/animalandveterinary/event.json

