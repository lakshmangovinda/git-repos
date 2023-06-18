import './App.css';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login';
import { Repos } from './Components/Repos/Repos';
import NavigationBar from './Components/Navigation/NavigationBar';
import Protected from './Components/Proetcted';
import { NotFoundPage } from './Components/NotFound/NotFoundPage';

function App() {
  return (
    <div >
      <Router>
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/login" replace />}
          />
          <Route path="/login" element={<Login />} />
          <Route path='*' Component={NotFoundPage}></Route>
          <Route
            path="/Repos"
            element={<Protected Component={Repos}></Protected>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
