import { useState, useEffect } from 'react';
import './Avatar.scss';

const Avatar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 30, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const avatarElement = document.querySelector('.avatar');
      if (avatarElement) {
        const boundingBox = avatarElement.getBoundingClientRect();
        const mouseX = e.clientX - boundingBox.left;
        const mouseY = e.clientY - boundingBox.top;

        const minX = 20;
        const minY = 20;
        const maxX = boundingBox.width - 75;
        const maxY = boundingBox.height - 100;

        const clampedX = Math.min(maxX, Math.max(minX, mouseX));
        const clampedY = Math.min(maxY, Math.max(minY, mouseY));

        setMousePosition({ x: clampedX, y: clampedY });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="avatar">
      <div className="eye" style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}></div>
      <div className="eye" style={{ left: `${mousePosition.x + 50}px`, top: `${mousePosition.y}px` }}></div>
    </div>
  );
};

export default Avatar;
