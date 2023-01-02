import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignInPage />}/>
        <Route path='/home' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
