import React from 'react';
import ReactDOM from 'react-dom';


function Home(){
	return(
		<div>
		 <div class="col-md-12">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="https://img.freepik.com/free-photo/room-with-concrete-floor-smoke-background_9083-2991.jpg?size=626&ext=jpg" className="d-block w-100" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="https://img.freepik.com/free-photo/empty-wooden-table-with-smoke-float-up-dark-background_68495-135.jpg?size=626&ext=jpg" className="d-block w-100" alt="..."/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            </div>
		

		);
}

export default Home;