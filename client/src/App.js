import Home from './pages/Home'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost';
import { routhPath } from './routes/route';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={routhPath.home} element={<Home/>}/>
          <Route path={routhPath.create}element={<CreatePost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
