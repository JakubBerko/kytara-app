import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import MetronomePage from './pages/MetronomePage.jsx'
import SongsPage from './pages/SongsPage.jsx'
import PracticePage from './pages/PracticePage.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/metronome" element={<MetronomePage />} />
        <Route path="/songs" element={<SongsPage />} />
        <Route path="/practice" element={<PracticePage />} />
      </Route>
    </Routes>
  )
}