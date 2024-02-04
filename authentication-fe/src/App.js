import { Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';
import Index from './components/Index';
import EmailVerification from './components/EmailVerification';
import ForgotPassword from './components/ForgotPassword';
import Profile from './components/Profile';
import ChangePassword from './components/ChangePassword';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/changepassword' element={ <ProtectedRoute> <ChangePassword />  </ProtectedRoute>} />
          <Route path='/dashboard' element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
          <Route path="/email-verification" element={ <ProtectedRoute> <EmailVerification /> </ProtectedRoute>} />
          <Route path="/forgotpassword" element={ <ProtectedRoute> <ForgotPassword /> </ProtectedRoute>} />
          <Route path='/profile' element = { <ProtectedRoute> <Profile /> </ProtectedRoute>} />
          <Route path='/home' element={ <ProtectedRoute> <Home /> </ProtectedRoute> } />
        </Routes>
    </div>
  );
}

export default App;
