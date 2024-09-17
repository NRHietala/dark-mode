import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [ darkMode, setDarkMode  ] = useLocalStorage('mode', false);
  return [ darkMode, setDarkMode ];
}

export default useDarkMode;





// NOT NEEDED WITH WAY USELOCALSTORAGE IS SET UP