import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home'
import DashboardPage from './pages/Dashboard';
import CoinPage from './pages/Coin';
import ComparePage from './pages/ComparePage';
import WatchList from './pages/WatchList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/dashboard' element={<DashboardPage/>} />
          <Route path='/coin/:id' element={<CoinPage/>} />
          <Route path='/Compare' element={<ComparePage/>} />
          <Route path='/WatchList' element={<WatchList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
