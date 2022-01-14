import { MemoryRouter as Router, Routes, Route } from 'react-router-dom'
import Hello from '../components/hello'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  )
}
