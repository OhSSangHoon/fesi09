"use client";

import { useState } from "react";

export default function Home() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = async () => {
    // API 호출 후 상태 변경 가정
    setTimeout(() => setIsLiked(!isLiked), 500);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={isLiked ? "bg-red-500" : "bg-blue-500"}
      >
        좋아요 버튼
      </button>
    </div>
  );
}
