"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CartItem } from "../page";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const router = useRouter();
  
  const handleOrder = () => {
    sessionStorage.removeItem("cartItems");
    setCartItems([]);
    alert("주문이 완료되었습니다.");
    router.push("/");
  };

  // 첫 렌더링 시 세션 스토리지에서 저장된 장바구니 목록 불러오기
  useEffect(() => {
    const cartItems = JSON.parse(sessionStorage.getItem("cartItems") || "[]");
    setCartItems(cartItems);
  }, []);

  return (
    <div className="mx-auto flex h-screen max-w-md flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">코드잇 마켓</h1>
      <div className="flex w-full flex-col justify-between gap-2 rounded-md bg-gray-100 px-8 py-4 font-medium">
        {cartItems.map((item: CartItem) => (
          <div key={item.id}>
            {item.name}: {item.count}개
          </div>
        ))}
      </div>
      <button className="w-full cursor-pointer rounded-md bg-indigo-500 px-4 py-3 text-white" onClick={handleOrder}>
        주문하기
      </button>
    </div>
  );
}