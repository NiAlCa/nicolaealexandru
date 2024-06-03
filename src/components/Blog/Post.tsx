import React from "react";
import './Post.scss'

interface PostProps {
  title: string;
  content: string[];
  image?: string;
}

const Post: React.FC<PostProps> = ({ title, content }) => {
  return (
    <div className="post">
      <div>
        <h2>{title}</h2>
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default Post;
