import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";

import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </>
  );
}

export default App;
