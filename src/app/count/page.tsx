"use client";

import { animate, useMotionValue, motion, useTransform, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export default function Counter() {
    const motionValue = useMotionValue(0);
    // const fixedValue = useTransform(motionValue, (latest) => Math.floor(latest));
    // const [isOpen, setIsOpen] = useState(false);

    const spring = useSpring(motionValue, {
        stiffness: 100,
        damping: 10,
        mass: 1,
    });

    const toggleBox = () => {
        // const currentIsOpen = !isOpen;
        // setIsOpen(currentIsOpen);
        motionValue.set(motionValue.get() === 0 ? 1 : 0);
    }

//   useEffect(() => {
//     //motionValue의 값 0 부터 100까지 카운트 2초 동안 애니메이션 실행
//     const control = animate(motionValue, 100, { duration: 5 });
    
//     return () => control.stop();
//   }, []);

  return (
    <>
        <div className="flex h-screen items-center justify-center">
            {/* <motion.pre className="text-4xl">{fixedValue}</motion.pre> */}
        </div>
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
        {/* 스프링 값에 따라 움직이는 박스 */}
            <motion.div
                className="h-24 w-24 rounded-md bg-blue-500"
                style={{
                scale: spring,
                x: spring,
                }}
            />

            <button
                onClick={toggleBox}
                className="mt-10 rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
            >
                스프링 버튼
            </button>
        </div>
    </>
  );
}