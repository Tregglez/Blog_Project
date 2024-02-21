import { Link } from "react-router-dom-v5-compat";

function Filter() {
  return (
    <div className="filter-container">
      <div className="filter-box">
        <Link to='/'>all</Link>
        <Link to='/'>lifestyle</Link>
        <Link to='/'>gut health</Link>
        <Link to='/'>womens health</Link>
        <Link to='/'>recipes</Link>
        <Link to='/'>travel</Link>
      </div>
    </div>
  );
}

export default Filter;
