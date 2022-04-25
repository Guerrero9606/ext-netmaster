import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import Daily from './pages/Daily';
import Week from './pages/Week';
import Month from './pages/Month';
import NotFound from './shared/NotFound';
import { BrowserRouter as Router,
        Routes,
        Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <Home /> }/>
        <Route exact path='/daily' element={ <Daily /> }/>
        <Route exact path='/week' element={ <Week /> }/>
        <Route exact path='/month' element={ <Month /> }/>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </Router>
  );
}

export default App;
