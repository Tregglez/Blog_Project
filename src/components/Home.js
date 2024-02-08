import { Link } from "react-router-dom";
import BlogList from "./BlogList";
import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";

function Home() {
  const [fetchError, setFetchError] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*');

      if (error) {
        setFetchError('Could not fetch the posts');
        setPosts(null);
      }

      if (data) {
        setPosts(data);
        setFetchError(null);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="home">
      <div className="title">
        <h1>The Nourished Notebook</h1>
      </div>
      <div className="small-nav">
        <div className="nav-links">
          <Link to='/' className="title-link">blog</Link>
          <Link to='/' className="title-link">about</Link>
          <Link to='/' className="title-link">contact</Link>
        </div>
      </div>
      <Link to={'/create'}>
        <button>Add</button>
      </Link>
      {fetchError && (<p>{fetchError}</p>)}
      {posts && <BlogList blogs={posts} />}
    </div>
  );
}

export default Home;