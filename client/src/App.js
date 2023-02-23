import { Landing, Register, Error, ProtectedRoute } from './pages/';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AddJob, AllJobs, Stats, Profile, SharedLayout } from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
        }>
          <Route index element={< Stats />}></Route>
          <Route path='all-jobs' element={< AllJobs />}></Route>
          <Route path='add-job' element={< AddJob />}></Route>
          <Route path='profile' element={< Profile />}></Route>
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;