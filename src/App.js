import './App.css';
import { HashRouter  } from 'react-router-dom';
import Sidebar from './components/nav';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Sidebar />
    </div>
  </HashRouter>
  );
}

export default App;
