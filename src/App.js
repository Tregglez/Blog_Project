import './styles/index.css';
import Home from './pages/Home';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './pages/Create';
import BlogDetails from './components/BlogDetails';
import Login from './components/Login';

import NotFound from './components/NotFound';
import Layouts from './components/Layouts';

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

            <Route path="/layouts/blog">
              <Layouts />
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
        </div >
        <Footer />
      </div >
    </Router >
  );
}

export default App;
