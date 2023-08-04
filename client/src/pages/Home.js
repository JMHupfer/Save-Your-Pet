import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ACCOUNT } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_ACCOUNT, {
    fetchPolicy: "no-cache",
  });

  const petList = data?.pets || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Save Your Pet</h1>
      </div>
      <div className="card-body m-5">
        <h2>Here is a list of pets you can choose from:</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            {petList.map((matchup) => {
              return (
                <li key={matchup._id}>
                  <Link to={{ pathname: `/matchup/${matchup._id}` }}>
                    {matchup.tech1} vs. {matchup.tech2}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to save your pet?</h2>
        <Link to="/matchup">
          <button className="btn btn-lg btn-danger">Let's do it!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
