import './App.scss';
import Router from './router/Router';
import { GlobalStyle } from './globalStyles/GlobalStyle';


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Router/>
    </div>
  );
}

export default App;
