
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import axios from 'axios'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPostFailure, getPostStart, getPostSuccess } from "../../redux/postSlice";
import { useLocation } from "react-router-dom";

export default function Homepage() {
  const dispatch = useDispatch();
  // const uselocation = useLocation();
  // console.log(uselocation.search)
  // const {search} = useLocation

  // fetching posts from backend
  useEffect(() => {
    dispatch(getPostStart());
    const fetchPosts = async ()=>{
      try{
        const res = await axios.get("/posts"); //the search is add in case user click on username of the post ohter wise there will  only data get from /posts
        dispatch(getPostSuccess(res.data))
      } catch(err){
       dispatch(getPostFailure())
      }
      
    }
    fetchPosts()
 }, [])
  return (
    
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  ); 
}
