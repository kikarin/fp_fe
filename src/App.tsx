import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import LegalLayout from './components/legal/LegalLayout'
import LegalDocumentPage from './pages/legal/LegalDocumentPage'
import logo from './assets/logo/Logo_1.png'
import { legalRoutes } from './config/site'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<LegalLayout logoSrc={logo} />}>
        {legalRoutes.map(({ path }) => (
          <Route key={path} path={path.slice(1)} element={<LegalDocumentPage />} />
        ))}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
