import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import About from './components/About';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App cont">

      <HashRouter>
        <Menu />
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/signin' element={<SignIn />} />

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
