"use client";

import Button from "@/app/components/Button";
import { Card } from "@/app/components/Card";
import { Input } from "@/app/components/Input";
import { Badge } from "@/app/components/Badge";
import { useState,useEffect } from "react";
import Link from "next/link";

type Item = {
  id: number;
  name: string;
};

export type CartItem = Item & {
  count: number;
};

const ITEMS = [
  {
    id: 1,
    name: "사과",
  },
  {
    id: 2,
    name: "오렌지",
  },
  {
    id: 3,
    name: "딸기",
  },
];


export default function Home() {
    // 1. 테마 상태 관리
    const [theme, setTheme] = useState<"light" | "dark">(() => {
      // 2. 로컬스토리지에 theme 값이 존재한다면 그걸 초기값으로 한다.
      if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
        return localStorage.getItem("theme") as "light" | "dark";
      }
  
      // 3. 현재 OS 시스템이 다크모드라면
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return "dark";
      }
  
      // 4. 모든 경우가 아니라면 라이트 모드를 기본값으로 한다.
      return "light";
    });
  
    const toggleTheme = (newTheme: "light" | "dark" | "system") => {
      // 시스템 모드 선택 시
      if (newTheme === "system") {
        // 시스템 모드 선택 시 로컬스토리지에서 theme 값 제거
        localStorage.removeItem("theme");
        // 시스템 모드 선택 시 현재 OS 시스템의 모드를 따른다.
        setTheme(
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
        );
      } else {
        // 라이트 또는 다크 모드 선택 시
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
      }
    };
  
    // theme 변경 시 루트 태그(html)에 dark 클래스 추가
    useEffect(() => {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);
  
    // OS 시스템 변경 시 감지
    useEffect(() => {
      // 브라우저의 MediaQuery API를 사용하여 사용자의 시스템이 다크모드를 사용하고 있는지 확인하는 코드
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  
      const handleChange = (e: MediaQueryListEvent) => {
        if (!("theme" in localStorage)) {
          // 다크 모드 사용 시 e.matches 값이 true, 라이트 모드 사용 시 false
          setTheme(e.matches ? "dark" : "light");
        }
      };
  
      // 미디어 쿼리 변경 시 이벤트 리스너 추가
      mediaQuery.addEventListener("change", handleChange);
  
      // 컴포넌트가 언마운트 될 때 이벤트 리스너 제거
      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }, []);

    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const handleAddItem = (item: Item) => {
      const isExist = cartItems.find((cartItem) => cartItem.id === item.id);
      if (isExist) {
        const updatedCartItems = cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem,
        );
        // 세션 스토리지에 저장
        sessionStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
      } else {
        const updatedCartItems = [...cartItems, { ...item, count: 1 }];
        // 세션 스토리지에 저장
        sessionStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
      }
    };

    // 첫 렌더링 시 세션 스토리지에서 저장된 장바구니 목록 불러오기
    useEffect(() => {
      const cartItems = JSON.parse(sessionStorage.getItem("cartItems") || "[]");
      setCartItems(cartItems);
    }, []);
    
  return (
    <>
    {/* 다크 모드 */}
    {/* <div className={`flex flex-col items-center justify-center h-screen ${isDark ? "dark" : ""}`}> */}
      {/* <h1 className="text-4xl font-bold text-red-500 md:text-blue-500 lg:text-green-500 dark:text-white dark:bg-black">Hello World</h1> */}
    {/* </div> */}
    {/* 실습1. 다양한 버튼 만들기 */}
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-red-500 md:text-blue-500 lg:text-green-500">Hello World</h1>
        <div className="flex flex-row items-start mt-15 gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">default</button>
          <button className="bg-white text-black border border-gray-300 px-4 py-2 rounded-md">Alternative</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md">Dark</button>
          <button className="bg-white text-black border border-gray-300 px-4 py-2 rounded-md">Light</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">Green</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">Red</button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">yellow</button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md">Purple</button>
        </div>
      </div>
      {/* 실습2. 카드 만들기 */}
      <div className="my_class">
        <h1>Hello World</h1>
        <div className="max-w-sm rounded overflow-hidden shadow-md bg-white border border-gray-200">
          <img className="w-full" src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=2151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card image" />
          <div className="px-6 py-4">
            <div className="font-bold text-black text-2xl mb-2">2024 기술 동향</div>
            <p className="text-gray-500 pt-2 text-base font-medium">
              최신 기술 동향에 대한 기사를 통해 혁신적인 아이디어와 트렌드를 탐구해보세요. 이 글에서는 인공지능과 머신러닝의 발전이 우리 생활에 미치는 영향을 다룹니다.
            </p>
          </div>
          <div className="px-6 pb-4">
            <button className="bg-blue-700 border-none text-white px-3 py-2 rounded-md text-sm">더 보기</button>
          </div>
        </div>
      </div>
      {/* 실습3. 폼 만들기 */}
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-red-500 md:text-blue-500 lg:text-green-500 mb-10">Hello World</h1>
        <form action="">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-black" htmlFor="email">이메일</label>
            <input className="border-1 border-gray-300 rounded-lg p-2 placeholder:text-gray-500 w-md text-black" type="email" id="email" name="email" placeholder="이메일을 입력해주세요." />
            <label className="text-black mt-2" htmlFor="password">비밀번호</label>
            <input className="border-1 border-gray-300 rounded-lg p-2 placeholder:text-gray-500 w-md text-black" type="password" id="password" name="password" placeholder="비밀번호를 입력해주세요." />
            <div className="flex flex-row gap-2">
              <input className="border-1 border-gray-300 rounded-md  w-5 h-5 mt-2" type="checkbox" id="checkbox" name="checkbox" />
              <label className="text-black my-2" htmlFor="checkbox">로그인 상태 유지</label>
            </div>
            <button className="bg-blue-700 border-none text-white px-3 py-3 rounded-md text-sm">submit</button>
          </div>
        </form>
      </div>
      <div className="flex flex-row gap-2 h-screen items-center justify-center">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline" isDisabled>Outline</Button>
      </div>
      {/* 재사용 가능한 card 컴포넌트 만들기 */}
      <div className="flex flex-col gap-4 h-screen items-center justify-center w-full">
        <h1 className="text-4xl font-bold text-red-500 md:text-blue-500 lg:text-green-500 mb-10">Card Components</h1>
        <Card variant="default" padding="sm" radius="sm">
          <h1>Default Card</h1>
        </Card>
        <Card variant="outline" padding="md" radius="md">
          <h1>Outline Card</h1>
        </Card>
        <Card variant="elevated" padding="lg" radius="lg">
          <h1>Elevated Card</h1>
        </Card>
      </div>
      <div className="flex flex-col gap-4 h-screen items-center justify-center w-full">
        <Input id="email" type="email" placeholder="example@email.com" label="이메일" size="lg" />
        <Input id="password" type="password" placeholder="비밀번호를 입력해주세요." label="비밀번호" size="lg" />
        <Input id="username" type="text" placeholder="사용자 이름을 입력해주세요." label="사용자 이름" size="lg" />
      </div>
      <div className="flex flex-row gap-4 h-screen items-center justify-center w-full">
        <Badge>Default</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning" outlined>Warning</Badge>
        <Badge variant="danger" rounded>Error</Badge>
        <Badge variant="info" withDot>Information</Badge>
      </div>
      <div className="flex flex-row gap-4 h-screen items-center justify-center w-full">
        <div className="dark:bg-black dark:text-white">안녕</div>
        <button className="border bg-yellow-500 px-4 py-2" onClick={() => toggleTheme("system")}>시스템</button>
        <button className="border bg-white px-4 py-2" onClick={() => toggleTheme("light")}>라이트</button>
        <button className="border bg-black px-4 py-2 text-white" onClick={() => toggleTheme("dark")}>다크</button>
      </div>
      <div className="mx-auto flex h-screen max-w-md flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">코드잇 마켓</h1>
        <div className="flex w-full flex-col items-center justify-center gap-4">
          {ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex w-full items-center justify-between gap-2 rounded-md bg-gray-100 px-8 py-4"
            >
              <span>{item.name}</span>
              <button
                onClick={() => handleAddItem(item)}
                className="cursor-pointer rounded-md bg-gray-300 px-4 py-3 hover:bg-gray-400"
              >
                담기
              </button>
            </div>
          ))}
        </div>
        <div className="w-full">장바구니: {cartItems.length}개</div>
        <Link
          href="/cart"
          className="w-full rounded-md bg-indigo-500 px-4 py-3 text-white"
        >
          장바구니로 가기
        </Link>
      </div>
    </>
  );
}