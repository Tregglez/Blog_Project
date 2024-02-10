import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
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
              <div className="title-container">
                <h2>{blog.title}</h2>
                <div className="create-icons">
                  <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(blog.id)} />
                  <Link to={'/' + blog.id + '/update'}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
