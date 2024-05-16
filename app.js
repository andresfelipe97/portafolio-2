const Header = () => (
    <header>
      <div className="container">
        <h1>Portafolio</h1>
        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
  
  const Home = () => (
    <section id="inicio" className="container">
      <h2>Bienvenido a mi portafolio</h2>
      <p>¡Aquí encontrarás información sobre mí y mis proyectos!</p>
    </section>
  );
  
  const Projects = () => (
    <section id="proyectos" className="container">
      <h2>Proyectos</h2>
      <div className="project">
        <h3>Proyecto 1</h3>
        <p>Descripción del proyecto 1.</p>
      </div>
      <div className="project">
        <h3>Proyecto 2</h3>
        <p>Descripción del proyecto 2.</p>
      </div>
    </section>
  );
  
  const Contact = () => (
    <section id="contacto" className="container">
      <h2>Contacto</h2>
      <div className="contact-info">
        <img src="email-icon.png" alt="Email Icon" />
        <p>Puedes contactarme en mi correo electrónico: ejemplo@example.com</p>
      </div>
    </section>
  );
  
  const App = () => (
    <div>
      <Header />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
  
  ReactDOM.render(<App />, document.getElementById('root'));
  