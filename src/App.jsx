import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login.jsx'
import Success from './components/Success.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      {/* Ana sayfa otomatik olarak /login'e yönlendirilir */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Login sayfası */}
      <Route path="/login" element={<Login />} />

      {/* Başarılı giriş sonrası yönlendirilen sayfa */}
      <Route path="/success" element={<Success />} />

      {/* Tanımsız rotalar da /login'e yönlendirilir */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App
