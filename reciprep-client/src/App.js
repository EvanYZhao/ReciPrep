import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route
            path="/home"
            element={
              <Protected>
                <HomePage />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
