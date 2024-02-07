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
      history.push('/');
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

        <label>Title Media:</label>
        <input
          type="file"
          accept="image/png, image/jpeg"
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

// import { useState } from "react";
// import { useHistory } from "react-router-dom";

// function Create() {
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');
//   const [author, setAuthor] = useState('mario');
//   const [isPending, setIsPending] = useState(false);
//   const history = useHistory();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const blog = { title, body, author };

//     setIsPending(true);

//     fetch('http://localhost:8000/blogs', {
//       method: 'POST',
//       headers: { 'Content-Type': "application/json" },
//       body: JSON.stringify(blog)
//     }).then(() => {
//       setIsPending(false);
//       history.push('/');
//     });
//   };

//   return (
//     <div className="create">
//       <h2>Add a New Blog</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Blog Title:</label>
//         <input
//           type="text"
//           required
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <label>Title Image:</label>

//         <label>Blog Body:</label>
//         <textarea
//           required
//           value={body}
//           onChange={(e) => setBody(e.target.value)}
//         ></textarea>
//         {/* have a selector maybe for different layout design */}
//         <label>Blog Author:</label>
//         <select
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//         >
//           <option value="mario">mario</option>
//           <option value="yoshi">yoshi</option>
//         </select>
//         {!isPending && <button>Add Blog</button>}
//         {isPending && <button disabled>Add Blog...</button>}

//       </form>
//     </div>
//   );
// }

// export default Create;