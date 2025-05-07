"use client"

import { Card } from "@/app/components/Card";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SLIDES = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];

export default function Animation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const card = cardRef.current;

        if(!card) return;

        const handleAnimationStart = () => {
            console.log("애니메이션 시작");
            setIsAnimating(true);
        }

        const handleAnimationEnd = () => {
            console.log("애니메이션 종료");
            setIsAnimating(false);
        }

        card.addEventListener("transitionstart", handleAnimationStart);
        card.addEventListener("transitionend", handleAnimationEnd);

        return () => {
            card.removeEventListener("transitionstart", handleAnimationStart);
            card.removeEventListener("transitionend", handleAnimationEnd);
        }

    }, []);

    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    return (
        <>
            <div className="flex gap-4 items-center justify-center h-screen px-20">
                <Link href="/animatepresence" className="animate-pageTransition">animatepresence 페이지</Link>
            </div>
            <div className="flex gap-4 items-center justify-center h-screen px-20">
                <Card variant="outline">
                    <h2 className="text-2xl font-bold">Card Title</h2>
                </Card>
                <Card variant="outline">
                    <h2 className="text-2xl font-bold">Card Title</h2>
                </Card>
                <Card variant="outline">
                    <h2 className="text-2xl font-bold">Card Title</h2>
                </Card>
                <Card variant="outline">
                    <h2 className="text-2xl font-bold">Card Title</h2>
                </Card>
                <Card variant="outline">
                    <h2 className="text-2xl font-bold">Card Title</h2>
                </Card>
            </div>
            <div className="flex gap-4 items-center justify-center h-screen px-20 animation">
                <button className="btn" onMouseEnter={() => setIsMenuOpen(true)} onMouseLeave={() => setIsMenuOpen(false)}>아이콘 버튼</button>
                <div className={`menu-container ${isMenuOpen ? 'active' : ''}`} onMouseEnter={() => setIsMenuOpen(true)} onMouseLeave={() => setIsMenuOpen(false)}>
                    <div className="menu-item">메뉴1</div>
                    <div className="menu-item">메뉴2</div>
                    <div className="menu-item">메뉴3</div>
                </div>
            </div>
            <div>
                <div className="flex relative top-0 left-0 overflow-hidden imgSlide">
                    <ul className="flex items-center justify-center justify-items-between p-0 original">
                        {SLIDES.map((slide, index) => (
                            <li key={`original-${index}`} className="w-50 h-50 line-height-50 ml-10 bg-[#ccc] pl-0 text-center items-center flex justify-center">
                                {slide}
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center justify-center justify-items-between p-0 clone">
                        {SLIDES.map((slide, index) => (
                            <li key={`clone-${index}`} className="w-50 h-50 line-height-50 ml-10 bg-[#ccc] pl-0 text-center items-center flex justify-center">{slide}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="animate-spin w-10 h-10 border-4 border-t-transparent border-b-transparent rounded-full border-mint-500">
                </div>
                <div className="animate-ping w-2 h-2 bg-mint-500 rounded-full mt-10">

                </div>
                <div className="animate-wiggle mt-10">
                    <h1>애니메이션 테스트</h1>
                </div>
                <div className="mt-10">
                    <button className="animate-shake bg-mint-500 text-white px-4 py-2 rounded-md">클릭</button>
                </div>
            </div>
            <div className="flex h-screen items-center justify-center gap-2">
                {/* <div className="animate-ghost h-96 w-72 rounded-lg border shadow-md"></div> */}
                <motion.div
                    className="h-96 w-72 rounded-lg border shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                </motion.div>
            </div>
            <div className="flex h-screen w-full items-center justify-center">
                <div className="gradient animate-gradient flex items-center justify-center w-96 h-96 rounded-lg shadow-md"></div>
            </div>
            <div className="flex min-h-screen items-center justify-center">
                <div
                    className="cursor-pointer perspective-midrange"
                    onClick={() => {
                        if(isAnimating) return;
                        setIsFlipped(!isFlipped);
                    }}
                >
                    <div
                    ref={cardRef}
                    className={`relative h-96 w-64 transition-transform duration-700 transform-3d ${
                        isFlipped ? "rotate-y-180" : ""
                    } `}
                    >
                    <div className="absolute flex h-full w-full items-center justify-center rounded-xl bg-white p-4 shadow-lg backface-hidden">
                        <div>카드앞면</div>
                    </div>
                    <div className="absolute flex h-full w-full rotate-y-180 items-center justify-center rounded-xl bg-blue-500 p-4 text-white shadow-lg backface-hidden">
                        <div>카드뒷면</div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="flex h-screen items-center justify-center gap-4">
                <button className="px-8 py-2 rounded-lg bg-mint-500 text-white shadow-md" onClick={handleClick}>클릭</button>
                <motion.div
                    className={`h-24 w-24 rounded-lg border shadow-md transition-all duration-300 ${isVisible ? 'opacity-1' : ''}`}
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "linear",
                    }}
                />
            </div>
            <div className="flex h-screen items-center justify-center">
                <motion.div
                    className="animate-fade-in"
                    //마우스 호버시 크기가 1.1배 tap시 크기가 0.9배로 변화는 효과
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}

                    // 왼쪽에서 오른쪽으로 나오는 효과
                    // initial={{ opacity: 0, x: -100 }}
                    // animate={{ opacity: 1, x: 0 }}
                    // transition={{
                    //     duration: 0.8,
                    //     ease: "easeOut",
                    // }}
                >
                안녕하세요! 페이드인 효과입니다.
                </motion.div>
            </div>
        </>
    )
}