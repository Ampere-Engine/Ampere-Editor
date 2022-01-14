import { MemoryRouter as Router, Routes, Route } from 'react-router-dom'
import Hello from '../components/Hello'
import Navbar from '../components/shared/Navbar'

export default function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </Router>
    </div>
  )
}
