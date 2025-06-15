// components/buttons/ShareButton.tsx
"use client";

import React from "react";
import Image from "next/image";

const ShareButton = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check this out!",
          text: "Thought you might like this thread.",
          url: window.location.href,
        });
        console.log("Content shared successfully");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  return (
    <button onClick={handleShare} aria-label="share">
      <Image
        src='/assets/repost.svg'
        alt="share"
        width={24}
        height={24}
        className="cursor-pointer object-contain"
      />
    </button>
  );
};

export default ShareButton;
