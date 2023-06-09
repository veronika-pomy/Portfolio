// import custom theme hook
import { useThemeContext } from '../hooks/useThemeContext';

const ThemeSwitch = () => {

  const { darkTheme, toggleTheme } = useThemeContext();

  return (
      <button id='button' onClick={toggleTheme} type='button' className='w-15 h-10'>
          <div
            className={`flex w-12 h-7 rounded-full` + (darkTheme ? ` bg-light` : ` bg-dark`)}
          >
            <span className={`m-1 w-5 h-5 rounded-full transiton duration-500`+ (darkTheme ? ` bg-dark ml-6 ` : ` bg-light`)} />
        </div>
      </button>
  )
}

export default ThemeSwitch;