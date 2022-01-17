import { MemoryRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Navbar from '../components/shared/Navbar'

export default function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}
