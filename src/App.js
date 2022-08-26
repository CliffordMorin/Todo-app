import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login/Login";
import MyList from "./MyList/MyList";
import Page404 from "./Page404/Page404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/mylist/:id" element={<MyList />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
