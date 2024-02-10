import { Link } from "react-router-dom";

function SmallNav() {
  return (
    <div className="small-nav">
      <div className="nav-links">
        <Link to='/' className="title-link">blog</Link>
        <Link to='/' className="title-link">about</Link>
        <Link to='/' className="title-link">contact</Link>
      </div>
    </div>
  );
};

export default SmallNav;;;