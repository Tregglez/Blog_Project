import './styles/index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/admin/login/samsara">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
