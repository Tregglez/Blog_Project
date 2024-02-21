import './styles/index.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { CompatRoute, CompatRouter } from "react-router-dom-v5-compat";

// pages
import Home from './pages/Home';
import Footer from "./components/Footer";
import Create from './pages/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';
import Layouts from './components/Layouts';
import Update from './pages/Update';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import About from './pages/About';

function App() {
  return (
    <Router>
      <CompatRouter>
        <div className="App">
          <div className="content">
            <Switch>
              <CompatRoute exact path="/">
                <Home />
              </CompatRoute>

              <CompatRoute exact path="/about">
                <About />
              </CompatRoute>

              <CompatRoute path="/create">
                <Create />
              </CompatRoute>

              <CompatRoute path="/layouts/blog">
                <Layouts />
              </CompatRoute>

              <CompatRoute path="/admin-login/samsara">
                <Login />
              </CompatRoute>

              <CompatRoute path="/admin-secure-dashboard">
                <Dashboard />
              </CompatRoute>

              <CompatRoute path="/:id/update">
                <Update />
              </CompatRoute>

              <CompatRoute path="/:id">
                <BlogDetails />
              </CompatRoute>

              <CompatRoute path="*">
                <NotFound />
              </CompatRoute>
            </Switch>
          </div >
          <Footer />
        </div >
      </CompatRouter>
    </Router >
  );
}

export default App;
