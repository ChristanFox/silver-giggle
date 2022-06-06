import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <header className="bg-secondary mb-4 py-2 flex-row align-center">
         <div className="container flex-row justify-space-between-lg justify-center align-center">
            <Link>
               <h1>Nails by Nija</h1>
            </Link>
            <nav className="text-center">
               {Auth.loggedIn() ? (
                  <>
                     <Link to="/profile">Your Prifile</Link>
                     <a href="/" onClick={() => Auth.logout()}>
                        Logout
                     </a>
                  </>
               ) : (
                  <>
                     <Link to="/login">Login</Link>
                     <Link to="/signup">Signup</Link>
                  </>
               )}
            </nav>
         </div>
      </header>
   );
};

export default Header;
