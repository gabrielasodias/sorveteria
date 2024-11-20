import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Stock from '../Stock'
import Home from '../../components/home/Home'


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/stock" element={<Stock />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>

    )
}

export default App