import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ACCOUNT } from "../utils/queries";
// import { QUERY_ADOPTION } from "../utils/queries";
// import { QUERY_MEDICINE } from "../utils/queries";

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
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Save Your Pet!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Here is a list of pets you can choose from:</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
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
      <div className="card-footer text-center m-3">
        <h2>Ready to save your pet?</h2>
        <Link to="/pet">
          <button className="btn btn-lg btn-danger">Let's do it!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;


// api URL https://api.fda.gov/animalandveterinary/event.json

