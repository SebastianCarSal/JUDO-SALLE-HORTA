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

function Navbar({ setPaginaActual }) {
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
      <div className={`menu ${menuAbierto ? "menu-abierto" : ""}`}>
        <button className="close-button" onClick={toggleMenu}>✖</button>
        <ul>
          <li><a href="#inicio" onClick={() => { setPaginaActual("inicio"); setMenuAbierto(false); }}>Inicio</a></li>
          <li><a href="#noticias" onClick={() => { setPaginaActual("noticias"); setMenuAbierto(false); }}>Noticias</a></li>
          <li><a href="#merch" onClick={() => { setPaginaActual("merch"); setMenuAbierto(false); }}>Merch</a></li>
          <li><a href="#competidores" onClick={() => { setPaginaActual("competidores"); setMenuAbierto(false); }}>Competidores</a></li>
          <li><a href="#nosotros" onClick={() => { setPaginaActual("nosotros"); setMenuAbierto(false); }}>Sobre Nosotros</a></li>
        </ul>
      </div>
    </nav>
  );
}
  
//carrusel de imagenes
function Carrusel () {
  const imagenes = ["media/carr1.jpg","media/ono.jpg", "media/rinner.jpg"];

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

  //componente apartado Sobre nosotros
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
  function Competidores({ modo }) {
    const [competidores, setCompetidores] = useState([]); // Estado para almacenar los competidores
  
    useEffect(() => {
      // Recuperar datos desde el backend
      fetch('http://localhost:3000/judokas') // Cambia la URL según tu backend
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error al obtener los datos');
          }
          return response.json();
        })
        .then((data) => {
          setCompetidores(data); 
        })
        .catch((error) => {
          console.error('Error al obtener los datos del backend:', error);
        });
    }, []); 
  
    // Filtrar competidores según el modo
    const competidoresAMostrar = modo === "inicio" ? competidores.slice(0, 3) : competidores;
  
    function CartasCompetidores({ peso, nombrePeso, url, alias, nombre, apellido1, apellido2, nacionalidad }) {
      return (
        <div className="carta-competidor">
          <div className="peso">
            <h2>{peso}</h2>
            <h4>{nombrePeso}</h4>
          </div>
          <div className="imagen-competidor">
            <img src={url} alt={alias} /> 
          </div>
          <div className="info-competidor">
            <h2>"{alias}"</h2>
            <h1>{nombre} {apellido1}</h1>
            <h3>{apellido2}</h3>
            <p>{nacionalidad}</p>
          </div>
        </div>
      );
    }
  
    return (
      <div className="competidores">
        <h1 className="titulo-competidores">COMPETIDORES</h1>
        <div className="cartas-competidores">
          {competidoresAMostrar.map((competidor, index) => (
            <CartasCompetidores
              key={index}
              peso={competidor.peso}
              nombrePeso={competidor.nombrePeso}
              url={competidor.url} // Pasa el campo `url` al componente
              alias={competidor.alias}
              nombre={competidor.nombre}
              apellido1={competidor.apellido1}
              apellido2={competidor.apellido2}
              nacionalidad={competidor.nacionalidad}
            />
          ))}
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

  function Footer() {
    return (
      <div>
        <footer className="footer-distributed">
        <div className="footer-right">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="media/instagram.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src="media/tiktok.png" alt="TikTok" className="social-icon" />
          </a>
        </div>
  
          <div className="footer-left">
            <p className="footer-links">
              <a href="#">Página creada por Sebastian Manuel Carpintero y Ethan Seisdedos Garcia</a>
            </p>
  
            <p>Judo Nou Barcelona &copy; 2025 Todos los derechos reservados</p>
          </div>
        </footer>
      </div>
    );
  };
  

  //Componente principal de la aplicación
  function App() {
    const [paginaActual, setPaginaActual] = useState("inicio");
  
    const renderizarContenido = () => {
      switch (paginaActual) {
        case "inicio":
          return (
            <>
              <Carrusel />
              <UltimasNoticias />
              <SobreNosotros />
              <Competidores modo="inicio" /> 
              <ContactoClub />
              <Footer />
            </>
          );
        case "competidores":
          return <Competidores modo="competidores" />; 
        case "noticias":
          return <UltimasNoticias />;
        case "merch":
          return <h1>Merchandising</h1>;
        case "nosotros":
          return <SobreNosotros />;
        default:
          return <h1>Página no encontrada</h1>;
      }
    };
  
    return (
      <div>
        <Navbar setPaginaActual={setPaginaActual} />
        <div>{renderizarContenido()}</div>
      </div>
    );
  }
  const app = document.getElementById('app');
  const root = ReactDOM.createRoot(app);
  root.render(<App />);