<template>
    <div>
<!-- product section -->

  <section class="product_section layout_padding">
    <div class="container-fluid">
      <div class="heading_container heading_center">
        <h2 class="">
          Nuestros Productos
        </h2>
        <p class="col-lg-8 px-0">
          No se puede comprar la felicidad, pero se puede comprar HELADO que es bastante similar. <br>
          <br>
          Disfruta de ese instante de felicidad con los productos que solo Rollshake te ofrece. ¿Te parece si iniciamos con una monstershake y  terminamos con un delicioso cinnamon roll?
        </p>
      </div>
      <div class="product_container">
        <div class="carousel-wrap ">
          <div class="">
            <div class="product_owl-carousel owl-carousel">
              <div class="item">
                <div class="box ">                  
                    <img src="../images/i1.jpeg" alt="" />                  
                </div>
              </div>
              <div class="item">
                <div class="box ">                  
                    <img src="../images/i2.jpeg" alt="" />                  
                </div>
              </div>
              <div class="item">
                <div class="box ">                  
                    <img src="../images/i3.jpeg" alt="" />                  
                </div>
              </div>
              <div class="item">
                <div class="box ">                  
                    <img src="../images/i4.jpeg" alt="" />                  
                </div>
              </div>
              <div class="item">
                <div class="box ">                  
                    <img src="../images/i5.jpeg" alt="" />                  
                </div>
              </div>
              <div class="item">
                <div class="box ">                  
                    <img src="../images/i6.jpeg" alt="" />                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <a href="/pedido">
          Arma tu pedido
        </a>
      </div>
    </div>
  </section>

  <!-- product section ends -->
</div>
</template>

<style>


.product_section .heading_container {
  margin-bottom: 35px;
}

/* los siguientes valores son independientes del tamaño del círculo*/
.product_section .box img  {
  height: 300px;
  width: 300px;  
  background-repeat: no-repeat;
  background-position: 50%;
  border-radius: 50%;
  background-size: 100% auto;
}

.product_section .box {
  margin: 10px;
  text-align: center;
  -webkit-transition: all .3s;
  transition: all .3s;
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
  color: #ffffff;
}

.product_section .box .img-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  position: relative;
  padding-bottom: 75px;
}

.product_section .box .img-box img {
  width: 100%;
  max-height: 100%;
  max-width: 100%;
  position: relative;
  z-index: 3;
}

.product_section .box .img-box::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 250px;
  height: 250px;
  border-radius: 100%;
  background-color: #ff9e6a;
  border: 15px solid #ffccb1;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  z-index: 1;
}

.product_section .box .detail-box {
  margin-top: 15px;
}

.product_section .box .detail-box h5 {
  font-weight: 600;
}

.product_section .box .detail-box p {
  margin: 0;
}

.product_section .btn-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-top: 45px;
}

.product_section .btn-box a {
  display: inline-block;
  padding: 10px 45px;
  background-color: #ff9e6a;
  color: #ffffff;
  border-radius: 0;
  -webkit-transition: all .3s;
  transition: all .3s;
  border: 1px solid #ff9e6a;
}

.product_section .btn-box a:hover {
  background-color: transparent;
  color: #ff9e6a;
}

.product_section .owl-stage {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
}

.product_section .owl-stage .owl-item.active {
  -webkit-transform: scale(1);
          transform: scale(1);
}

.product_section .owl-nav {
  display: none;
}

.product_section .owl-dots {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-top: 25px;
}

.product_section .owl-dots .owl-dot {
  width: 15px;
  height: 15px;
  border: none;
  border-radius: 100%;
  margin: 0 2px;
  background-color: #ccc;
  border: none;
  outline: none;
}

.product_section .owl-dots .owl-dot.active {
  background: #f26483;
}



</style>