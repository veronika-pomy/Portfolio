import AppContainer from './pages/AppContainer';
// import theme provider to make global state availabile to child compponents
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
