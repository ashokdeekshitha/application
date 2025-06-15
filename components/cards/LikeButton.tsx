// components/buttons/LikeButton.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <button onClick={toggleLike} aria-label="like">
      <Image
        src={liked ? '/assets/heart-filled.svg' : '/assets/heart-gray.svg'}
        alt="heart icon"
        width={24}
        height={24}
        className="cursor-pointer object-contain"
      />
    </button>
  );
};

export default LikeButton;

