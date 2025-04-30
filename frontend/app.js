
const { useState, useEffect } = React;

//recuperacion de datos ejemplo
function recuperacionDatos(){
  const [judokas, setJudokas] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/judokas') 
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error al obtener los datos');
          }
          return response.json();
        })
        .then((data) => {
          setJudokas(data); 
        })
        .catch((error) => {
          console.error('Error al obtener los datos del backend:', error);
        });
    }, []);
    
    judokas.map((judoka) => {
      console.log(judoka);
    })
}


//Barra con logo y botón de menú en la parte superior
function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./media/logo-judo.png" alt="Club de Judo" />
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      {menuAbierto && (
        <div className="menu">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#noticias">Últimas Noticias</a></li>
            <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
            <li><a href="#competidores">Competidores</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
  
//carrusel de imagenes
function Carrusel () {
  const imagenes = ["media/fonseca.jpg","media/ono.jpg", "media/rinner.jpg"];

  const [actual, setActual] = useState(0);

  function siguienteImagen () {
    setActual((anterior) => (anterior + 1) % imagenes.length);
  };

  function anteriorImagen () {
    setActual((anterior) => (anterior - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div className="carrusel">
      <button className="anterior" onClick={anteriorImagen}>‹</button>

      <div className="contenedor-imagen">
        <img src={imagenes[actual]} alt={`Imagen ${actual + 1}`} className="imagen-carrusel" />
      </div>

      <button className="siguiente" onClick={siguienteImagen}>›</button>
    </div>
  );
};

//Ultimas noticias
function UltimasNoticias () {
  const noticias = [
    {tituloNoticias: "Victoria de David Garcia", descripcionNoticias: "Gran desempeño del español Ganando a Denis Vieru en los primeros 10 segundos de combate de IPPON.", imagenNoticias: "./media/torne.jpg"},
    {tituloNoticias: "Fran Garrigós en Paris 2024", descripcionNoticias: "Fran garrigós rompe la sequia de medallas españolas, después de 26 años, nuestro representante en la categoria -60kg, ha conseguido alzarse con el bronce olímpico!", imagenNoticias: "./media/garrigos.jpg"},
    {tituloNoticias: "Medallista Gran slam Ai Tsunoda", descripcionNoticias: "Ai Tsunoda, la judoka de 19 años, consigue ganar y alzarse con su primera medalla internacional, alzandose en el ranking olimpico!", imagenNoticias: "./media/ai_tsunoda.jpg"}];
    //cartas individuales de noticias
    function CartaNoticia({ tituloNoticias, descripcionNoticias, imagenNoticias }) {
      return (
          <div className="carta-noticia">
              <img className="imagen-noticia" src={imagenNoticias} alt={tituloNoticias} />
              <div className="contenido-noticia">
                  <h3 className="titulo-noticia">{tituloNoticias}</h3>
                  <p className="descripcion-noticia">{descripcionNoticias}</p>
                  <button className="boton-noticia-completa">
                      <img src="./media/btn-leerNoticiaEntera.png" alt="Ver más" className="icono-boton" />
                  </button>
              </div>
          </div>
      );
  }
  return(
    <div className="ultimas-noticias">
      <h1>Últimas Noticias</h1>
      <div className="noticias">
        <CartaNoticia 
          tituloNoticias={noticias[0].tituloNoticias} 
          descripcionNoticias={noticias[0].descripcionNoticias}
          imagenNoticias={noticias[0].imagenNoticias}
          />
        <CartaNoticia
          tituloNoticias={noticias[1].tituloNoticias} 
          descripcionNoticias={noticias[1].descripcionNoticias}
          imagenNoticias={noticias[1].imagenNoticias}
        />
        <CartaNoticia
          tituloNoticias={noticias[2].tituloNoticias} 
          descripcionNoticias={noticias[2].descripcionNoticias}
          imagenNoticias={noticias[2].imagenNoticias}        
        />
      </div>
      <button className="boton-ver-todas-noticias">Leer más</button>
    </div>
  )
}

  //componente apartado SObre nosotros
  function SobreNosotros(){
    return(
    <div className = "sobre-nosotros">
      <h1>Sobre Nosotros</h1>
      <div className="contenido-sobre-nosotros">
        <div className="imagenes1-sobre-nosotros">
          <div className="svg1"><img src="./media/1.svg"/></div>
          <div className="svg2"><img src="./media/2.svg"/></div>
          <div className="svg3"><img src="./media/3.svg"/></div>
          <div className="svg4"><img src="./media/4.svg"/></div>
        </div>
        <div className="texto1-sobre-nosotros">
          <h3>Nuestro <b>valores</b> como club</h3>
          <p>En el judo, los valores fundamentales guían la práctica dentro y fuera del tatami.</p>
          <p>El respeto, representado por el saludo, es esencial para reconocer el esfuerzo del maestro, los compañeros y los adversarios.</p> 
          <p>La cortesía, simbolizada por el cinturón, refleja la importancia de la amabilidad y el comportamiento correcto en todo momento.</p>
          <p>El esfuerzo, representado por el judogi, enseña a utilizar la energía de forma eficiente, priorizando la técnica sobre la fuerza bruta.</p>
          <p>La amistad y comunidad, expresada en el trabajo conjunto entre judocas, fomenta el compañerismo y el crecimiento mutuo, reforzando la idea de que en el judo se progresa ayudando a los demás.</p>
        </div> 
        <div className="texto2-sobre-nosotros">
          <h3>Historia del club</h3>
          <p>Aquí resumidamente algo de la historia del club... invitando que vayan a la pagina de sobre nosotros para acabar de ver en sí la historia del club!!</p>
          <p>Aquí resumidamente algo de la historia del club... invitando que vayan a la pagina de sobre nosotros para acabar de ver en sí la historia del club Aquí resumidamente algo de la historia del club... invitando que vayan a la pagina de sobre nosotros para acabar de ver en sí la historia del club.</p>
        </div>
        <div className="imagenes2-sobre-nosotros">
          <img src="./media/image4.png"/>
        </div>
      </div>
    </div>
    );
  }

  //Componente competidores
  function Competidores(){
    
    const competidores = [
      {peso: "-90kg", nombrePeso: " Peso Semipesado", imagenCompetidor: "./media/competidor1.png", nombreCompetidor: "EdgarI", alias: "Peluchito", nombre: "Edgar", apellido1: "Iglesias", apellido2: "García", nacionalidad: "Esp"},
      {peso: "-66kg", nombrePeso: "Peso Ligero", imagenCompetidor: "./media/competidor2.jpg", nombreCompetidor: "AdrianM", alias: "Mora", nombre: "Adrián", apellido1: "Moratalla", apellido2: "APelicano", nacionalidad: "Esp"},
      {peso: "-73kg", nombrePeso: "Peso Semimedio", imagenCompetidor: "./media/competidor3.jpg", nombreCompetidor: "AlbertoG", alias: "Bicho", nombre: "Alberto", apellido1: "García", apellido2: "Lozano", nacionalidad: "Esp"}
    ];

    function CartasCompetidores({peso, nombrePeso, imagenCompetidor, nombreCompetidor, alias, nombre, apellido1, apellido2, nacionalidad}) {
      return(
        <div className="carta-competidor">
          <div className="peso">
            <h2>{peso}</h2>
            <h4>{nombrePeso}</h4>
          </div>
          <div className="imagen-competidor">
            <img src={imagenCompetidor} alt={nombreCompetidor} />
          </div>
          <div className="info-competidor">
            <h2>"{alias}"</h2>
            <h1>{nombre} {apellido1} {apellido2}</h1>
            <p>{nacionalidad}</p>
          </div>
          <div className="boton-ver-perfil-completo">
            <button className="boton-ver-perfil" src="./media/btn-leerNoticiaEntera.png"></button>
          </div>
        </div>
      );
    }

    return(
      <div className="competidores">
          <h1 className="titulo-competidores">Competidores</h1>
          <div className="cartas-competidores">
            <CartasCompetidores
              peso={competidores[0].peso} 
              nombrePeso={competidores[0].nombrePeso}
              imagenCompetidor={competidores[0].imagenCompetidor}
              nombreCompetidor={competidores[0].nombreCompetidor}
              alias={competidores[0].alias}
              nombre={competidores[0].nombre}
              apellido1={competidores[0].apellido1}
              apellido2={competidores[0].apellido2}
              nacionalidad={competidores[0].nacionalidad}
            />
            <CartasCompetidores
              peso={competidores[1].peso} 
              nombrePeso={competidores[1].nombrePeso}
              imagenCompetidor={competidores[1].imagenCompetidor}
              nombreCompetidor={competidores[1].nombreCompetidor}
              alias={competidores[1].alias}
              nombre={competidores[1].nombre}
              apellido1={competidores[1].apellido1}
              apellido2={competidores[1].apellido2}
              nacionalidad={competidores[1].nacionalidad}              
            />
            <CartasCompetidores
              peso={competidores[2].peso} 
              nombrePeso={competidores[2].nombrePeso}
              imagenCompetidor={competidores[2].imagenCompetidor}
              nombreCompetidor={competidores[2].nombreCompetidor}
              alias={competidores[2].alias}
              nombre={competidores[2].nombre}
              apellido1={competidores[2].apellido1}
              apellido2={competidores[2].apellido2}
              nacionalidad={competidores[2].nacionalidad}              
            />
          </div>
      </div>
    );
  }

  //Componente Contacto con el club
  function ContactoClub(){
    return(
      <div className="contacto-club">
        <h1>Contacta con el club</h1>
        <div className="contenido-contacto-club">
          <h4>¿Tienes dudas o quieres unirte a nuestro club?</h4>
          <p>Rellena este formulario y te responderemos lo antes posible.</p>
          <p>Ya seas principiante o competidor, en nuestro club de Judo en Horta encontrarás un equipo dispuesto a ayudarte a mejorar.</p>
          <p>Puedes pedir información sobre horarios, precios, clases de prueba o cualquier otra consulta que tengas.</p>
          <h3>¡Te esperamos en el tatami!</h3>
        </div>
        <div className="formulario-contacto-club">
          <input type="text" placeholder="Nombre y Apellidos" className="input-contacto-nombre"/>
          <input type="text" placeholder="Correo electrónico" className="input-contacto-email"/>
          <input type="text" placeholder="Teléfono" className="input-contacto-telefono"/>
          <input type="text" placeholder="Motivo de contacto" className="input-contacto-motivo"/>
          <input type="text" placeholder="Mensaje" className="input-contacto-mensaje"/>
          <button className="boton-contacto-enviar">Enviar</button>
        </div>
      </div>
    );
  }

  //Componente Footer
    function Footer(){
      return(
        <div className="footer">
          <h1>Footer</h1>
          <p>Derechos reservados © 2025 Club de Judo Horta @ Sebastian C.S & Ethan S.G</p>
          <p>Contacto:</p>
        </div>
    );
  }

  //Componente principal de la aplicación
  function App() {
      return (
          <div className="App">
              <Navbar />
              <Carrusel />
              <UltimasNoticias/>
              <SobreNosotros/>
              <Competidores/>
              <ContactoClub/>
          </div>
      );
  }
  
  const app = document.getElementById('app');
  const root = ReactDOM.createRoot(app);
  root.render(<App />);