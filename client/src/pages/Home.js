import React from "react";

const Home = () => {
   return (
      <main>
         <div className="flex-row text-center">
            <div className="col-12 mb-3">
               <div className="justify-content-center">
                  <div class="jumbotron jumbotron-fluid">
                     <div class="container">
                        <h1>jumbotron</h1>
                        <p>
                           <p>Oui'd Cavern is out of this world!</p>
                           <br></br>
                           <p>
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old. Richard McClintock, a Latin
                              professor at Hampden-Sydney College in Virginia,
                              looked up one of the more obscure Latin words,
                              consectetur, from a Lorem Ipsum passage, and going
                              through the cites of the word in classical
                              literature, discovered the undoubtable source.
                              Lorem Ipsum comes from sections 1.10.32 and
                              1.10.33 of "de Finibus Bonorum et
                           </p>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="flex-row text-center ">
               <div className="item col-12 col-md-4">
                  <div>
                     <img
                        className="img-circle"
                        src="https://assets.codepen.io/7125791/testimonal-img-1_2.jpg"
                        alt="img"
                     />
                  </div>
                  <div className="testimonial-example">
                     <p>Oui'd Cavern is out of this world!</p>
                  </div>
               </div>

               <div className="item col-12 col-md-4">
                  <img
                     className="img-circle"
                     src="https://assets.codepen.io/7125791/testimonal-img-4_1.jpg"
                     alt="img"
                  />
                  <div className="testimonial-example">
                     <p>The one and only place I shop for my products</p>
                  </div>
               </div>

               <div className="item col-12 col-md-4">
                  <img
                     className="img-circle"
                     src="https://assets.codepen.io/7125791/testimonal-img-8_1.jpg"
                     alt="img"
                  />
                  <div className="testimonial-example">
                     <p>
                        I have yet to be dissapointed with this companies
                        products and customer service, keep up the great work!
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
};

export default Home;
