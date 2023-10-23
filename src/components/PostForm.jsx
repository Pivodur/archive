import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      ...post, 
    }
    create(newPost)
    setPost({title: '', body: ''})
  }

  return (
    <form className="postForm">
      <MyInput
        value={post.title}
        type="text"
        placeholder="document title"
        onChange={(event) => setPost({ ...post, title: event.target.value })}
      />
      <MyInput
        value={post.body}
        type="text"
        placeholder="document description"
        onChange={(event) => setPost({ ...post, body: event.target.value })}
      />
      <MyButton onClick={addNewPost}>Add Doc</MyButton>
    </form>
  );
};

export default PostForm;
