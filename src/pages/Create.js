import { useState } from "react";
import supabase from "../config/supabaseClient";
import { useHistory } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [formError, setFormError] = useState(null);
  const history = useHistory();


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body) {
      setFormError('Title and body are required');
      return;
    }

    const { data, error } = await supabase
      .from('posts')
      .insert([{ title, body }])
      .select();

    if (error) {
      console.log(error);
      setFormError('Title and body are required');
    }
    if (data) {
      console.log(data);
      setFormError(null);
      history.push('/admin-secure-dashboard');
    }
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Body</label>
        <input
          type="text"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button>Add Blog</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}

export default Create;