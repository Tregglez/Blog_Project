import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import supabase from "../config/supabaseClient";

function BlogList({ blogs, title, onDelete }) {

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
    }
  };

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={'/' + blog.id}>
            <div className="content-container">
              <div className="img-container"></div>
              <h2>{blog.title}</h2>
              <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(blog.id)} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
