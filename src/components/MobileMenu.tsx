import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useTransition, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MobileMenuContext } from '../contexts/MobileMenuContext';

const MobileMenu: React.FC = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(MobileMenuContext);

  const menuTransition = useTransition(isMobileMenuOpen, {
    from: {
      opacity: 0,
      transform: 'translateX(-100%)',
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0%)',
    },
    leave: {
      opacity: 0,
      transform: 'translateX(-100%)',
    },
    config: {
      tension: 280,
      friction: 30,
    },
  });

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {menuTransition(
        (menuStyle, isMenuVisible) =>
          isMenuVisible && (
            <animated.div
              style={menuStyle}
              className="fixed inset-0 bg-black bg-opacity-95 z-50 h-full"
            >
              <div className="absolute top-5 right-5 text-white text-3xl cursor-pointer">
                <FontAwesomeIcon icon={faTimes} onClick={toggleMenu} />
              </div>

              <nav className="flex flex-col my-14 mx-12 gap-4 justify-start h-full text-left uppercase text-4xl tracking-widest">
                <Link
                  to="/about"
                  className="text-white py-4 block hover:text-red-500 transition-colors duration-200"
                  onClick={handleMenuItemClick}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-white py-4 block hover:text-red-500 transition-colors duration-200"
                  onClick={handleMenuItemClick}
                >
                  Contact
                </Link>
                <Link
                  to="/music"
                  className="text-white py-4 block hover:text-red-500 transition-colors duration-200"
                  onClick={handleMenuItemClick}
                >
                  Music
                </Link>
              </nav>
            </animated.div>
          )
      )}
    </>
  );
};

export default MobileMenu;