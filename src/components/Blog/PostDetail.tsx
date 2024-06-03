import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Boton from "../Boton/Boton";
import "./PostDetail.scss";

interface PostDetailProps {
  posts: { id: number; title: string; content: string[]; image: string }[];
}

const PostDetail: React.FC<PostDetailProps> = ({ posts }) => {
  const { postId } = useParams<{ postId: string }>();
  const post = posts.find((p) => p.id === Number(postId));
  const navigate = useNavigate();

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="postDetail">
      <h2>{post.title}</h2>

      {post.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <img src={post.image} alt={post.title} />

      <div className="botonPost">
        <Boton text="" className="atras" onClick={handleBackClick} />
      </div>
    </div>
  );
};

export default PostDetail;
