import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { Film } from './pages/Film';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './styles/global.scss'
import { Search } from './components/Search';

function App() {
  return (
      <BrowserRouter>
      <Header /> 
        <Routes>
          <Route index path="/" element={<Home />}/>
          <Route path="film/:id" element={<Film />}/>
        </Routes> 
      <Footer />
      </BrowserRouter>
  );
}

export default App;

