"use client";

import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`로그인 성공 ${email} ${password}`);
  };

  return (
    <form onSubmit={onSubmit} role="form">
      <label htmlFor="email">이메일:</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-48 p-2 border border-gray-300 rounded-md"
        id="email"
        type="email"
        placeholder="이메일을 입력하세요"
        data-testid="email-input"
      />
      <label htmlFor="password">비밀번호:</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        type="password"
        placeholder="비밀번호를 입력하세요"
      />
      <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">
        로그인
      </button>
    </form>
  );
}
;