import "./App.css";
import { Routes, Route } from 'react-router-dom'
import { VideoListing } from "./features/VideoListing/VideoListing";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./features/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home><VideoListing /></Home>} />
      </Routes>
    </div>
  );
}

export default App;
