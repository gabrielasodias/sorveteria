import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../../components/login/Login'
import Stock from '../Stock'
import Home from '../../components/home/Home'
import MenuIceCream from '../MenuIceCream'


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/stock" element={<Stock />} />
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<MenuIceCream />} />
            </Routes>
        </Router>

    )
}

export default App