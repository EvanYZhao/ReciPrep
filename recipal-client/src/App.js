import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<SignInPage />}/>
          <Route path='/home' element={<HomePage/>}/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
