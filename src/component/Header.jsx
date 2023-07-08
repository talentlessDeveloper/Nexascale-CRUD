import { useContext } from 'react';
import { BsSunFill, BsMoon } from 'react-icons/bs';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <header className="shadow">
      <nav className="nexa-container py-4 flex justify-between items-center ">
        <p className="text-accent dark:text-darkAccent font-bold text-xl md:text-2xl">
          NEXA
        </p>
        <div>
          <button onClick={handleTheme} className="w-8 h-8">
            {theme === 'light' ? (
              <BsSunFill className="w-full h-full  " />
            ) : (
              <BsMoon className="w-full h-full stroke-primary " size={10} />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
