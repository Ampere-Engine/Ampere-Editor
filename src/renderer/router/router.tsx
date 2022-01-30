import { MemoryRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Navbar from '../components/shared/Navbar'
import { AppContainer, Container } from './containers'

export default function App() {
  return (
    <AppContainer>
      <Navbar />
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Container>
    </AppContainer>
  )
}
