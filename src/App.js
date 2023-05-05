import Error from "./pages/ErrorPage/Error";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="*" element={<Error />} />
            </Routes>
            {/* <Signup/> */}
            {/* <Login/> */}
        </div>
    );
}

export default App;
