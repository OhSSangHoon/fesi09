// src/app/main/page.tsx
"use client";

import { useState } from "react";
import NewUserPromotionModal from "@/components/Modal/NewUserPromotionModal";

export default function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-center">코드팡</h1>
        <div className="flex items-center gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">로그인</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">회원가입</button>
        </div>
      </div>
      {isModalOpen && <NewUserPromotionModal onClose={handleCloseModal} />}
    </>
  );
}