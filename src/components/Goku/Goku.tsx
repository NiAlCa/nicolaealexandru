

const Goku = () => {
  return (
    <svg width="200px" height="400px" viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <rect x="50" y="100" width="100" height="200" fill="orange" />
      {/* Legs */}
      <rect x="50" y="250" width="45" height="150" fill="blue" />
      <rect x="105" y="250" width="45" height="150" fill="blue" />
      {/* Arms */}
      <rect x="20" y="100" width="30" height="100" fill="orange" />
      <rect x="150" y="100" width="30" height="100" fill="orange" />
      {/* Head */}
      <circle cx="100" cy="70" r="50" fill="black" />
      {/* Face */}
      <circle cx="100" cy="70" r="40" fill="#FFD700" />
      {/* Eyes */}
      <circle cx="85" cy="60" r="5" fill="black" />
      <circle cx="115" cy="60" r="5" fill="black" />
      {/* Mouth */}
      <rect x="90" y="80" width="20" height="5" fill="black" />
    </svg>
  );
};

export default Goku;
