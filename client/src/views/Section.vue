<template>
    <div class="cuerpo">

    <section class="slider_section ">
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="row">
                <div class="col-md-6 col-lg-5 ml-auto">
                  <div class="detail-box">
                    <h1>
                      Prepara tu Rollshake <br>
                      como mas te guste
                    </h1>
                    <p>
                      No es solo una heladería, es una experiencia única, dulce y diferente. Te ofrecemos múltiples combinaciones para crear la mejor MALTEADA. Además, preparamos los mejores CINNAMON ROLLS que alguna vez hayas probado
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                        Arma tu pedido
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>                 
      </div>
      </div>
    

    </section>


</div>

</template>

<style>
.slider_section {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 45px 0 75px 0;
}

.slider_section .row {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.slider_section #customCarousel1 {
  width: 100%;
  position: unset;
}

.slider_section .detail-box {
  color: #ffffff;
}

.slider_section .detail-box h1 {
  font-weight: 600;
  margin-bottom: 15px;
  color: #ffffff;
}

.slider_section .detail-box a {
  display: inline-block;
  padding: 10px 45px;
  background-color: #f26483;
  color: #ffffff;
  border-radius: 0;
  -webkit-transition: all .3s;
  transition: all .3s;
  border: 1px solid #f26483;
}

.slider_section .detail-box a:hover {
  background-color: transparent;
  color: #f26483;
}

.slider_section .img-box img {
  width: 100%;
}

.slider_section .carousel_btn-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 45px auto 0 auto;
}

.slider_section .carousel_btn-box a {
  position: unset;
  top: 50%;
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  opacity: 1;
  color: #000000;
  font-size: 16px;
  -webkit-transition: all .2s;
  transition: all .2s;
  margin: 0 5px;
}

.slider_section .carousel_btn-box a:hover {
  background-color: #f26483;
  color: #ffffff;
}

.product_section .heading_container {
  margin-bottom: 35px;
}



.cuerpo{
  background-image: url("../images/hero-bg.jpg");
  height: 100vh;

}



</style>

