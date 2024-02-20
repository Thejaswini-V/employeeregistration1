import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import View from './components/View';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/View' element={<View/>}/>
      </Routes>
    </Router>
  );
}

export default App;
