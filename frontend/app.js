const { useState, useEffect } = React;

function initializeFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyApd_ZTn6MXLd_RZPlPkHhVw_uRX7otaEo",
    authDomain: "judosallehorta.firebaseapp.com",
    projectId: "judosallehorta",
    storageBucket: "judosallehorta.firebasestorage.app",
    messagingSenderId: "381729018796",
    appId: "1:381729018796:web:223401cb51ced3927e2009",
    measurementId: "G-D797CEKL42"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  return {
    auth: firebase.auth(), 
    firestore: firebase.firestore(),
    serverTimestamp: firebase.firestore.FieldValue.serverTimestamp, 
  };
}

function Navbar({ setPaginaActual, usuario, setCarritoAbierto }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const handleLogout = () => {
    const { auth } = initializeFirebase();
    auth.signOut().then(() => {
      console.log("Usuario cerró sesión");
    });
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./media/logo-judo3.png" alt="Club de Judo" />
      </div>

      <div className="menu-buttons">
        {usuario ? (
          <div className="usuario-info">
            <span className="usuario-nombre">Hola, {usuario.displayName || usuario.email}</span>
            <button className="menu-button" onClick={handleLogout}>
              <img src="./media/logout-icon.png" alt="Cerrar sesión" className="menu-icon" />
            </button>
          </div>
        ) : (
          <button className="menu-button" onClick={() => setPaginaActual("login")}>
            <img src="./media/register.png" alt="Registro" className="menu-icon" />
          </button>
        )}
        <button className="menu-button" onClick={() => setCarritoAbierto(true)}>
          <img src="./media/carrito.png" alt="Carrito" className="menu-icon" />
        </button>
        <button className="menu-button" onClick={toggleMenu}>
          <img src="./media/menu.png" alt="Menú" className="menu-icon" />
        </button>
      </div>

      <div className={`menu ${menuAbierto ? "menu-abierto" : ""}`}>
        <button className="close-button" onClick={toggleMenu}>✖</button>
        <div className="menu-logo">
          <img src="./media/logo-judo.png" alt="Club de Judo" />
        </div>
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
function Carrusel() {
  const imagenes = ["media/carr1.jpg", "media/ono.jpg", "media/rinner.jpg"];

  const [actual, setActual] = useState(0);

  function siguienteImagen() {
    setActual((anterior) => (anterior + 1) % imagenes.length);
  };

  function anteriorImagen() {
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
function UltimasNoticias() {
  const noticias = [
    { tituloNoticias: "Victoria de David Garcia", descripcionNoticias: "Gran desempeño del español Ganando a Denis Vieru en los primeros 10 segundos de combate de IPPON.", imagenNoticias: "./media/torne.jpg" },
    { tituloNoticias: "Fran Garrigós en Paris 2024", descripcionNoticias: "Fran garrigós rompe la sequia de medallas españolas, después de 26 años, nuestro representante en la categoria -60kg, ha conseguido alzarse con el bronce olímpico!", imagenNoticias: "./media/garrigos.jpg" },
    { tituloNoticias: "Medallista Gran slam Ai Tsunoda", descripcionNoticias: "Ai Tsunoda, la judoka de 19 años, consigue ganar y alzarse con su primera medalla internacional, alzandose en el ranking olimpico!", imagenNoticias: "./media/ai_tsunoda.jpg" }];
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
  return (
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
function SobreNosotros() {
  return (
    <div className="sobre-nosotros">
      <h1>Sobre Nosotros</h1>
      <div className="contenido-sobre-nosotros">
        <div className="imagenes1-sobre-nosotros">
          <div className="svg1"><img src="./media/1.svg" /></div>
          <div className="svg2"><img src="./media/2.svg" /></div>
          <div className="svg3"><img src="./media/3.svg" /></div>
          <div className="svg4"><img src="./media/4.svg" /></div>
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
          <img src="./media/image4.png" />
        </div>
      </div>
    </div>
  );
}

//Componente competidores
function Competidores({ modo, setPaginaActual, setCompetidorSeleccionado }) {
  const [competidores, setCompetidores] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/judokas')
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

  const competidoresAMostrar = modo === "inicio" ? competidores.slice(0, 3) : competidores;

  const handleClick = (competidor) => {
    setCompetidorSeleccionado(competidor);
    setPaginaActual("perfilCompetidor");
  };

  return (
    <div className={`competidores ${modo === "competidores" ? "padding-top" : ""}`}>
      <h1 className="titulo-competidores">COMPETIDORES</h1>
      <div className="cartas-competidores">
        {competidoresAMostrar.map((competidor, index) => (
          <div key={index} className="carta-competidor" onClick={() => handleClick(competidor)}>
            <div className="peso">
              <h2>{competidor.peso}</h2>
              <h4>{competidor.nombrePeso}</h4>
            </div>
            <div className="imagen-competidor">
              <img src={competidor.url} alt={competidor.alias} />
            </div>
            <div className="info-competidor">
              <h2>"{competidor.apodo}"</h2>
              <h1>{competidor.nombre} {competidor.apellido1}</h1>
              <h3>{competidor.apellido2}</h3>
              <p>{competidor.nacionalidad}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

//COMPONENTE PERFIL COMPETIDOR
function PerfilCompetidor({ competidor }) {
  if (!competidor) {
    return <h2>No se encontró información del competidor</h2>;
  }

  // Asignar la URL de la bandera según el país
  const obtenerBandera = (pais) => {
    switch (pais) {
      case "ESP":
        return "./media/flags/esp.svg"; 
      case "PER":
        return "./media/flags/per.png"; 
      case "RD":
        return "./media/flags/rd.svg"; 
      case "USA":
        return "./media/flags/usa.png"; 
      default:
        return "./media/flags/default.svg"; 
    }
  };

  // Filtrar las medallas de la competición CEEB
  const medallasCEEB = competidor.medallas.find((medalla) => medalla.id === "CEEB");
  const medallasCopasESP = competidor.medallas.find((medalla) => medalla.id === "Copas de España");

  return (
    <div className="perfil-competidor">
      <header className="header">
        <div className="profile">
          <img src={competidor.url} alt={`Foto de ${competidor.nombre}`} />
          <div className="info">
            <h1 className="nombre-completo">{competidor.nombre} {competidor.apellido1} {competidor.apellido2}</h1>
            <p className="edad">Edad: {competidor.edad} años</p>
            <p className="pais">
              <img src={obtenerBandera(competidor.pais)} alt={`Bandera de ${competidor.pais}`} />
              País: {competidor.pais}
            </p>
          </div>
          <div className="weight">
            <span>{competidor.peso}</span>
            <small>{competidor.nombrePeso}</small>
          </div>
        </div>
        <nav className="nav">
          <a href="#" className="active">Medallas</a>
          <a href="#">Fotos</a>
        </nav>
      </header>

      <main>
        <section className="medallas">
          <h2>Medallas - Competición CEEB</h2>
          {medallasCEEB ? (
            <div className="lista-medallas">
              <div className="medalla">
                <h3>CEEB</h3>
                <p>Oro: {medallasCEEB.oro}</p>
                <p>Plata: {medallasCEEB.plata}</p>
                <p>Bronce: {medallasCEEB.bronce}</p>
              </div>
            </div>
          ) : (
            <p>No se encontraron medallas para la competición CEEB.</p>
          )}

          <h2>Medallas - Competición COPAS DE ESPAÑA</h2>
          {medallasCopasESP ? (
            <div className="lista-medallas">
              <div className="medalla">
                <h3>COPAS DE ESPAÑA</h3>
                <p>Oro: {medallasCopasESP.oro}</p>
                <p>Plata: {medallasCopasESP.plata}</p>
                <p>Bronce: {medallasCopasESP.bronce}</p>
              </div>
            </div>
          ) : (
            <p>No se encontraron medallas para la competición CEEB.</p>
          )}
        </section>
      </main>
      
    </div>
  );
}

//Componente Contacto con el club
function ContactoClub() {
  return (
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
        <input type="text" placeholder="Nombre y Apellidos" className="input-contacto-nombre" />
        <input type="text" placeholder="Correo electrónico" className="input-contacto-email" />
        <input type="text" placeholder="Teléfono" className="input-contacto-telefono" />
        <input type="text" placeholder="Motivo de contacto" className="input-contacto-motivo" />
        <input type="text" placeholder="Mensaje" className="input-contacto-mensaje" />
        <button className="boton-contacto-enviar">Enviar</button>
      </div>
    </div>
  );
}

  //Componente tienda
  function Tienda({ agregarProductoAlCarrito }) {
    const [productos, setProductos] = useState([]);
  
    useEffect(() => {
      // Recuperar datos desde el endpoint
      fetch('http://localhost:3000/productos')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error al obtener los datos');
          }
          return response.json();
        })
        .then((data) => {
          setProductos(data);
        })
        .catch((error) => {
          console.error('Error al obtener los datos del backend:', error);
        });
    }, []);
  
    return (
      <div className="tienda">
        <div className="filtros-tienda">
          <ul>
            <li><a href="#">TODO</a></li>
            <li><a href="#">JUDOGIS</a></li>
            <li><a href="#">CINTURONES</a></li>
            <li><a href="#">CHANDAL</a></li>
            <li><a href="#">CAMISETAS</a></li>
          </ul>
        </div>
        <div className="productos-tienda">
          {productos.map((producto, index) => (
            <div key={index} className="producto-carta">
              <img src={producto.url} alt={producto.nombre} className="imagen-producto" />
              <div className="producto-detalles">
                <h3 className="producto-nombre">{producto.nombre}</h3>
                <p className="producto-precio">Precio: ${producto.precio || 'N/A'}</p>
                <button
                  className="producto-boton"
                  onClick={() => agregarProductoAlCarrito(producto)}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
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

function Carrito({ carritoAbierto, setCarritoAbierto, productosCarrito, setProductosCarrito, eliminarProducto, usuario }) {
  const incrementarCantidad = (index) => {
    setProductosCarrito((prevProductos) => {
      const nuevoCarrito = prevProductos.map((producto, i) =>
        i === index ? { ...producto, cantidad: producto.cantidad + 1 } : producto
      );

      // Actualizar el carrito en Firestore
      if (usuario) {
        const { firestore } = initializeFirebase();
        firestore
          .collection('users')
          .doc(usuario.uid)
          .set({ carrito: nuevoCarrito }, { merge: true })
          .then(() => console.log('Cantidad incrementada en Firestore'))
          .catch((error) => console.error('Error al actualizar la cantidad en Firestore:', error));
      }

      return nuevoCarrito;
    });
  };

  const calcularTotal = () => {
    return productosCarrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  };

  const ProductoEnCarrito = ({ producto, index }) => {
    return (
      <div className="carrito-item">
        <img src={producto.url} alt={producto.name} className="carrito-item-imagen" />
        <div className="carrito-item-detalles">
          <h3 className="carrito-item-nombre">{producto.name}</h3>
          <p className="carrito-item-cantidad">
            Cantidad: {producto.cantidad}{' '}
            <button
              className="incrementar-cantidad"
              onClick={() => incrementarCantidad(index)}
            >
              +
            </button>
          </p>
          <p className="carrito-item-precio">Precio: {producto.precio} €</p>
        </div>
        <button className="eliminar-item" onClick={() => eliminarProducto(index)}>
          Eliminar
        </button>
      </div>
    );
  };

  return (
    <div className={`carrito ${carritoAbierto ? 'carrito-abierto' : ''}`}>
      <div className="carrito-header">
        <h2>Carrito</h2>
        <button className="cerrar-carrito" onClick={() => setCarritoAbierto(false)}>
          ✖
        </button>
      </div>
      <div className="carrito-contenido">
        {productosCarrito.length > 0 ? (
          productosCarrito.map((producto, index) => (
            <ProductoEnCarrito key={index} producto={producto} index={index} />
          ))
        ) : (
          <p className="carrito-vacio">El carrito está vacío</p>
        )}
      </div>
      {productosCarrito.length > 0 && (
        <div className="carrito-total">
          <h3>Total: {calcularTotal().toFixed(2)} €</h3>
        </div>
      )}
    </div>
  );
}

function RegisterForm({ setPaginaActual }) {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { auth, firestore, serverTimestamp } = initializeFirebase();

    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Actualizar el perfil del usuario con el nombre de usuario
        return user.updateProfile({
          displayName: username,
        }).then(() => {
          return firestore.collection('users').doc(username).set({
            username: username,
            email: user.email,
            createdAt: serverTimestamp(),
          });
        });
      })
      .then(() => {
        console.log("Usuario registrado y documento creado en Firestore");
        setPaginaActual("login");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Registrarse</h2>

        <div className="input-group">
          <label htmlFor="username">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Registrarse</button>

        <p className="login-link">
          ¿Ya tienes cuenta? <a onClick={() => setPaginaActual("login")}>Inicia sesión aquí</a>
        </p>
      </form>
    </div>
  );
}

//COMPONENTE LOGIN
function LoginForm({ setPaginaActual }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { auth } = initializeFirebase();

    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        console.log("Logueado:", user);

        // Redirigir al inicio después de iniciar sesión
        setPaginaActual("inicio");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
        {error && <p className="error-msg">{error}</p>} 

        <div className="input-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Iniciar sesión</button>

        <p className="login-link">
          ¿No tienes cuenta? <a onClick={() => setPaginaActual("register")}>Regístrate aquí</a>
        </p>
      </form>
    </div>
  );
}

//Componente principal de la aplicación
function App() {
  const [paginaActual, setPaginaActual] = useState("inicio");
  const [competidorSeleccionado, setCompetidorSeleccionado] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [carritoAbierto, setCarritoAbierto] = useState(false); 
  const [productosCarrito, setProductosCarrito] = useState([]); 
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const { auth, firestore } = initializeFirebase();
  
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUsuario({
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
        });
  
        // Recuperar el carrito del usuario desde Firestore
        firestore
          .collection('users')
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists && doc.data().carrito) {
              setProductosCarrito(doc.data().carrito);
            }
          })
          .catch((error) => console.error('Error al recuperar el carrito:', error));
      } else {
        setUsuario(null);
        setProductosCarrito([]); // Limpiar el carrito si no hay usuario
      }
    });
  
    return () => unsubscribe();
  }, []);

  const mostrarMensaje = (texto) => {
    setMensaje(texto);
    setTimeout(() => setMensaje(""), 3000); // Ocultar el mensaje después de 3 segundos
  };

  const agregarProductoAlCarrito = (producto) => {
    setProductosCarrito((prevProductos) => {
      const productoExistente = prevProductos.find((p) => p.id === producto.id);
      const nuevoCarrito = productoExistente
        ? prevProductos.map((p) =>
            p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
          )
        : [...prevProductos, { ...producto, cantidad: 1 }];
  
      // Guardar el carrito actualizado en Firestore
      if (usuario) {
        const { firestore } = initializeFirebase();
        firestore
          .collection('users')
          .doc(usuario.uid)
          .set({ carrito: nuevoCarrito }, { merge: true })
          .then(() => console.log('Carrito guardado en Firestore'))
          .catch((error) => console.error('Error al guardar el carrito en Firestore:', error));
      }
  
      return nuevoCarrito;
    });
  };

  const eliminarProducto = (index) => {
    setProductosCarrito((prevProductos) => {
      const nuevoCarrito = prevProductos.filter((_, i) => i !== index);
  
      // Actualizar el carrito en Firestore
      if (usuario) {
        const { firestore } = initializeFirebase();
        firestore
          .collection('users')
          .doc(usuario.uid)
          .set({ carrito: nuevoCarrito }, { merge: true })
          .then(() => console.log('Carrito actualizado en Firestore'))
          .catch((error) => console.error('Error al actualizar el carrito en Firestore:', error));
      }
  
      return nuevoCarrito;
    });
  };

  const renderizarContenido = () => {
    switch (paginaActual) {
      case "inicio":
        return (
          <>
            <Carrusel />
            <UltimasNoticias />
            <SobreNosotros />
            <Competidores modo="inicio" setPaginaActual={setPaginaActual} setCompetidorSeleccionado={setCompetidorSeleccionado} />
            <ContactoClub />
          </>
        );
      case "noticias":
        return <UltimasNoticias />;
      case "merch":
        return <Tienda agregarProductoAlCarrito={agregarProductoAlCarrito} />;
      case "competidores":
        return (
          <Competidores modo="competidores" setPaginaActual={setPaginaActual} setCompetidorSeleccionado={setCompetidorSeleccionado} />
        );
      case "nosotros":
        return <SobreNosotros />;
      case "perfilCompetidor":
        return <PerfilCompetidor competidor={competidorSeleccionado} />;
      case "register":
        return <RegisterForm setPaginaActual={setPaginaActual} />;
      case "login":
        return <LoginForm setPaginaActual={setPaginaActual} />;
      default:
        return <h1>Página no encontrada</h1>;
    }
  };

  return (
    <div>
      <Navbar
        setPaginaActual={setPaginaActual}
        usuario={usuario}
        setCarritoAbierto={(abierto) => {
          if (usuario) {
            setCarritoAbierto(abierto);
          } else {
            mostrarMensaje("Debes iniciar sesión para usar el carrito.");
          }
        }}
      />
      <Carrito
        carritoAbierto={carritoAbierto}
        setCarritoAbierto={setCarritoAbierto}
        productosCarrito={productosCarrito}
        setProductosCarrito={setProductosCarrito}
        eliminarProducto={eliminarProducto}
        usuario={usuario}
      />
      {mensaje && <div className="notificacion">{mensaje}</div>}
      <div>{renderizarContenido()}</div>
      <Footer />
    </div>
  );
}
const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);
root.render(<App />);