import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login/Login.tsx";
import TodoForm from "./Todo/TodoForm.tsx";
import Page404 from "./Page404/Page404.tsx";

function App() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  //useEffect to check if the user is authenticated or not
  useEffect(() => {
    const auth = localStorage.getItem("authenticated");
    if (auth === "true") {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  //navigation based on the authentication status
  useEffect(() => {
    if (authenticated) {
      navigate("/mylist");
    } else {
      navigate("/");
    }
  }, [authenticated, navigate]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Login
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          }
        />
        <Route
          path="/mylist"
          element={
            <TodoForm
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
