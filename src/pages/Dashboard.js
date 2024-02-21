import supabase from "../config/supabaseClient";
import { Link, useNavigate } from "react-router-dom-v5-compat";
import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";

function Dashboard({ blogs }) {
  const [user, setUser] = useState(null); // Initialize with null
  const navigate = useNavigate();
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

  useEffect(() => {
    async function getUserData() {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (error) {
          throw error;
        }
        if (data?.user) {
          setUser(data.user);
        }
      } catch (error) {
        // Handle error
        console.error("Error fetching user data:", error.message);
      }
    }
    getUserData();
  }, []);

  async function signOutUser() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
      navigate("/");
    } catch (error) {
      // Handle error
      console.error("Error signing out:", error.message);
    }
  }

  return (
    <div>
      {user !== null ? ( // Check if user is not null
        <>
          <div className="container-border">
            <h1>Dashboard</h1>
            <Link to={'/create'}>
              <button className="sign-out-btn">Add</button>
            </Link>
            <div className="posts">
              <div>
                {posts && <DashboardLayout blogs={posts} />}
              </div>
              <button onClick={() => signOutUser()} className="sign-out-btn">Sign out</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>User is not logged in</h1>
          <button onClick={() => navigate("/")}>Go back Home!</button>
        </>
      )}
    </div>
  );
}

export default Dashboard;
