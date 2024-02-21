import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";

function Update() {
  const { id } = useParams();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body) {
      setFormError('Title and body are required');
      return;
    }

    const { data, error } = await supabase
      .from('posts')
      .update([{ title, body }])
      .eq('id', id)
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

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select()
        .eq('id', id)
        .single();

      if (error) {
        history.push('/', { replace: true });
      }

      if (data) {
        setTitle(data.title);
        setBody(data.body);
      }
    };

    fetchPost();
  }, [id, history]);

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

export default Update;