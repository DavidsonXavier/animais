import './App.css';

import Routes from './config/routes';

import { BrowserRouter } from 'react-router-dom';


function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
