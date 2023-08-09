import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// import Login from './pages/Login'; replacing import statement with Welcome Page
// import SignUp from './pages/SignUp'; replacing import statement with Welcome Page
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Medicine from "./pages/medicine";
import Adoption from "./pages/Adoption"

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Welcome />} />
            {/* <Route 
                path="/signup" 
                element={<SignUp />}  */}
            {/* /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/medicine" element={<Medicine />} />
            <Route path="/adoption" element={<Adoption />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
