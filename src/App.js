import './App.css';
import { Routes ,Route } from 'react-router-dom';
import FrontPage from './pages/forntpage';
import MainPage from './pages/mainPage';
import Header from './components/header';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <div className="App">
      <ToastContainer />
      <Header/>
      <Routes>
        <Route path="/" element={<FrontPage/>} />
        <Route path="/mainpage" element={<MainPage/>} />
      </Routes>
    </div>
  );
}

export default App;
