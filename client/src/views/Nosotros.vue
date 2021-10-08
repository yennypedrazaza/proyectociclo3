<template>
    <div class="nosotros">
        <h1>Nosotros</h1>

  <!-- about section -->

  <section class="about_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6 ">
          <div class="img-box pr-md-3">
            <img src="../images/Logo.jpeg" class="box_img" alt="about img">
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box pl-md-3">
            <div class="heading_container">
              <h2 class="">
                ¿Quiénes somos?
              </h2>
            </div>
            <p class="detail_p_mt">
              Somos una experiencia única, dulce y diferente.  El lugar ideal para compartir en familia, amigos o en pareja una deliciosa MALTEADA; elige entre cientos de sabores diferentes y miles de combinaciones, además te ofrecemos la mejor atención al cliente. <br>
              Si buscas un plan en Timaná, Huila; somos los indicados para endulzar tu día. ¡Te esperamos!<br>
              Síguenos en Instagram y Facebook @rollshaketimana
   
            </p>
            <a href="/pedido" class="">
              Arma tu pedido
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- about section ends -->

  <!-- about section -->

  <section class="about_section about_section2 layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6 ">
          <div class="detail-box pr-md-3">
            <div class="heading_container">
              <h2 class="">
                No pares de soñar, aquí tus antojos no tienen límites. Animate a crear tu monstershake 
              </h2>
            </div>
            <p class="detail_p_mt">
              Crea tu malteada en tres sencillos pasos. <br>
              Primero elige el tamaño, aquí tienes dos opciones 12 Oz o 16 Oz, luego selecciona un sabor de helado como base de tu malteada, tienes más de diez opciones. <br>
              Después combina la cobertura del batido y finalmente añade todos los toppings que desees poner sobre ella.   
            </p>
            <a href="/pedido" class="">
               Arma tu pedido
            </a>
          </div>
        </div>
        <div class="col-md-6 ">
          <div class="img-box pl-md-3">
            <img src="../images/i7.jpg" class="box_img" alt="about img">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- about section ends -->


    </div>
</template>

<style>

.about_section {
  background: -webkit-gradient(linear, left top, right top, color-stop(50%, #fcafc0), color-stop(50%, transparent));
  background: linear-gradient(to right, #fcafc0 50%, transparent 50%);
}

.about_section .row {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.about_section .img-box {
  position: relative;
  overflow: hidden;
  height: 100%;
}

.about_section .img-box img {
  width: 100%;
}

.about_section .detail-box p {
  color: #1f1f1f;
  margin-top: 15px;
}

.about_section .detail-box a {
  display: inline-block;
  padding: 10px 35px;
  background-color: #f26483;
  color: #ffffff;
  border-radius: 0px;
  -webkit-transition: all .3s;
  transition: all .3s;
  border: 1px solid #f26483;
  margin-top: 15px;
}

.about_section .detail-box a:hover {
  background-color: transparent;
  color: #f26483;
}

.about_section2 {
  background: -webkit-gradient(linear, left top, right top, color-stop(50%, transparent), color-stop(50%, #ffccb1));
  background: linear-gradient(to right, transparent 50%, #ffccb1 50%);
}

.about_section2 .detail-box a {
  display: inline-block;
  padding: 10px 35px;
  background-color: #ff9e6a;
  color: #ffffff;
  border-radius: 0px;
  -webkit-transition: all .3s;
  transition: all .3s;
  border: 1px solid #ff9e6a;
  margin-top: 15px;
}

.about_section2 .detail-box a:hover {
  background-color: transparent;
  color: #ff9e6a;
}

</style>