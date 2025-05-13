"use client";

import { useState } from "react";
import NewUserPromotionModal from "@/components/Modal/NewUserPromotionModal";
import { Button } from "@/stories/Button";

export default function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold">코드팡</h1>
      {isModalOpen && <NewUserPromotionModal onClose={handleCloseModal} />}
      <Button
        label="에러 버튼"
        primary
        size="large"
        onClick={() => {
          throw new Error("에러 버튼 클릭 sentry 테스트");
        }}
      />
    </>
  );
}
