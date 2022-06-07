import React from "react";

const Home = () => {
   return (
      <main>
         <div className="flex-row justify-space-between">
            <div className="col-12 mb-3">Home.js</div>
         </div>
         <section className="testimonials">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <div id="customers-testimonials" className="owl-carousel">
                        <div className="item">
                           <div className="shadow-effect">
                              <img
                                 className="img-circle"
                                 src="https://assets.codepen.io/7125791/testimonal-img-1_2.jpg"
                                 alt="img"
                              />
                              <p></p>
                           </div>
                           <div className="testimonial-name">
                              
                           </div>
                        </div>
                        <div className="item">
                           <div className="shadow-effect">
                              <img
                                 className="img-circle"
                                 src="https://assets.codepen.io/7125791/testimonal-img-4_1.jpg"
                                 alt="img"
                              />
                              <p>kj</p>
                           </div>
                           <div className="testimonial-name">
                             <p>
                             The one and only place I shop for my products</div>
                        </div>
                        <div className="item">
                           <div className="shadow-effect">
                              <img
                                 className="img-circle"
                                 src="https://assets.codepen.io/7125791/testimonal-img-8_1.jpg"
                                 alt="img"
                              />
                              <p></p>
                           </div>
                           <div className="testimonial-name">These products cured my anxiety!</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
};

export default Home;
