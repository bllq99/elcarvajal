$( document ).ready(function(){
    let navbar = `<nav class="navbar navbar-expand-lg navbar">
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link"><img src="./assets/img/icon/El_Carvajal.ico" width="35px" alt="ICONO"></a></li>
        <li class="nav-item"><a class="nav-link" href="index.html">INICIO</a></li>
        <li class="nav-item"><a class="nav-link" href="productos.html">PRODUCTOS</a></li>
        <li class="nav-item"><a class="nav-link" href="sugerencias.html">SUGERENCIAS</a></li>
        <li class="nav-item"><a class="nav-link" href="contacto.html">CONTACTO</a></li>
        <li class="nav-item"><a class="nav-link" href="cotiza.html">COTIZA TU ENTREGA</a></li>
      </a>
    </ul>
  </nav>`;
    $("#menu-principal").html(navbar);
});