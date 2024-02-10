import './styles/index.css';
import Home from './pages/Home';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './pages/Create';
import BlogDetails from './components/BlogDetails';
import Login from './components/Login';
import NotFound from './components/NotFound';
import TestImg from './components/TestImg';
import Update from './pages/Update';

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

            <Route path="/:id/update">
              <Update />
            </Route>

            <Route path="/test-img">
              <TestImg />
            </Route>

            <Route path="/admin-login/samsara">
              <Login />
            </Route>

            <Route path="/:id">
              <BlogDetails />
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
