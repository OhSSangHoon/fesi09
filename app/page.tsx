"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        className="border-2 border-gray-300 rounded-md p-2"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="아무거나 입력하세요"
      />
      {text.length < 5 && <p>5글자 이상 입력하세요</p>}
    </div>
  );
}