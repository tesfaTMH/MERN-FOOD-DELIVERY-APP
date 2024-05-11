import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layouts/Layout'
import { Home } from './pages/Home'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/user-profile' element={<span>User profile page Page</span>} />
        <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default AppRoutes