import Register from './pages/Register.js';
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import { BrowserRouter, Routes,Route,Navigate } from 'react-router-dom';
import './style.scss';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext.js';

function App() {
  const {currentUser}=useContext(AuthContext);
  console.log(currentUser);

  const ProtectedRoute=({children})=>{
    if(!currentUser){
      return <Navigate to='/login' />
    }
    return children;
  }
  return (
   <BrowserRouter>
     <Routes>
       <Route path='/'  element={<ProtectedRoute>
        <Home/>
       </ProtectedRoute>} />
       <Route path='login' element={<Login />}/>
       <Route path='register' element={<Register />} />
     </Routes>
   </BrowserRouter>
   
  );
}

export default App;
