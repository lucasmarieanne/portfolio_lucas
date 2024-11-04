import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import '../src/css/reset.css';

function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Home} />
      </Routes>
    </BrowserRouter>

   </div>
  );
}

export default App;
