
<template>
<div class="hero_area body">
        
     <header class="header_section">
         
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <a class="navbar-brand " href="/"> ROLLSHAKE </a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class=""> </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  ">
              <li class="nav-item active">
                <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/nosotros">Nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/productos">Productos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/pedido">Pedido</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contactanos">Contactanos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/resenas">Reseñas</a>
              </li>
              <form class="form-inline justify-content-center">
                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    
</div>

</template>

<style>

.hero_area .hero_bg_box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.hero_area .hero_bg_box img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: left bottom;
     object-position: left bottom;
}

.hero_area .hero_bg_box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}


.body {
  font-family: 'Poppins', sans-serif;
  color: #0c0c0c;
  background-color: #ffffff;
  overflow-x: hidden;
}

.navbar-brand {
  color: #ffffff;
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
}

.navbar-brand span {
  color: #f26483;
}

.navbar-brand:hover {
  color: inherit;
}

.custom_nav-container {
  padding: 0;
}

.custom_nav-container .navbar-nav {
  margin-left: auto;
}

.custom_nav-container .navbar-nav .nav-item .nav-link {
  padding: 5px 30px;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  border-radius: 5px;
  font-size: 15px;
  -webkit-transition: all .3s;
  transition: all .3s;
}

.custom_nav-container .navbar-nav .nav-item .nav-link i {
  margin-right: 5px;
}

.custom_nav-container .navbar-nav .nav-item:hover .nav-link {
  color: #f26483;
}

.custom_nav-container .nav_search-btn {
  width: 35px;
  height: 35px;
  padding: 0;
  border: none;
  color: #ffffff;
}

.custom_nav-container .nav_search-btn:hover {
  color: #f26483;
}

.custom_nav-container .navbar-toggler {
  outline: none;
}

.custom_nav-container .navbar-toggler {
  padding: 0;
  width: 37px;
  height: 42px;
  -webkit-transition: all .3s;
  transition: all .3s;
}

.custom_nav-container .navbar-toggler span {
  display: block;
  width: 35px;
  height: 4px;
  background-color: #ffffff;
  margin: 7px 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  position: relative;
  border-radius: 5px;
  -webkit-transition: all .3s;
  transition: all .3s;
}

.custom_nav-container .navbar-toggler span::before, .custom_nav-container .navbar-toggler span::after {
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  top: -10px;
  border-radius: 5px;
  -webkit-transition: all .3s;
  transition: all .3s;
}

.custom_nav-container .navbar-toggler span::after {
  top: 10px;
}

.custom_nav-container .navbar-toggler[aria-expanded="true"] {
  -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
}

.custom_nav-container .navbar-toggler[aria-expanded="true"] span {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.custom_nav-container .navbar-toggler[aria-expanded="true"] span::before, .custom_nav-container .navbar-toggler[aria-expanded="true"] span::after {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
  top: 0;
}

.custom_nav-container .navbar-toggler[aria-expanded="true"] .s-1 {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
  margin: 0;
  margin-bottom: -4px;
}

.custom_nav-container .navbar-toggler[aria-expanded="true"] .s-2 {
  display: none;
}

.custom_nav-container .navbar-toggler[aria-expanded="true"] .s-3 {
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  margin: 0;
  margin-top: -4px;
}

.custom_nav-container .navbar-toggler[aria-expanded="false"] .s-1,
.custom_nav-container .navbar-toggler[aria-expanded="false"] .s-2,
.custom_nav-container .navbar-toggler[aria-expanded="false"] .s-3 {
  -webkit-transform: none;
          transform: none;
}
a,
a:hover,
a:focus {
  text-decoration: none;
}

a:hover,
a:focus {
  color: initial;
}

.hero_area {
  background-color: #fcafc0;
  position: relative;
  min-height: 10vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.hero_area .hero_bg_box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  overflow: hidden;
  z-index: -1;
}

.hero_area .hero_bg_box img {
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: left bottom;
     object-position: left bottom;
}

.hero_area .hero_bg_box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
}

.sub_page .hero_area {
  min-height: auto;
}
</style>