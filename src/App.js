import AppContainer from './pages/AppContainer';
// import theme provider to make global state availabile to child compponents
import ThemeContext from './hooks/useThemeContext';

function App() {
  return (
    <ThemeContext>
      <AppContainer />
    </ThemeContext>
    
  );
}

export default App;
