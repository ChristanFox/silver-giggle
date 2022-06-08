import React from "react";

const Profile = () => {
   return (
      <div className="jumbotron-profile container">
         <div className="flex-row ">
            <h2 className="bg-dark text-secondary p-3 display-inline-block">
               Your Profile
            </h2>
         </div>

         <div className="container">
            <div>
               <div className="col-12 mb-3 col-lg-12 text-center">
                  <strong>
                     <strong>Upcoming Appointments:</strong>
                  </strong>
               </div>
               <div>
                  <ul className="list-group text-center">
                     <div>
                        <li className="list-group-tiem">
                           Graduation Special
                           <p>
                              <string>Date:</string>7/1/2022
                           </p>
                           <p>
                              <string>Time:</string>03:30
                           </p>
                        </li>
                        <br></br>
                        <li className="list-group-tiem">
                           Hot Stone Massage
                           <p>
                              <string>Date:</string>7/1/2022
                           </p>
                           <p>
                              <string>Time:</string>03:30
                           </p>
                        </li>
                        <br></br>
                        <li className="list-group-tiem">
                           60 Min Deep Tissue
                           <p>
                              <string>Date:</string>7/1/2022
                           </p>
                           <p>
                              <string>Time:</string>03:30
                           </p>
                        </li>
                        <br></br>
                        <li className="list-group-tiem">
                           Graduation Special
                           <p>
                              <string>Date:</string>7/1/2022
                           </p>
                           <p>
                              <string>Time:</string>03:30
                           </p>
                        </li>
                        <br></br>
                     </div>
                  </ul>
               </div>
            </div>

            <div className="col-12 col-lg-3 mb-3">
               {/* PRINT FRIEND LIST */}
            </div>
         </div>
      </div>
   );
};

export default Profile;
