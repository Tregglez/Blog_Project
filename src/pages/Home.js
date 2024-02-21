import { Link } from "react-router-dom";
import BlogList from "../components/BlogList";
import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";
import SmallNav from "../components/SmallNav";
import Filter from "../components/Filter";

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
      <SmallNav />
      <Filter />
      <Link to={'/admin-login/samsara'}>
        <button className="home-button">Login
        </button>
      </Link>
      {fetchError && (<p>{fetchError}</p>)}
      {posts && <BlogList blogs={posts} />}
    </div>
  );
}

export default Home;