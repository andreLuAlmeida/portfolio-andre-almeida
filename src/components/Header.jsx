import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Oculta links na pagina de projetos
  const isProjetoPage = location.pathname.startsWith('/projetos/');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <strong>&lt;André/&gt;</strong>
        </a>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          style={{
            backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
            transition: 'background-color 0.3s ease',
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          {!isProjetoPage && (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#projetos" onClick={() => setIsOpen(false)}>Projetos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#habilidades" onClick={() => setIsOpen(false)}>Habilidades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contato" onClick={() => setIsOpen(false)}>Contato</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
