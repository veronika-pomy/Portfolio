import AppContainer from './pages/AppContainer';
// import context provider to make global state availabile to child components
import ThemeContext from './hooks/useThemeContext';

function App() {
  return (
    <ThemeContext>
        <AppContainer />
    </ThemeContext>
  );
}

export default App;
