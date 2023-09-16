import {FaMoon, FaSun, } from 'react-icons/fa';
import useDarkMode from '../hooks/useDarkMode';



const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun size='26' className='top-navigation-icon text-orange-400' />
         ) : (
          <FaMoon size='26' className='top-navigation-icon text-purple-800' />
         )
        }
      </span>
    );
  };

  export default ThemeIcon;