import React from "react";
import Post from "./Post";
import { useNavigate } from 'react-router-dom';
import './PostList.scss';

interface PostListProps {
  posts: { id: number; title: string; content: string[]; image: string }[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  const navigate = useNavigate();

  const handlePostClick = (id: number) => {
    navigate(`/blog/${id}`);
  };

  const truncateContent = (content: string[]) => {
    const fullContent = content.join(" ");
    return fullContent.length > 100 ? fullContent.substring(0, 100) + "..." : fullContent;
  };

  return (
    <div className="postList">
      {posts.map((post) => (
        <div key={post.id} onClick={() => handlePostClick(post.id)}>
          <Post 
            title={post.title} 
            content={[truncateContent(post.content)]} 
          />
        </div>
      ))}
    </div>
  );
};

export default PostList;
