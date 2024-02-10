import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import { useHistory } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();
  const navigate = useHistory();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select()
        .eq('id', id)
        .single();

      if (error) {
        navigate.push('/', { replace: true });
      }
      if (data) {
        setTitle(data.title);
        setBody(data.body);
      }
    };


    fetchPost();
  }, [id, navigate]);

  return (
    <div className="blog-details">
      <h2>{title}</h2>
      <div>{body}</div>
    </div>
  );
}

export default BlogDetails;