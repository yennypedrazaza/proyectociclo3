<template>
  <div class="contactanos">
     
<section class="contact_section layout_padding2">

    <div class="container">
      <div class="heading_container">
        <h2>
          Déjanos Conocerte
        </h2>
        <p>
          Así podremos enviarte obsequios y ofertas
        </p>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form_container pr-md-3">
            <form action="">
              <div>
                <input type="text" placeholder="Nombre" />
              </div>
              <div>
                <input type="text" placeholder="Celular" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" class="message-box" placeholder="Déjanos un mensaje" />
              </div>
              <div class="btn_box">
                <button>
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-6">
          <div class="pl-md-3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4446532135357!2d-75.93210138524508!3d1.9764803985590798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e251150b4b90929%3A0xeabac338a32baa14!2sRollShake!5e0!3m2!1ses-419!2sco!4v1632698977056!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

  <!-- end contact section -->
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

.contact_section {
  position: relative;
  background: -webkit-gradient(linear, left top, right top, color-stop(50%, #fcafc0), color-stop(50%, transparent));
  background: linear-gradient(to right, #fcafc0 50%, transparent 50%);
  color: #ffffff;
}

.contact_section .heading_container {
  margin-bottom: 25px;
}

.contact_section .form_container input {
  width: 100%;
  border: none;
  height: 50px;
  margin-bottom: 25px;
  padding-left: 25px;
  background-color: #fefefe;
  outline: none;
  color: #000000;
  border-radius: 5px;
}

.contact_section .form_container input::-webkit-input-placeholder {
  color: #222222;
}

.contact_section .form_container input:-ms-input-placeholder {
  color: #222222;
}

.contact_section .form_container input::-ms-input-placeholder {
  color: #222222;
}

.contact_section .form_container input::placeholder {
  color: #222222;
}

.contact_section .form_container input.message-box {
  height: 120px;
  border-radius: 5px;
}

.contact_section .form_container button {
  margin-top: 15px;
  border: none;
  text-transform: uppercase;
  display: inline-block;
  padding: 10px 55px;
  background-color: #f26483;
  color: #ffffff;
  border-radius: 0px;
  -webkit-transition: all .3s;
  transition: all .3s;
  border: 1px solid #f26483;
}

.contact_section .form_container button:hover {
  background-color: transparent;
  color: #f26483;
}

.contact_section .map_container {
  width: 100%;
  height: 345px;
  border-radius: 25px;
  overflow: hidden;
}

.contact_section .map_container #googleMap {
  height: 100%;
  min-height: 100%;
  width: 100%;
}

  </style>



