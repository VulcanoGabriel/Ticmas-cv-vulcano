//variables

const datosPersonas = document.getElementById("contenedorP");
const bienvenido = document.getElementById("bienvenido");
const navCv = document.getElementById("navCv");
const idDatos = document.getElementById("idDatos");
const navitem = document.getElementsByClassName("nav-item");
const datosContacto = document.getElementById("datosContacto");
const datosPersonales = document.getElementById("datosPersonales");
const datosExperiencia = document.getElementById("datosExperiencia");
const contenedorForm = document.getElementById("contenedorForm")
const form1 = document.getElementById("form1")
const form2 = document.getElementById("form2")
const form3 = document.getElementById("form3")
const cssBase =  document.getElementById("cssBase")
const cssDos = document.getElementById("cssDos")
const bodyCv = document.getElementById("bodyCv")
const spinner = document.getElementById("spinner1")
const fontAwesome1 = document.getElementById("fontAwesomeid")
const rutaWeb = 'https://randomuser.me/api/';
const refexp = "./refexp.json";


  //Genera por medio de fetch lectura de datos de la api Datos personales / Datos contacto y foto ----------------

  let generarUser = function ()  {
    fetch(rutaWeb)
    .then((resp) => resp.json())
    .then(function(data) {
      let personas = data.results;
      return personas.map(function(persona) {
      datosPersonas.innerHTML += ` 
      <img class="fotoCv" src="${persona.picture.large}">
    `
    datosPersonales.innerHTML += `
    <div class="datosPersonalesB">
    <p>Nombre y Apellido : ${persona.name.last} ${persona.name.first}</p>
    <p>Direccion: ${persona.location.street.name} ${persona.location.street.number} </p>
    <p>Edad: ${persona.dob.age} </p> 
    <p>Fecha y horario de nacimiento: ${persona.dob.date} </p>
    <p>Pais - provincia - Ciudad: ${persona.location.country} ${persona.location.state} ${persona.location.city} </p>
    <p>Numero y tipo de documento ${persona.id.name} ${persona.id.value}</p>
    </div>
    `
    datosContacto.innerHTML += `
    <div class="datosContactoB">
    <p>E-mail: ${persona.email}</p>
    <p>Telefono: ${persona.phone}</p>
    <p>Celular: ${persona.cell}</p>
    </div>
    `
      })

    })

    .catch(function(error) {
    console.log(error);
    });
  }

    // Genera lectura de 3 ferfiles distintos en el CV -------------------------------------------------------
    function perAleatorio() {
      const aleatorio = Math.round(Math.random()*8);
      if (aleatorio < 3) {
        per1();
        form1.style.display = "grid";
      } else if (aleatorio < 6) {
        per2()
        form2.style.display = "grid";
      } else {
        per3()
        form3.style.display = "grid";
      }
    }


    //per 1 2 3 , hace lectura del perfil profesional (acomodar no es lectura de experiencia)

 

    const per1 = function () {
      fetch("per1.json")
    .then((promise) => promise.json())
    .then((data2) => {
      data2.forEach((element) => {
        datosExperiencia.innerHTML += `
        <h3>${element.perfil}</h3>
        <p>${element.detalle}</p>
          `
      });
      ordenar1();
    })
    .catch(function(error) {
      console.log(error);
      });
    }

const per2 = function () {
  fetch("per2.json")
.then((promise) => promise.json())
.then((data2) => {
  data2.forEach((element) => {
    datosExperiencia.innerHTML += `
    <h3>${element.perfil}</h3>
    <p>${element.detalle}</p>
      `
  });
  ordenar2();
})
.catch(function(error) {
  console.log(error);
  });
}


const per3 = function () {

  fetch("per3.json")
.then((promise) => promise.json())
.then((data2) => {
  data2.forEach((element) => {
    datosExperiencia.innerHTML += `
    <h3>${element.perfil}</h3>
    <p>${element.detalle}</p>
      `
  });
ordenar3();
})
.catch(function(error) {
  console.log(error);
  });
}

//ordernar 1 2 3 , ordena el contenido del html verticalmente

const ordenar1 = () => {
    contenedorForm.style.display = "grid";
} 

const ordenar2 = () => {
  contenedorForm.style.display = "grid";
} 

const ordenar3 = () => {
  contenedorForm.style.display = "grid";
}

//Pinto el estilo vidual

const pintarEstilo = () => {
cssBase.style.display = "grid"
cssDos.style.display = "grid"
}

//cambia el background al generar un CV
const bodyCv1 = () => {
  bodyCv.style.backgroundImage = ('../recursos/img/pexels-mitchell-luo-3694708.jpg')
  
  
}

//Genero la estructura del sitio  ---------------------------------------------------------------------------
const welcome = () => {

const portada = document.createElement("div")
portada.className = "portada-css"
portada.innerHTML = `
Bienvenido, toque el boton para generar un CV
`
bienvenido.append(portada)

//Genera el Boton de bienvenida para generar un CV aleatorio
const btnPortada = document.createElement("button")
const btnPortadaB = document.createTextNode("Generar CV")
btnPortada.className = "btn-portada"

btnPortada.append(btnPortadaB)
bienvenido.append(btnPortada)



//Muestra el CV
btnPortada.addEventListener("click", () => {

  //muestro el spinner de carga
  spinner.style.display = "grid"
  btnPortada.style.display = "none"
  fontAwesome1.style.display = "none"

  setTimeout(() => {

    const btnAleatorio = document.createElement("button")
    const btnAleatorioB = document.createTextNode("Inicio")
    btnAleatorio.className = "btn-aleatorio"

    btnAleatorio.append(btnAleatorioB)
    bodyCv.append(btnAleatorio)

    btnAleatorio.addEventListener("click", () => {
      location.reload()
      welcome()
    })


    spinner.style.display = "none"
    btnPortada.style.display = "none"
    portada.style.display = "none"
  //Limpio el contenido del div para que no se creen vaarios cv a la vez
  datosPersonas.innerHTML = "";
  //Muestra el nav de cv
  navCv.style.display = "grid";
  //Genera un cv nuevo
  generarUser();
  //Muestro el contenido generado
  datosPersonas.style.display = "grid";

  // mostrarexp al azar
  datosExperiencia.innerHTML = "";
  datosContacto.innerHTML = "";
  datosPersonales.innerHTML = "";
  // contenedorForm.innerHTML = "";
  perAleatorio();
  pintarEstilo();
  bodyCv1();

}, 3000);

})

}

//Genero HTMl y estructura
welcome ();






















