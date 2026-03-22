import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Analytics from './pages/Analytics.jsx'
import Settings from './pages/Settings.jsx'
import Sidebar from './components/Sidebar.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { Outlet } from "react-router-dom"
import "./styles/main.scss"

function AppLayout() {
  return (
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default function App() {
  const user = useSelector(state => state.auth.user)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}