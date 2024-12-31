import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { MobileMenuContext } from '../contexts/MobileMenuContext';
import '../App.css'; 

const Header: React.FC = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(MobileMenuContext);

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white text-black z-50">
      <div className="hidden lg:flex w-full h-16 justify-between items-center px-12">
        <Link to="/" className="text-4xl font-extrabold hover:opacity-80 transition-opacity duration-300">
          BONDLA
        </Link>

        <nav className="flex-1 md:space-x-8 lg:space-x-24 inline-flex justify-center items-center text-center font-Inter text-base font-light leading-7">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:opacity-80 transition duration-200 ${
                isActive ? 'text-red-500' : 'text-black'
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:opacity-80 transition duration-200 ${
                isActive ? 'text-red-500' : 'text-black'
              }`
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/music"
            className={({ isActive }) =>
              `hover:opacity-80 transition duration-200 ${
                isActive ? 'text-red-500' : 'text-black'
              }`
            }
          >
            Music
          </NavLink>
        </nav>

      </div>

      {/* Mobile */}
      <div className="flex lg:hidden justify-between items-center px-6 h-16 bg-white">
        <Link to="/" className="text-4xl font-extrabold hover:opacity-80 transition-opacity duration-300">
          BONDLA
        </Link>

        <button
          className="w-6 h-6 flex justify-center items-center text-black focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;