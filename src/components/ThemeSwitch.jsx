// import custom theme hook
import { useThemeContext } from '../hooks/useThemeContext';

const ThemeSwitch = () => {

  const { darkTheme, toggleTheme } = useThemeContext();

  return (
      <button id='button' onClick={toggleTheme} type='button'>
          <div
            className={`flex w-12 h-7 rounded-full` + (darkTheme ? ` bg-dark` : ` bg-light`)}
          >
            <span className={`m-1 w-5 h-5 rounded-full transiton duration-500`+ (darkTheme ? ` bg-light` : ` bg-dark ml-6`)} />
        </div>
      </button>
  )
}

export default ThemeSwitch;