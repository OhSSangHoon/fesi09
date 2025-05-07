"use client";

// import { motion, useScroll, useTransform } from "motion/react";
import * as React from "react";
import { useRef, useEffect, useState } from "react";

//observer로 길게하는거보다 더 쉽게 할 수 있는 방법 useInView
import { useInView } from "react-intersection-observer";

// const PAGE_COUNT = 5;

export default function Page(){
    // const { scrollYProgress } = useScroll();

    // const clipPath = useTransform(scrollYProgress,
        // (scrollYProgress) => `circle(${scrollYProgress * 100}%)`
    // );

    // const ref = useRef<HTMLDivElement>(null);
    // const [isVisible, setIsVisible] = useState(false);

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         console.log(entries);
    //         entries.forEach((entry) => {
    //             if(entry.isIntersecting){
    //                 console.log("inView");
    //                 setIsVisible(true);
    //             }else{
    //                 console.log("outView");
    //                 setIsVisible(false);
    //             }
    //         });
    //     });

    //     const current = ref.current;
    //     if(current){
    //         observer.observe(current);
    //     }
    //     return () => {
    //         if(current){
    //             observer.unobserve(current);
    //         }
    //     }
    // }, []);
    
    // react-intersection-observer 사용
    const [items, setItems] = useState([...Array(10)].map((_, i) => i + 1));
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const { ref, inView } = useInView({
        threshold: 1, // 뷰포트에 다 보일 때 10개씩 더 로드
    });

    const loadMoreItems = async () => {
      setIsLoading(true);
  
      await new Promise((resolve) => setTimeout(resolve, 1000));
  
      const nextPage = page + 1;
      const newItems = [...Array(10)].map((_, i) => items.length + i + 1);
  
      setItems((prevItems) => [...prevItems, ...newItems]);
      setPage(nextPage);
      setIsLoading(false);
    };

    useEffect(() => {
        if(inView){
            loadMoreItems();
        }
    }, [inView]);


    return(
        // <div className="flex h-[400dvh] items-center justify-center border-2 border-amber-300">
        //     <div ref={ref} className={`h-48 w-48 bg-amber-300 transition-all duration-300 ${inView ? "translate-x-0 opacity-100" : "-translate-x-100 opacity-0"}`}></div>
        // </div>
    //     <div className="h-full w-full bg-gray-900">
    //         <div className="fixed inset-0">
    //             <motion.div
    //                 // 원을 중앙에 위치시키기
    //                 // absolute top-1/2 left-1/2: 요소의 왼쪽 상단 모서리를 부모 요소의 중앙점에 위치
    //                 // -translate-x-1/2 -translate-y-1/2: 자신의 너비의 50%만큼 위, 왼쪽으로 이동
    //                 // 텍스트 중앙 위치
    //                 // flex items-center justify-center: 요소의 중앙에 텍스트 배치
    //                 // h-full w-full: 요소의 높이와 너비를 100%로 설정
    //                 // bg-orange-500: 오렌지색 배경
    //                 className="absolute top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-orange-500"
    //                 style={
    //                 {
    //                     // 여기에 css 속성을 추가해보세요.
    //                     clipPath,
    //                 }
    //                 }
    //             >
    //                 <div className="text-center">
    //                     <h1 className="flex flex-col gap-4 text-8xl font-bold text-blue-600">
    //                         <span>
    //                             <motion.span>Aha!</motion.span>
    //                         </span>
    //                         <span>
    //                             <motion.span>You found me!</motion.span>
    //                         </span>
    //                     </h1>
    //                 </div>
    //             </motion.div>
    //         </div>
    //         {/* 페이지 수만큼 빈 div 생성하여 긴 페이지 생성 */}
    //         {new Array(PAGE_COUNT).fill(null).map((_, index) => (
    //             <div className="h-screen w-screen" key={index} />
    //         ))}
    //   </div>
        <div className="container mx-auto">
            <div className="flex flex-col gap-4">
            {items.map((item) => (
                <div className="h-48 border border-gray-500" key={item}>
                {item}
                </div>
            ))}
            </div>
            {/* 해당 div가 뷰포트에 다 보일 때 더 로드 */}
            <div ref={ref} className="py-4 text-center">
                <div className="flex items-center justify-center space-x-2">
                <div className="h-4 w-4 animate-pulse rounded-full bg-blue-500"></div>
                <div className="h-4 w-4 animate-pulse rounded-full bg-blue-500"></div>
                <div className="h-4 w-4 animate-pulse rounded-full bg-blue-500"></div>
                    <span className="text-gray-500">로딩 중...</span>
                </div>
            </div>
        </div>
    )
}