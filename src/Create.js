import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
  const [title, setTtile] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIspending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const blog = {title, body, author };
    setIspending(true)

    fetch("http://localhost:8000/blogs",{
      method:"post",
      headers:{"content-type": "application/json"},
      body: JSON.stringify(blog)
    }).then(()=> {
      setIspending(false);
      history.push("/");
    })
  }

  return (
    <div className="create">
      <h2>create a new blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog Title</label>
          <input 
          required
          type="text"
          value={title}
          onChange={ (e) => setTtile(e.target.value)} />

          <label>Content</label>
          <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value) }></textarea>

          <label >Author</label>
          <input type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)} />


          {!isPending && <button>Add Blog</button>}
          {isPending && <button disabled>Loading...</button>}
        </form>
        <a href="https://storyset.com/web">Web illustrations by Storyset</a>
    </div>
  );
};

export default Create;
