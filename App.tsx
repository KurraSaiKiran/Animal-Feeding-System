import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import AnimalList from './pages/AnimalList';
import Schedule from './pages/Schedule';
import Food from './pages/Food';
import Breeding from './pages/Breeding';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-0 md:pt-16 pb-16">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/animals" element={<AnimalList />} />
            <Route path="/schedule/:id" element={<Schedule />} />
            <Route path="/food" element={<Food />} />
            <Route path="/breeding" element={<Breeding />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;