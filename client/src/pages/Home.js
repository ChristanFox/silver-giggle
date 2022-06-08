import React from "react";

const Home = () => {
   return (
      <main>
         <div className="flex-row text-center">
            <div className="col-12 mb-3">
               <div className="justify-content-center">
                  <div className="jumbotron">
                     <div className="container">
                        <h1>Oui'd Cavern</h1>
                        <br></br>
                        <br></br>
                        <p>
                           Welcome to Oui'd where we provide you with all of
                           your massage care and essential CBD oil needs.
                           <br></br> Let us help you destress with a little bit
                           of our Oui'd Magic
                        </p>
                        <br></br>
                        <p>
                           Oui'd essential oil's have always been around you
                           just didnt have us to get it to you!
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div class="hero-section">
            <div class="card-home-grid">
               <a class="card-home" href="/services">
                  <div class="card-home__background">
                     <img
                        src="https://assets.codepen.io/7125791/testimonal-img-1_2.jpg"
                        alt="img"
                     />
                  </div>
                  <div class="card-home__content">
                     <p class="card-home__category">Ooui'd</p>
                     <h3 class="card-home__heading">Amazing Products! </h3>
                  </div>
               </a>
               <a class="card-home" href="/services">
                  <div class="card-home__background">
                     <img
                        src="https://assets.codepen.io/7125791/testimonal-img-4_1.jpg"
                        alt="img"
                     />
                  </div>
                  <div class="card-home__content">
                     <p class="card-home__category">Ooui'd</p>
                     <h3 class="card-home__heading">Best services 'Period'.</h3>
                  </div>
               </a>
               <a class="card-home" href="/services">
                  <div class="card-home__background">
                     <img
                        src="https://assets.codepen.io/7125791/testimonal-img-8_1.jpg"
                        alt="img"
                     />
                  </div>
                  <div class="card-home__content">
                     <p class="card-home__category">Ooui'd</p>
                     <h3 class="card-home__heading">Great Oui'd! </h3>
                  </div>
               </a>
               <a class="card-home" href="/services">
                  <div class="card-home__background">
                     <img
                        src="https://assets.codepen.io/7125791/testimonial-img-6_1.jpg"
                        alt="img"
                     />
                  </div>
                  <div class="card-home__content">
                     <p class="card-home__category">Ooui'd</p>
                     <h3 class="card-home__heading">Everyone's using it! </h3>
                  </div>
               </a>
            </div>
         </div>
      </main>
   );
};

export default Home;

/* 
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
         src="https://assets.codepen.io/7125791/testimonial-img-6_1.jpg"
         alt="img"
      />
      <div className="testimonial-example">
         <p>
            I have yet to be dissapointed with this companies products and
            customer service, keep up the great work!
         </p>
      </div>
   </div>
</div>; */
