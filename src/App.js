import './styles/index.css';
import Home from './components/Home';
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import Login from './components/Login';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>

            <Route path="/:id">
              <BlogDetails />
            </Route>

            <Route path="/admin-login/samsara">
              <Login />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
       <Footer /> 
      </div>
    </Router>
  );
}

export default App;
