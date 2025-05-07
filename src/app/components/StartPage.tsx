"use client";

import { motion } from "motion/react";

export default function StartPage({ onStart }: { onStart: () => void }) {
  return (
    <motion.div
        className="text-center"
    >
        {/* 나오면서 scale 애니메이션 적용 */}
        <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
             className="mb-8 text-4xl font-bold animate-scale"
        >
            MBTI 테스트
        </motion.h1>
        {/* hover시 scale 1.1 클릭시 scale 0.95 */}
        <motion.button
            onClick={onStart}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="animate-pageTransition rounded-lg bg-blue-500 px-6 py-3 text-lg text-white"
        >
            시작하기
        </motion.button>
    </motion.div>
  );
}