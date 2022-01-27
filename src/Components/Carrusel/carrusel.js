import React from "react";

const Carrusel=()=>{
    return(
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={'https://http2.mlstatic.com/D_NQ_722424-MLA48917582042_012022-OO.webp'} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={'https://http2.mlstatic.com/D_NQ_740445-MLA48887422300_012022-OO.webp'} className="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src={'https://http2.mlstatic.com/D_NQ_656215-MLA48916590720_012022-OO.webp'} className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    )
}
export default Carrusel;