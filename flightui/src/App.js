// import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignUp from './Components/SignUp/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Delete from './Components/DeletePage/Delete'
import Error from './Components/ErrorPage/Error'
import About from "./compoments/About";
import Update from "./Components/Update/Update";
import Home from "./routes/Home";
import Email from './Components/EmailCode/Email'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/err" element={<Error />} />
        <Route path="/update" element={<Update />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

