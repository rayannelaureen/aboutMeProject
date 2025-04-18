import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Quem sou eu</Link></li>
          <li><Link to="/projetos">Meus projetos</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;