import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
   const [formState, setFormState] = useState({ email: "", password: "" });
   const [login, { error }] = useMutation(LOGIN);

   const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
         const mutationResponse = await login({
            variables: { email: formState.email, password: formState.password },
         });
         const token = mutationResponse.data.login.token;
         Auth.login(token);
      } catch (e) {
         console.log(e);
      }
   };

   const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
         ...formState,
         [name]: value,
      });
   };

   return (
      <main className="flex-row justify-center mb-4">
         <div className="col-12 col-md-6">
            <Link to="/signup">← Go to Signup</Link>

            <div className="card">
               <h4 className="card-header">Login</h4>
               <div className="card-body">
                  <form onSubmit={handleFormSubmit}>
                     <div className="flex-row space-between my-2">
                        <label htmlFor="email">Email address:</label>
                        <input
                           placeholder="youremail@test.com"
                           name="email"
                           type="email"
                           id="email"
                           onChange={handleChange}
                        />
                     </div>
                     <div className="flex-row space-between my-2">
                        <label htmlFor="pwd">Password:</label>
                        <input
                           placeholder="******"
                           name="password"
                           type="password"
                           id="pwd"
                           onChange={handleChange}
                        />
                     </div>
                     <button className="btn d-block w-100" type="submit">
                        Submit
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </main>
   );
}

export default Login;
