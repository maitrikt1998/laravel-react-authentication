import { Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Index from './components/Index';
import EmailVerification from './components/EmailVerification';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/email-verification" element={<EmailVerification />} />
        </Routes>
    </div>
  );
}

export default App;
