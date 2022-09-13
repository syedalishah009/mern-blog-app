import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./posts.css";

export default function Posts() {
  const posts = useSelector((state)=>state.post.currentposts);
  const PF = "http://localhost:5000/images/"; // accessing the images folder
  
  return (
    <div className="posts">
      {posts.map((post)=>( // for each post call this component
        <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c)=>(
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <span className="postTitle">
          <Link to={`/post/${post._id}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
      ))}
     
    </div>
  );
}
