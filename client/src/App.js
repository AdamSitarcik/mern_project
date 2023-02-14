import {Landing, Dashboard, Register, Error} from './pages/';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/' className='btn btn-hero'>Dashboard</Link>
        <Link to='/register' className='btn btn-hero'>Register</Link>
        <Link to='/landing' className='btn btn-hero'>Landing</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;