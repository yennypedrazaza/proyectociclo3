<template>
    <div>
        
  <!-- client section -->

  <section class="client_section layout_padding">

    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Reseñas y opiniones
        </h2>
      </div>
      <div class="col-md-9 col-lg-7 mx-auto px-0">
        <div class="client_container">
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span>
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </span>
            <span class="sr-only">Next</span>
          </a>
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="box">
                  <div class="img-box">
                    <img src="images/client.jpg" alt="">
                  </div>
                  <div class="detail-box">
                    <h4>
                      Israel Rojas
                    </h4>
                    <p>
                      Super recomendado. Precios maravillosos a excelente calidad
                    </p>
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="box">
                  <div class="img-box">
                    <img src="../images/client.jpg" alt="">
                  </div>
                  <div class="detail-box">
                    <h4>
                      Alita Mark
                    </h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour, or randomised words which don't look even slightly
                      believable. If you There are many variations of passages of Lorem Ipsum available
                    </p>
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="box">
                  <div class="img-box">
                    <img src="../images/client.jpg" alt="">
                  </div>
                  <div class="detail-box">
                    <h4>
                      Alita Mark
                    </h4>
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour, or randomised words which don't look even slightly
                      believable. If you There are many variations of passages of Lorem Ipsum available
                    </p>
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- end client section -->
</div>
</template>

<style>
.client_section {
  position: relative;
}

.client_section .box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  text-align: center;
  padding: 45px;
}

.client_section .box .img-box {
  border-radius: 100%;
  overflow: hidden;
  width: 145px;
}

.client_section .box .img-box img {
  width: 100%;
}

.client_section .box .detail-box {
  margin-top: 15px;
}

.client_section .box .detail-box h4 {
  color: #ff9e6a;
  position: relative;
  font-weight: 600;
  margin-bottom: 10px;
}

.client_section .client_container {
  position: relative;
  margin: auto;
  margin-bottom: 35px;
}

.client_section #carouselExampleControls {
  border: 1px solid black;
  -webkit-clip-path: polygon(0% 10%, 10% 10%, 10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%);
          clip-path: polygon(0% 10%, 10% 10%, 10% 0%, 90% 0%, 90% 10%, 100% 10%, 100% 90%, 90% 90%, 90% 100%, 10% 100%, 10% 90%, 0% 90%);
  margin-top: 45px;
}

.client_section .carousel-control-prev,
.client_section .carousel-control-next {
  width: 50px;
  height: 50px;
  top: initial;
  bottom: 0;
  opacity: 1;
  background-color: #ff9e6a;
  font-size: 20px;
  -webkit-transform: translateY(50%);
          transform: translateY(50%);
}

.client_section .carousel-control-prev:hover,
.client_section .carousel-control-next:hover {
  background-color: #252525;
}

.client_section .carousel-control-prev {
  left: 8%;
}

.client_section .carousel-control-next {
  right: 8%;
}



</style>