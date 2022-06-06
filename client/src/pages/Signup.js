import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
   const [formState, setFormState] = useState({ email: "", password: "" });
   const [addUser] = useMutation(ADD_USER);

   const handleFormSubmit = async (event) => {
      event.preventDefault();
      const mutationResponse = await addUser({
         variables: {
            email: formState.email,
            password: formState.password,
            firstName: formState.firstName,
            lastName: formState.lastName,
         },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
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
            <div className="card">
               <Link to="/login">← Go to Login</Link>
               <h4 className="card-header">Sign Up</h4>
               <div className="card-body">
                  <form onSubmit={handleFormSubmit}>
                     <input
                        className="form-input"
                        placeholder="Your username"
                        name="username"
                        type="username"
                        id="username"
                        value={formState.username}
                        onChange={handleChange}
                     />
                     <input
                        className="form-input"
                        placeholder="Your email"
                        name="email"
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={handleChange}
                     />
                     <input
                        className="form-input"
                        placeholder="******"
                        name="password"
                        type="password"
                        id="password"
                        value={formState.password}
                        onChange={handleChange}
                     />
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

export default Signup;
