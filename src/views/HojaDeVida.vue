<template>
    <div class="contenedor">
        <div class="left">
            <div class="foto">
                <img src="" alt="">
                <img alt="Vue logo" src="../assets/Julian.jpeg">
            </div>
            <hr>
            <div class="sub-titulos">
                <h2>Datos personales</h2>
            </div>
            <div class="datosPersonales">
                <ul>
                    <li><h3><i class="fas fa-address-card"></i> Julian David Vasquez Garcia </h3></li>
                    <li><h3><i class="fas fa-envelope"></i> Julian_djv@hotmail.com</h3></li>
                    <li><h3><i class="fas fa-phone"></i> 3212068290</h3></li>
                    <li><h3><i class="fas fa-location"></i> 14/05/1991 Bogota Colombia</h3></li>
                </ul>
            </div>
            <div class="sub-titulos">
                <h2>Conocimientos</h2>
            </div>
            <div class="conocimientos">
                <h3>HTML5 - CSS3 - JS - VueJS</h3>
                <h3>PHP | C# | Python - Laravel | Django</h3>
                <h3>MSSQL - Postgres - MySql</h3>
            </div>
            <div class="sub-titulos">
                <h2>Idiomas</h2>
            </div>
            <div class="idiomas">
                <h3>Español nativo</h3>
                <h3>Ingles basico</h3>
            </div>
        </div>



        <div class="card text-center">
  <div class="card-header">
    <h2>Perfil profesional</h2>
  </div>
  <div class="card-body right">
 <div class="">
          
            <div class="perfil-profesional">
                <p>Ingeniero de sistemas, líder en proyectos de desarrollo de software e
                    implementación de nuevas tecnologías en transformación digital, experiencia en
                    desarrollo de software con lenguajes PHP, C#, javascript, html, css, framewoks
                    laravel, yii2, boopstrap, vuejs,stylus y sass; manejo de sistemas operativos linux
                    y windows; administración de infraestructura tecnológica, gestión bases de
                    datos, excelente desempeño solucionando problemas de hardware, software y
                    redes, competente para la administración de servidores y servicios relacionados
                    orientados a la seguridad informática, habilidad para resolver de forma analítica
                    información para la toma de decisiones. Sentido de pertenencia y excelente
                    trabajo en equipo para la consecución de objetivos y dispuesto al aprendizaje
                    continuo.</p>
            </div>
        </div>
  </div>
  <div class="card-footer text-muted">
                <a href="http://twitter.com/julianV8" target="_blank"> <i class="fab fa-twitter fa-4x"></i></a>       
                <a href="https://www.linkedin.com/in/julian-vasquez-61396553/" target="_blank"> <i class="fab fa-linkedin fa-4x"></i></a>
                <a href="http://instagram.com/julianv8" target="_blank"> <i class="fab fa-instagram fa-4x"></i></a>
  </div>
</div>
        
    </div>
</template>
<style scoped>
a {
    padding: 10px;
}
    .contenedor {
        display: grid;  
        grid-template-columns: repeat(1, 1fr 3fr);
        margin-left: 50px;
        margin-right: 50px;
    }
    .left {
        position: relative;
        height: inherit;
        background: rgb(46, 72, 110);
    }
    .right {
        position: relative;
        height: inherit;
        background: rgb(224, 232, 238);
    }
    .foto img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .datosPersonales ul li h3 {
        color: rgb(103, 164, 235);
        text-align: left;
        margin-left: 45px;
        margin-top: 20px;
        font: 1.2em sans-serif;
    }
    .sub-titulos {
        text-align: left;
        margin-left: 20px;
        color: rgb(209, 212, 216);
    }
    .conocimientos h3, 
    .idiomas h3 {
        color: rgb(103, 164, 235);
        margin-top: 20px;
        font: 1.2em sans-serif;
    }
    p {
        text-align: justify;
        font: 1.5em sans-serif;
    }
    .perfil-profesional {
        padding: 50px;
    }
    .perfil {
        margin-top: 50px;
        font: 1.2em sans-serif;
    }
    li {
        list-style: none;
    }
    .footer{
    position: fixed;
    z-index: 10000;
    width: 100%;
    }
    .flex {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
   
</style>