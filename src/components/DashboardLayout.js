import { Link } from "react-router-dom";
import supabase from "../config/supabaseClient";
import { useHistory } from "react-router-dom";


function DashboardLayout({ blogs, onDelete }) {
  const history = useHistory();


  const handleDelete = async (id) => { // Modified to accept ID
    const { data, error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id); // Modified to delete post with specific ID

    if (error) {
      console.log(error);
    }

    if (data) {
      console.log(data);
      onDelete(id); // Pass ID to onDelete callback
      history.push('/admin-secure-dashboard');
    }
  };

  return (
    <div className="dashboard-layout-container">
      {blogs.map((blog) => (
        <div className="preview" key={blog.id}>
          <Link to={'/' + blog.id}>
            <div className="posts-for-dashboard">
              <div className="post-title">
                <h2>{blog.title}</h2>
              </div>
              <div className="create-icons">
                <Link to={'/' + blog.id + '/update'}>
                  <button id="edit-btn">edit</button>
                </Link>
                <button onClick={() => handleDelete(blog.id)} id="delete-btn">delete</button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default DashboardLayout;
