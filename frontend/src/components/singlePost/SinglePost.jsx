import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import { useSelector } from 'react-redux'

export default function SinglePost() {
  const location = useLocation();
  const id = location.pathname.split("/")[2]; // in id the id of post is stored
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [updateMode, setupdateMode] = useState(false);

  const user = useSelector((state) => state.user.currentuser);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + id)  // "/post/id" but here "/posts/+id"
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)


    }
    getPost();
  }, [id])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) { }
  }

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setupdateMode(false)

    } catch (err) { }
  }
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
          type="text"
          value={title}
          className="singlePostTitleInput"
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
        />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user.username && (
              <div className="singlePostEdit">
                <i onClick={()=>setupdateMode(true) } className="singlePostIcon far fa-edit"></i>
                <i onClick={handleDelete} className="singlePostIcon far fa-trash-alt"></i>
              </div>
            )}
          </h1>
        )
        }

        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/posts?user=${post.username}`}>
                {post.username}
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? (
          <textarea
          className="singlePostDescInput"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        ):(
        <p className="singlePostDesc">
          {desc}
        </p>
        )}
        {updateMode && (
          <button onClick={handleUpdate} className="singlePostButton">update</button>
        )}
      </div>
    </div>
  );
}
