import React from "react";
const Product = () => {
   return (
      <div className="container text ">
         <div className="jumbotron-contact text-center">
            <h3>
               Fill the form to let us know what service you would like to
               inquire about!
            </h3>

            <div className=" container">
               <br></br>
               <div className="container">
                  <form id="contact" action="/" className="text-center">
                     <h4>
                        Reach out to us to schedule your Oui'd appointment!
                     </h4>
                     <br></br>
                     <fieldset>
                        <input
                           placeholder="Full Name"
                           type="text"
                           tabindex="1"
                           required
                        />
                     </fieldset>
                     <fieldset>
                        <input
                           placeholder="Email"
                           type="email"
                           tabindex="1"
                           required
                        />
                     </fieldset>
                     <fieldset>
                        <input
                           placeholder="Best # to reach you at"
                           type="tel"
                           tabindex="3"
                           required
                        />
                     </fieldset>
                     <fieldset>
                        <input
                           placeholder="Date of appointment"
                           type="date"
                           tabindex="4"
                           required
                        />
                     </fieldset>
                     <fieldset>
                        <textarea
                           placeholder="Which Oui'd Service you would like ?"
                           tabindex="5"
                           required
                        ></textarea>
                     </fieldset>
                     <fieldset>
                        <button
                           className="btn btn-primary-success"
                           name="submit"
                           type="submit"
                           id="contact-submit"
                           data-submit="...Sending"
                        >
                           Submit
                        </button>
                     </fieldset>
                  </form>
               </div>
            </div>
         </div>

         <br></br>
      </div>
   );
};
export default Product;
