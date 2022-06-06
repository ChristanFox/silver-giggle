import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
   ApolloClient,
   InMemoryCache,
   ApolloProvider,
   createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import SingleThought from "./pages/SingleThought";

import Home from "./pages/Home";

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
      <>
         <div className="flex-column justify-flex-start min-100-vh">
            <Header />
            <div className="container">
               <Home />
            </div>
            <Footer />
         </div>
         <ApolloProvider client={client}>
            <Router>
               <div className="flex-column justify-flex-start min-100-vh">
                  <Header />
                  <div className="container">
                     <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        {/* <Route path="/profile" element={<Profile />} /> */}
                        {/* <Route path="/signup" element={<Signup />} /> */}
                        <Route
                           path="/thought/:id"
                           element={<SingleThought />}
                        />
                        <Route path="*" element={<NoMatch />} />
                     </Routes>
                  </div>
                  <Footer />
               </div>
            </Router>
         </ApolloProvider>
      </>
   );
}

export default App;
