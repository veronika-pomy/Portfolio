import AppContainer from './pages/AppContainer';
// import context provider to make global state availabile to child components
import ThemeContext from './hooks/useThemeContext';
import PopUpContext from './hooks/usePopUpContext';

function App() {
  return (
    <ThemeContext>
      <PopUpContext>
        <AppContainer />
      </PopUpContext>
    </ThemeContext>
  );
}

export default App;
