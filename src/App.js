import AppContainer from './pages/AppContainer';
// import context provider to make global state availabile to child components
import PopUpContext from './hooks/usePopUpContext';
import ThemeContext from './hooks/useThemeContext';

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
