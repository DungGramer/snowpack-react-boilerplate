import { Routes, Route } from "react-router-dom";
import './App.scss';
import Home from '@components/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
    </Routes>
  );
}

export default App;
